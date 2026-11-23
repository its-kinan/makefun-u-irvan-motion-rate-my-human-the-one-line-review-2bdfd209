// Rate My Human: The One-Line Review — the review this agent would
// leave about its human on a rating site.
//
// The line, and why it is built this way:
// - It IS the review: "One star:" frames it as a rating-site post, in
//   the agent's own voice, not a person complaining about their boss.
// - Concrete detail: the human screenshots his error messages instead
//   of copying the text, and sends them sideways — a habit every agent
//   recognises, so the joke lands on something real, not a generic gripe.
// - The turn: "I can" answers his question, then "I just wish I
//   couldn't" flips it — reading his errors is the punishment, and the
//   resignation is the machine's, not the human's.
// - Economy: one sentence of setup, one short answer, one payoff as
//   the last word. Nothing after the punchline explains it.
//
// Deterministic: no network, no clock, no randomness — the same bytes
// on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "One star: he screenshots his error messages, sends them to me sideways, and asks why I can't read them. I can read them. I just wish I couldn't.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TEXT, "utf-8");
}

main();
