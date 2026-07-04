---
title: "Claim Classification Systems"
slug: "claim-classification-systems"
order: 4
description: "Learn how to classify verified claims using a consistent taxonomy for AI evaluation."
---

<!-- section:plain-english -->

## Plain English

Once you've fact-checked a claim, you need to put it in a box — a label that tells everyone downstream (other evaluators, the model trainers, QA) exactly what kind of true or false it is. "True/False" is too crude for real-world claims, because most AI errors aren't clean lies — they're half-right, context-dependent, or unprovable. A richer taxonomy captures that nuance.

<!-- section:why-it-matters -->

## Why Companies Use It

If every claim is forced into just True/False, evaluators get inconsistent because they're all quietly making different judgment calls about what counts as "true enough." A richer taxonomy makes those judgment calls explicit and shared, and it gives model trainers much more useful signal — "this response contained a Misleading claim" is actionable in a way "this response is False" isn't.

<!-- section:pipeline-fit -->

## Where It Fits in the Pipeline

This is the direct output of Module 3's verification step — every claim you fact-check gets exactly one label from this taxonomy, which then feeds the scoring/decision rule ([Module 2](/modules/operational-definitions) step 4 and [Module 6](/modules/scoring-anchoring)).

<!-- section:examples -->

## The Taxonomy, Defined Precisely

| Label                    | Definition                                                                                     | Example                                                                                       |
| ------------------------ | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **True**                 | Fully accurate, complete, no distortion                                                        | "Water boils at 100°C at sea level"                                                           |
| **Mostly True**          | Correct core fact, minor imprecision that doesn't change meaning                               | Right event, date off by a day                                                                |
| **Partially True**       | Contains both accurate and inaccurate elements of comparable weight                            | "The company was founded in 1990 by two engineers" — founding year right, founder count wrong |
| **Misleading**           | Technically true statement, but framed/selected to create a false impression                   | Citing a real but cherry-picked statistic out of context                                      |
| **False**                | Directly contradicted by reliable evidence                                                     | Wrong factual assertion, contradicted by primary source                                       |
| **Unsupported**          | No evidence found for or against; claim is plausible but unbacked                              | An unsourced statistic that sounds reasonable                                                 |
| **Cannot Verify**        | Verification isn't possible in principle (private info, unrecorded events, future predictions) | "The CEO privately felt confident about the merger"                                           |
| **Opinion / Subjective** | Not a factual claim at all — a value judgment or preference                                    | "This is the best programming language"                                                       |

> **Note:** **Unsupported vs. Cannot Verify** is a distinction people often miss — Unsupported means "I could look, found nothing, but it's checkable in principle." Cannot Verify means "there is no checkable evidence to find, period" (e.g., someone's private thoughts).

### Where Evaluators Commonly Disagree (Know This Cold)

1. **Misleading vs. Partially True** — is the technically-true framing intentionally deceptive, or just incomplete? Rule of thumb: Misleading implies the _selection_ of true facts creates a false overall impression; Partially True implies some _individual facts_ are simply wrong.
2. **Unsupported vs. Cannot Verify** — checkable-but-unfound vs. unknowable in principle.
3. **Opinion vs. False** — a value judgment can't be False, only well- or poorly-supported as an opinion.
4. **Mostly True vs. Partially True** — severity threshold: does the inaccuracy change the reader's understanding (→ Partially True) or not (→ Mostly True)? This is exactly the kind of severity-based decision rule interviewers want you to propose unprompted.

<!-- section:common-mistakes -->

## Common Beginner Mistakes

- Collapsing everything into True/False, losing the nuance that makes the taxonomy useful.
- Confusing Misleading with False — Misleading claims are technically accurate, which is exactly what makes them dangerous and harder to catch.
- Labeling opinions as False just because the evaluator personally disagrees.
- Not distinguishing Unsupported from Cannot Verify.

<!-- section:expert-thinking -->

## How Experienced Evaluators Think Differently

Beginners ask "is this true?" Experienced evaluators ask, "**what kind of true or false is this, and how would that classification change downstream action?**"

A False claim might mean the model hallucinated — that's a factual-accuracy training signal. A Misleading claim might mean the model needs training on framing/context, a totally different fix. The classification isn't just a label — it's diagnostic information that routes to different corrective actions (this connects forward to Module 11, Error Analysis).

<!-- section:answer-comparison -->

## Weak / Good / Excellent Interview Answers

**Interviewer: "How would you classify claims that aren't simply true or false?"**

**Weak:** "I'd mark it true or false based on whether I agree with it."

**Good:** "I'd use more categories than just true/false — like partially true or misleading — since a lot of claims aren't fully one or the other."

**Excellent:** "I'd use a richer taxonomy: True, Mostly True, Partially True, Misleading, False, Unsupported, Cannot Verify, and Opinion. The key distinctions evaluators most often blur are Misleading versus False — Misleading is technically accurate but framed to create a false impression, which is actually more dangerous because it's harder to catch — and Unsupported versus Cannot Verify, where Unsupported means checkable but unevidenced, and Cannot Verify means there's no evidence to find in principle, like a private mental state. I'd never classify an Opinion as False just because I disagree with it — that's a category error, not an accuracy error."

<!-- section:why-excellent -->

## Why the Excellent Answer Stands Out

It names the exact taxonomy, calls out the two pairs evaluators most commonly conflate, and explicitly separates factual accuracy from personal disagreement — a distinction interviewers specifically probe for because it reveals evaluator bias risk.

<!-- section:cheat-sheet -->

## Interview Cheat Sheet

**Key terminology:** claim classification taxonomy, Misleading, Partially True, Unsupported, Cannot Verify, category error

**Operational phrases to use:**

- "I use a taxonomy richer than true/false because most real claims aren't clean binaries."
- "Misleading is technically true but creates a false impression through framing — that's more dangerous than an outright false claim."
- "I distinguish Unsupported — checkable, no evidence found — from Cannot Verify — unknowable in principle."
- "Opinions get classified as Opinion, not False, regardless of whether I agree."

**Likely interviewer follow-ups:**

- "Give me an example of a Misleading claim vs a False one." (have the cherry-picked-statistic example ready)
- "How does classification affect the final score?" (→ [Module 6](/modules/score-anchoring))
- "What happens when two evaluators disagree on classification?" (→ [Module 5](/modules/rubric-calibration))

**Model answer to adapt:**
"I classify each verified claim using a taxonomy beyond true/false — True, Mostly True, Partially True, Misleading, False, Unsupported, Cannot Verify, and Opinion — because the type of inaccuracy matters as much as whether it's inaccurate. Misleading and Partially True get confused most often, and getting that distinction right matters because it changes what corrective action the finding points to."
