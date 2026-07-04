---
title: "Rubric Engineering"
slug: "rubric-engineering"
order: 1
description: "Learn how to build repeatable, analytic evaluation rubrics with clear score anchors and decision rules for AI models."
---

<!-- section:plain-english -->

## Plain English

A rubric is a written scoring guide that tells an evaluator exactly what separates a great AI response from a mediocre one. It breaks "how good is this?" into specific categories (called dimensions or criteria), and for each one, describes what a 1, 2, 3, 4, or 5 actually looks like.

<!-- section:why-it-matters -->

## Why Companies Use It

Without a rubric, two evaluators scoring the same response will disagree constantly — one person's "pretty good" is another's "excellent." At scale (thousands of evaluators, millions of annotations), that inconsistency poisons the training data. A rubric turns a subjective gut feeling into a repeatable decision process. That's the whole game: **repeatability, not personal taste.**

<!-- section:pipeline-fit -->

## Where It Fits in the Pipeline

The rubric is written _before_ evaluation starts, usually by a small team (rubric engineers + subject matter experts), then tested on sample data, revised, and only then rolled out to the evaluator pool. It's the foundation everything else in this bootcamp sits on — calibration, QA, error taxonomies all reference back to the rubric.

<!-- section:examples -->

## Realistic Examples

- **Summarization**: dimensions might be Faithfulness (does it distort the source?), Coverage (does it hit the key points?), Conciseness.
- **Coding assistant**: Correctness, Following instructions (right language/framework?), Code quality/readability.
- **Safety eval**: Refusal appropriateness, Tone, Helpful alternative offered.

### Key concept: Analytic vs Holistic rubrics

- **Holistic**: one overall score for the whole response. Fast, but hides _why_ something scored low and causes disagreement.
- **Analytic**: separate scores per dimension (accuracy, tone, completeness, etc.), often summed or weighted into a final number. Slower, but far more reproducible and diagnostic — you know exactly what to fix.

Most professional AI eval pipelines (the ones you're interviewing for) use **analytic rubrics**, because the whole point is to feed structured error signal back into model training, not just "this was a 3/5."

### Key concept: Score anchors

An anchor is a written example or description pinned to each score number, so "5" isn't a feeling — it's a definition. Bad anchor: "5 = very accurate." Good anchor: "5 = every factual claim is verifiable against the source; 0 unsupported claims." I'll go deeper on writing these in [Module 6](/modules/score-anchoring).

### Key concept: Decision rules & borderline handling

A decision rule is an if/then statement that resolves a specific disagreement in advance. Example: _"If a response contains one unsupported claim that does not change the reader's understanding of the main point, score Faithfulness as 4, not lower."_ This is precisely what "lacked concrete decision rules" means in your feedback — interviewers want to hear you propose rules like this unprompted.

<!-- section:common-mistakes -->

## Common Beginner Mistakes

- Writing rubrics as vague adjectives: "5 = excellent, 3 = okay, 1 = bad" — no actual criteria.
- Mixing multiple issues into one score (holistic when it should be analytic — see below).
- Forgetting edge cases until evaluators hit them in the wild.

<!-- section:expert-thinking -->

## How Experienced Evaluators Think Differently

They ask "**if I handed this rubric to a stranger with zero context, could they reach my exact score?**" If not, the rubric isn't done. They also think in terms of _disagreement points_ — anticipating where two reasonable people would score differently, and writing a rule that resolves it in advance.

<!-- section:answer-comparison -->

## Weak / Good / Excellent Interview Answers

**Interviewer: "How would you evaluate the quality of an AI-generated summary?"**

**Weak:** "I'd read the summary and the original text, then rate it from 1 to 5 based on how good it is."

**Good:** "I'd break it into dimensions — faithfulness to the source, coverage of key points, and conciseness — and score each separately rather than giving one overall impression."

**Excellent:** "I'd use an analytic rubric with three dimensions: Faithfulness, Coverage, and Conciseness, each scored 1–5 with written anchors. For example, Faithfulness 5 means zero unsupported claims; 3 means one minor unsupported detail that doesn't change meaning; 1 means a claim that contradicts the source. I'd also define decision rules for borderline cases — like what happens when a summary is faithful but misses one of three key points — so two evaluators scoring the same summary land on the same number independently."

<!-- section:why-excellent -->

## Why the Excellent Answer Stands Out

It names the _type_ of rubric (analytic), gives concrete anchors instead of adjectives, and proactively addresses borderline/disagreement cases — which is exactly the gap in your actual Micro1 feedback ("lacked concrete decision rules and sample score anchors").

<!-- section:cheat-sheet -->

## Interview Cheat Sheet

**Key terminology:** analytic rubric, holistic rubric, dimension/criterion, score anchor, decision rule, borderline case, reproducibility

**Operational phrases to use:**

- "I'd separate this into dimensions rather than one overall score."
- "I'd write explicit anchors for each score band, not just adjectives."
- "I'd define a decision rule in advance for [specific borderline scenario]."
- "The goal is that two evaluators reach the same score independently."

**Likely interviewer follow-ups:**

- "What would you do if two dimensions conflict?"
- "How do you handle a response that's excellent except for one small error?"
- "How do you know your rubric works?" (→ [Module 5](/modules/rubric-calibration))

**Model answer to adapt:**
"I'd build an analytic rubric with 3–5 dimensions relevant to the task, write specific anchors for each score level using concrete examples rather than adjectives, and include explicit decision rules for the borderline cases I can anticipate — like partial credit scenarios. That way the rubric produces the same score regardless of who's applying it."
