---
title: "Rubric Calibration"
slug: "rubric-calibration"
order: 5
description: "Learn how calibration keeps AI evaluators consistent and rubrics reliable over time."
---

<!-- section:plain-english -->

## Plain English

Calibration is the process of making sure many different evaluators, scoring independently, land on the same (or very close) scores for the same response. You do this by having everyone score a shared set of "answer key" examples, comparing results, discussing disagreements, and adjusting understanding until the group converges. It's the practical mechanism that turns a rubric on paper into consistent behavior across a whole team.

<!-- section:why-it-matters -->

## Why Companies Use It

A great rubric on paper doesn't guarantee consistency — people read the same words differently. Calibration is how you _measure_ whether the rubric is actually working, and it's the process that catches rubric ambiguity before it corrupts thousands of annotations. It's also ongoing, not one-time, because evaluator judgment drifts over time (this is where "drift detection" comes in).

<!-- section:pipeline-fit -->

## Where It Fits in the Pipeline

Calibration happens (a) once, before an evaluator is approved to work independently, and (b) periodically afterward, as a maintenance check. It sits _between_ rubric design ([Module 1](/modules/rubric-engineering)) and live evaluation — it's the quality gate that validates the rubric works before it's deployed at scale, and the ongoing check that it keeps working.

<!-- section:examples -->

## Realistic Examples / Key Mechanics

- **Gold-standard examples**: a small set of responses that senior evaluators/rubric authors have scored definitively, with documented reasoning. These become the "answer key."
- **Reference annotations**: the gold-standard scores plus the written justification — new evaluators study these before scoring anything live.
- **Calibration sessions**: a group of evaluators independently scores the same batch, then compares results. Disagreements get discussed until the group agrees on the reasoning (not just the number).
- **Consensus scoring**: for genuinely ambiguous cases, multiple evaluators score independently and the final label is the majority/median, sometimes with a tie-breaker reviewer.
- **Adjudication**: when two evaluators disagree and can't converge, a senior reviewer makes the final call and — critically — documents _why_, often turning that case into a new decision rule (feeding back into [Module 1](/modules/rubric-engineering) and [Module 8](/modules/annotation-guideline-writing)).
- **Drift detection**: periodically re-checking evaluators against fresh gold-standard examples to catch if their scoring has quietly shifted over time (common cause: an evaluator scoring thousands of similar cases starts applying an unwritten "house rule" that diverges from the actual guideline).
- **Periodic recalibration**: scheduled refreshers, especially after guideline updates or when drift is detected.
- **Inter-rater consistency**: the actual measurement of how often evaluators agree — commonly expressed as a percent-agreement or an agreement coefficient. You don't need the statistics, but you should know the _concept_: it's the metric that tells you whether calibration succeeded.

<!-- section:common-mistakes -->

## Common Beginner Mistakes

- Treating calibration as a one-time onboarding step rather than an ongoing process.
- Resolving disagreements by just averaging scores, without ever discussing _why_ people disagreed — this fixes the number but not the underlying rubric ambiguity.
- Not documenting adjudication decisions, so the same disagreement recurs indefinitely instead of becoming a new decision rule.

<!-- section:expert-thinking -->

## How Experienced Evaluators Think Differently

Beginners see calibration as a test they pass once. Experienced evaluators see it as a **feedback loop that improves the rubric itself** — every disagreement in a calibration session is a signal that some part of the rubric is underspecified, and the fix isn't "argue until we agree," it's "write a decision rule so this never has to be argued again." They also expect and plan for drift, rather than being surprised by it.

<!-- section:answer-comparison -->

## Weak / Good / Excellent Interview Answers

**Interviewer: "How would you make sure your scores stay consistent with other evaluators over time?"**

**Weak:** "I'd try to follow the rubric closely and ask questions if I'm unsure."

**Good:** "I'd participate in calibration sessions where evaluators score the same examples and compare results, and use gold-standard examples as a reference for how scoring should work."

**Excellent:** "I'd treat calibration as an ongoing loop, not a one-time onboarding step. Initially I'd study gold-standard examples with documented reasoning, then score alongside other evaluators on shared batches and compare results — but the goal of that discussion isn't just to converge on the same number, it's to identify why the disagreement happened, since that usually points to an underspecified part of the rubric. Genuine ambiguous cases go to adjudication, and I'd expect that decision to get documented and folded back into the guidelines as a new decision rule so the same disagreement doesn't recur. I'd also expect periodic recalibration against fresh gold-standard examples, since evaluator judgment can drift quietly over time even when everyone thinks they're still following the original guideline."

<!-- section:why-excellent -->

## Why the Excellent Answer Stands Out

It frames calibration as a feedback loop that improves the rubric (not just the evaluator), explicitly separates "converging on a number" from "converging on reasoning," and names drift as an expected, ongoing risk rather than a one-time hurdle — which shows systems-level thinking, not just procedural compliance.

<!-- section:cheat-sheet -->

## Interview Cheat Sheet

**Key terminology:** gold-standard examples, reference annotations, calibration session, consensus scoring, adjudication, drift detection, periodic recalibration, inter-rater consistency

**Operational phrases to use:**

- "I treat calibration as an ongoing feedback loop, not a one-time check."
- "Disagreement in calibration is a signal the rubric is underspecified, not just a scoring miss."
- "Adjudication decisions should get documented and folded back into the guidelines."
- "I'd expect periodic recalibration to catch drift before it compounds."

**Likely interviewer follow-ups:**

- "What would you do if you disagreed with the gold-standard answer?" (→ raise it for adjudication/documentation, don't silently override; don't silently comply either)
- "How often should recalibration happen?" (→ tie to guideline updates, detected drift, or a fixed cadence — show you know it's triggered by both schedule and signal)
- "What's the difference between calibration and QA?" (→ preview: calibration aligns evaluators _before/during_ work; QA checks completed work _after_ — good bridge to later modules)

**Model answer to adapt:**
"Calibration is an ongoing loop: study gold-standard examples, score alongside peers on shared batches, and when disagreements come up, dig into _why_ rather than just averaging — because that usually reveals a gap in the rubric that should become a documented decision rule. I'd expect periodic recalibration too, since judgment can drift over time even without anyone noticing."
