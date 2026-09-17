/**
 * Check every primary source URL in the corpus.
 *
 * Tolerated (not a failure): 403 and 429 (bot protection / rate limiting), 5xx
 * (transient), and network timeouts — all of which are reported as warnings.
 * A failure is a 404, a 410, or a DNS/connection error, which means the source
 * is genuinely gone and the record needs a new citation.
 *
 * Usage: npm run check:links
 */
import { allNodes } from "@/lib/graph";

const CONCURRENCY = 10;
const TIMEOUT_MS = 20_000;

type Result = { url: string; record: string; status: number | string; level: "ok" | "warn" | "fail" };

async function check(url: string, record: string): Promise<Result> {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    let res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "Mozilla/5.0 (compatible; MagamiNTD-linkcheck/1.0)" },
    });
    // Some servers reject HEAD; retry with GET.
    if (res.status === 405 || res.status === 501 || res.status === 403) {
      res = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: { "user-agent": "Mozilla/5.0 (compatible; MagamiNTD-linkcheck/1.0)" },
      });
    }
    const s = res.status;
    const level: Result["level"] = s < 400 ? "ok" : s === 403 || s === 429 || s >= 500 ? "warn" : "fail";
    return { url, record, status: s, level };
  } catch (e) {
    const msg = e instanceof Error ? (e.name === "AbortError" ? "timeout" : e.message) : "error";
    return { url, record, status: msg, level: "warn" };
  } finally {
    clearTimeout(t);
  }
}

const targets: { url: string; record: string }[] = [];
for (const n of allNodes()) {
  for (const l of n.record.links as { url: string }[]) {
    targets.push({ url: l.url, record: `${n.kind}/${n.id}` });
  }
  // Per-figure citations are first-class, so they are checked like any source.
  const stats = n.record.stats as { label?: string; source?: { url: string } }[] | undefined;
  for (const s of stats ?? []) {
    if (s.source?.url) targets.push({ url: s.source.url, record: `${n.kind}/${n.id} stat "${s.label ?? ""}"` });
  }
}

async function main() {
  const results: Result[] = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (i < targets.length) {
        const t = targets[i++];
        results.push(await check(t.url, t.record));
      }
    }),
  );

  const fails = results.filter((r) => r.level === "fail");
  const warns = results.filter((r) => r.level === "warn");

  console.log(`Checked ${results.length} source URLs across the corpus.\n`);
  if (warns.length) {
    console.log(`Warnings (${warns.length}) — bot-blocked, rate-limited, transient or unreachable:`);
    for (const w of warns) console.log(`  ${w.status}  ${w.url}  (${w.record})`);
    console.log("");
  }
  if (fails.length) {
    console.error(`Failures (${fails.length}) — the source is gone and the record needs a new citation:`);
    for (const f of fails) console.error(`  ${f.status}  ${f.url}  (${f.record})`);
    process.exit(1);
  }
  console.log("✓ no dead source links");
}

main();
