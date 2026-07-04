---
title: "Edge Case Design"
slug: "edge-case-design"
order: 9
description: "Learn how to proactively design for edge cases before AI evaluation begins."
---

<!-- section:plain-english -->

## Plain English

Edge case _design_ is different from edge case _handling_. Handling is reactive — you hit a weird case and figure out what to do. Design is proactive — before evaluation even starts, you sit down and deliberately imagine the scenarios most likely to break your rubric, then write rules for them in advance. It's the difference between being ambushed by ambiguity versus anticipating it.

<!-- section:why-it-matters -->

## Why Companies Use It

Every rubric, no matter how carefully built, will meet situations its authors didn't imagine. If evaluators only encounter edge cases live and improvise, you get inconsistency and a flood of escalations. Companies that run mature evaluation programs invest time upfront specifically trying to _break_ their own rubric, because it's far cheaper to fix ambiguity in a design meeting than after it's already corrupted thousands of live annotations.

<!-- section:pipeline-fit -->

## Where It Fits in the Pipeline

This happens during rubric and guideline authoring ([Modules 1](/modules/rubric-engineering), [8](/modules/annotation-guideline-writing)), before rollout, and continues afterward as a structured exercise — not just a byproduct of escalations. Good teams schedule dedicated edge-case brainstorming sessions, then feed the results directly into the guideline's Edge Cases section ([Module 8](/modules/annotation-guideline-writing)) and the decision framework's IF/ELSE structure ([Module 7](/modules/decision-framework-design)).

<!-- section:examples -->

## Categories of Edge Cases to Deliberately Anticipate

- **Conflicting rules** — two valid rules point to different scores/actions (this is what [Module 7](/modules/decision-framework-design)'s precedence system exists to resolve, but you have to find these conflicts first).
- **Conflicting evidence** — two reputable sources disagree on a fact (e.g., a statistic that changed between a 2023 and 2025 report — is this False, or a legitimate update the model didn't know about?).
- **Ambiguous intent** — the user's request itself could reasonably be interpreted multiple ways, so "did the model follow instructions" doesn't have one clean answer.
- **Partially true responses** — already covered taxonomically ([Module 4](/modules/claim-classification-systems)), but the design question is: at what proportion or severity does "Partially True" flip from a 3 to a 2? Someone has to pre-decide this, not improvise it live.
- **Unavailable sources** — the claim is checkable in principle but you genuinely can't access a source (paywalled, archived, non-English) — is this Unsupported or Cannot Verify, and does the evaluator get more time or default to a specific verdict?
- **Multiple simultaneous failures** — a response is wrong in three different dimensions at once (factual error + tone problem + formatting issue) — does precedence apply per dimension, or does the _combination_ itself warrant an additional penalty beyond the worst single issue?

### Realistic Example

Designing a rubric for a medical-information chatbot evaluation, before any real annotator sees a task:

- **Conflicting evidence:** "What if a claim was true per 2022 guidelines but outdated per 2024 guidelines?" → Pre-decide: score against current consensus, note if the model appears to be using outdated training data as a separate "recency" flag rather than folding it into Faithfulness.
- **Ambiguous intent:** "What if the user's question is medical but doesn't specify context (adult vs. pediatric dosing)?" → Pre-decide: the model should ask a clarifying question or state its assumption explicitly; silently assuming adult dosing without flagging it is itself a minor deduction.

Both of these get written into the guideline _before_ a single live annotation happens, rather than being discovered mid-batch.

<!-- section:common-mistakes -->

## Common Beginner Mistakes

- Only thinking about edge cases reactively, after an evaluator gets stuck.
- Designing for the "obviously wrong" cases and never stress-testing the messy middle (which, as in [Module 6](/modules/score-anchoring), is where most disagreement actually happens).
- Treating every edge case as equally rare or unimportant — some edge case categories (like ambiguous intent) are actually extremely common in real data, not exotic.

<!-- section:expert-thinking -->

## How Experienced Evaluators Think Differently

Beginners wait for reality to reveal the gaps in a rubric. Experienced evaluators — especially ones designing rubrics rather than just applying them — actively try to **adversarially break their own rubric** before it ships: "What response could technically satisfy this rule while clearly violating its spirit?" That adversarial mindset is what separates someone who applies a rubric from someone who could build one, which is exactly the level Micro1-style interviews are probing for.

<!-- section:answer-comparison -->

## Weak / Good / Excellent Interview Answers

**Interviewer: "How would you anticipate edge cases before they show up in live evaluation?"**

**Weak:** "I'd just deal with them as they come up and ask someone if I'm not sure."

**Good:** "I'd think through unusual scenarios in advance, like conflicting sources or ambiguous questions, and try to have a plan for them before I start scoring."

**Excellent:** "Before live evaluation starts, I'd deliberately try to break the rubric — walking through categories like conflicting rules, conflicting evidence, ambiguous user intent, and multiple simultaneous failures, and asking 'what response would technically satisfy this rule while violating its intent?' For example, if two reputable sources disagree because one is more recent, I'd pre-decide whether we score against current consensus and log the discrepancy as a separate recency flag rather than folding it into a factuality score. The goal is to resolve as many of these in the design phase as possible, so live evaluators spend less time escalating and more time consistently applying pre-built rules."

<!-- section:why-excellent -->

## Why the Excellent Answer Stands Out

It shows a proactive, adversarial design process rather than reactive handling, names specific edge-case categories with a worked example, and connects the payoff directly to reduced escalation volume — tying back to [Module 7](/modules/decision-framework-design)'s framework and showing you understand these modules as one integrated system.

<!-- section:cheat-sheet -->

## Interview Cheat Sheet

**Key terminology:** edge case design, edge case handling, conflicting evidence, ambiguous intent, adversarial rubric testing, recency flag

**Operational phrases to use:**

- "I'd design for edge cases proactively, not just react when one shows up live."
- "I'd try to adversarially break my own rubric — what response satisfies the letter of the rule but violates its intent?"
- "The goal of edge case design is reducing escalation volume during live evaluation."

**Likely interviewer follow-ups:**

- "Give me an edge case you'd anticipate for [some task type they name]." (be ready to improvise one live using the six categories above as a mental checklist)
- "How do you decide which edge cases are worth designing for in advance vs. handling reactively?" (→ frequency and severity — common or high-risk scenarios get designed for; truly rare ones can be handled via escalation and later folded in)
- "What do you do when you find an edge case the rubric didn't anticipate, live?" (→ [Module 7](/modules/decision-framework-design) escalation → [Module 8](/modules/annotation-guideline-writing) guideline update, closing the loop)

**Model answer to adapt:**
"I'd proactively stress-test the rubric before live evaluation, walking through categories like conflicting evidence, ambiguous intent, and multiple simultaneous failures, and asking what response could technically pass a rule while violating its spirit. Pre-deciding these reduces how often live evaluators have to escalate, and whatever gets missed in design still feeds back into the guideline afterward."
