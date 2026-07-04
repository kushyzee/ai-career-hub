---
title: "Decision Framework Design"
slug: "decision-framework-design"
order: 7
description: "Learn how structured decision frameworks resolve rule conflicts consistently during AI evaluation."
---

<!-- section:plain-english -->

## Plain English

A decision framework is a structured, ordered set of rules that tells an evaluator exactly what to do when multiple things need to happen at once — not just "what score do I give," but "what's the actual sequence of actions." It's the flowchart version of the rubric: IF this condition holds → do this; ELSE → do that; if still unresolved → escalate; whatever happens → document it; and periodically → recalibrate based on what you documented.

<!-- section:why-it-matters -->

## Why Companies Use It

Rubrics and anchors ([Modules 1](/modules/rubric-engineering), [6](/modules/score-anchoring)) tell you _how to score_ a single response. But real evaluation work involves messier situations: two rules that seem to both apply, missing evidence, an evaluator who's genuinely unsure. Without a decision framework, evaluators either guess (inconsistent) or freeze (slow). The framework converts "I don't know what to do" into a deterministic next step.

<!-- section:pipeline-fit -->

## Where It Fits in the Pipeline

This sits above individual scoring — it's the meta-layer that governs _how rules get applied when they conflict_, and it's what turns escalation and adjudication ([Module 5](/modules/rubric-calibration)) from ad hoc rescue attempts into a designed, repeatable process.

<!-- section:examples -->

## The Core Structure

```text
IF (clear rule applies) → apply it, score, document
  ↓ (no clear rule)
ELSE (partial/analogous rule exists) → apply closest rule, document reasoning
  ↓ (still unresolved / genuinely ambiguous)
Escalate → send to senior reviewer / adjudication
  ↓
Document → record the case + resolution regardless of path taken
  ↓
Recalibrate → if this case type recurs, turn the resolution into a new decision rule
```

The five governing principles for _which_ rule wins when multiple could apply:

- **Precedence** — some rules are explicitly ranked above others (e.g., a safety violation always overrides a style issue, regardless of what else is going on).
- **Specificity** — a rule written for the exact situation beats a general rule ("if the response fabricates a legal citation" beats the generic "if the response contains a False claim").
- **Consistency** — when genuinely tied, favor whatever keeps this case aligned with how similar past cases were resolved.
- **Risk minimization** — when truly ambiguous, default toward the interpretation that avoids the worse downstream harm (e.g., under-scoring a borderline safety issue is safer than over-scoring it).
- **Recency** — newer guideline versions/decision rules supersede older ones (relevant after recalibration updates).

### Realistic Example

A coding-assistant response is mostly correct but includes one line of code that would cause a security vulnerability, and it's also slightly verbose.

- **IF:** Is there a specific rule for security vulnerabilities? Yes → per **precedence**, security overrides style/verbosity entirely; score is capped low regardless of code quality elsewhere.
- No debate needed about verbosity — it's dominated by the higher-precedence issue.
- **Document:** Log the vulnerability as the driving factor, not "average of security + style."

<!-- section:common-mistakes -->

## Common Beginner Mistakes

- Treating every applicable rule as equally weighted and averaging them, instead of applying precedence.
- Escalating everything "just to be safe," which defeats the purpose of having a framework at all — the framework exists so _most_ cases resolve without escalation.
- Escalating but not documenting the resolution, so the same ambiguous case has to be escalated again next time instead of becoming a standing rule.

<!-- section:expert-thinking -->

## How Experienced Evaluators Think Differently

Beginners see rule conflicts as something to resolve in the moment, case by case. Experienced evaluators see rule conflicts as **evidence that the decision framework needs an explicit precedence rule**, and they push for that rule to get written down so the conflict resolves itself automatically next time. They also actively minimize escalation volume over time — not by escalating less, but by converting resolved escalations into standing IF/ELSE rules (this is the direct link back to [Module 5](/modules/rubric-calibration)'s calibration loop).

<!-- section:answer-comparison -->

## Weak / Good / Excellent Interview Answers

**Interviewer: "What would you do if a response triggers two different rules that point to different scores?"**

**Weak:** "I'd probably average the two scores or go with my gut on which matters more."

**Good:** "I'd check if one rule is more specific to the situation than the other, and apply that one, or escalate to a senior reviewer if it's still unclear."

**Excellent:** "I'd apply precedence first — some categories, like safety, are explicitly ranked above others like style, so if a safety rule and a style rule both apply, safety wins outright rather than getting averaged in. If there's no clear precedence, I'd check specificity — a rule written for this exact scenario beats a general one. If it's still genuinely ambiguous, I'd escalate to adjudication rather than guess, but the case doesn't end there — whatever gets decided should be documented and, if it's likely to recur, turned into a new explicit decision rule so the next evaluator doesn't have to escalate the same situation again."

<!-- section:why-excellent -->

## Why the Excellent Answer Stands Out

It names the actual governing principles (precedence, specificity) instead of vague "I'd think about it," explicitly rejects averaging as the default, and closes the loop back to documentation and calibration — showing the framework isn't a one-off fix but part of the same system built in earlier modules.

<!-- section:cheat-sheet -->

## Interview Cheat Sheet

**Key terminology:** decision framework, precedence, specificity, escalation, adjudication, risk minimization, recency

**Operational phrases to use:**

- "I'd apply precedence rather than averaging conflicting rules."
- "A more specific rule should override a general one."
- "I'd escalate genuinely ambiguous cases rather than guess, and document the resolution."
- "Resolved escalations should become new decision rules so they don't recur."

**Likely interviewer follow-ups:**

- "What's an example of a rule that should always take precedence over others?" (safety/harm-related rules over style/quality ones is the safe, standard answer)
- "How do you avoid escalating too often?" (→ converting past resolutions into standing rules, reducing the ambiguous surface area over time)
- "What do you do when even a senior reviewer isn't sure?" (→ risk-minimization default, document as an open question for the next calibration session)

**Model answer to adapt:**
"When rules conflict, I don't average — I apply precedence, so higher-severity categories like safety override lower ones like style automatically. If there's no precedence, I go with the more specific rule. Truly ambiguous cases get escalated, but the resolution always gets documented and, if it's likely to recur, converted into a standing decision rule so escalation volume goes down over time instead of staying constant."
