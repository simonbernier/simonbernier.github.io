---
layout: post
published: false
title: "An Incomplete State of Projects"
description: "A preview of what is currently on the boilerplate"
date: 2026-11-24
tags: [evals, training dynamics, j-lens, interpretability, open language models, phase transitions]
categories: [ai-safety, physics]
---

Thanks to a Coefficient Giving grant, I have been exploring the field of AI safety for the last few months. My very first project was exploring filler token uplift in DeepSeek V4 Flash with a j-lens and was done as part of applying to Neel Nanda's MATS stream. After doing the September edition of the Iliad Intensive in London, I decided to explore the field of training dynamics as a way to do theoretical AI alignment work. My hope was that my academic background in dynamical quantum phase transitions would be of substantial help in helping out in that area of research (it is still unclear to me how). In October, I did Bluedot's Technical AI Safety Project, where I decided to do a small project evaluating misalignment in open language models. This led to two separate projects when I found flaws in one benchmark ([A Critique of InstrumentalEval]({% link _projects/a-critique-of-InstrumentalEval.md %})) and then replicated work on evaluation awareness in OLMo 3. To extend the results I obtained, I decided to fit a Jacobian lens to OLMo 3 and use it to study how eval awareness changes throughout post-training with reinforcement learning. I've also explored how frontier language models can help me with theoretical and experimental research. To explore in known territory and validate the results, I used Claude to revisist the research I did in physics. This post describes the idea behind each project and thier various states of (in)completeness. Each of these projects have their own page, which will be updated as the work progresses and will eventually become their own blog post.

## Filler Token Uplift in DeepSeek V4 Flash

It was discovered that adding meaningless tokens after a question improved frontier large language model (LLM) performance on mathematical tasks ([Greenblatt, 2025](https://www.lesswrong.com/posts/NYzYJ2WoB74E6uj9L)). I replicated a study that used logit-lens to understand how DeepSeek V3 and Kimi-K2 use filler tokens to improve their performance on a variety of tasks ([Brauer et. al., 2026](https://arxiv.org/pdf/2607.03502)), and extended some of their results to DeepSeek V4 Flash. I focused on two-fact addition tasks, where the model scores 10% higher with filler tokens where it must recall and then add two numbers from Greenblatt's *compose facts* repo ([Greenblatt, 2025](https://github.com/rgreenblatt/compose_facts)). I use a j-lens fitted to DeepSeek V4 Flash ([Blanks et. al., 2026](https://www.lesswrong.com/posts/nv8oedrnLXKRzNEL9/r-lens-making-j-lens-more-faithful-on-early-layers)) and do top-token readouts during forward passes at every filler token position and each layer. The j-lens faithfully reproduces previous results but fails to improve upon logit-lens results for top-token readouts. This is the main limitation of this project and the next step is to do top-k token readouts to fully inspect the model's workspace during forward passes ([Gurnee et. al., 2026](https://transformer-circuits.pub/2026/workspace/index.html)).

**[Filler token uplift project page →]({% link _projects/filler-token-uplift.md %})**

## Inductive Bias under Muon

*A first step into training dynamics, the area I picked after the Iliad Intensive as a way to do theoretical alignment work.*

<!-- TODO: one or two sentences on the question. -->

**Status:** <!-- TODO -->

**[Inductive bias under Muon project page →]({% link _projects/inductive-bias-under-muon.md %})**

## Evaluation Awareness in OLMo 3

*A replication of work on evaluation awareness on OLMo 3, whose checkpoints across post-training make it possible to track how evaluation awareness changes.*

<!-- TODO: one or two sentences on what was replicated and what came out. -->

**Status:** <!-- TODO -->

**[Evaluation awareness in OLMo 3 project page →]({% link _projects/eval-awareness-in-olmo-3.md %})**

## Fitting a J-lens on OLMo 3

*The follow-up to the previous project: fitting a Jacobian lens to OLMo 3 to see how evaluation awareness changes inside the model during reinforcement learning.*

**Status:** <!-- TODO -->

**[OLMo 3 j-lens project page →]({% link _projects/j-lens-on-olmo-3.md %})**

## Automating Theoretical Research in Physics

*Testing how far Claude can carry theoretical physics research, on problems from my own physics research where I can check the answers.*

**Status:** <!-- TODO --> *This will become a series of blog posts.*

**[Automatic theoretical research in physics →]({% link _projects/automating-theoretical-physics-research.md %})**

## What's next?
