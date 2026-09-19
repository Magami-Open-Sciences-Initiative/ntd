#!/usr/bin/env python3
"""
Scrape product unit prices from the UNICEF Supply Hub catalogue.

    https://supplyhub.unicef.org/product-catalogue

WHY THIS SCRIPT HAS TWO LAYERS
------------------------------
The whole supplyhub.unicef.org domain sits behind a Cloudflare "managed
challenge" (a JS proof-of-work + cookie check). Every path — the catalogue,
robots.txt, even the JSON APIs — answers a plain HTTP client with 403 and a
"Just a moment..." page. BeautifulSoup cannot solve that: it never executes
JavaScript. So the *fetch* layer must be a real browser and BeautifulSoup is
used purely as the *parse* layer, which is what BeautifulSoup is good at.

  --engine playwright   (default, recommended) drives headless Chromium, lets
                        the Cloudflare challenge resolve, then hands the
                        rendered HTML (and any JSON the SPA loaded) to
                        BeautifulSoup.
  --engine requests     plain requests + BeautifulSoup. Fast, but almost always
                        403s on this host; kept for when UNICEF relaxes the
                        bot rule, or for a mirror that is not challenged.
  --engine cloudscraper try the `cloudscraper` drop-in if it is installed. It
                        sometimes clears weaker Cloudflare modes.

Because the catalogue is a JavaScript app, the script does not hard-code
fragile CSS selectors. It uses layered heuristics:

  1. If the page has a real <table> with a price column, read it as a table.
  2. Otherwise, scan the rendered DOM with BeautifulSoup for currency amounts,
     walk up to the smallest sensible "product card", and pull the product
     name, unit/description and price out of it.
  3. With Playwright, it also sniffs XHR/fetch JSON responses: if the price
     data arrives as JSON (very likely for an SPA), it parses that directly,
     which is far more robust than scraping rendered markup.

Output is CSV and/or JSON: product, unit/pack, price, currency, source URL.

INSTALL
-------
    python3 -m pip install beautifulsoup4 lxml requests
    python3 -m pip install playwright && python3 -m playwright install chromium

USAGE
-----
    # default: headless Chromium, everything to stdout + unicef_prices.csv
    python3 scripts/scrape-unicef-prices.py

    # watch the browser (useful to solve a manual challenge / inspect DOM)
    python3 scripts/scrape-unicef-prices.py --headful

    # try the fast path first
    python3 scripts/scrape-unicef-prices.py --engine requests

    # limit and choose outputs
    python3 scripts/scrape-unicef-prices.py --max-pages 5 --out prices.csv --json prices.json

    # the reachable route: official price-list PDFs (no CAPTCHA)
    python3 scripts/scrape-unicef-prices.py --price-data --out prices.csv
    python3 scripts/scrape-unicef-prices.py --pdf <url> [<url> ...]

    # batch-parse already-downloaded PDFs, and emit corpus patches
    python3 scripts/scrape-unicef-prices.py --pdf-dir ./price-pdfs \
        --emit-ts src/data/access-prices.generated.ts

NOTE ON ETIQUETTE / TERMS
-------------------------
This is a low-volume, rate-limited reader for public price-transparency data.
Keep --delay generous, do not parallelise aggressively, and prefer an official
bulk download if UNICEF offers one (their "Price data" page publishes
spreadsheets) — a scraped price is only ever a snapshot of a catalogue edition.
"""

from __future__ import annotations

import argparse
import csv
import json
import re
import sys
import time
from dataclasses import dataclass, asdict
from typing import Iterable, Iterator
from urllib.parse import urljoin, urlparse, parse_qs, urlencode, urlsplit, urlunsplit

try:
    from bs4 import BeautifulSoup, Tag
except ImportError:  # pragma: no cover
    sys.exit("Missing dependency: pip install beautifulsoup4 lxml")


DEFAULT_URL = "https://supplyhub.unicef.org/product-catalogue"

# Currencies UNICEF quotes in, plus a bare $ fallback.
CURRENCY = r"(?:US\$|USD|EUR|€|GBP|£|\$)"
_AMT = r"\d{1,3}(?:[,\s]\d{3})*(?:\.\d+)?"
# Prices appear both as "US$3.63" and as "3.63 USD" in UNICEF catalogues.
PRICE_RE = re.compile(
    rf"(?P<cur1>{CURRENCY})\s?(?P<amt1>{_AMT})"
    rf"|(?P<amt2>{_AMT})\s?(?P<cur2>{CURRENCY})",
    re.IGNORECASE,
)
# A unit/pack descriptor we want to keep beside the number, e.g. "per pack of 100".
UNIT_HINT_RE = re.compile(
    r"(per\s+[A-Za-z0-9 .\-/]+|/\s*[A-Za-z0-9 .\-]+|pack of \d+|PAC-\d+|"
    r"\b(?:tablet|tab|capsule|cap|vial|ampoule|bottle|box|carton|kit|test|strip|"
    r"sachet|dose|unit|piece|pc|jar|tube|syringe|drum|bag|can)s?\b)",
    re.IGNORECASE,
)

# Class/id tokens that usually mark the interesting nodes. Used only to *rank*
# candidates found by text search, never as a hard requirement.
PRICE_HINT = re.compile(r"price|cost|amount", re.IGNORECASE)
PRODUCT_HINT = re.compile(r"product|item|material|name|title|catalog", re.IGNORECASE)
NEXT_HINT = re.compile(r"next|›|»|more|load more|show more", re.IGNORECASE)


@dataclass
class Product:
    name: str = ""
    price: str = ""          # normalised, e.g. "US$3.63"
    currency: str = ""
    amount: float | None = None
    unit: str = ""            # pack / dosage descriptor, e.g. "per pack of 100"
    description: str = ""     # any residual text on the card (spec, strength)
    source_url: str = ""
    raw: str = ""             # the candidate block text, for debugging

    def key(self) -> tuple[str, str, str]:
        return (
            re.sub(r"\s+", " ", self.name).strip().lower(),
            self.price.lower(),
            re.sub(r"\s+", " ", self.unit).strip().lower(),
        )


# --------------------------------------------------------------------------- #
# Fetch layer
# --------------------------------------------------------------------------- #

def fetch_requests(url: str, timeout: int = 30) -> str:
    """Plain requests. Will usually 403 on this Cloudflare-protected host."""
    try:
        import requests
    except ImportError:  # pragma: no cover
        sys.exit("Missing dependency: pip install requests")
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
            "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
        ),
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
    }
    r = requests.get(url, headers=headers, timeout=timeout)
    if r.status_code == 403 and "Just a moment" in r.text:
        raise RuntimeError(
            "Cloudflare challenge (HTTP 403). Use --engine playwright — requests "
            "cannot execute the JS challenge."
        )
    r.raise_for_status()
    return r.text


def fetch_cloudscraper(url: str, timeout: int = 60) -> str:
    """Optional: cloudscraper sometimes clears weaker Cloudflare modes."""
    try:
        import cloudscraper  # type: ignore
    except ImportError:  # pragma: no cover
        sys.exit("cloudscraper not installed: pip install cloudscraper")
    scraper = cloudscraper.create_scraper(
        browser={"browser": "chrome", "platform": "darwin", "mobile": False}
    )
    r = scraper.get(url, timeout=timeout)
    r.raise_for_status()
    if "Just a moment" in r.text:
        raise RuntimeError("cloudscraper hit the Cloudflare challenge; use playwright.")
    return r.text


def crawl_playwright(url: str, headful: bool, delay: float, max_pages: int,
                     scroll: bool, user_data_dir: str = "", pause: bool = False,
                     challenge_timeout: int = 120) -> tuple[str, list[dict]]:
    """
    Render the catalogue in Chromium so Cloudflare resolves, then return the
    final HTML and any JSON payloads observed on the wire.

    supplyhub.unicef.org currently presents an *interactive* Cloudflare
    Turnstile challenge that neither headless nor headed automation solves on
    its own. Two ways through:

      * --user-data-dir DIR   reuse a browser profile where a human has already
                              cleared the challenge (the clearance cookie is
                              then already in the profile).
      * --pause --headful     let the script open the page, wait while you tick
                              the Turnstile box by hand, then press Enter.

    JSON sniffing matters: for a JavaScript catalogue the price rows very often
    travel as JSON from an API. Catching that JSON is more reliable than
    scraping the DOM, so we keep every candidate object.
    """
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:  # pragma: no cover
        sys.exit(
            "Playwright not installed.\n"
            "  python3 -m pip install playwright\n"
            "  python3 -m playwright install chromium"
        )

    observed: list[dict] = []

    def looks_like_price_json(obj) -> bool:
        if isinstance(obj, dict):
            keys = {str(k).lower() for k in obj.keys()}
            if any(k in keys for k in ("price", "unitprice", "unit_price", "amount")):
                return True
            return any(looks_like_price_json(v) for v in obj.values())
        if isinstance(obj, list):
            return any(looks_like_price_json(v) for v in obj)
        return False

    with sync_playwright() as p:
        if user_data_dir:
            # A persistent profile carries a human-cleared Cloudflare cookie
            # across runs, which is the only reliable automated path today.
            context = p.chromium.launch_persistent_context(
                user_data_dir,
                headless=not headful,
                locale="en-US",
                viewport={"width": 1366, "height": 900},
            )
            browser = None
        else:
            browser = p.chromium.launch(headless=not headful)
            context = browser.new_context(
                user_agent=(
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
                ),
                locale="en-US",
                viewport={"width": 1366, "height": 900},
            )
        page = context.new_page()

        def on_response(resp):
            try:
                ctype = (resp.headers or {}).get("content-type", "")
                if "application/json" not in ctype:
                    return
                data = resp.json()
            except Exception:
                return
            if looks_like_price_json(data):
                observed.append({"url": resp.url, "data": data})

        page.on("response", on_response)

        # NB: not "networkidle" — an SPA keeps connections open and that wait
        # never resolves here.
        page.goto(url, wait_until="domcontentloaded", timeout=90_000)

        def challenged() -> bool:
            try:
                t = (page.title() or "").lower()
            except Exception:
                return True
            return "just a moment" in t or "attention required" in t

        waited = 0
        while challenged() and waited < challenge_timeout:
            if pause and headful and waited == 0:
                input(
                    "\nCloudflare challenge detected. Tick the box in the browser "
                    "window, wait for the catalogue to appear, then press Enter "
                    "here to continue... "
                )
            time.sleep(2)
            waited += 2
        if challenged():
            raise RuntimeError(
                "Cloudflare Turnstile did not clear. This is an interactive "
                "human-verification challenge that automation cannot solve. "
                "Run once with:  --headful --pause --user-data-dir ~/.unicef-profile  "
                "solve it by hand, and reuse the same --user-data-dir afterwards."
            )
        page.wait_for_timeout(3000)

        seen_pages = 0
        while seen_pages < max_pages:
            if scroll:
                # Lazy/infinite lists: scroll until the height stops growing.
                last = 0
                for _ in range(50):
                    h = page.evaluate("document.body.scrollHeight")
                    page.mouse.wheel(0, 20000)
                    page.wait_for_timeout(600)
                    if h == last:
                        break
                    last = h
            seen_pages += 1
            if not _click_next(page):
                break
            page.wait_for_timeout(int(delay * 1000) + 1500)

        html = page.content()
        if browser is not None:
            browser.close()
        else:
            context.close()

    return html, observed


def _click_next(page) -> bool:
    """Best-effort 'next page' click; returns False when there is no next."""
    for pattern in (r"next", r"›", r"»", r"load more", r"show more"):
        loc = page.get_by_role("button", name=re.compile(pattern, re.I))
        try:
            if loc.count() > 0 and loc.first.is_enabled():
                loc.first.click(timeout=4000)
                return True
        except Exception:
            pass
        link = page.get_by_role("link", name=re.compile(pattern, re.I))
        try:
            if link.count() > 0:
                link.first.click(timeout=4000)
                return True
        except Exception:
            pass
    return False


# --------------------------------------------------------------------------- #
# Parse layer (BeautifulSoup)
# --------------------------------------------------------------------------- #

def norm_price(match: re.Match) -> tuple[str, str, float | None]:
    cur = match.group("cur1") or match.group("cur2") or ""
    amt_raw = match.group("amt1") or match.group("amt2") or ""
    amt_text = amt_raw.replace(",", "").replace(" ", "")
    try:
        amount = float(amt_text)
    except ValueError:
        amount = None
    cur_norm = {
        "$": "US$",
        "us$": "US$",
        "usd": "US$",
        "€": "EUR",
        "eur": "EUR",
        "£": "GBP",
        "gbp": "GBP",
    }.get(cur.lower(), cur)
    shown = f"{cur_norm}{amt_text}"
    return shown, cur_norm, amount


def extract_unit(text: str) -> str:
    m = UNIT_HINT_RE.search(text)
    return re.sub(r"\s+", " ", m.group(0)).strip() if m else ""


def parse_table(soup: BeautifulSoup) -> list[Product]:
    """Read a conventional HTML table with a price column, if present."""
    out: list[Product] = []
    for table in soup.find_all("table"):
        rows = table.find_all("tr")
        if len(rows) < 2:
            continue
        header = [c.get_text(" ", strip=True).lower() for c in rows[0].find_all(["th", "td"])]
        if not any(PRICE_HINT.search(h) for h in header):
            continue
        name_idx = next(
            (i for i, h in enumerate(header) if PRODUCT_HINT.search(h)), 0
        )
        price_idx = next(i for i, h in enumerate(header) if PRICE_HINT.search(h))
        for tr in rows[1:]:
            cells = tr.find_all(["td", "th"])
            if len(cells) <= max(name_idx, price_idx):
                continue
            name = cells[name_idx].get_text(" ", strip=True)
            cell_text = cells[price_idx].get_text(" ", strip=True)
            m = PRICE_RE.search(cell_text)
            if not (name and m):
                continue
            price, cur, amount = norm_price(m)
            out.append(
                Product(
                    name=name,
                    price=price,
                    currency=cur,
                    amount=amount,
                    unit=extract_unit(cell_text) or extract_unit(tr.get_text(" ", strip=True)),
                    source_url="",
                )
            )
    return out


def _card_for(node: Tag) -> Tag:
    """
    From a text node containing a price, climb to the smallest ancestor that
    still looks like a single product card (contains a heading or a link).
    """
    cur = node
    best = node
    for _ in range(6):
        parent = cur.parent
        if parent is None or parent.name in ("body", "html", "[document]"):
            break
        text = parent.get_text(" ", strip=True)
        if len(text) > 400:  # too much: we have left the card
            break
        if parent.find(["h1", "h2", "h3", "h4", "h5", "h6", "a"]):
            best = parent
        cur = parent
    return best


def _name_from(card: Tag) -> str:
    for tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
        el = card.find(tag)
        if el and el.get_text(strip=True):
            return el.get_text(" ", strip=True)
    a = card.find("a", href=True)
    if a and a.get_text(strip=True):
        return a.get_text(" ", strip=True)
    # Fall back to the first line of text that is not the price.
    for line in card.get_text("\n", strip=True).splitlines():
        if line and not PRICE_RE.search(line):
            return line
    return ""


def parse_dom(soup: BeautifulSoup, base_url: str) -> list[Product]:
    """Heuristic DOM scan for rendered product cards containing a price."""
    out: list[Product] = []
    seen_text: set[str] = set()

    # Every text node that carries a price amount.
    for text_node in soup.find_all(string=PRICE_RE):
        block = text_node.parent
        if block is None:
            continue
        card = _card_for(block)
        card_text = re.sub(r"\s+", " ", card.get_text(" ", strip=True))
        if card_text in seen_text:
            continue
        seen_text.add(card_text)

        m = PRICE_RE.search(card_text)
        if not m:
            continue
        price, cur, amount = norm_price(m)
        name = _name_from(card)
        if not name:
            continue
        link = card.find("a", href=True)
        href = urljoin(base_url, link["href"]) if link else ""
        out.append(
            Product(
                name=name,
                price=price,
                currency=cur,
                amount=amount,
                unit=extract_unit(card_text),
                description=card_text[:300],
                source_url=href,
                raw=card_text[:300],
            )
        )
    return out


# --------------------------------------------------------------------------- #
# JSON payload parsing (SPA-friendly)
# --------------------------------------------------------------------------- #

PRICE_KEYS = ("price", "unitprice", "unit_price", "priceusd", "amount", "value")
NAME_KEYS = ("name", "title", "productname", "product_name", "description", "material")
UNIT_KEYS = ("unit", "uom", "pack", "packsize", "pack_size", "unitofmeasure")


def _pick(d: dict, keys: Iterable[str]):
    lowered = {str(k).lower(): v for k, v in d.items()}
    for want in keys:
        if want in lowered and isinstance(lowered[want], (str, int, float)):
            return lowered[want]
    return None


def walk_json(obj, base_url: str, out: list[Product]) -> None:
    if isinstance(obj, list):
        for v in obj:
            walk_json(v, base_url, out)
        return
    if not isinstance(obj, dict):
        return
    name = _pick(obj, NAME_KEYS)
    price = _pick(obj, PRICE_KEYS)
    if name and price is not None:
        raw_price = str(price)
        m = PRICE_RE.search(raw_price)
        if m:
            shown, cur, amount = norm_price(m)
        elif re.fullmatch(r"\d+(\.\d+)?", raw_price):
            shown, cur, amount = f"US${raw_price}", "US$", float(raw_price)
        else:
            shown, cur, amount = raw_price, "", None
        out.append(
            Product(
                name=str(name),
                price=shown,
                currency=cur,
                amount=amount,
                unit=str(_pick(obj, UNIT_KEYS) or ""),
                source_url=base_url,
            )
        )
    for v in obj.values():
        walk_json(v, base_url, out)


# --------------------------------------------------------------------------- #
# Official PDF price lists (the route that actually works)
# --------------------------------------------------------------------------- #
# supplyhub.unicef.org is CAPTCHA-walled, but UNICEF's parent site publishes
# its price lists as PDFs and www.unicef.org is reachable (the media files 403
# a plain HTTP client but load fine through a warmed browser session). So
# `--price-data` discovers those PDFs and `--pdf` takes specific ones. Parsing
# uses pypdf, then BeautifulSoup-free regex over the extracted text.

PRICE_DATA_URL = "https://www.unicef.org/supply/price-data"

# e.g. "S1300008 Artesunate pdr./inj 60mg vial/BOX-1 1.25 1.35"
PRICE_ROW_RE = re.compile(
    r"^(?P<code>[A-Z]{1,4}\d{5,8})\s+(?P<desc>.+?)\s+"
    r"(?P<min>\d+(?:[.,]\d+)?)\s+(?P<max>\d+(?:[.,]\d+)?)\s*$",
    re.MULTILINE,
)
PDF_LINK_RE = re.compile(r'/supply/media/\d+/file/[^"\']+\.pdf', re.IGNORECASE)


def run_price_data(page_url: str, extra_pdfs: list[str], headful: bool) -> dict[str, bytes]:
    """
    Discover the price-list PDFs and fetch them in ONE browser session.

    Timing matters and was found empirically: the Cloudflare clearance cookie
    is only valid for a request made *immediately* after the navigation. Waiting
    even 2.5 s after page load makes the very same request 403. So we navigate,
    read the links at once, and request each PDF right away; on failure we
    re-navigate and retry immediately.
    """
    from playwright.sync_api import sync_playwright

    blobs: dict[str, bytes] = {}
    with sync_playwright() as p:
        b = p.chromium.launch(headless=not headful)
        ctx = b.new_context(
            locale="en-US",
            user_agent=(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
            ),
        )
        pg = ctx.new_page()
        pg.goto(page_url, wait_until="domcontentloaded", timeout=60_000)

        urls = list(extra_pdfs)
        for m in PDF_LINK_RE.finditer(pg.content()):
            urls.append(urljoin(page_url, m.group(0)))
        pending = list(dict.fromkeys(urls))

        for _round in range(4):
            if not pending:
                break
            for u in list(pending):
                try:
                    r = ctx.request.get(u, headers={"Referer": page_url})
                    if r.status == 200 and r.body()[:4] == b"%PDF":
                        blobs[u] = r.body()
                        pending.remove(u)
                    else:
                        print(f"  ! {r.status} {u.rsplit('/', 1)[-1]}", file=sys.stderr)
                except Exception as exc:  # pragma: no cover
                    print(f"  ! {type(exc).__name__} {u.rsplit('/', 1)[-1]}", file=sys.stderr)
            if pending:
                # Refresh the clearance cookie, then retry immediately.
                pg.goto(page_url, wait_until="domcontentloaded", timeout=60_000)
        b.close()
    return blobs


def fetch_pdfs(urls: list[str], warm_url: str = "", headful: bool = False) -> dict[str, bytes]:
    """Fetch specific PDFs through a browser session, immediately after warming."""
    from playwright.sync_api import sync_playwright

    out: dict[str, bytes] = {}
    with sync_playwright() as p:
        b = p.chromium.launch(headless=not headful)
        ctx = b.new_context(
            locale="en-US",
            user_agent=(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
            ),
        )
        pg = ctx.new_page()
        if warm_url:
            pg.goto(warm_url, wait_until="domcontentloaded", timeout=60_000)
        pending = list(urls)
        for _round in range(4):
            if not pending:
                break
            for u in list(pending):
                try:
                    r = ctx.request.get(u, headers={"Referer": warm_url or ""})
                    if r.status == 200 and r.body()[:4] == b"%PDF":
                        out[u] = r.body()
                        pending.remove(u)
                    else:
                        print(f"  ! {r.status} {u.rsplit('/', 1)[-1]}", file=sys.stderr)
                except Exception as exc:  # pragma: no cover
                    print(f"  ! {type(exc).__name__} {u.rsplit('/', 1)[-1]}", file=sys.stderr)
            if pending and warm_url:
                pg.goto(warm_url, wait_until="domcontentloaded", timeout=60_000)
        b.close()
    return out


def extract_pdf_text(pdf_bytes: bytes) -> str:
    try:
        from pypdf import PdfReader
    except ImportError:  # pragma: no cover
        sys.exit("pypdf not installed: pip install pypdf")
    import io
    reader = PdfReader(io.BytesIO(pdf_bytes))
    return "\n".join((pg.extract_text() or "") for pg in reader.pages)


def parse_price_rows(text: str, source: str) -> list[Product]:
    rows: list[Product] = []
    for m in PRICE_ROW_RE.finditer(text):
        lo = m.group("min").replace(",", ".")
        hi = m.group("max").replace(",", ".")
        price = f"US${lo}" if lo == hi else f"US${lo}–{hi}"
        rows.append(
            Product(
                name=f"{m.group('code')} {m.group('desc').strip()}",
                price=price,
                currency="US$",
                amount=float(lo),
                unit="per pack (as described)",
                source_url=source,
            )
        )
    return rows


# How a scraped product description maps to a corpus drug id. First match wins.
# Extend as new price lists are parsed; anything unmatched is simply ignored.
PRODUCT_TO_DRUG: list[tuple[str, str]] = [
    (r"artesunate", "artesunate"),
    (r"artemeth|artemether", "artemether-lumefantrine"),
    (r"lumefan|lumefantrine", "artemether-lumefantrine"),
    (r"chloroquine", "chloroquine"),
    (r"primaquine", "primaquine"),
    (r"tafenoquine", "tafenoquine"),
    (r"albendazole", "albendazole"),
    (r"mebendazole", "mebendazole"),
    (r"praziquantel", "praziquantel"),
    (r"ivermectin", "ivermectin"),
    (r"diethylcarbamazine|\bDEC\b", "diethylcarbamazine"),
    (r"azithromycin", "azithromycin"),
    (r"triclabendazole", "triclabendazole"),
    (r"rifampicin", "rifampicin"),
    (r"isoniazid", "isoniazid"),
    (r"pyrazinamide", "pyrazinamide"),
    (r"ethambutol", "ethambutol"),
    (r"moxifloxacin", "moxifloxacin"),
    (r"linezolid", "linezolid"),
    (r"clofazimine", "clofazimine"),
    (r"clarithromycin", "clarithromycin"),
    (r"benzathine", "benzathine-penicillin"),
    (r"dapsone", "dapsone"),
    (r"miltefosine", "miltefosine"),
    (r"amphotericin", "liposomal-amphotericin-b"),
    (r"benznidazole", "benznidazole"),
    (r"nifurtimox", "nifurtimox"),
    (r"doxycycline", "doxycycline"),
]


def to_drug_id(name: str) -> str | None:
    low = name.lower()
    for pat, did in PRODUCT_TO_DRUG:
        if re.search(pat, low):
            return did
    return None


def build_price_patches(products: list[Product], max_per_drug: int = 4) -> dict[str, dict]:
    """Group scraped rows into per-drug `pricing` patches."""
    patches: dict[str, dict] = {}
    for p in products:
        did = to_drug_id(p.name)
        if not did:
            continue
        bucket = patches.setdefault(did, {"pricing": []})
        desc = p.name.strip()
        entry = {
            "catalogue": "UNICEF Supply Division",
            "price": p.price,
            "unit": "per pack (as described)",
            "note": desc,
            "url": p.source_url,
        }
        if entry not in bucket["pricing"] and len(bucket["pricing"]) < max_per_drug:
            bucket["pricing"].append(entry)
    return patches


def emit_ts_patches(patches: dict[str, dict], path: str) -> None:
    """Write the per-drug pricing patches as a mergeable TS module."""
    lines = [
        "// GENERATED by scripts/scrape-unicef-prices.py --emit-ts — do not edit by hand.",
        "// Merge into the corpus in src/data/index.ts (see SCRAPED_PRICE_PATCHES).",
        "",
        "export const SCRAPED_PRICE_PATCHES: Record<string, { pricing: {",
        "  catalogue: string; price: string; unit?: string; note?: string; url?: string;",
        "}[] }> = {",
    ]
    for did in sorted(patches):
        lines.append(f"  {json.dumps(did)}: {{ pricing: [")
        for e in patches[did]["pricing"]:
            lines.append("    { " + ", ".join(
                f"{k}: {json.dumps(v, ensure_ascii=False)}" for k, v in e.items()
            ) + " },")
        lines.append("  ] },")
    lines.append("};")
    lines.append("")
    with open(path, "w", encoding="utf-8") as fh:
        fh.write("\n".join(lines))
    print(f"Wrote {len(patches)} drug price patches to {path}", file=sys.stderr)



def page_urls(base: str, max_pages: int) -> Iterator[str]:
    yield base
    parts = urlsplit(base)
    q = parse_qs(parts.query)
    for n in range(2, max_pages + 1):
        q2 = dict(q)
        q2["page"] = [str(n)]
        yield urlunsplit(
            (parts.scheme, parts.netloc, parts.path, urlencode(q2, doseq=True), parts.fragment)
        )


# --------------------------------------------------------------------------- #
# Main
# --------------------------------------------------------------------------- #

def dedupe(products: list[Product]) -> list[Product]:
    seen: set[tuple[str, str, str]] = set()
    out: list[Product] = []
    for p in products:
        k = p.key()
        if not p.name or k in seen:
            continue
        seen.add(k)
        out.append(p)
    return out


def _write_outputs(products: list[Product], out_csv: str, out_json: str) -> None:
    if out_csv:
        with open(out_csv, "w", newline="", encoding="utf-8") as fh:
            w = csv.DictWriter(
                fh,
                fieldnames=["name", "price", "currency", "amount", "unit",
                            "description", "source_url"],
            )
            w.writeheader()
            for p in products:
                d = asdict(p)
                d.pop("raw", None)
                w.writerow(d)
        print(f"\nWrote {len(products)} rows to {out_csv}", file=sys.stderr)
    if out_json:
        with open(out_json, "w", encoding="utf-8") as fh:
            json.dump([{k: v for k, v in asdict(p).items() if k != "raw"} for p in products],
                      fh, indent=2, ensure_ascii=False)
        print(f"Wrote JSON to {out_json}", file=sys.stderr)


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--url", default=DEFAULT_URL, help="catalogue URL")
    ap.add_argument("--engine", choices=["playwright", "requests", "cloudscraper"],
                    default="playwright", help="fetch strategy (default: playwright)")
    ap.add_argument("--headful", action="store_true", help="show the browser window")
    ap.add_argument("--user-data-dir", default="",
                    help="persistent browser profile; reuse one where the Cloudflare "
                         "challenge was cleared by hand (recommended for supplyhub)")
    ap.add_argument("--pause", action="store_true",
                    help="with --headful, wait for you to solve the challenge by hand")
    ap.add_argument("--challenge-timeout", type=int, default=120,
                    help="seconds to wait for the Cloudflare challenge to clear")
    ap.add_argument("--scroll", action="store_true",
                    help="scroll to trigger lazy loading (infinite lists)")
    ap.add_argument("--max-pages", type=int, default=1, help="max pages to walk")
    ap.add_argument("--delay", type=float, default=2.0, help="seconds between requests/pages")
    ap.add_argument("--out", default="unicef_prices.csv", help="CSV output path ('' to skip)")
    ap.add_argument("--json", default="", help="optional JSON output path")
    ap.add_argument("--price-data", action="store_true",
                    help="instead of the catalogue, discover and parse UNICEF's official "
                         "price-list PDFs from https://www.unicef.org/supply/price-data "
                         "(the route that is not CAPTCHA-walled)")
    ap.add_argument("--pdf", nargs="*", default=[],
                    help="one or more specific price-list PDF URLs to fetch and parse")
    ap.add_argument("--pdf-dir", default="",
                    help="directory of already-downloaded price PDFs to parse as well")
    ap.add_argument("--emit-ts", default="",
                    help="write the matched per-drug pricing patches as a TS module "
                         "(e.g. src/data/access-prices.generated.ts)")
    args = ap.parse_args()

    # ---- official PDF price lists (reachable route) ---------------------- #
    if args.price_data or args.pdf or args.pdf_dir:
        try:
            blobs: dict[str, bytes] = {}
            if args.price_data:
                print("Discovering and fetching UNICEF price PDFs in one session...",
                      file=sys.stderr)
                blobs.update(run_price_data(PRICE_DATA_URL, list(args.pdf), args.headful))
            elif args.pdf:
                blobs.update(fetch_pdfs(list(args.pdf), warm_url=PRICE_DATA_URL,
                                        headful=args.headful))
            if args.pdf_dir:
                import glob as _glob
                import os as _os
                for path in sorted(_glob.glob(_os.path.join(args.pdf_dir, "*.pdf"))):
                    with open(path, "rb") as fh:
                        blobs[path] = fh.read()
            if not blobs:
                print("No price PDFs fetched or found.", file=sys.stderr)
                return 2
            products: list[Product] = []
            for u, blob in blobs.items():
                rows = parse_price_rows(extract_pdf_text(blob), u)
                print(f"  {len(rows):>4} rows  {u.rsplit('/', 1)[-1]}", file=sys.stderr)
                products += rows
            products = dedupe(products)
        except SystemExit:
            raise
        except Exception as exc:
            print(f"PDF route failed ({type(exc).__name__}): {exc}", file=sys.stderr)
            return 1

        for p in products:
            print(f"{p.price:>14}  {p.name}")
        _write_outputs(products, args.out, args.json)
        if args.emit_ts:
            emit_ts_patches(build_price_patches(products), args.emit_ts)
        return 0

    json_payloads: list[dict] = []
    try:
        if args.engine == "playwright":
            html, json_payloads = crawl_playwright(
                args.url, args.headful, args.delay, args.max_pages, args.scroll,
                args.user_data_dir, args.pause, args.challenge_timeout,
            )
        else:
            if args.max_pages > 1:
                pages = []
                for u in page_urls(args.url, args.max_pages):
                    pages.append(fetch_cloudscraper(u) if args.engine == "cloudscraper"
                                 else fetch_requests(u))
                    time.sleep(args.delay)
                html = "\n<!--PAGEBREAK-->\n".join(pages)
            else:
                html = (fetch_cloudscraper(args.url) if args.engine == "cloudscraper"
                        else fetch_requests(args.url))
    except RuntimeError as exc:
        print(f"Fetch failed: {exc}", file=sys.stderr)
        return 1
    except Exception as exc:  # network, DNS, timeout, Playwright install ...
        print(f"Fetch failed ({type(exc).__name__}): {exc}", file=sys.stderr)
        return 1

    soup = BeautifulSoup(html, "lxml")

    products: list[Product] = []
    products += parse_table(soup)
    products += parse_dom(soup, args.url)
    for payload in json_payloads:
        walk_json(payload.get("data"), payload.get("url", args.url), products)

    products = dedupe(products)
    products.sort(key=lambda p: (p.name.lower(), p.amount if p.amount is not None else 1e18))

    if not products:
        print(
            "No prices parsed. The page is probably still a Cloudflare challenge "
            "or a shell that needs a real browser. Try:\n"
            "  --engine playwright --headful --scroll\n"
            "then inspect the rendered DOM in DevTools and tighten the selectors "
            "in parse_dom().",
            file=sys.stderr,
        )
        return 2

    for p in products:
        unit = f"  [{p.unit}]" if p.unit else ""
        print(f"{p.price:>12}  {p.name}{unit}")

    _write_outputs(products, args.out, args.json)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
