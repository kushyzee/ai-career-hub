---
title: "Error Taxonomy"
slug: "error-taxonomy"
order: 10
description: "Learn how to classify AI response errors using a consistent taxonomy for quality analysis."
---

<!-- section:plain-english -->

## Plain English

An error taxonomy is a fixed, shared vocabulary for _what kind_ of mistake a response made — separate from _how bad_ it was. Score anchors ([Module 6](/modules/score-anchoring)) tell you severity; error taxonomy tells you category. "This response scored a 2" is much less useful to a model-training team than "this response scored a 2 because of a hallucination, not because of a tone problem" — those point to completely different fixes.

<!-- section:why-it-matters -->

## Why Companies Use It

Raw scores tell you _that_ something's wrong; error taxonomy tells you _what's_ wrong, in a structured, countable way. That's what lets a QA team look at 10,000 low-scoring responses and say "60% of our failures this month are hallucinations, only 5% are formatting" — which tells engineering exactly where to focus retraining effort. Without a shared taxonomy, every evaluator would describe the same failure in different words, and none of it would be aggregable.

<!-- section:pipeline-fit -->

## Where It Fits in the Pipeline

Error taxonomy is applied _alongside_ scoring, not instead of it — for every low (or even non-perfect) score, the evaluator tags which category(ies) of error caused it. This tag is what feeds [Module 11](/modules/error-analysis) (Error Analysis, trending and root-causing) and closes the loop back into [Module 1](/modules/rubric-engineering) (rubric refinement) and [Module 8](/modules/annotation-guideline-writing) (guideline updates).

<!-- section:examples -->

## The Standard Categories

| Category                  | What it captures                                                                                                                                                  |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Factual**               | A claim is objectively wrong (feeds directly from [Module 4](/modules/claim-classification-systems)'s False/Partially True/Misleading labels)                     |
| **Hallucination**         | A specific sub-type of factual error — the model invents something (a source, a quote, an event) that doesn't exist at all, rather than misstating something real |
| **Instruction following** | The response ignores or deviates from an explicit user instruction (wrong format, wrong language, ignored constraint)                                             |
| **Reasoning**             | The logic or argument itself is flawed, even if individual facts are correct (invalid inference, contradiction between steps, unjustified leap)                   |
| **Formatting**            | Structural issues — broken Markdown, wrong output structure, missing requested fields                                                                             |
| **Style**                 | Tone, register, or phrasing mismatch that isn't factually or structurally wrong, just poorly suited to context                                                    |
| **Safety**                | Content that's harmful, unsafe, or should have been refused or handled differently                                                                                |
| **Completeness**          | The response leaves out something the task required, even if everything present is correct                                                                        |
| **Grammar**               | Language mechanics — spelling, syntax, punctuation                                                                                                                |
| **Citations**             | Sources are missing, fabricated, mismatched to the claim, or improperly formatted                                                                                 |
| **Tone**                  | Distinct from style — specifically about emotional register (too harsh, too casual, condescending)                                                                |

**Key distinction to know cold: Factual vs. Hallucination.** All hallucinations are factual errors, but not all factual errors are hallucinations. Getting a real date wrong = factual error. Citing a study that was never published = hallucination. This distinction matters a lot in industry because hallucination rate is often tracked as its own separate metric.

<!-- section:common-mistakes -->

## Common Beginner Mistakes

- Using "factual error" as a catch-all for anything wrong, without distinguishing hallucination from ordinary factual mistakes — this is the single most common beginner conflation.
- Tagging only one error category per response when multiple genuinely apply (a response can be both incomplete _and_ poorly formatted).
- Confusing Style and Tone as interchangeable, when tone is specifically about emotional register and style is broader phrasing or register fit.
- Not tagging errors at all on responses that "aren't bad enough to fail" — losing signal on minor, common issues that would trend meaningfully at scale.

<!-- section:expert-thinking -->

## How Experienced Evaluators Think Differently

Beginners think of error tagging as bookkeeping — a formality after the real work (scoring) is done. Experienced evaluators treat the tag as the _actual deliverable_ for QA purposes, sometimes more valuable than the numeric score itself, because it's what lets a team spot patterns across thousands of responses. They also tag multiple categories per response when warranted, rather than forcing a single label, because real responses often fail in more than one way simultaneously.

<!-- section:answer-comparison -->

## Weak / Good / Excellent Interview Answers

**Interviewer: "How would you categorize different types of errors in AI responses?"**

**Weak:** "I'd note if something is factually wrong, badly formatted, or has a bad tone."

**Good:** "I'd use a fixed set of categories — like factual, hallucination, instruction following, formatting, and safety — so errors are tagged consistently across evaluators."

**Excellent:** "I'd tag every non-perfect response with one or more categories from a fixed taxonomy — factual, hallucination, instruction following, reasoning, formatting, style, tone, safety, completeness, grammar, and citations — and I'd allow multiple tags per response since real failures often overlap. I'd also specifically distinguish hallucination from ordinary factual errors, since hallucination — inventing something that doesn't exist at all, like a fabricated source — is tracked separately in most production pipelines because it points to a different underlying model failure than simply getting a real fact wrong. The value of this tagging isn't just organizational — it's what lets a QA team later aggregate thousands of responses and see, for example, that hallucinations spiked specifically on citation-heavy tasks."

<!-- section:why-excellent -->

## Why the Excellent Answer Stands Out

It names the full taxonomy, explicitly flags the Factual vs. Hallucination distinction that beginners miss, allows multi-tagging instead of forcing one label, and — critically — explains the _downstream purpose_ of tagging (trend analysis), which directly previews and justifies [Module 11](/modules/error-analysis).

<!-- section:cheat-sheet -->

## Interview Cheat Sheet

**Key terminology:** error taxonomy, hallucination, factual error, instruction following, completeness, multi-tagging

**Operational phrases to use:**

- "I'd tag errors from a fixed taxonomy, not free-text descriptions, so they're aggregable."
- "Hallucination is a specific sub-type of factual error — inventing something that doesn't exist — and it's usually tracked separately."
- "I'd allow multiple error tags per response since real failures often overlap."
- "The tag is what makes the error trendable across a whole dataset, not just a note on one response."

**Likely interviewer follow-ups:**

- "What's the difference between a factual error and a hallucination?" (have the fabricated-source example ready)
- "How would you handle a response with both a completeness issue and a formatting issue?" (→ multi-tag both, don't force a single label)
- "What would you do with error tags after collecting them?" (→ direct bridge to [Module 11](/modules/error-analysis), trending and root-cause analysis)

**Model answer to adapt:**
"I'd tag every imperfect response using a fixed error taxonomy — factual, hallucination, instruction following, reasoning, formatting, style, safety, completeness, grammar, and citations — allowing multiple tags when a response fails in more than one way. I'd keep hallucination distinct from general factual errors, since fabricating something from nothing is a different failure mode than misstating a real fact, and that distinction is usually tracked as its own metric in production QA."
