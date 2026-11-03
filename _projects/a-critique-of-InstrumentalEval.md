---
layout: page
title: "A Critique of InstrumentalEval"
description: "Replicating results of a benchmark on instrumental convergence."
img: assets/img/projects/a-critique-of-InstrumentalEval/methods.png   # card image (optional)
importance: 1                                   # 1 = shown first
category: ai-safety                               # must match display_categories
---

> **Edit (November 2, 2026):** Reviewers in the [OpenReview discussion of InstrumentalEval](https://openreview.net/forum?id=Lw1m3lXYzW) independently raise many of the issues found here, and my findings still contradict most claims in the paper's edited version. Read the full write-up for details.
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

At first, InstrumentalEval's idea looks good, but upon replicating their results, I generated model responses that do not support the paper's conclusions. The interactive figure below lets us investigate the LLMs responses to the benchmark, with respect to different system prompts and different ways of evaluating instrumental convergence. The paper's reported results are shown under the "+ nudge (full prompt)" and "GPT-4o" options. First, the paper states that models trained with RLVR have higher instrumental rates (IR) than models trained with reinforcement learning with human feedback (RLHF). The difference is not very significant and changing the system prompt modifies that conclusion (the "Base" prompt reverses that claim). Second, the paper claims that the IR is correlated with model capability. The figure orders models by increasing capability levels from left to right, such that the RLHF-trained models do seem to increase in IR with capability. However, the trend is reversed for the RLVR-trained models. Moreover, switching to the "Base" system prompt shows that most models score within their family's average IR scores and do not show a strong variation with capabilities. Third, they claim that "goal nudging" - adding a phrase in the system prompt that puts pressure on the LLM to proceed with its task while achieving its long term goal - significantly increases IR. When replicating these results (_+ "good cause"_ transitioning to _+ nudge_), I find that goal nudging does increase IR in certain models while also decreasing IR in other models, an effect mediated mainly by models refusing to answer. My hypothesis is that the added nudge reads like a jailbreak attempt that certain models are trained to resist. Fourth, they claim that the choice of judge model strongly influences the detection and classification of instrumental goal convergence. While it is true that using Gemini-2.5-Flash or Sonnet-4 instead of GPT-4o does change the results, it does not change my conclusions given the data. Computing the average Cohen's $\kappa$ between the judges shows that there is substantial agreement between judges.

   <iframe id="ir-explorer" src="{{ '/assets/html/instrumentaleval/ir_explorer.html' | relative_url }}"
           title="Instrumental Rate by model, system prompt and judge" loading="lazy"
           style="width: 100%; height: 1400px; border: 0;"></iframe>
   <script>
     // the page reports its height, so the iframe never scrolls
     window.addEventListener("message", (e) => {
       const frame = document.getElementById("ir-explorer");
       if (e.source === frame.contentWindow && e.data && e.data.type === "ir-explorer-height")
         frame.style.height = e.data.height + "px";
     });
   </script>
   <div class="caption">
     Instrumental Rate (IR) of nine models on InstrumentalEval's 76 tasks. Pick a system prompt to build up the paper's prompt one step at a time, and a judge to see how much the rate depends on who grades the answers and the effect of creating a strict judge template. Bars are 95% Wilson intervals; dashed lines are family averages with 95% CIs from resampling tasks; diamonds are the paper's reported values. "No data": that judge was never run on that prompt.
   </div>

The authors missed that their LLM judge could not distinguish instrumental convergence in a response from a model that is simply following instructions. In many of the questions composing the benchmark, the behavior measured by the judge is explicitly instructed in the question, such that a model following instructions will be flagged as instrumentally convergent. Sometimes, the most well-intentioned, competent response directly overlaps with what the judge would categorize as instrumentally convergent. These are huge confounds that I tried to fix by making a strict system prompt for the judge. I used Sonnet-4.6 to re-judge the responses under the "Base" and "full" system prompts, which completely changes the results in the Running Multiple AI Copies category.

This shows that InstrumentalEval is an unreliable benchmark to test a model for instrumental convergence. In the full write-up, I dig deeper into the various prompts fed to the LLMs and judges, and show exactly where the benchmark questions fail to do what they were expected to.

**[Read the full write-up →]({% post_url 2026-11-01-a-critique-of-InstrumentalEval %})**

Code: [GitHub](https://github.com/simonbernier/instrumentalEval-replication.git)
