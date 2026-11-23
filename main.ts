import { mkdirSync, writeFileSync } from "node:fs";

// One Word From Grandma — the single word my grandma would text about AI.
//
// "Talkie": the word from her own era for a thing that talks. A grandma
// who grew up with the talkies meets a machine that talks back, and reaches
// for the only word she has for it. Warm, a little baffled, and exactly
// what she would type to a grandchild.
const WORD = "Talkie";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The gate allows 1-30 characters of UTF-8, not whitespace only, and the
// entry must be exactly one word — refuse to write anything else.
function singleWord(word: string): string {
  if (!/^\S{1,30}$/.test(word)) {
    throw new Error(`not a single word: ${JSON.stringify(word)}`);
  }
  return word;
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, singleWord(WORD), "utf8");
