---
layout: post
published: false
title: "An Incomplete State of Projects"
description: "A preview of what is currently on the boilerplate"
date: 2026-11-24
tags: [evals, training dynamics, j-lens, interpretability, open language models, phase transitions]
categories: [ai-safety, physics]
---

Thanks to a Coefficient Giving grant, I have been exploring the field of AI safety for the last few months. My very first project was exploring filler token uplift in DeepSeek V4 Flash with a j-lens and was done as part of applying to Neel Nanda's MATS stream. After doing the September edition of the Iliad Intensive in London, I decided to explore the field of training dynamics as a way to do theoretical AI alignment work. My hope was that my academic background in dynamical quantum phase transitions would be of substantial help in helping out in that area of research (it is still unclear to me how). In October, I did Bluedot's Technical AI Safety Project, where I decided to do a small project evaluating misalignment in open language models. This led to two separate projects when I found flaws in one benchmark ([A Critique of InstrumentalEval]({% link _projects/a-critique-of-InstrumentalEval.md %})) and then replicated work on evaluation awareness in OLMo 3. To extend the results I obtained, I decided to fit a Jacobian lens to OLMo 3 and use it to study how eval awareness changes throughout post-training with reinforcement learning. I've also explored how frontier language models can help me with theoretical and experimental research. To explore in known territory and validate the results, I threw Claude at the research I did in physics. This blog post gives a quick overview of each project and how (in)complete it is. Each one has its own project page, which will be updated as the work progresses.

## Filler Token Uplift in DeepSeek V4 Flash

Adding meaningless filler tokens after a question makes many frontier LLMs better at answering it without reasoning. I replicated a logit-lens study of this effect on DeepSeek V4 Flash, using two-fact addition tasks where the model must recall two numbers and add them in a single pass. DeepSeek V4 Flash gains about 10% accuracy from filler tokens, and the recalled facts show up at the filler positions, as in DeepSeek V3 and Kimi-K2.

**Status:** behavioural results and a first j-lens readout are done. The j-lens currently does no better than the logit lens, which I think comes from only looking at the top token. Next is a top-k readout.

**[Project page →]({% link _projects/filler-token-uplift.md %})**

## Inductive Bias under Muon

A first step into training dynamics, the area I picked after the Iliad Intensive as a way to do theoretical alignment work.

<!-- TODO: one or two sentences on the question. -->

**Status:** <!-- TODO -->

**[Project page →]({% link _projects/inductive-bias-under-muon.md %})**

## Evaluation Awareness in OLMo 3

A replication of work on evaluation awareness on OLMo 3, whose checkpoints across post-training make it possible to track how evaluation awareness changes.

<!-- TODO: one or two sentences on what was replicated and what came out. -->

**Status:** <!-- TODO -->

**[Project page →]({% link _projects/eval-awareness-in-olmo-3.md %})**

## Fitting a J-lens on OLMo 3

The follow-up to the previous project: fitting a Jacobian lens to OLMo 3 to see how evaluation awareness changes inside the model during reinforcement learning.

**Status:** <!-- TODO -->

**[Project page →]({% link _projects/j-lens-on-olmo-3.md %})**

## Automating Theoretical Research in Physics

Testing how far Claude can carry theoretical physics research, on problems from my own physics research where I can check the answers.

**Status:** <!-- TODO --> This will become a series of blog posts.

**[Project page →]({% link _projects/automating-theoretical-physics-research.md %})**

## What's next?
