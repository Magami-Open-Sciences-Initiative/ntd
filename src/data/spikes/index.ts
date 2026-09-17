import type { Spike } from "../merge";
import { onchocerciasisSpike } from "./onchocerciasis";
import { schistosomiasisSpike } from "./schistosomiasis";
import { rabiesSpike } from "./rabies";
import { lymphaticFilariasisSpike } from "./lymphatic-filariasis";
import { buruliUlcerSpike } from "./buruli-ulcer";
import { chagasSpike } from "./chagas";
import { dengueChikungunyaSpike } from "./dengue-chikungunya";
import { dracunculiasisSpike } from "./dracunculiasis";
import { echinococcosisSpike } from "./echinococcosis";
import { foodborneTrematodiasesSpike } from "./foodborne-trematodiases";
import { hatSpike } from "./hat";
import { leishmaniasisSpike } from "./leishmaniasis";
import { leprosySpike } from "./leprosy";
import { mycetomaSpike } from "./mycetoma";
import { nomaSpike } from "./noma";
import { scabiesSpike } from "./scabies";
import { snakebiteSpike } from "./snakebite";
import { sthSpike } from "./sth";
import { taeniasisCysticercosisSpike } from "./taeniasis-cysticercosis";
import { trachomaSpike } from "./trachoma";
import { yawsSpike } from "./yaws";
import { EMERGING_SPIKES } from "./emerging";

/** Deep dives merged onto base disease records at load time. */
export const DISEASE_SPIKES: Record<string, Spike> = {
  onchocerciasis: onchocerciasisSpike,
  schistosomiasis: schistosomiasisSpike,
  rabies: rabiesSpike,
  "lymphatic-filariasis": lymphaticFilariasisSpike,
  "buruli-ulcer": buruliUlcerSpike,
  chagas: chagasSpike,
  "dengue-chikungunya": dengueChikungunyaSpike,
  dracunculiasis: dracunculiasisSpike,
  echinococcosis: echinococcosisSpike,
  "foodborne-trematodiases": foodborneTrematodiasesSpike,
  hat: hatSpike,
  leishmaniasis: leishmaniasisSpike,
  leprosy: leprosySpike,
  mycetoma: mycetomaSpike,
  noma: nomaSpike,
  scabies: scabiesSpike,
  snakebite: snakebiteSpike,
  sth: sthSpike,
  "taeniasis-cysticercosis": taeniasisCysticercosisSpike,
  trachoma: trachomaSpike,
  yaws: yawsSpike,
  ...EMERGING_SPIKES,
};
