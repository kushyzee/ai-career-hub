---
title: "Operational Definitions"
slug: "operational-definitions"
order: 2
description: "Turn abstract eval criteria into observable, gradeable procedures."
---

<!-- section:plain-english -->

## Plain English

An operational definition takes a fuzzy, abstract concept; "accuracy," "helpfulness," "bias", and turns it into a concrete, observable procedure that anyone can follow and get the same result.

<!-- section:why-it-matters -->

## Why companies use it

Abstract instructions produce inconsistent labels because every evaluator fills in the gap with their own judgment.

<!-- section:pipeline-fit -->

## Where it fits in the pipeline

Operational definitions sit _inside_ the rubric, they're how you make a dimension like "Faithfulness" actually gradeable.

<!-- section:examples -->

## Realistic examples

**Abstract → Operational, for a chatbot eval:**

- "Is it accurate?" → "List every factual claim in the response as a separate sentence. For each, search for a source. Mark each claim Supported / Contradicted / Unverifiable. Score = proportion Supported."
- "Is it helpful?" → "Does the response directly address the user's stated goal (yes/no)? Does it provide an actionable next step (yes/no)? Does it avoid unnecessary tangents (yes/no)?"

<!-- section:common-mistakes -->

## Common beginner mistakes

- Stopping at "I'd check if it's accurate" without saying _how_.

<!-- section:expert-thinking -->

## How experienced evaluators think differently

Beginners think in judgments ("this feels right"). Experienced evaluators think in **procedures that produce the judgment**, and they can point to the exact step in the procedure that produced a given score.

<!-- section:answer-comparison -->

## Weak / Good / Excellent Answers

Interviewer: "How would you evaluate whether an AI response is factually accurate?"

**Weak:** "I'd read through it and check if the facts seem right, maybe search a couple of things online."

**Good:** "I'd break the response into individual factual claims and check each one against a reliable source, rather than judging the whole response at once."

**Excellent:** "I'd operationalize it: first extract every atomic factual claim from the response as a standalone statement. For each claim, I'd verify it against a defined source hierarchy — primary sources first, reputable secondary sources second. I'd classify each claim using a fixed taxonomy like Supported, Contradicted, or Unverifiable. The final score comes from a decision rule — for example, any single Contradicted claim caps the score regardless of how many claims were Supported, because a hallucination is higher severity than an omission. I'd log each claim and verdict as evidence so another evaluator could review my reasoning without re-doing the research."

<!-- section:why-excellent -->

## Why the excellent answer stands out

It names the exact five-step procedure (extract → verify → classify → score → document), shows a severity-based decision rule instead of a simple average, and explicitly mentions the audit trail — which is what "log and trend error types as part of QA" in your feedback was pointing at.

<!-- section:cheat-sheet -->

## Interview Cheat Sheet

**Key terminology:** operational definition, atomic claim, source hierarchy, verification, classification taxonomy, evidence logging, inter-rater agreement

**Operational phrases to use:**

- "I'd break the abstract criterion down into an observable procedure."
- "I'd extract atomic claims rather than judging the response holistically."
- "The score should come from a fixed decision rule, not intuition."
- "I'd log evidence so the decision is auditable by someone else."

**Likely interviewer follow-ups:**

- "What if a claim is technically true but misleading in context?" (→ [Module 4](/modules/misleading-claims))
- "What's your source hierarchy?" (→ [Module 3](/modules/source-hierarchy))
- "How do you handle claims you can't verify at all?" (→ [Module 4](/modules/misleading-claims))

**Model answer to adapt:**
"I turn abstract criteria into a step-by-step procedure — extract the checkable units, verify each against a defined source hierarchy, classify with a fixed taxonomy, then apply a decision rule to get the score. That way my judgment is reproducible and auditable, not just a gut read."
