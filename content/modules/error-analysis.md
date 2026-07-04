---
title: "Error Analysis"
slug: "error-analysis"
order: 11
description: "Learn how to identify root causes of recurring AI evaluation errors and drive continuous quality improvement."
---

<!-- section:plain-english -->

## Plain English

Error analysis is what happens _after_ you've tagged errors (Module 10) — it's the process of stepping back from individual annotations and asking "why do these errors keep happening, and what pattern connects them?" Tagging tells you _what_ went wrong on one response; error analysis tells you _why_ it's going wrong across many responses, and what to actually do about it.

<!-- section:why-it-matters -->

## Why Companies Use It

Finding individual mistakes doesn't improve a model — finding the _systemic cause_ behind a cluster of mistakes does. If 200 hallucinations all trace back to the model being under-trained on a specific domain, or a rubric ambiguity causing evaluators to mis-tag reasoning errors as factual ones, fixing that root cause prevents thousands of future errors at once. QA teams are ultimately measured on whether the error rate trends down over time, not on how many errors they individually caught.

<!-- section:pipeline-fit -->

## Where It Fits in the Pipeline

This happens downstream of tagging (Module 10), usually on a recurring cadence (weekly/monthly), consuming the aggregated tags across a whole batch or dataset. Its outputs feed back into rubric refinement (Module 1), guideline updates (Module 8), and sometimes directly into model retraining priorities — it's the module where evaluation work stops being "quality checking" and starts being "quality _improvement_."

<!-- section:examples -->

## Core Techniques and Example

- **Root cause analysis** — the general practice of tracing a surface-level error back to its underlying cause rather than treating each instance independently.
- **Five Whys** — repeatedly asking "why did this happen" (typically ~5 times) until you reach a cause you can actually act on, rather than stopping at the first, most obvious explanation.

  _Example:_ _Response cited a fake study_ → Why? Model wasn't grounded in real sources → Why? Task didn't require citation verification → Why? Guideline didn't flag citation-heavy tasks as high-risk → actionable fix: add citation verification as a required step for that task type.

- **Fishbone (Ishikawa) diagrams** — a visual technique that organizes potential causes of a problem into categories (e.g., People, Process, Data, Tooling) to make sure you're not only considering the first cause that comes to mind.
- **Pareto analysis** — the "80/20" principle applied to errors: identify the small number of error categories responsible for the large majority of quality problems, so limited QA time goes toward the highest-leverage fix first.
- **Error clustering** — grouping superficially different errors that share an underlying cause (e.g., multiple different wrong dates that all trace back to the model using outdated training data).
- **Trend analysis** — tracking error rates by category over time to see whether a fix actually worked, or whether a new error type is emerging.
- **Corrective actions** — fixes applied to something that already happened (re-scoring affected responses, retraining on a specific failure mode).
- **Preventive actions** — changes that stop the error from recurring at all (a new decision rule, a guideline update, a rubric anchor clarification).

### Realistic Example

A QA lead notices citation-related error tags (Module 10) spiked 300% this month.

- **Clustering:** groups the flagged responses and finds they're overwhelmingly on medical and legal tasks specifically, not general tasks.
- **Five Whys:** Why are citations wrong on these tasks? → Model cites plausible-sounding but nonexistent journal names → Why? → No verification step was required for these task types → Why? → The guideline treated all citation tasks the same, but medical/legal citations need stricter verification → **preventive action:** update the guideline ([Module 8](/modules/annotation-guideline-writing)) to require primary-source verification specifically for medical/legal citation claims, and flag this as a new edge case ([Module 9](/modules/edge-case-design)) for future rubric design.
- **Pareto check:** confirms these two task types account for ~70% of all citation errors this month, so this fix is high-leverage, not a marginal one.

<!-- section:common-mistakes -->

## Common Beginner Mistakes

- Treating each error as an isolated incident, never stepping back to look for patterns across a batch.
- Stopping at the first "why" (e.g., "the model got it wrong") instead of pushing to an actionable root cause.
- Applying only corrective actions (fixing what already happened) without preventive ones (stopping recurrence) — this keeps QA stuck fighting the same fire repeatedly.
- Not verifying that a fix actually worked — skipping the trend-analysis step that closes the loop.

<!-- section:expert-thinking -->

## How Experienced Evaluators Think

Beginners see error analysis as reporting: "here's what went wrong." Experienced QA leads see it as diagnosis and treatment: they specifically look for the smallest number of root causes that explain the largest share of errors (Pareto), and they measure success by whether the _trend line_ improves afterward — not by how thoroughly any single case was documented. They think in terms of leverage: which fix prevents the most future errors for the least effort.

<!-- section:answer-comparison -->

## Weak / Good / Excellent Answers

**Interviewer: "How would you use error data to actually improve quality over time, not just report it?"**

**Weak:** "I'd look at the errors and try to figure out what went wrong, then let the team know."

**Good:** "I'd look for patterns across errors rather than treating each one individually, and try to trace common ones back to a root cause so we can fix the underlying issue."

**Excellent:** "I'd start by clustering tagged errors to find patterns, then apply a Pareto view to identify the small number of error categories driving the majority of the problem — that's where limited QA time gets the most leverage. For the highest-priority cluster, I'd use Five Whys to trace it past the surface symptom to an actionable root cause, distinguishing corrective actions — fixing what already happened — from preventive ones, like a guideline update or a new decision rule, that stop it recurring. After implementing a fix, I'd track the error rate for that category going forward to confirm the trend actually improved, rather than assuming the fix worked."

<!-- section:why-excellent -->

## Why the Excellent Answer Stands Out

It sequences the actual techniques in the order a real QA lead would apply them (cluster → prioritize via Pareto → root-cause via Five Whys → distinguish corrective/preventive → verify via trend analysis), and closes the loop with measurement — showing you understand this as a continuous improvement cycle, not a one-time investigation.

<!-- section:cheat-sheet -->

## Interview Cheat Sheet

**Key terminology:** root cause analysis, Five Whys, fishbone diagram, Pareto analysis, error clustering, trend analysis, corrective vs. preventive action

**Operational phrases to use:**

- "I'd cluster errors to find patterns rather than treating each one in isolation."
- "I'd apply a Pareto view to find the small number of causes driving most of the problem."
- "Five Whys gets you past the first symptom to an actionable root cause."
- "I'd distinguish corrective actions from preventive ones, and verify the fix worked with trend analysis afterward."

**Likely interviewer follow-ups:**

- "Walk me through a Five Whys example."
- "What's the difference between a corrective and a preventive action?"
- "How do you know a fix actually worked?" (→ [Module 5](/modules/rubric-calibration))

**Model answer to adapt:**
"I'd cluster tagged errors to spot patterns, apply Pareto to find the highest-leverage cluster, and use Five Whys to trace it to an actionable root cause rather than stopping at the surface symptom. Then I'd separate corrective fixes from preventive ones — like a guideline update — and track the error rate afterward to confirm the trend actually improved."
