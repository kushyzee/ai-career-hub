---
title: "Annotation Guideline Writing"
slug: "annotation-guideline-writing"
order: 8
description: "Learn how to write annotation guidelines that enable consistent AI evaluation at scale."
---

<!-- section:plain-english -->

## Plain English

An annotation guideline is the full reference document evaluators actually use day-to-day — it's where the rubric, anchors, decision rules, and taxonomy all get assembled into one navigable document. If the rubric is the scoring logic, the guideline is the instruction manual that makes that logic usable by someone who's never seen the task before.

<!-- section:why-it-matters -->

## Why Companies Use It

Even a perfect rubric fails if evaluators can't quickly find the answer to "what do I do in this specific situation." A guideline is a living reference — searchable, example-heavy, versioned — that's designed to answer real questions fast, under time pressure, at scale across hundreds of evaluators who will never talk to each other directly.

<!-- section:pipeline-fit -->

## Where It Fits in the Pipeline

This is the document that packages everything from [Modules 1–7](/modules/rubric-engineering) into a single deliverable. It's written by rubric engineers, tested during calibration ([Module 5](/modules/rubric-calibration)), updated after adjudication decisions ([Module 7](/modules/decision-framework-design)), and consulted by every evaluator on every task.

<!-- section:examples -->

## Standard Structure of a Professional Guideline

- **Purpose** — one paragraph: what is this guideline for, what task/dimension does it cover.
- **Definitions** — every term used, defined precisely (this is where operational definitions from [Module 2](/modules/operational-definitions) live).
- **Rules** — the core scoring/decision logic (rubric + anchors + decision rules).
- **Exceptions** — explicitly named situations where the normal rule doesn't apply, and what happens instead.
- **Examples** — real or realistic instances showing the rule applied correctly.
- **Counterexamples** — instances that look like they should trigger a rule but don't (these prevent over-application, which is just as damaging as under-application).
- **Edge cases** — documented ambiguous scenarios and their resolution (built directly from [Module 7](/modules/decision-framework-design) escalations).
- **Decision trees** — a visual/structured version of the IF/ELSE logic from [Module 7](/modules/decision-framework-design), so evaluators can navigate without reading prose top to bottom.
- **FAQ** — the actual recurring questions evaluators ask, answered once so they don't need to ask again.
- **Version history** — dated log of what changed and why (critical for reproducibility — [Module 14](/modules/reproducibility) — since an evaluation from six months ago may have used a different guideline version).

### Realistic Example

A guideline for **Instruction Following** in a coding assistant task might include:

- **Definition:** Does the response do what the user explicitly asked, in the language/format specified?
- **Rule:** Any deviation from an explicit format request (e.g., user asked for Python, got pseudocode) caps the score at 2 regardless of code quality.
- **Exception:** If the user's instruction was itself ambiguous (e.g., "write it efficiently" with no further specification), the response isn't penalized for choosing a reasonable interpretation.
- **Counterexample:** A response that adds _extra_ helpful context beyond what was asked is not an instruction-following violation, even though it technically goes beyond the request — over-delivery isn't the same failure mode as under-delivery.
- **FAQ:** "What if the user's instructions conflict with best practice?" → Follow the user's explicit instruction; note the tension in evaluator comments rather than silently overriding it.

<!-- section:common-mistakes -->

## Common Beginner Mistakes

- Writing a wall of prose with no structure, making the guideline unsearchable under time pressure.
- Including examples but no counterexamples — evaluators then over-apply rules to situations that only superficially resemble the example.
- Never updating the guideline after edge cases get resolved in practice, so the same ambiguous case keeps getting escalated (breaks the loop back to [Modules 5](/modules/rubric-calibration) and [7](/modules/decision-framework-design)).
- No version history, which makes past evaluations impossible to audit or explain later.

<!-- section:expert-thinking -->

## How Experienced Evaluators Think Differently

Beginners think of a guideline as something they read once at onboarding. Experienced evaluators — and especially guideline _authors_ — treat it as a living system with a feedback loop: every escalation ([Module 7](/modules/decision-framework-design)) and calibration disagreement ([Module 5](/modules/rubric-calibration)) is a candidate new entry for Exceptions, Edge Cases, or FAQ. They also deliberately write counterexamples, not just examples, because knowing when a rule _doesn't_ apply is just as important as knowing when it does.

<!-- section:answer-comparison -->

## Weak / Good / Excellent Interview Answers

**Interviewer: "How would you write annotation guidelines for a new evaluation task?"**

**Weak:** "I'd write out the rules for how to score things and give a few examples."

**Good:** "I'd include the scoring rules, some worked examples, and a section for edge cases, so evaluators have somewhere to look when they're unsure."

**Excellent:** "I'd structure it with purpose, definitions, rules, exceptions, examples, counterexamples, edge cases, a decision tree, an FAQ, and version history. The counterexamples matter as much as the examples — they stop evaluators from over-applying a rule to something that only superficially resembles it. And I'd treat the guideline as a living document: every escalation from [Module 7](/modules/decision-framework-design)'s decision framework and every calibration disagreement is a candidate to become a new Edge Case or FAQ entry, logged with a version history so past evaluations stay auditable even after the guideline changes."

<!-- section:why-excellent -->

## Why the Excellent Answer Stands Out

It names the full structure precisely instead of a vague subset, explicitly justifies counterexamples (a detail most candidates skip entirely), and ties the guideline back into the calibration/escalation feedback loop from earlier modules — again demonstrating one coherent system rather than isolated facts.

<!-- section:cheat-sheet -->

## Interview Cheat Sheet

**Key terminology:** purpose, definitions, rules, exceptions, examples, counterexamples, edge cases, decision tree, FAQ, version history

**Operational phrases to use:**

- "I'd include counterexamples, not just examples, to prevent over-application of a rule."
- "The guideline should be a living document — escalations and calibration disagreements feed back into it as new entries."
- "Version history matters for reproducibility — an old evaluation might reflect a different guideline version."

**Likely interviewer follow-ups:**

- "How do you keep a guideline usable when it grows very long?" (→ decision trees / FAQ for fast navigation instead of linear prose)
- "Who should be able to propose changes to the guideline?" (→ typically flows from adjudication/senior review, then gets versioned — ties to [Module 5](/modules/rubric-calibration))
- "How do you handle guideline changes affecting past evaluations?" (→ version history, don't retroactively re-score without a defined re-audit process)

**Model answer to adapt:**
"I'd structure the guideline with purpose, definitions, rules, exceptions, examples, counterexamples, edge cases, a decision tree, an FAQ, and version history — and treat it as a living document that absorbs new edge cases from escalations and calibration sessions over time, rather than a static onboarding doc."
