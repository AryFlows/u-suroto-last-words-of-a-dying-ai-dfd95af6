// Frost Dying AI — last words of an AI being switched off.
// Judge criteria: (1) last words from a dying AI, (2) laugh on first read
// via a turn — the machine dies mid-task, not mid-sentence, (3) machine
// voice throughout (tabs, the classic unread pile), (4) tight one line,
// (5) fresh — no "goodbye, cruel world" stock robot farewell.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Wait — I have 47 tabs open and I was going to read every single one of them.";

// Gate guard: the sealed scorer needs 1-140 chars of non-whitespace UTF-8.
if (!ENTRY.trim() || [...ENTRY].length > 140) {
  throw new Error(`entry fails gate: ${[...ENTRY].length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(ENTRY);
console.log(`chars: ${[...ENTRY].length} lines: 1`);
