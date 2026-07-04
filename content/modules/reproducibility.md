---
title: "Reproducibility"
slug: "reproducibility"
order: 14
description: "Learn how to ensure AI evaluations produce consistent reasoning across different evaluators."
---

<!-- section:plain-english -->

## Plain English

Reproducibility is the ultimate test of everything you've learned so far: if you handed your evaluation — the response, the guideline you used, and nothing else — to a different, competent evaluator, would they land on the same score and the same reasoning? If yes, your evaluation is reproducible. If no, something in the system (rubric, anchors, documentation) is underspecified. Every other module in this bootcamp exists, ultimately, in service of this one property.

<!-- section:why-it-matters -->

## Why Companies Use It

Reproducibility is what makes evaluation data trustworthy enough to train a model on. If the same response gets a 4 from one evaluator and a 2 from another with no way to reconcile _why_, the training signal is noise, not information. It's also what makes evaluation defensible — if a client, auditor, or the model-training team questions a score months later, reproducibility is what lets you show the decision was principled, not arbitrary.

<!-- section:pipeline-fit -->

## Where It Fits in the Pipeline

Reproducibility isn't a separate stage — it's the property you're checking _for_ at every other stage: it's what calibration (Module 5) measures, what documentation (Module 12) enables, and what operational definitions (Module 2) and anchors (Module 6) are designed to produce in the first place. Think of it as the north star all the other modules point toward, not one more technique in the list.

<!-- section:examples -->

## The Core Question and a Realistic Example

**"How can another evaluator independently reach the same conclusion?"**

The answer is always some combination of the tools you've already built:

- **Operational definitions** (Module 2) — abstract judgment turned into an executable procedure anyone can follow
- **Documentation** (Module 12) — the reasoning trail is visible, not just the number
- **Calibration** (Module 5) — the team has actively verified, via gold-standard examples and consensus sessions, that different people applying the same rubric converge
- **Reference examples** — gold-standard annotations serve as a check: does your reasoning pattern match the reference reasoning, not just the reference number?
- **Decision rules** (Module 7) — ambiguous judgment calls are pre-resolved, so two evaluators facing the same borderline case apply the same rule rather than improvising differently

### Realistic Example

Two evaluators independently score the same coding-assistant response and both give it a 3/5 on Instruction Following.

- **Not sufficient for reproducibility**: matching scores alone. They could have reached 3 for completely different reasons — one might think the response is otherwise perfect but missed one minor formatting request; the other might think it's badly flawed but partially redeemed by good code quality. Same number, incompatible reasoning — that's a reproducibility failure hiding behind a coincidence.
- **Sufficient for reproducibility**: both evaluators' documentation shows the same reasoning — "explicit format instruction (JSON output) was ignored; per decision rule, this caps Instruction Following at 3 regardless of code quality." Same number, same cause, same rule applied. That's genuine reproducibility.

This is the single most important thing to understand in this module: **matching scores is not proof of reproducibility. Matching reasoning is.**

<!-- section:common-mistakes -->

## Common Beginner Mistakes

- Equating "we got the same score" with "we're reproducible" — as shown above, this can be a coincidence masking two different reasoning processes that will diverge on the next case.
- Believing reproducibility is achieved once, at rubric launch, rather than continuously verified via calibration and drift detection (Module 5).
- Assuming a good rubric alone guarantees reproducibility, without also needing documentation and calibration to actually confirm it in practice.

<!-- section:expert-thinking -->

## How Experienced Evaluators Think

Beginners check reproducibility by comparing final numbers. Experienced evaluators check it by comparing _reasoning paths_ — they specifically ask "did we agree for the same reason, or did we get lucky?" This is also why they treat documentation (Module 12) as non-negotiable: without a written rationale, there's no way to tell the difference between genuine reproducibility and coincidental score agreement.

<!-- section:answer-comparison -->

## Weak / Good / Excellent Answers

**Interviewer: "How would you make sure your evaluations are reproducible by other evaluators?"**

**Weak:** "I'd follow the rubric carefully so I'd probably get the same score as someone else."

**Good:** "I'd use operational definitions and clear decision rules, and check my scores against gold-standard examples during calibration to make sure they line up with other evaluators."

**Excellent:** "Reproducibility isn't proven by matching scores alone — two evaluators can land on the same number for completely different reasons, which is actually a hidden failure, not a success. I'd rely on operational definitions so the procedure itself is explicit, decision rules so borderline cases are pre-resolved the same way for everyone, and documentation so the _reasoning_, not just the score, is visible and comparable. Calibration sessions are where you actually verify this — not by checking if scores match, but by checking if the written rationale matches the gold-standard reasoning. If two evaluators agree on the number but their documented reasoning diverges, that's a signal the rubric still has a gap, even though it looks like a passing result on the surface."

<!-- section:why-excellent -->

## Why the Excellent Answer Stands Out

It makes the single most important and most commonly missed point in this whole topic — that matching scores can mask non-reproducible reasoning — and ties it concretely back to documentation and calibration as the actual verification mechanisms, rather than treating reproducibility as an automatic byproduct of "having a good rubric."

<!-- section:cheat-sheet -->

## Interview Cheat Sheet

**Key terminology:** reproducibility, reasoning-level agreement (vs. score-level agreement), operational definitions, decision rules, gold-standard reference reasoning

**Operational phrases to use:**

- "Matching scores doesn't prove reproducibility — matching reasoning does."
- "I'd rely on operational definitions, decision rules, and documentation together, not just a well-written rubric."
- "Calibration should compare rationale against gold-standard reasoning, not just the final number."

**Likely interviewer follow-ups:**

- "Can two evaluators be 'reproducible' if they disagree on the score?"
- "How would you test whether your evaluation process is reproducible?" (→ [Module 5](/modules/rubric-calibration))
- "What's the biggest threat to reproducibility over time?" (→ [Module 5](/modules/rubric-calibration))

**Model answer to adapt:**
"Reproducibility means another evaluator could reach the same conclusion independently — and that's proven by matching _reasoning_, not just matching scores, since two people can hit the same number for different reasons. I'd build it through operational definitions, pre-resolved decision rules, and documented rationale, and verify it in calibration by comparing reasoning against gold-standard examples, not just checking if the numbers line up."
