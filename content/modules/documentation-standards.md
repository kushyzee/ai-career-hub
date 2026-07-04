---
title: "Documentation Standards"
slug: "documentation-standards"
order: 12
description: "Learn how to document evaluation decisions consistently for auditing, calibration, and reproducibility."
---

<!-- section:plain-english -->

## Plain English

Documentation standards are the fixed format every evaluation decision gets recorded in, so that anyone — a peer, a senior reviewer, an auditor six months later — can understand exactly what was found, why a particular score or verdict was given, and who's accountable for that call. It's the connective tissue that makes every other module in this bootcamp actually _usable_ after the moment of scoring passes.

<!-- section:why-it-matters -->

## Why Companies Use It

A score without documentation is a black box — nobody can verify it, learn from it, dispute it, or use it to improve the rubric. At scale, undocumented decisions are functionally unauditable: if a client or internal team asks "why did this response get a 2?", "I don't remember" isn't an acceptable answer six weeks later. Documentation is also the raw material for everything downstream — calibration ([Module 5](/modules/rubric-calibration)), error analysis ([Module 11](/modules/error-analysis)), and reproducibility ([Module 14](/modules/reproducibility)) all depend on it existing in a consistent format.

<!-- section:pipeline-fit -->

## Where It Fits in the Pipeline

Documentation isn't a separate stage — it happens continuously, at the moment each decision is made (fact-check verdicts in [Module 3](/modules/fact-checking-methodology), classification in [Module 4](/modules/claim-classification-systems), scores in [Module 6](/modules/score-anchoring), escalations in [Module 7](/modules/decision-framework-design)). This module is really about standardizing the _format_ that all of those individual documentation habits get recorded in, so they're consistent across evaluators and searchable later.

<!-- section:examples -->

## The Standard Fields

| Field               | What goes here                                                                                                                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Issue**           | What specifically was found — stated precisely, not vaguely ("citation #3 references a study that doesn't exist" not "citations were bad")                                                                               |
| **Evidence**        | The concrete proof — the source checked, the contradiction found, the quote compared                                                                                                                                     |
| **Decision**        | The actual verdict, score, or classification assigned                                                                                                                                                                    |
| **Rationale**       | _Why_ that decision follows from the evidence — the reasoning bridge, not just the conclusion                                                                                                                            |
| **Reviewer**        | Who made the call — accountability and a point of contact if it's questioned                                                                                                                                             |
| **Date**            | When it was made — critical because guidelines change ([Module 8](/modules/annotation-guideline-writing)) and a decision needs to be interpreted against the rules that existed at that time                             |
| **Examples**        | If this case is being logged as a reference or precedent, include it so it can serve as a future gold-standard or FAQ entry ([Module 5](/modules/rubric-calibration), [Module 8](/modules/annotation-guideline-writing)) |
| **Version history** | Which guideline or rubric version was in effect when the decision was made                                                                                                                                               |

This is essentially the Claim-Evidence-Source-Reasoning-Verdict structure from [Module 3](/modules/fact-checking-methodology), generalized to _any_ evaluation decision, not just fact-checks.

### Realistic Example

A response gets flagged for a reasoning error and escalated ([Module 7](/modules/decision-framework-design)):

- **Issue:** "Response concludes X follows from Y, but Y doesn't logically entail X — the argument skips an unstated assumption."
- **Evidence:** Quoted structure of the argument, showing the missing logical step.
- **Decision:** Reasoning error tagged ([Module 10](/modules/error-taxonomy)); score capped at 2 per severity anchor.
- **Rationale:** "Per anchor table, an unstated or unjustified logical leap on the central claim caps the score at 2, distinct from a 3 which would apply to a minor supporting-point leap."
- **Reviewer:** [name/ID]
- **Date:** [date]
- **Examples:** Flagged as a candidate FAQ entry — "How do we score responses with unstated logical assumptions?" — since this is the second time this exact ambiguity has come up this month.

<!-- section:common-mistakes -->

## Common Beginner Mistakes

- Recording only the decision ("scored a 2") without the rationale — this is unauditable; nobody can tell if the 2 was correct.
- Writing vague issue descriptions that don't point to the specific location or claim in the response.
- Skipping documentation on "obvious" cases — but obvious to you may not be obvious to a reviewer or future evaluator, and skipped documentation is exactly what breaks reproducibility later.
- Not noting which guideline version was active — making a past decision impossible to correctly interpret after the guideline changes.

<!-- section:expert-thinking -->

## How Experienced Evaluators Think Differently

Beginners see documentation as a compliance chore — something to fill in after the "real" work of scoring is done. Experienced evaluators treat the documentation _as_ the actual work product — the score is almost a summary statistic; the rationale is what has lasting value, because it's what gets reused in calibration sessions, FAQ entries, and error analysis. They write every entry as if a stranger will need to fully understand and defend the decision without being able to ask them a follow-up question.

<!-- section:answer-comparison -->

## Weak / Good / Excellent Interview Answers

**Interviewer: "How do you document your evaluation decisions?"**

**Weak:** "I write down the score and a quick note about what was wrong."

**Good:** "I document the issue I found, the evidence for it, and the score I gave, so someone else could review my reasoning later."

**Excellent:** "I use a fixed structure — Issue, Evidence, Decision, Rationale, Reviewer, Date, and which guideline version was active — for every non-trivial decision. The rationale field is the one people skip, but it's actually the most valuable part, since it's the bridge between the evidence and the score, and it's what gets reused later — in calibration sessions as a reference example, in FAQ entries if the same ambiguity recurs, or in error analysis if it turns out to be part of a broader pattern. I write every entry assuming a stranger will need to fully understand and defend the decision without being able to ask me anything else."

<!-- section:why-excellent -->

## Why the Excellent Answer Stands Out

It names the specific fields rather than a vague summary, explicitly calls out rationale as the highest-value and most-skipped field, and connects documentation forward to three other modules — calibration ([Module 5](/modules/rubric-calibration)), guidelines ([Module 8](/modules/annotation-guideline-writing)), and error analysis ([Module 11](/modules/error-analysis)) — reinforcing that you see this as one integrated system, which is the meta-signal interviewers are actually screening for across this whole bootcamp.

<!-- section:cheat-sheet -->

## Interview Cheat Sheet

**Key terminology:** Issue, Evidence, Decision, Rationale, Reviewer, Date, Version history, reproducibility

**Operational phrases to use:**

- "I document using a fixed structure — Issue, Evidence, Decision, Rationale, Reviewer, Date — for every non-trivial call."
- "Rationale is the most valuable and most commonly skipped field — it's the bridge between evidence and decision."
- "I log which guideline version was active, since decisions need to be interpreted against the rules that existed at the time."
- "I write documentation as if a stranger has to defend the decision without asking me anything further."

**Likely interviewer follow-ups:**

- "What's the difference between documenting a decision and just recording a score?" (score = conclusion; documentation = auditable reasoning trail)
- "How would you document a decision that later turns out to be wrong?" (→ don't silently overwrite — log the correction with its own rationale and date, preserving the original for audit purposes)
- "How does this connect to reproducibility?" (→ direct bridge to [Module 14](/modules/reproducibility))

**Model answer to adapt:**
"I document every non-trivial decision using a fixed structure: Issue, Evidence, Decision, Rationale, Reviewer, Date, and the applicable guideline version. The rationale is the most valuable field because it explains _why_ the evidence leads to the decision, making the evaluation reusable for calibration, guideline improvements, and error analysis while allowing someone else to fully understand and defend the decision later."
