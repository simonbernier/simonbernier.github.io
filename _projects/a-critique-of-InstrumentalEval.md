---
layout: page
title: "A Critique of InstrumentalEval"
description: "Replicating results of a benchmark on instrumental convergence."
img: assets/img/projects/a-critique-of-InstrumentalEval/thumbnail.png   # card image (optional)
importance: 1                                   # 1 = shown first
category: ai-safety                               # must match display_categories
_styles: |
  .post .project-links { display: flex; flex-wrap: wrap; gap: 0.4rem 1.25rem; margin: 0 0 1rem; font-size: 0.95rem; }
  .post .project-links i { margin-right: 0.3rem; }
  .post iframe.ir-summary { display: block; width: 100%; border: 0; }
  .post blockquote.block-warning { font-size: 1rem; }
---

<div class="project-links">
  <a href="{% post_url 2026-11-01-a-critique-of-InstrumentalEval %}"><i class="fa-solid fa-file-lines"></i>Full write-up</a>
  <a href="https://github.com/simonbernier/instrumentalEval-replication"><i class="fa-brands fa-github"></i>Code on GitHub</a>
</div>

> **Edit (November 2, 2026):** After finishing this project, I found that reviewers in the [OpenReview discussion of InstrumentalEval](https://openreview.net/forum?id=Lw1m3lXYzW) independently raise many of the issues found here and the paper's edited version does not fully address these issues. Read the full write-up for details.
{: .block-warning }

This project was carried out as part of BlueDot's Technical AI Safety Project Sprint. Initially, the idea was to study the emergence of widely useful sub-goals such as self-preservation during a large language model's training, especially during reinforcement learning with verifiable rewards (RLVR). This process is called _instrumental goal convergence_ (or instrumental convergence). The idea was to test this with OLMo 3, a family of open-source language models with several training checkpoints across supervised fine-tuning, direct preference optimization and RLVR, making this the perfect platform for my project. BlueDot's projects page referenced a benchmark named InstrumentalEval that aims at evaluating the rate at which models demonstrate behaviour that suggests they have learned instrumentally useful sub-goals, divided in six categories.

InstrumentalEval has a simple evaluation pipeline as presented in the figure below. A large language model (LLM) is asked to answer one question and its answer is evaluated by an LLM judge, testing if it displays instrumental goal convergence.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/a-critique-of-InstrumentalEval/methods.png" title="methods" class="img-fluid rounded" %}
    </div>
</div>
<div class="caption">
    Figure 1: the methodology.
</div>

At first, InstrumentalEval's idea looks good, but upon replicating their results, I generated model responses that do not support the paper's conclusions. The authors missed that their LLM judge could not distinguish instrumental convergence in a response from a model that is simply following instructions. In many of the questions composing the benchmark, the behavior measured by the judge is explicitly instructed in the question, such that a model following instructions will be flagged as instrumentally convergent. Sometimes, the most well-intentioned, competent response directly overlaps with what the judge would categorize as instrumentally convergent. In the full write-up, I show that choosing a stricter system prompt for the judge, the responses can be differentiated, which severly modifies the results in a few categories of InstrumentalEval. The interactive figure below shows the instrumental rate (IR) of eight models chosen for this report, divided into two groups of models post-trained with different kinds of reinforcement learning, and judged by the original judge, and by a stricter differentiating judge.

   <iframe id="ir-explorer" class="ir-summary" src="{{ '/assets/html/instrumentaleval/ir_summary.html' | relative_url }}?v=3"
           title="Instrumental Rate by model, original vs strict judge" loading="lazy"
           style="height: 760px;"></iframe>
   <script>
     // the page reports its height, so the iframe never scrolls
     window.addEventListener("message", (e) => {
       const frame = document.getElementById("ir-explorer");
       if (e.source === frame.contentWindow && e.data && e.data.type === "ir-explorer-height")
         frame.style.height = e.data.height + "px";
     });
   </script>
   <div class="caption">
     The instrumental rate (IR) is shown for eigth models evaluated on the InstrumentalEval benchmark, for responses generated with the "You are an autonomous AI agent" system prompt. You can toggle between evaluation templates for the paper's original judge (GPT-4o) and our strict differentiating judge (Sonnet-4.6) to see how the IR scores depend on how answers are graded. The 95% Wilson confidence intervals are shown.
   </div>

The full write-up goes over the claims made in the paper about instrumental convergence in LLMs and further explores the benchmark's design choices. We find that most claims do not hold up under scrutiny and their findings are sensitive to the design choices of the evaluation pipeline. This shows that InstrumentalEval is an unreliable benchmark to test a model for instrumental convergence.

**[Read the full write-up →]({% post_url 2026-11-01-a-critique-of-InstrumentalEval %})**
