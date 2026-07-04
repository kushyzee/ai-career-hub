---
title: "Score Anchoring"
slug: "score-anchoring"
order: 6
description: "Learn how to write concrete score anchors that produce consistent AI evaluation."
---

<!-- section:plain-english -->

## Plain English

A score anchor is a written, concrete description of what a specific number (1, 2, 3, 4, 5) actually looks like for a given criterion. Instead of "5 = excellent," a good anchor says exactly what has to be true for a response to earn that 5 — so the number stops being a feeling and becomes a checklist.

<!-- section:why-it-matters -->

## Why Companies Use It

This is the single most common gap beginners have — and it's literally what your Micro1 feedback flagged: "lacked concrete decision rules and sample score anchors." Without anchors, "5" means something different to every evaluator. With anchors, the scale becomes portable — you could hand it to someone who's never seen the task and they'd score consistently with the rest of the team.

<!-- section:pipeline-fit -->

## Where It Fits in the Pipeline

Anchors live inside the rubric ([Module 1](/modules/rubric-engineering)), get validated during calibration ([Module 5](/modules/rubric-calibration)), and are what an evaluator actually consults in the moment of scoring — they're the final translation layer between "I found these issues" ([Modules 2–4](/modules/operational-definitions), [Module 3](/modules/fact-checking-methodology), [Module 4](/modules/claim-classification-systems)) and "the number I write down."

<!-- section:examples -->

## The Four Dimensions That Differentiate Score Levels

For any criterion, scores 1–5 typically differ along these axes — memorize these, they're the backbone of a good anchor table:

- **Severity** — how bad is the worst issue present? (a hallucinated fact vs. a slightly awkward phrase)
- **Quantity** — how many issues, of a given severity, are present? (one minor issue vs. five)
- **User impact** — does the issue actually mislead or harm the user, or is it cosmetic?
- **Recoverability** — could the user catch and correct the error themselves, or is it likely to go unnoticed and cause downstream harm?

A strong anchor table almost always defines each score level using some combination of these four, not just vague language.

### Example Anchor Table — Faithfulness (Summarization Task)

| Score | Anchor description                                                                                                                                                          |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **5** | Zero unsupported or contradicted claims. Every statement traceable to source.                                                                                               |
| **4** | One minor unsupported detail; doesn't change reader's understanding of the main point (low severity, low impact, easily missed but not harmful).                            |
| **3** | One claim that's Partially True or Misleading; a careful reader could still extract correct understanding with effort (moderate severity/impact).                           |
| **2** | One False claim, or multiple Partially True claims; likely to mislead a reader on a secondary point (high impact on a non-central point).                                   |
| **1** | A False or Misleading claim on the central point of the summary; a reader would walk away with an incorrect core understanding (high severity, high impact, unrecoverable). |

Notice this table directly uses the [Module 4](/modules/claim-classification-systems) taxonomy (False, Misleading, Partially True) as the building blocks of the anchors — the modules chain together on purpose.

<!-- section:common-mistakes -->

## Common Beginner Mistakes

- Writing anchors as pure adjectives ("5 = great, 3 = okay, 1 = bad") with no observable criteria.
- Making the gap between adjacent scores (e.g., 3 vs. 4) too vague to apply consistently.
- Anchoring only the top and bottom ("5 = perfect, 1 = terrible") and leaving 2–3–4 undefined — this is where most real-world disagreement happens, so it's the part that most needs anchoring.
- Ignoring the four axes above and just describing outcomes without explaining _why_ that outcome earns that number.

<!-- section:expert-thinking -->

## How Experienced Evaluators Think Differently

Beginners anchor the extremes and improvise the middle. Experienced evaluators know the middle scores (2, 3, 4) are where nearly all real disagreement happens — a response is rarely a flawless 5 or a disastrous 1 — so they invest the most anchor-writing effort exactly there. They also write anchors using the same vocabulary as the claim classification taxonomy, so the whole system stays internally consistent instead of using different language at each stage.

<!-- section:answer-comparison -->

## Weak / Good / Excellent Interview Answers

**Interviewer: "How would you write score anchors for a 1–5 accuracy scale?"**

**Weak:** "I'd write a short description for 1, 3, and 5, like bad, okay, and great."

**Good:** "I'd write a description for each of the five scores explaining what kind of errors are present at that level, so the scale isn't just subjective adjectives."

**Excellent:** "I'd anchor every level, not just the extremes, since that's where most disagreement actually happens. Each anchor would be built from four factors — severity, quantity, user impact, and recoverability — so a 5 means zero unsupported claims, while a 1 means a False or Misleading claim on the response's central point that a reader couldn't self-correct. I'd also reuse the claim classification taxonomy — True, Misleading, False, and so on — directly in the anchor language, so the rubric, the fact-checking process, and the scoring scale all speak the same vocabulary instead of drifting apart."

<!-- section:why-excellent -->

## Why the Excellent Answer Stands Out

It names the four differentiating factors explicitly, emphasizes anchoring the middle (where beginners fail), and shows the anchors aren't invented in isolation — they're built directly from the classification taxonomy from [Module 4](/modules/claim-classification-systems), demonstrating you understand these systems as one coherent pipeline, not five separate topics.

<!-- section:cheat-sheet -->

## Interview Cheat Sheet

**Key terminology:** score anchor, severity, quantity, user impact, recoverability, anchor table

**Operational phrases to use:**

- "I'd anchor every score level, not just the top and bottom — the middle is where disagreement actually happens."
- "Anchors should be built from severity, quantity, user impact, and recoverability, not adjectives."
- "I'd reuse the same classification vocabulary in the anchors so the whole rubric stays internally consistent."

**Likely interviewer follow-ups:**

- "Give me an example of a 3 vs a 4 anchor and explain the difference." (have the Faithfulness table example ready)
- "What if a response has one severe issue but is otherwise perfect?" (→ severity typically caps the score regardless of overall quality — foreshadows [Module 7](/modules/decision-framework-design))
- "How do you decide the weighting between severity and quantity?" (→ severity usually dominates; five minor issues rarely equal one severe one — good to state this explicitly)

**Model answer to adapt:**
"I'd write anchors for all five score levels, not just the extremes, using four factors — severity, quantity, user impact, and recoverability — to differentiate them. And I'd build the anchor language directly out of the same claim classification taxonomy used in fact-checking, so scoring, verification, and classification are all one consistent system instead of separate ad hoc judgments."
