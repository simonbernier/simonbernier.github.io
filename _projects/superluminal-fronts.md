---
layout: page
# Draft: not built on the live site. Preview with `bundle exec jekyll serve --unpublished`.
published: false
title: "Spatiotemporal quenches"
description: "Exact theory of the energy, entanglement and correlations left by mass fronts moving faster than light through lattice chains."
img: assets/img/projects/superluminal-fronts/thumbnail.png
importance: 2
category: physics
repo: https://github.com/simonbernier/spatiotemporal_quenches
_styles: |
  .post .project-links { display: flex; flex-wrap: wrap; gap: 0.4rem 1.25rem; margin: 0 0 1rem; font-size: 0.95rem; }
  .post .project-links i { margin-right: 0.3rem; }
---

<div class="project-links">
  <a href="{% post_url 2026-11-03-superluminal-fronts-on-the-lattice %}"><i class="fa-solid fa-file-lines"></i>Full write-up</a>
  <a href="{{ page.repo }}"><i class="fa-brands fa-github"></i>Code on GitHub</a>
</div>

<!-- TODO: project motivation in your own words: what a spatiotemporal quench is and where it shows up. -->

A spatiotemporal quench switches off the mass of a quantum system behind a front that sweeps through it at speed $v$. If the front is slower than light, a single uniformly moving front emits nothing: in its rest frame it is a static scatterer. If it is faster than light, it leaves energy behind. In the continuum a Lorentz boost turns it into a sudden quench, and the energy ends up in two flat regions: a **cold** region inside the light cone and a **hot** strip between the light cone and the fronts.

On a lattice, neither region is flat. I built an exact theory of what replaces them, for free Ising and boson chains, and validated it against exact lattice evolutions.

- **The cold region is a bowl.** Each momentum has its own group velocity $v_g(k)<1$, so slow, blue-shifted quanta trail inside the light cone. For the Ising chain they dominate the cold region.
- **Less energy is injected than in the continuum.** A lattice precursor lets each site start relaxing during the time $1/v$ between its neighbour's quench and its own. This is second order in $1/v$ for the Ising chain and fourth order for the boson.
- **An exact Floquet–Bloch theory.** A discrete co-moving symmetry reduces a single front to a $2\times2$ scattering problem for each conserved label $\theta=k-\omega(k)/v$. Ballistic propagation of the emitted quanta then gives the full profile, with no fitted parameter. It matches exact simulations to 0.03% (hot level), 0.5% (cold level) and 1.3% RMS pointwise.
- **Smooth fronts and entanglement.** A finite quench time removes the slow quanta and restores the continuum picture at a lower energy. Slow tanh fronts radiate thermally. Entanglement growth follows from counting emitted pairs, and the cold region is a generalised Gibbs ensemble of red-shifted quanta.

{% include figure.liquid loading="eager" path="assets/img/projects/superluminal-fronts/s2_lattice_check_profiles.png" class="img-fluid rounded" %}
<div class="caption">
    End-of-quench energy profiles for the Ising chain (top) and the boson chain (bottom) at v = 1.2, 1.5, 2 and 3. Solid: exact lattice evolution. Dashed: the ballistic prediction of the exact single-front theory.
</div>

**[Read the full write-up →]({% post_url 2026-11-03-superluminal-fronts-on-the-lattice %})**
