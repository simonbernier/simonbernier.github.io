---
layout: page
# Draft: not built on the live site. Preview with `bundle exec jekyll serve --unpublished`.
published: false
title: "Filler Token Uplift in DeepSeek V4 Flash"
description: "Reading out how meaningless filler tokens help a model compose recalled facts, with a Jacobian lens."
importance: 2
category: ai-safety
---

> ***Status: in progress.*** *The behavioural results and a first j-lens readout are done. The j-lens currently performs about as well as the logit lens; the next step is to look at top-k tokens instead of only the top token.*
{: .block-tip }

My first project focused on using a new interpretability method to understand how adding meaningless, filler tokens at the end of a question increased model performance on non-reasoning tasks in a large number of frontier large language models (LLMs) ([Greenblatt, 2025](https://www.lesswrong.com/posts/NYzYJ2WoB74E6uj9L)). I first replicated the methods from a paper that applied a logit lens to DeepSeek V3 and Kimi-K2 ([Brauer et. al., 2026](https://arxiv.org/pdf/2607.03502)) and found that in these models, attention routes the question through filler tokens to the answer and that logit-lens readouts show that retrieved facts appear early at filler token positions and help with answer composition in late layers. My own results are similar and show that j-lens performs about equally as logit-lens on readouts. I attribute this to an improper use of j-lens on my part, which could be improved by looking at top-k tokens to fully explore the model's workspace ([Gurnee et. al., 2026](https://transformer-circuits.pub/2026/workspace/index.html)).

The task for the LLM is to add two numbers together, where those numbers must be retrieved from facts like the atomic number of an element or the age at which a famous person in history died for example. So, the model first needs to recall the numbers corresponding to these facts and then add them together, without the possibility of using thinking tokens. The fact-number dataset comes from Ryan Greenblatt's "compose_facts" repo ([Greenblatt, 2025](https://github.com/rgreenblatt/compose_facts)). First, I check for single-fact recall performance for DeepSeek V4 Flash and only keep facts the model can recall in a single pass with no chain of thought (CoT) in at least 3 out of 4 samples. Then, I check how filler tokens affect 1-fact and 2-fact addition tasks. For 1-fact addition, the model needs to retrieve only one number and then add it to another randomly chosen number between 10 and 99. For 2-fact addition, two numbers needed to be recalled to perform the addition. Filler tokens are added between the last token belonging to the question and the `Answer` token prompting the model to answer. Results are shown in Fig 1 up to 100 filler dots on DeepSeek V4 Flash and compared to DeepSeek V3 and Kimi-K2 data taken from ([Brauer et. al., 2026](https://arxiv.org/pdf/2607.03502)). As we can see, DeepSeek V4 Flash does much better than DeepSeek V3 on 1-fact addition, nearly saturating on accuracy and getting a <5% uplift with filler tokens, compared to the 15% increase seen in V3. On 2-fact addition, DeepSeek V4 Flash gains a significant ~10% uplift from filler tokens and once again scores higher than DeepSeek V3 and Kimi-K2. Therefore, we focus on 2-fact addition tasks in the following.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/filler-token-uplift/filler_token_uplift.png" title="filler token uplift" class="img-fluid rounded" %}
    </div>
</div>
<div class="caption" markdown="1">
Figure 1: Accuracy of DeepSeek V4 Flash on (a) 1-fact addition tasks and (b) 2-fact addition tasks for various filler tokens, compared to available data from DeepSeek V3 and Kimi-K2. Error bars show the 95% Wilson confidence intervals for (a) n=800 tasks and (b) n=1500 tasks.
</div>

Following the methodology in ([Brauer et. al., 2026](https://arxiv.org/pdf/2607.03502)), I then do a readout of the residual stream with a fitted j-lens ([Blanks et. al., 2026](https://www.lesswrong.com/posts/nv8oedrnLXKRzNEL9/r-lens-making-j-lens-more-faithful-on-early-layers)) at every layer and filler and answer block token positions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="lazy" path="assets/img/projects/filler-token-uplift/jlens_position_layer.png" title="j-lens decoding by position and layer" class="img-fluid rounded" %}
    </div>
</div>
<div class="caption" markdown="1">
Figure 2: Fraction of examples in which the top token decoded by j-lens is the first fact's number (A1), the second fact's number (A2) or their sum (A1 + A2) at each token position and layer, for examples answered correctly (a-c) and incorrectly (d-f). Positions are the 10 filler dots followed by the `Answer` block given to the model. The (k = 0) colorplots show the same final positions without filler dots.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="lazy" path="assets/img/projects/filler-token-uplift/jlens_deepseekV4.png" title="j-lens decoding by layer" class="img-fluid rounded" %}
    </div>
</div>
<div class="caption" markdown="1">
Figure 3: (a) Percentage of examples decoded at the last filler dot position by the j-lens at each layer of DeepSeek V4 Flash with k = 10 filler dots for A1, A2 and A1 + A2, compared to a shuffled control. (b) Difference between the j-lens and logit-lens decoding rates at each layer at the final filler token position. The grey band shows the 95% chance range for paired comparisons.
</div>
