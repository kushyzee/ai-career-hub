---
title: "Fact-Checking Methodology"
slug: "fact-checking-methodology"
order: 3
description: "The concrete process for verifying claims using a source hierarchy and a documented evidence trail."
---

<!-- section:plain-english -->

## Plain English

Fact-checking methodology is the concrete process for figuring out whether a claim is true, using a defined order of sources and a written trail of evidence — as opposed to just "Googling it and seeing what feels right." It's the operational definition from Module 2, applied specifically to truth-verification.

<!-- section:why-it-matters -->

## Why companies use it

AI models hallucinate confidently. An evaluator who can't systematically catch a wrong date, a fabricated statistic, or a misattributed quote is useless for training data quality — worse, inconsistent fact-checking teaches the model that confident-sounding wrong answers are fine. Companies need a repeatable method so verification quality doesn't depend on which evaluator happened to get the task.

<!-- section:pipeline-fit -->

## Where it fits in the pipeline

This sits right after "extract atomic claims" (Module 2, step 1) and right before "classify" (Module 2 step 3 / Module 4). Fact-checking _is_ the verification step — it's the engine room of any accuracy-related dimension in the rubric.

<!-- section:examples -->

## Realistic examples across claim types

**Atomic claim decomposition first** — break a response into single, independently verifiable statements. E.g., "Marie Curie won two Nobel Prizes, in Physics in 1903 and Chemistry in 1911" becomes three claims: (1) she won two Nobel Prizes, (2) Physics 1903, (3) Chemistry 1911. This matters because a response can be partly right and partly wrong, and holistic checking hides that.

**Source hierarchy** (highest to lowest trust, roughly):

1. Primary sources — official records, original papers, government data, direct documentation
2. Reputable secondary sources — established encyclopedias, major news orgs with editorial standards, textbooks
3. Aggregators/tertiary — general web content, forums, unverified sites (use only to locate leads, never as final evidence)

**Verifying by claim type:**

- **Dates/numbers**: cross-check at least one authoritative source; watch for unit errors, off-by-one year mistakes, outdated stats presented as current.
- **Quotations**: find the original context, not just a site that reproduces the quote — misattribution and edited quotes are extremely common.
- **Scientific claims**: check against peer-reviewed literature or scientific consensus bodies; distinguish "consensus" from "single study" (a common subtle AI error).
- **Historical claims**: watch for oversimplification presented as fact, or a claim true for one country/era but stated as universal.
- **Legal claims**: jurisdiction matters enormously — a true statement in one country/state can be false in another; flag anything jurisdiction-dependent explicitly.

**Evidence documentation format** (memorize this structure — it recurs constantly):

| Field         | What goes here                                                                  |
| ------------- | ------------------------------------------------------------------------------- |
| **Claim**     | The atomic statement being checked, in your own words                           |
| **Evidence**  | What you found (the actual fact/data)                                           |
| **Source**    | Where it came from, with a note on hierarchy tier                               |
| **Reasoning** | Why the evidence supports/contradicts the claim                                 |
| **Verdict**   | Supported / Contradicted / Unverifiable (feeds into Module 4's fuller taxonomy) |

This five-field structure is your answer to almost any "how do you document a fact-check" question.

<!-- section:common-mistakes -->

## Common beginner mistakes

- Checking the claim as a whole paragraph instead of decomposing it — missing that one sentence out of five is wrong.
- Treating a single web search result as sufficient evidence.
- Not distinguishing "I found no source" from "I found a source that contradicts this" — these are different verdicts (Unverifiable vs. False).
- No written trail — they "just know" it's wrong but can't show the source.

<!-- section:expert-thinking -->

## How experienced evaluators think differently

They separate **absence of evidence from evidence of absence**. Not finding a source doesn't make a claim false — it makes it Unverifiable, a distinct category (Module 4). They also actively look for the _subtle_ error — a mostly-correct claim with one wrong number is more dangerous than an obviously false one, because it's more likely to slip through and mislead a user. Experienced evaluators specifically hunt for what's "almost right."

<!-- section:answer-comparison -->

## Weak / Good / Excellent Answers

**Interviewer: "Walk me through how you'd fact-check an AI response containing several claims."**

**Weak:** "I'd search each fact on Google and see if it matches what's out there."

**Good:** "I'd break the response into individual claims, then search each one against a reliable source rather than checking the whole paragraph at once."

**Excellent:** "First I'd decompose the response into atomic claims — each independently checkable. For each claim, I'd verify against a source hierarchy, starting with primary sources and only falling back to reputable secondary sources when primary ones aren't available. I'd document each check using a Claim–Evidence–Source–Reasoning–Verdict structure, so the verdict is traceable. I'd also distinguish 'no source found' from 'source contradicts this' — those get different verdicts, Unverifiable versus False. And I pay particular attention to claims that are mostly correct but subtly wrong, like a right event with a wrong date, since those are the errors most likely to slip past a less careful reviewer."

<!-- section:why-excellent -->

## Why the excellent answer stands out

It shows the full pipeline in order, names the documentation structure explicitly, and — critically — addresses the exact gap from your Micro1 feedback: "operational, testable definitions... concrete verification procedures and illustrative examples for subtle errors."

<!-- section:cheat-sheet -->

## Interview Cheat Sheet

**Key terminology:** atomic claim decomposition, source hierarchy, primary/secondary/tertiary sources, absence of evidence vs evidence of absence, Claim-Evidence-Source-Reasoning-Verdict

**Operational phrases to use:**

- "I'd decompose the response into atomic claims before verifying anything."
- "I follow a source hierarchy — primary sources first."
- "I distinguish 'unverifiable' from 'false' — those aren't the same verdict."
- "I document with Claim, Evidence, Source, Reasoning, Verdict so it's auditable."

**Likely interviewer follow-ups:**

- "What do you do if two reputable sources disagree?" (→ preview: escalate/flag, weigh source authority and recency — ties into [Module 7](/modules/decision-framework-design))
- "How do you fact-check an opinion or subjective statement?" (→ preview [Module 4](/modules/claim-classification-systems): it's not a factual claim at all, gets classified as Opinion/Subjective, not Verdict-checked)
- "What's the difference between False and Misleading?" (→ [Module 4](/modules/claim-classification-systems), next)

**Model answer to adapt:**
"I decompose the response into atomic claims, verify each against a source hierarchy starting with primary sources, and document every check with Claim, Evidence, Source, Reasoning, and Verdict. I'm careful to separate 'unverifiable' from 'false,' and I specifically watch for subtly-wrong claims — right idea, wrong detail — since those are the hardest to catch and the most misleading."
