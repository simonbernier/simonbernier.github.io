---
layout: post
# view draft with `bundle exec jekyll serve --unpublished`
published: false
title: "Superluminal fronts on the lattice"
description: "An exact theory of superluminal quenches in free lattice chains."
date: 2026-11-03
tags: [physics, quantum-quenches]
categories: physics
related_posts: false
toc:
  beginning: true
# Base URL for code links; change the branch here once blog-sections is merged.
repo: https://github.com/simonbernier/spatiotemporal_quenches/blob/blog-sections
_styles: |
  .post table { margin: 1.5rem auto 0.5rem; border-collapse: collapse; }
  .post table th, .post table td { font-size: 0.85rem; padding: 0.3rem 0.6rem; border: 1px solid var(--global-divider-color); vertical-align: top; }
  .post table thead th { background-color: #cfe2f3; }
  html[data-theme="dark"] .post table thead th { background-color: #1e2e3e; }
  .post .table-scroll { overflow-x: auto; }
  .post pre, .post pre code { white-space: pre-wrap; overflow-wrap: anywhere; }
---

*This is the detailed write-up for [Spatiotemporal quenches]({% link _projects/superluminal-fronts.md %}). The code, data and figures are in the [project repository]({{ page.repo }}/).*

<!-- TODO: opening paragraph for a general physics audience: what a spatiotemporal quench is and why fronts faster than light are interesting. -->

Take a quantum chain in its massive ground state and switch the mass off behind a front that sweeps through the system. If the front moves slower than light, $v<c$, a single uniformly moving front emits nothing: in its rest frame it is a static scatterer. If it moves *faster* than light, $v>c$, no rest frame exists. In the continuum, a boost maps the problem onto a sudden quench, and the energy left behind forms two flat regions: a **cold** region inside the light cone of the point where the fronts start (the apex), and a **hot** region between the light cone and the fronts.

On a lattice neither statement holds as such.

1. The cold/hot step sits at $\vert x-x_c\vert =v_g(k)\,t$ for each momentum separately, with $v_g=\cos(k/2)<1$. The slow, blue-shifted quanta trail inside the light cone and turn the cold region into a **bowl**.
2. The energy injected is **lower** than the continuum value. A site starts relaxing as soon as its neighbour has been quenched, during the time $1/v$ before its own quench. This lattice **precursor** is second order in $1/v$ for the Ising chain and fourth order for the boson.

Both effects are contained in an exact lattice theory. A discrete co-moving symmetry reduces the single front to a $2\times2$ Floquet–Bloch scattering problem for each conserved label $\theta=k-\omega(k)/v$, and its solution gives the emitted spectrum $n(k)$. Ballistic propagation of these quanta at $v_g(k)$ gives the two-front profile. Without fitted parameters the theory reproduces exact, time-step-free lattice evolutions of both chains:

- hot means within $0.03\%$ and cold means within $0.5\%$;
- pointwise profiles within $1.3\%$ RMS;
- band edges and whole-chain mode occupations;
- the precursor, to $10^{-11}$.

In higher dimensions, planar fronts of free theories remain exactly solvable by transverse sectors. The cold region is a bowl even in the continuum, and the precursor generalises to any lattice model at leading order in $1/v$.

Smooth fronts with a quench time $\tau$ are exactly solvable too. In the continuum, a boost makes them a uniform ramp of duration $\gamma\tau$. The hot/cold split keeps its ratio, both levels scale with the ramp's energy, and slow tanh fronts emit a thermal spectrum at $T'=\kappa/2\pi$. The energy left behind, $(1-1/v^2)/(24\pi\tau^2)$ for the boson, then no longer depends on the mass and vanishes as $v\to1^+$.

On the lattice the co-moving symmetry survives any profile, so the Floquet–Bloch theory stays exact at every $\tau$, whatever the front's width. The switch time removes the slow quanta, so the bowl disappears once $v\tau\gtrsim4$ sites. The boson then follows the continuum to 2%. The Ising chain's lattice Wilson mass is blue-shifted on the co-moving quanta and keeps it 3–21% below.

## Findings in brief {#findings}

1. **The hot/cold split is a property of each mode, not of the profile.** After the quench both chains have $\omega(k)=2\vert\sin(k/2)\vert$ and $v_g(k)=\cos(k/2)\operatorname{sgn}k$. A quantum of momentum $k$ emitted by a front fills the interval $[v_g(k)t,\,vt]$ ([ballistic filling](#ballistic)), so its cold/hot step is at $\vert x-x_c\vert=v_g(k)t$. This is measured to $0.009$ in $x/t$ ([diagnostics](#diagnostics)).
   - The Ising sudden-quench energy sits at $k=O(1)$ (its continuum $\varepsilon_u$ is log-divergent), so a large fraction of its quanta are slow. Because $\varepsilon_{\rm hot}/\varepsilon_{\rm cold}=(\eta_0^4+1)/2$ is 13 at $v=1.5$ and 61 at $v=1.2$, a few percent of slow hot quanta inside the light cone dominate the cold region.
   - The boson's energy sits at $k\sim m$, where $v_g\simeq1$, so its step looks sharp.
2. **The injected energy is lower than the continuum value.** The whole-chain Ising $\Delta E/N$ is $0.491/0.712/0.847/0.930\,\varepsilon_u$ at $\mu=0.25$, $v=1.2/1.5/2/3$. An exact [work identity](#work) shows that the deficit is the relaxation of $\langle s^z_j\rangle$ during the time $1/v$ between the quench of site $j-1$ and that of site $j$. At leading order, $\langle s^z_j(t_j)\rangle-\langle s^z\rangle_m=\mu J\langle s^y_{j-1}s^y_j\rangle_m/v^2$.
3. **An exact lattice theory predicts the full profile** ([Floquet–Bloch](#floquet) and [ballistic filling](#ballistic)), [validated](#validation) against exact lattice evolutions.
4. **A quench time $\tau$ restores the continuum picture at a lower energy** ([smooth fronts](#tau)). The same theory is exact for smooth fronts. Their emission is cut by the switch time per site, so pairs with energy $E\tau\gtrsim1$ are suppressed however narrow the front. Once $v\tau\gtrsim4$ sites, the profile is the continuum one with $\varepsilon_u$ replaced by the energy left behind, $\varepsilon_s(v,\tau)$. That energy falls steeply with $\tau$: Ising at $\mu=0.5$, $v=1.5$ gives $0.60/0.18/0.04\,\varepsilon_u$ at $\tau=0/1/3$.
5. **Entanglement and correlations follow from pairs and a local GGE** ([entanglement](#entanglement)).
   - Every emitted quantum has a partner. Counting the pairs cut by the half-chain boundary gives $\mathrm{d}S_{\rm half}/\mathrm{d}t=2\int_{k<0}\vert v_g\vert\,s(n)\,\mathrm{d}k/2\pi$. In the continuum this is the Yang–Yang entropy density $s_{\rm cold}$ of the cold region's generalised Gibbs ensemble (GGE).
   - The measured slopes agree to $-0.03$ to $+0.50\%$ over 16 production records, and to $-0.90$ to $+0.34\%$ over the $\tau$ scan at $v\ge1.5$. Near $c$ the prediction holds only once the front has outrun its own width, $t\gg2v\tau/(v-1)$.
   - The cold GGE reproduces the Ising block entropies, $\langle\sigma^x\sigma^x\rangle$ and $\langle\sigma^z\sigma^z\rangle_c$ to $\le1.7\times10^{-5}$. The boson's zero mode restricts its tests to slopes, block increments and short-range $\langle\pi\pi\rangle$.
   - The continuum result is the chiral CFT at the Doppler temperatures $T_0/\eta_0$ and $T_0\eta_0$. But the cold gas is thermal only for slow fronts away from $v=1$. Near $c$ it is cold but inherits a non-thermal shape from its blue partners. The hot strip is not conformal.

## Models, protocol and conventions {#models}

**Ising (transverse-field Ising) chain.** $H=-J\sum_j s^x_js^x_{j+1}-\sum_j g_j s^z_j$ (Pauli matrices), with $J=\tfrac12$ so that $c=1$. The Jordan–Wigner Majoranas are $a_j=\gamma_{2j}$ and $b_j=\gamma_{2j+1}$, with $s^z_j=-ia_jb_j$ and $s^x_js^x_{j+1}=-ib_ja_{j+1}$. Then

$$
H=\tfrac{i}{4}\gamma^{\mathsf T}A\gamma,\qquad A_{2j,2j+1}=2g_j,\quad A_{2j+1,2j+2}=2J,\quad A=-A^{\mathsf T},
$$

$$
\Gamma_{kl}=i\langle\gamma_k\gamma_l\rangle\ (k\neq l),\qquad \langle H\rangle=\tfrac14\sum_{kl}A_{kl}\Gamma_{kl}.
$$

The Heisenberg equations $\dot\gamma=A\gamma$ read

$$
\begin{equation}\label{eq:heis-ising}
\dot a_j=2g_jb_j-2Jb_{j-1},\qquad \dot b_j=-2g_ja_j+2Ja_{j+1}.
\end{equation}
$$

$g=J+\mu/2$ is the paramagnetic phase with gap $\mu$. $g=J$ is critical, with $\omega(k)=2\vert g-Je^{ik}\vert=2\vert\sin(k/2)\vert$. Code: [`gaussian/majorana.py`]({{ page.repo }}/gaussian/majorana.py) (states $\Gamma=X\Omega X^{\mathsf T}$) and [`gaussian/majorana_obs.py`]({{ page.repo }}/gaussian/majorana_obs.py) for observables, with the site partition $e_i=g_i\Gamma_{2i,2i+1}+\tfrac12J\Gamma_{2i-1,2i}+\tfrac12J\Gamma_{2i+1,2i+2}$.

**Boson chain.** $H=\tfrac12\sum_j[\pi_j^2+(\phi_{j+1}-\phi_j)^2+m^2f_j\phi_j^2]$, Dirichlet ends, $c=1$. The dispersion is $\Omega(k)=\sqrt{m^2+4\sin^2(k/2)}$ ahead of the front and $\omega(k)=2\vert\sin(k/2)\vert$ behind it. Code: [`gaussian/boson_chain.py`]({{ page.repo }}/gaussian/boson_chain.py).

**Protocol.** Take an open chain of $N$ sites ($N$ even), with $x=i-x_c$ and $x_c=(N-1)/2$. The chain starts in the massive ground state ($f\equiv1$). A sharp front removes the mass of site $j$ at

$$
t_j=\vert x_j-x_c\vert/v,\qquad v>1,
$$

so sites $x_c\pm(n+\tfrac12)$ switch together at $(n+\tfrac12)/v$. All sites are quenched at $t_q=(N-1)/(2v)$, when the fronts reach the ends. The end-of-quench profile $\Delta\varepsilon_i$ is the site-partition excess over the ground state of the final (critical or massless) $H$.

{% include figure.liquid loading="eager" path="assets/img/blogs/superluminal-fronts/s2_corr_check_picture.png" class="img-fluid rounded" %}
<div class="caption" markdown="1">
Figure 1: Geometry of the two-front quench in the $(x/t,\,t)$ plane. The fronts leave the centre at $\pm vt$. Between the fronts and the light cone $\vert x\vert=t$ lies the hot strip, and inside the light cone the cold region. A pair born on the right front splits into a blue co-mover, which stays in the hot strip, and a red counter-mover, which streams back into the cold region.
</div>

**Uniform reference and the continuum prediction.** The sudden ($v=\infty$) quench leaves the bulk density

$$
\begin{aligned}
\text{Ising:}\quad &\varepsilon_u=\frac1\pi\int_0^\pi\mathrm{d}k\;\frac{\omega_k}{2}\bigl[1-\cos(\varphi_k(J)-\varphi_k(J+\tfrac\mu2))\bigr],
\qquad\varphi_k(g)=\arg(g-Je^{ik}),\\
\text{boson:}\quad &\varepsilon_u=\frac1\pi\int_0^\pi\mathrm{d}k\;\frac{(\Omega_k-\omega_k)^2}{4\Omega_k}
\end{aligned}
$$

([`theory/superluminal.py`]({{ page.repo }}/theory/superluminal.py): `ising_uniform_bulk_density`, `boson_uniform_bulk_density`). Equivalently, $\varepsilon_u=\int\omega\,n_u\,\mathrm{d}k/2\pi$ with the sudden occupations $n_u^{\rm Ising}=\tfrac12[1-\cos(\Delta\varphi_k)]$ and $n_u^{\rm boson}=(\Omega-\omega)^2/(4\Omega\omega)$.

The continuum boost argument gives the following prediction. With $\eta_0^2=(1+1/v)/(1-1/v)$,

$$
\begin{equation}\label{eq:cont}
\varepsilon_{\rm cold}=\frac{\varepsilon_u}{\eta_0^2}\quad(\vert x-x_c\vert<t),\qquad
\varepsilon_{\rm hot}=\tfrac12\bigl(\eta_0^2+\eta_0^{-2}\bigr)\varepsilon_u\quad(t<\vert x-x_c\vert<vt)
\end{equation}
$$

(`predicted_densities`). The rest of this post is about how, and why, the lattice departs from Eq. $\eqref{eq:cont}$.

## Exact lattice data: stroboscopic evolution {#data}

**Propagator.** Between switch instants $H$ is constant, so the exact evolution is a product of matrix exponentials, with no time step. [`gaussian/stroboscopic.py`]({{ page.repo }}/gaussian/stroboscopic.py) implements it.

- *Ising.* In the ordering $(a;b)$, $A=\left(\begin{smallmatrix}0&B\\-B^{\mathsf T}&0\end{smallmatrix}\right)$, where $B$ is lower-bidiagonal with $B_{ii}=2g_i$ and $B_{i+1,i}=-2J$. With the SVD $B=U\,\mathrm{diag}(s)\,V^{\mathsf T}$,

  $$
  e^{Ah}=\begin{pmatrix}U\cos(sh)U^{\mathsf T}&U\sin(sh)V^{\mathsf T}\\-V\sin(sh)U^{\mathsf T}&V\cos(sh)V^{\mathsf T}\end{pmatrix},
  $$

  applied to the rows of $X$ ($\Gamma=X\Omega X^{\mathsf T}$). This is exact for every singular value and orthogonal to rounding.
- *Boson.* With mode functions $\phi=u\,b+{\rm h.c.}$, $\ddot u=-Ku$ and $K=O\,\mathrm{diag}(w^2)O^{\mathsf T}$, one step is $u\leftarrow O[\cos(wh)O^{\mathsf T}u+w^{-1}\sin(wh)O^{\mathsf T}\dot u]$, $\dot u\leftarrow O[-w\sin(wh)O^{\mathsf T}u+\cos(wh)O^{\mathsf T}\dot u]$. The correlations are $G=\langle\phi\phi^{\mathsf T}\rangle={\rm Re}(uu^\dagger)$ and $P=\langle\pi\pi^{\mathsf T}\rangle={\rm Re}(\dot u\dot u^\dagger)$.

A run has $N/2$ intervals of length $1/v$ and costs $O(N^4)$, about 20–30 s at $N=400$ on one core. `ising_sharp(N, v, mu, geometry, t_end, snapshots, keep_state)` and `boson_sharp(...)` return the profile, $\Delta E$, the work per site (below), snapshots and, on request, the final $\Gamma$ or $(G,P)$. The geometry `"left"` is a single front entering at site 0, $t_j=x_j/v$.

### Switch convention and the work identity {#work}

$H(t)$ is right-continuous: site $j$ has its final term for $t\ge t_j$. A sudden change of $H$ does not change the state, so $\langle H\rangle$ jumps by the expectation of the change, evaluated on the state at $t_j$:

$$
\begin{aligned}
\text{Ising:}\quad &\Delta H_j=+\tfrac\mu2 s^z_j,\qquad W_j=\tfrac\mu2\langle s^z_j(t_j)\rangle=-\tfrac\mu2\Gamma_{2j,2j+1}(t_j),\\
\text{boson:}\quad &\Delta H_j=-\tfrac{m^2}2\phi_j^2,\qquad W_j=-\tfrac{m^2}2\langle\phi_j^2(t_j)\rangle.
\end{aligned}
$$

The sudden quench has the same expressions $W^u_j$, evaluated on the initial state. Because the front and the sudden quench start from the same state and end with the same $H$,

$$
\begin{equation}\label{eq:work-identity}
\boxed{\ \Delta E_{\rm front}-\Delta E_{\rm uniform}=\sum_j\bigl(W_j-W^u_j\bigr)\ }
\end{equation}
$$

exactly. The stroboscopic code computes both sides independently. At $N=60$ the identity holds to $5\times10^{-14}$ (Ising) and $2\times10^{-13}$ (boson), and the bookkeeping $E(t)=E(0)+\sum_{t_j\le t}W_j$ holds to $10^{-13}$ at every snapshot.

**Time-stepped production runs (cross-check).** The production runner ([`sections/s2_superluminal/run.py`]({{ page.repo }}/sections/s2_superluminal/run.py)) uses Yoshida-4 integrators. A switch that falls inside a time step is applied with the wrong duration and order: the Ising stage midpoints sit at $0.676/0.5/0.324$ of the step, and the boson stage ends at $-0.35$ and $+1.35$. This is an $O(\mathrm{d}t)$, phase-aliased error, and it overstated the Ising $\Delta E$ by 1–2.6% at $\mathrm{d}t=0.1$. The production runs therefore use:

- an aligned grid $\mathrm{d}t=1/(2vK)\le1/24$ for the Ising chain, so that every stage of a step sees one $H$ (fourth order is restored; $\mathrm{d}t$ and $\mathrm{d}t/2$ agree within $2.5\times10^{-6}$);
- $\mathrm{d}t=0.0025$ for the boson;
- an end time after the last switch.

The step count must be robust to round-off (`gaussian.yoshida.step_count`).

## Diagnostics that identified the two lattice effects {#diagnostics}

### Momentum-resolved energy density

The Wigner transform must act on *energy matrices*, not on bare correlations. Windowing the boson's infrared $\langle\phi\phi\rangle$, or the $k=0$ jump of the critical $\Gamma$, leaks energy into every $k$. With the excess correlations $\delta\Gamma=\Gamma-\Gamma_0$, $\delta G$, $\delta P$ over the ground state of the final $H$:

$$
\begin{aligned}
\text{Ising:}\quad &\Delta E=\tfrac14\sum A_{kl}\delta\Gamma_{kl}=-\tfrac14\operatorname{Tr}(A\,\delta\Gamma),\qquad
M=-\tfrac18(A\,\delta\Gamma+\delta\Gamma\,A),\quad m(j_1,j_2)=\operatorname{Tr}_{2\times2}M_{[j_1j_2]};\\
\text{boson:}\quad &m_s=\tfrac12\delta P+\tfrac14(D\,\delta G+\delta G\,D)\ \text{(sites)},\qquad
m_b=\tfrac12\nabla\delta G\nabla^{\mathsf T}\ \text{(the $N+1$ bonds, wall bonds included)}.
\end{aligned}
$$

Here $D=\mathrm{diag}(m^2f)$ and $(\nabla\phi)_b=\phi_b-\phi_{b-1}$. The diagonal of $m$ is the site-partition profile. At centres $c$:

$$
\varepsilon_c(k)=\sum_{\rm grids}\sum_{i,j}g_c\bigl(\tfrac{p_i+p_j}2\bigr)\,w(j-i)\cos\bigl(k(j-i)\bigr)\,m(i,j),\quad
w(r)=e^{-r^2/2\sigma^2},\quad g_c(X)=\frac{e^{-(X-c)^2/2S_X^2}}{S_X\sqrt{2\pi}},
$$

with $p_i=i$ on sites and $b-\tfrac12$ on bonds. Since $w(0)=1$, $\int_0^\pi\frac{\mathrm{d}k}{\pi}\varepsilon_c(k)$ is exactly the smoothed profile (checked to $10^{-15}$). Parameters: $\sigma=12$, cut $\vert r\vert\le48$, $S_X=1$ (equal moments on the integer and half-integer midpoint lattices, no parity image), centres every 2 sites. Code: [`analysis/wigner_energy.py`]({{ page.repo }}/analysis/wigner_energy.py), first used in `sections/s2_superluminal/super_check.py`.

**Band edges.** The quanta are sorted into bands of $v_g$, with edges at $1,0.99,0.97,0.94,0.9,0.85,0.8,0.7,0.6,0.45,0.3,0$. For each band the profile is symmetrised about $x_c$. The edge is taken as the largest outward rise (3-point smoothed differences, $a/t\in[0.05,1.15]$), an estimator that uses no prediction. A band can tell an edge at $v_gt$ from one at $t$ only if $(1-\bar v_g)t\ge10$ sites.

- The median $\vert{\rm edge}/t-\bar v_g\vert$ is $0.009$ for the Ising chain (58 bands) and $0.013$ for the boson (41 bands).
- The fast part ($v_g\ge0.97$) is flat in the cold region (rise ratio 0.99–1.01), and its centre matches Eq. $\eqref{eq:cont}$ to 4% for $v\ge1.5$.

{% include figure.liquid loading="lazy" path="assets/img/blogs/superluminal-fronts/s2_super_check_bands.png" class="img-fluid rounded" %}
<div class="caption" markdown="1">
Figure 2: The energy profile split by group velocity, against $\vert x-x_c\vert/t$. The fast quanta ($v_g\ge0.97$, orange) have a flat cold region and a step at the light cone, as in the continuum (dashed: Eq. $\eqref{eq:cont}$). The slow quanta (green) rise gradually inside the light cone. For the Ising chain they dominate the cold region and turn it into a bowl. For the boson they carry little energy.
</div>

### The precursor {#precursor}

By the work identity $\eqref{eq:work-identity}$, the deficit is the change of $\langle s^z_j\rangle$ before site $j$'s own quench. Before any nearby switch, the state is the massive ground state, which is stationary under $H_m$. At $t_{j-1}$ the term $\Delta H_{j-1}=\tfrac\mu2 s^z_{j-1}$ is added. With $\frac{\mathrm{d}}{\mathrm{d}t}\langle O\rangle=i\langle[H,O]\rangle$:

- the first derivative is $i\langle[\Delta H_{j-1},s^z_j]\rangle=0$ (the $s^z$ commute), so it stays zero;
- the second derivative, $-\langle[H,[H,s^z_j]]\rangle$, jumps by $-\langle[\Delta H_{j-1},[H_m,s^z_j]]\rangle$, because $\langle[H_m,[H_m,O]]\rangle=0$ in an eigenstate and $[\Delta H_{j-1},s^z_j]=0$.

With $[s^x,s^z]=-2is^y$ and $[s^z,s^x]=2is^y$, the commutator $[H_m,s^z_j]$ contains $-J[s^x_{j-1}s^x_j,s^z_j]=2iJ\,s^x_{j-1}s^y_j$, and $[\Delta H_{j-1},2iJs^x_{j-1}s^y_j]=\tfrac\mu2\,2iJ\,(2is^y_{j-1})s^y_j=-2\mu J\,s^y_{j-1}s^y_j$. The jump is therefore $+2\mu J\langle s^y_{j-1}s^y_j\rangle_m$, and after the time $1/v$

$$
\begin{equation}\label{eq:precursor}
\langle s^z_j(t_j)\rangle-\langle s^z\rangle_m=\frac{\mu J\,\langle s^y_{j-1}s^y_j\rangle_m}{v^2}+O(v^{-4}),\qquad
\lim_{v\to\infty}v^2D=-\frac{\mu^2J}{2}\frac{\langle s^y_{j-1}s^y_j\rangle_m}{\varepsilon_u}.
\end{equation}
$$

Here $D=(W^u-W)/\varepsilon_u$ is the deficit per site. In Majoranas, $\langle s^y_{j-1}s^y_j\rangle=\Gamma_{2(j-1),2j+1}=-\frac1\pi\int_0^\pi\mathrm{d}k\,(g\cos k-J\cos2k)/\vert g-Je^{ik}\vert$ (`theory.front_born.sysy`; at criticality it equals $-2/(3\pi)$).

- The predicted values of $\lim v^2D$ are $0.3587/0.5367/0.8482/1.4010$ at $\mu=0.125/0.25/0.5/1$. The measured values at $v=10$ are $0.3597/0.5378/0.8488/1.397$.
- Exact diagonalisation of a 10-site chain confirms the formula: $\delta\langle s^z_j\rangle=-1.694\times10^{-4}$ against $-1.697\times10^{-4}$ at a lag of 0.05.
- Only the neighbour $j-1$ contributes at $O(v^{-2})$. The jump of the second derivative requires $\Delta H_l$ to appear in $[H_m,O_j]$, that is, $l$ must be coupled to $j$ by $H$. The precursor therefore extends about one site ahead of the front.

**Boson: fourth order.** $(K\phi)_j$ does not contain $K_{j-1,j-1}$. The mass change at $j-1$ reaches $\langle\phi_j^2\rangle$ only in four steps: through $\langle\pi_{j-1}\phi_j\rangle$ (order $\tau$), $\langle\phi_{j-1}\phi_j\rangle$ ($\tau^2$), $\langle\phi_j\pi_j\rangle$ ($\tau^3$) and finally $\langle\phi_j^2\rangle$ ($\tau^4$). In closed form ([any dimension](#prec-any)),

$$
\lim_{v\to\infty}v^4D=\frac{m^4\langle\phi_{j-1}\phi_j\rangle_m}{24\,\varepsilon_u}
=5.635\times10^{-3}\,/\,1.552\times10^{-2}\,/\,3.607\times10^{-2}\,/\,6.279\times10^{-2}
\quad\text{at }m=0.125/0.25/0.5/1.
$$

- The exact solver and an exact stroboscopic evolution both reproduce this (local exponent $4.001$ on $v\in[40,80]$). The Ising exponents fitted on $v\ge3$ are 1.98–2.03.
- *Caution:* boson deficits from Yoshida runs at $\mathrm{d}t=0.0025$ are biased by 15–44% at $v=10$. The $O(\mathrm{d}t)$ switch-placement error is large compared with deficits of $10^{-7}$ per site, so exponents fitted on those runs (3.78–4.01) are not reliable.

This difference of order, not the UV or IR character of the work operators, is why the boson loses so little energy.

{% include figure.liquid loading="lazy" path="assets/img/blogs/superluminal-fronts/s2_lattice_check_deficit.png" class="img-fluid rounded" %}
<div class="caption" markdown="1">
Figure 3: The deficit $D(v)=1-\varepsilon_s/\varepsilon_u$. Left: Ising chain, exact solver (dots), exact stroboscopic evolution (crosses), and the large-$v$ series truncated at $v^{-2}$ and $v^{-6}$. Right: boson chain, with the $v^{-4}$ law drawn through $v=3$.
</div>

## Exact single-front theory: Floquet–Bloch scattering {#floquet}

Take one front moving to $+x$, with $t_j=j/v$. Code: [`theory/floquet_front.py`]({{ page.repo }}/theory/floquet_front.py).

<!-- FIGURE IDEA: the (j, t) lattice with the switch line t = j/v and the co-moving translation (j, t) -> (j+1, t+1/v). -->

### Discrete co-moving symmetry and the Bloch ansatz

The Hamiltonian is invariant under $(j,t)\to(j+1,t+1/v)$. Linear solutions of Eq. $\eqref{eq:heis-ising}$ can therefore be chosen as $a_j(t)=e^{i\theta j}\alpha(s)$, $b_j(t)=e^{i\theta j}\beta(s)$, with $s=t-j/v$ and $h=1/v$. Since $g_j(t)=J+\tfrac\mu2\Theta(-s)$,

$$
\begin{equation}\label{eq:delay-ising}
\alpha'(s)=2g(s)\beta(s)-2Je^{-i\theta}\beta(s+h),\qquad \beta'(s)=-2g(s)\alpha(s)+2Je^{i\theta}\alpha(s-h),
\qquad g(s)=J+\tfrac\mu2\Theta(-s).
\end{equation}
$$

For the boson ($\phi_j=e^{i\theta j}p(s)$): $p'=r$, $r'=e^{i\theta}p(s-h)+e^{-i\theta}p(s+h)-(2+m^2\Theta(-s))p$. The label $\theta$ is conserved. It is the Bloch label of the problem in the front frame, the lattice counterpart of a boost.

### Channels

For $s\to\mp\infty$ the coefficients are constant. With $(\alpha,\beta)=(A,B)e^{-i\varepsilon s}$, Eq. $\eqref{eq:delay-ising}$ gives $-i\varepsilon A=2B(g-Je^{-ik})$ and $-i\varepsilon B=-2A(g-Je^{ik})$, with $k=\theta+\varepsilon/v$. Hence

$$
\varepsilon^2=4g^2+4J^2-8gJ\cos(\theta+\varepsilon/v),\qquad B=\frac{-i\varepsilon}{2(g-Je^{-ik})}A.
$$

Since $a_j\propto e^{ikj-i\varepsilon t}$, each solution is a lab plane wave of momentum $k$ and frequency $\varepsilon$.

- Because $\vert\mathrm{d}\Omega/\mathrm{d}k\vert<1<v$, for each sign $\varepsilon=\pm\Omega(\theta+\varepsilon/v)$ has exactly one real root (found by bisection) on each side. All other roots are complex (evanescent).
- As $s\to-\infty$ (ahead of the front) the two real roots are the massive channels, and they are *incoming*: every mode is overtaken, since $\mathrm{d}s/\mathrm{d}t=1-v_g/v>0$. As $s\to+\infty$ the two critical channels are *outgoing*.
- The map $k\mapsto\theta(k)=k-\omega(k)/v$ is an increasing bijection of the zone ($\mathrm{d}\theta/\mathrm{d}k=1-v_g/v>0$). Every $\theta$ therefore has exactly two incoming and two outgoing channels, connected by a $2\times2$ scattering matrix $S(\theta)$ that maps $({\rm in}_+,{\rm in}_-)$ to $({\rm out}_+,{\rm out}_-)$.

### Flux and normalisation

For a solution of the lattice equations, $\rho_j=\vert a_j\vert^2+\vert b_j\vert^2$ obeys $\dot\rho_j=I_{j-1}-I_j$ with $I_j=-4J\,{\rm Re}(\bar b_ja_{j+1})$. For the boson, $\rho_j=i(\bar\phi_j\pi_j-\bar\pi_j\phi_j)$ and $I_j=2\,{\rm Im}(\bar\phi_j\phi_{j+1})$. Under the ansatz, $\rho_j(t)=\rho(s)$, $I_{j-1}(t)=\tilde I(s+h)$ and $I_j(t)=\tilde I(s)$, so

$$
C=\rho(s)-\int_s^{s+h}\tilde I(u)\,\mathrm{d}u
$$

is independent of $s$. For a channel, $\tilde I=v_g\rho$ and $C=\rho(1-v_g/v)$.

- Channels are normalised to $\vert C\vert=1$. $C$ is positive for every Ising channel and has the sign of $\varepsilon$ for the boson.
- Conservation of the sesquilinear $C$ makes $S$ unitary for the Ising chain and pseudo-unitary for the boson, $S^\dagger\eta S=\eta$ with $\eta=\mathrm{diag}(\operatorname{sgn}\varepsilon)$.
- Since $\mathrm{d}\theta=(1-v_g/v)\mathrm{d}k$, a flux-normalised solution carries unit lab density per $\mathrm{d}k/2\pi$, so integrals over lab modes are $\int\mathrm{d}\theta/2\pi$.

### Observables

The initial state fills the negative-frequency massive channel. Its positive-frequency outgoing component is the emitted occupation, the lab density per site per $\mathrm{d}k/2\pi$ far behind the front:

$$
n(k)=\bigl\vert S_{+-}(\theta(k))\bigr\vert^2 .
$$

The ${\rm out}_-$ component at the same $\theta$ is the pair partner $q(k)$, defined by $\theta(q)=-\theta(k)$ mod $2\pi$, that is $k+q=(\omega_k+\omega_q)/v$ mod $2\pi$, and $n(q)=n(k)$. The partner map is an involution with two kinds of pairs:

- normal pairs, $(0,\pi]\leftrightarrow[k_u,0)$;
- umklapp pairs, in $(-\pi,k_u)$, with $k_u=q(\pi)=-0.815/-1.107/-1.471/-1.927$ at $v=1.2/1.5/2/3$.

In the continuum, $q=-k/\eta_0^2$.

<!-- FIGURE IDEA: n(k) of a single sharp front (Ising mu = 0.25, v = 1.5), co-movers (k > 0) vs counter-movers (k < 0), with the continuum n_u(k/eta0) for comparison. -->

**Energy levels.** With $\int\mathrm{d}k/2\pi$ over $(-\pi,\pi)$:

$$
\begin{equation}\label{eq:levels}
e_h=\int\omega\,n,\qquad J_E=\int\omega\,v_g\,n,\qquad \varepsilon_s=\int\omega\Bigl(1-\frac{v_g}{v}\Bigr)n=e_h-\frac{J_E}{v},
\qquad D=1-\frac{\varepsilon_s}{\varepsilon_u}.
\end{equation}
$$

- $e_h$ is the uniform density behind a single steady front: the hot plateau.
- $\varepsilon_s$ is the energy left per site of front advance. Quanta of momentum $k$ fill $[v_gt,vt]$, so they are created at the rate $n(v-v_g)\,\mathrm{d}k/2\pi$ per unit time, that is $n(1-v_g/v)$ per site.
- The centre of the two-front cold region holds only the counter-moving quanta of both fronts, so $e_{\rm cold}(0)=2\int_{k<0}\omega n$.

**Work and the exact energy balance.** The steady work per site is read off the solution at $s=0$:

$$
W_{\rm single}^{\rm Ising}=\tfrac\mu2\int\frac{\mathrm{d}\theta}{2\pi}\,{\rm Re}\bigl(-2i\,\bar\alpha\beta\bigr)\big\vert_{s=0}\ \text{(column in$_-$)},\qquad
W_{\rm single}^{\rm boson}=-\tfrac{m^2}{2}\int\frac{\mathrm{d}\theta}{2\pi}\,\vert p(0)\vert^2\ \text{(column in$_+$)}.
$$

The energy added per site is $W$ plus the difference of ground-state densities $e_m-e_c$. The same holds for the sudden quench, so $\varepsilon_s=W_{\rm single}+e_m-e_c=\varepsilon_u-(W^u-W_{\rm single})$. The two independent routes to $D$, the spectrum (Eq. $\eqref{eq:levels}$) and the work operator, agree to $\le2\times10^{-15}$ in $\varepsilon_s$ (`levels` versus `deficit`). The uniform work is $W^u=\tfrac\mu2\cdot\frac1\pi\int_0^\pi\frac{g-J\cos k}{\vert g-Je^{ik}\vert}\mathrm{d}k$ (Ising) and $-\tfrac{m^2}2\cdot\frac1\pi\int_0^\pi\frac{\mathrm{d}k}{2\Omega_k}$ (boson) (`work_uniform`).

### Numerical solution (exact up to truncation) {#solver}

Equation $\eqref{eq:delay-ising}$ is a two-sided delay-differential system. It is well posed as a boundary-value problem.

1. *Period split.* Write $s=mh+\sigma$ with $0<\sigma<h$, and $u_m(\sigma)=(\alpha,\beta)(mh+\sigma)$. For $\sigma\in(0,h)$ the front is frozen between periods $m=-1$ and $0$, so the $u_m$ obey a static linear chain ODE in the index $m$: $u(h)=e^{hM(\theta)}u(0)$, with $M$ the $2\times2$-block tridiagonal matrix of Eq. $\eqref{eq:delay-ising}$ ($g=J+\mu/2$ for $m\le-1$, $J$ for $m\ge0$). Continuity requires $u_m(h)=u_{m+1}(0)$. There is no discretisation error, because the kinks of the solution sit at multiples of $h$.
2. *Gauge.* $M(\theta)=D\,M(0)\,D^{-1}$ with $D=\mathrm{diag}(e^{i\theta m})$, so one matrix exponential $e^{hM(0)}$ serves all $\theta$. The window is padded by 16 periods; the neglected entries are of order $h^{16}/16!$.
3. *Unknowns and boundary conditions.* The unknowns are $u_m(0)$ for $\vert m\vert\le K$ plus the two outgoing amplitudes. For $m<-K$ the solution is the unit-flux incoming channel; for $m\ge K$ it is the sum of the two outgoing channels. One linear solve per $\theta$ and per incoming column gives both columns of $S$ and $u_0(0)$.
4. *Window.* The truncation error falls as $e^{-\kappa K}$, with $\kappa$ the slowest evanescent decay per period.
   - Ising: $K=\max(8,\lceil25/(2.2\sqrt{v-1})\rceil)$, which is $36/26/17/12/9$ at $v=1.1/1.2/1.5/2/3$.
   - Boson: $K=\max(8,\lceil30/\sqrt{12(v^2-1)}\rceil)$.

   The evanescent scale $\sqrt{24v^2(v-1)}$ at $\theta\to0$ widens the front as $v\to1^+$. The (pseudo-)unitarity defect is the alarm (`UNITARITY_ALARM` $=10^{-9}$); the work-versus-spectrum balance is the stronger check.
5. *$k$ grid.* The continuum structure sits at $\vert k\vert\sim\mu\eta_0$ (blue, $k>0$) and $\mu/\eta_0$ (red, $k<0$). Each side gets geometric panels (ratio $\le2$) from $k_{\rm lo}=\min(\kappa,1)/4096$ to $\pi$, plus $[0,k_{\rm lo}]$, with 24 Gauss–Legendre nodes per panel ($\approx1300$ nodes). A second refinement sits around the outgoing modes with $\theta(k)=\pm\theta^*$, the label of the fastest massive mode (Ising $v_g^*=2J=1$ for every $\mu$), where $S$ is nearly singular as $v\to1^+$. $k=0$ is excluded.
6. *Stable formulas.* $\Omega=2\sqrt{(g-J)^2+4gJ\sin^2(k/2)}$ and $g-Je^{ik}=(g-J)+J(2\sin^2\frac k2-i\sin k)$ avoid the cancellation of $\cos k$ at small $k$.

Accuracy:

- using 16 instead of 24 nodes per panel, a 16× deeper $k_{\rm lo}$, or a 1.5× larger $K$ each changes $D$ by $\lesssim10^{-11}$;
- unitarity holds to $\le4\times10^{-13}$;
- $W_{\rm single}$ agrees with the stroboscopic single front (geometry `"left"`) to 10 digits ($0.2112874666$ at $\mu=0.5$, $v=1.5$).

One spectrum takes about 1 s.

<div class="table-scroll" markdown="1">

| chain | mass | $v$ | $K$ | $e_h/\varepsilon_u$ | $e_{\rm cold}(0)/\varepsilon_u$ | $D$ |
| :-- | --: | --: | --: | --: | --: | --: |
| Ising | 0.25 | 1.2 | 26 | 1.52821 | 0.10108 | 0.5052995 |
| Ising | 0.25 | 1.5 | 17 | 1.44295 | 0.19375 | 0.2802411 |
| Ising | 0.25 | 2 | 12 | 1.25719 | 0.32623 | 0.1446233 |
| Ising | 0.25 | 3 | 9 | 1.11379 | 0.50084 | 0.0613371 |
| Ising | 0.5 | 1.2 | 26 | 1.00080 | 0.09084 | 0.6337970 |
| Ising | 0.5 | 1.5 | 17 | 1.12205 | 0.17458 | 0.4024564 |
| Ising | 0.5 | 2 | 12 | 1.11313 | 0.30873 | 0.2186544 |
| Ising | 0.5 | 3 | 9 | 1.05955 | 0.49107 | 0.0952131 |
| boson | 0.25 | 1.5 | 8 | 2.45367 | 0.21219 | $6.640266\times10^{-3}$ |
| boson | 0.25 | 3 | 8 | 1.23993 | 0.50692 | $2.260526\times10^{-4}$ |
| boson | 0.5 | 1.5 | 8 | 2.26235 | 0.24097 | $1.372396\times10^{-2}$ |
| boson | 0.5 | 3 | 8 | 1.22233 | 0.52289 | $5.151132\times10^{-4}$ |

</div>
<div class="caption" markdown="1">
Table 1: Single-front levels from `floquet_front` (`python -m theory.floquet_front` prints a subset). Eq. $\eqref{eq:cont}$ gives $e_h/\varepsilon_u=5.55/2.60/1.67/1.25$ at $v=1.2/1.5/2/3$.
</div>

## From one front to the two-front profile {#ballistic}

**Ballistic filling.** A quantum of momentum $k$ emitted by the right front when it stood at $x'=vt'$ is at $x'+v_g(k)(t-t')$ at time $t$. As $t'$ runs over $[0,t]$, this position runs monotonically (since $v>\vert v_g\vert$) over

$$
I_R(k)=[v_g(k)\,t,\ v\,t]\qquad(\text{signed }v_g),
$$

with uniform density $n(k)\,\mathrm{d}k/2\pi$, which is the defining property of $n$. The left front is the mirror image: $n_L(k)=n(-k)$, filling $[-vt,v_g(k)t]$. With $R(y)=\int\frac{\mathrm{d}k}{2\pi}\omega\,n(k)\,\mathbf 1[v_g(k)t\le y\le vt]$,

$$
\begin{equation}\label{eq:ball}
\varepsilon_{\rm ball}(x,t)=R(x)+R(-x)
=\int_0^\pi\frac{\mathrm{d}k}{2\pi}\,\omega(k)\Bigl\{n(k)\,\mathbf 1\bigl[\vert v_g\vert t<x\bigr]+n(-k)\bigl(1+\mathbf 1\bigl[x<\vert v_g\vert t\bigr]\bigr)\Bigr\},
\quad0\le x<vt.
\end{equation}
$$

The limits are $\varepsilon(0)=2\int_{k<0}\omega n$; the hot region $t<\vert x\vert<vt$ holds $e_h$; and the density is zero for $\vert x\vert>vt$. An even $n$ would give a flat profile: the bowl and the step come entirely from the asymmetry $n(k)\ne n(-k)$.

*Continuum check:* with $\omega=\vert k\vert$, $v_g=\operatorname{sgn}k$ and the boosted sudden quench, $n(k)=n_u(k/\eta_0)$ for $k>0$ and $n_u(\eta_0\vert k\vert)$ for $k<0$, Eq. $\eqref{eq:ball}$ reproduces Eq. $\eqref{eq:cont}$ exactly (to $10^{-8}$ numerically).

Code: [`theory/ballistic.py`]({{ page.repo }}/theory/ballistic.py) (`profile`, `region_means`, `limits`); `band=(lo, hi), by="vg"` restricts to a band. For pointwise comparisons, dispersion rounds each step over $\sim(\vert\omega''\vert t)^{1/3}\approx$ 4–5 sites, so both sides are smoothed over 11 sites (`smooth`).

**Discrete sampling.** On the solver's 24-node panels, `ballistic.profile` is a step function in $x$. The validation therefore re-interpolates $\omega n$ inside each panel with Legendre polynomials (accurate to $10^{-12}$ at new nodes) and resamples 16× finer.

**Whole-chain mode occupations.** A standing mode $k_n$ of the open chain is a phase-space cell of volume one (both signs of $k$, width $\pi/L$, length $L$). Counting the quanta of both fronts,

$$
n_{\rm sw}(k)=\frac{(v-v_g)\,n(k)+(v+v_g)\,n(-k)}{L}\,t=\frac{(1-v_g/v)n(k)+(1+v_g/v)n(-k)}{2}\cdot\frac{N-1}{L},
$$

with $L=\pi/(\text{mode spacing})$. That is $L=N+1$ for the Dirichlet boson ($k_n=n\pi/(N+1)$) and $L=N+\tfrac12$ for the critical open Ising chain ($k_n=(n-\frac12)\pi/(N+\frac12)$). The measured occupations are:

- Ising: $n_n=\tfrac12+\tfrac i2v_n^\dagger\Gamma v_n$ over the eigenvectors of $iA$ with $e_n>0$ (so that $\sum e_nn_n=\langle H\rangle-E_0$), with $k_n=2\arcsin(e_n/2)$;
- boson: `boson_chain.mode_occupations`.

**Apex term.** An extra population $\Delta n(k)\,\mathrm{d}k/2\pi$ (total over the chain) created at the apex moves to $x=v_g(k)t$:

$$
\varepsilon_{\rm apex}(x,t)=\frac{\omega\,\Delta n}{2\pi t\,\vert v_g'(k^*)\vert}=\frac{2\,\Delta n(k^*)}{\pi t},\qquad k^*=2\operatorname{sgn}(x)\arccos(\vert x\vert/t),
$$

since $\omega/\vert v_g'\vert=4$ identically for this dispersion. It decays as $1/t$, and in the data it is below resolution ([validation](#validation)).

## Closed-form layer (Ising) {#born}

Code: [`theory/front_born.py`]({{ page.repo }}/theory/front_born.py) (`python -m theory.front_born` prints the checks in 1.5 s). Each result carries a status label: exact, $O(\mu^2)$, asymptotic, or conjecture.

- **Born spectrum** ($O(\mu^2)$, all $v>1$):

  $$
  n_B(k)=\frac{\mu^2\sin^2\!\bigl[\tfrac{\varphi_k-\varphi_q}2\bigr]}{(\omega_k+\omega_q)^2(1-v_g(k)/v)(1-v_g(q)/v)},\qquad q=q(k),\quad\varphi_k=(k-\pi\operatorname{sgn}k)/2.
  $$

  Its continuum limit is $n_B\to\mu^2\eta_0^2/4k^2=n_u(k/\eta_0)$. The relative correction is $O(\mu)$.
- **Suppression factor** $R_B(\theta,v)=N_B(\theta;v)/N_B(\theta;\infty)$. It is independent of $\mu$ and nearly flat away from $\theta\to0$, where it tends to $1-1/v^2$. Its range is 0.259–0.308 at $v=1.2$, 0.414–0.556 at $v=1.5$, 0.561–0.750 at $v=2$ and 0.746–0.889 at $v=3$. This is why the deficit is spread evenly over $k$: measured over baseline is 0.66–0.69 in every band at $v=1.2$.
- **IR anomaly and $c_2$.** $c_2(v)=\lim_{\mu\to0}(W^u-W)/\mu^2=\Delta_{\rm sym}/\mu^2+\operatorname{artanh}(1/v)/(4\pi v)$, where the anomaly comes from the boosted cutoffs at $\vert k\vert\sim\mu\eta_0^{\pm1}$.
  - $c_2=0.0771284$, $0.0280174$, $0.0143018$, $0.0060576$, $0.0005316$ at $v=1.1$, $1.5$, $2$, $3$, $10$.
  - A real-space Kubo calculation agrees to $10^{-9}$.
  - $v^2c_2\to1/(6\pi)=-(J/2)\langle s^ys^y\rangle_c$.
- **Large-$v$ series** (asymptotic): $N(\theta)=n_u(\theta)+N_2(\theta)/v^2+O(v^{-4})$ with $N_2=J^2\sin^2\delta\cos(2\theta-\varphi_m-\varphi_c)-\frac{\mu J}2\sin\delta\sin\theta$ and $\delta=\varphi_m-\varphi_c$. Then $D=c_2/v^2+c_4/v^4+c_6/v^6$, with $c_4=0.1149$ ($\mu=0.25$) and $0.0499$ ($\mu=0.5$) numerically.
- **Conjecture:** $D\simeq\mu^2c_2(v)\,r(\mu)/\varepsilon_u$ with $r=\langle s^ys^y\rangle_m/\langle s^ys^y\rangle_c$. It holds within 0–4.2% for $\mu\le0.25$, $v\ge1.5$, and is off by $+11\%$ at $\mu=0.5$, $v=1.5$.

## Validation against exact lattice evolutions {#validation}

The validation script is [`sections/s2_superluminal/lattice_check.py`]({{ page.repo }}/sections/s2_superluminal/lattice_check.py), with its report in `results/s2_lattice_check.md`. It runs on one core in 5 minutes:

- 16 stroboscopic runs at $N=400$ ($v=1.2,1.5,2,3$; $\mu=m=0.25,0.5$);
- 16 apex runs at $N=240$;
- 16 near-field runs;
- 4 uniform runs.

All profile comparisons use the bulk-referenced profile $\hat e_i=e_i-e_c$ (referenced to the infinite-chain vacuum), with 15 end sites excluded. The acceptance criteria were fixed before the comparison:

<div class="table-scroll" markdown="1">

| criterion | measured | limit | result |
| :-- | :-- | :-- | :-- |
| A1 $W_{\rm single}$ vs single front ($N=60$); unitarity; balance | $3.0\times10^{-9}$; $3.5\times10^{-13}$; $9.5\times10^{-15}$ | $10^{-8}$, $10^{-9}$, $10^{-9}$ | PASS |
| A2 hot mean vs $e_h$, $v\ge1.5$ | Ising $\le0.02\%$; boson $\le0.03\%$ | 1% | PASS |
| A3 cold mean vs Eq. $\eqref{eq:ball}$ | Ising $\le0.34\%$; boson $\le0.48\%$ | 2% | PASS |
| A4 pointwise RMS / $e_h$ (11 sites) | Ising 0.17–1.30%; boson 0.24–0.51% | 2% | PASS |
| A5 band edges; band levels | $0.0090$ (58 bands); $\le0.5\%$ | $0.01$; 5% | PASS |
| A6 whole-chain band energies (+ edge corr.) | $\le1.2\%$ for $v\ge1.5$; 3.3% / 2.0% at $v=1.2$ | 2% | FAIL ($v=1.2$) |
| A7 bulk $W_j$ vs $W_{\rm single}$ | $7\times10^{-13}$ – $4\times10^{-11}$ | $10^{-8}$ | PASS |
| A8 apex energy; $1/t$ spreading | $-32$ to $-54\%$; ratios 0.2–1 | 5% | FAIL |
| A9 boson $D$ lattice vs solver; exponent $p$ | 0.00%; 4.12 / 4.11 | 5% | PASS |
| A10 $c_2$ small-$\mu$ limit | $-7.2\times10^{-4}$, $-1.13\times10^{-3}$ rel. | $10^{-3}$ | report |

</div>
<div class="caption" markdown="1">
Table 2: Acceptance criteria A1–A10 (22 PASS, 6 FAIL).
</div>

{% include figure.liquid loading="lazy" path="assets/img/blogs/superluminal-fronts/s2_lattice_check_profiles.png" class="img-fluid rounded" %}
<div class="caption" markdown="1">
Figure 4: End-of-quench energy profiles, $\varepsilon/\varepsilon_u$ against $(x-x_c)/t_q$ (log scale). Top: Ising chain, $\mu=0.25$. Bottom: boson chain, $m=0.25$. From left to right, $v=1.2,1.5,2,3$. Solid: exact stroboscopic evolution (11-site mean). Dashed: the ballistic prediction, Eq. $\eqref{eq:ball}$, with no fitted parameter. The Ising cold region is a deep bowl, while the boson's is nearly flat.
</div>

**Open items.**

- *A6 at $v=1.2$.* The failure is only in the band $k<0.25$. There, the open-chain edge factor taken from the uniform quench ($0.969$) over-corrects the front state (the uncorrected ratio is $1.0007$), while it helps at $v\ge1.5$.
- *A8.* Each front carries a near-field energy $E_{\rm nf}$ out of the interior: the precursor ahead and the evanescent tail behind, $0.53/0.21/0.08/0.035\,\varepsilon_u$ at $\mu=0.25$, $v=1.2/1.5/2/3$. The interior apex excess is therefore $\sum dW-2E_{\rm nf}$. With this correction the residual drops from $-32\ldots-54\%$ to $-2.7\ldots-17\%$, but not to 5%. The apex population itself is below the precision of every profile test (A3 and A4 pass without it). This item is still open.

## Smooth fronts: the quench time $\tau$ {#tau}

The production fronts are smooth: site $j$ follows $f_j(t)=F\bigl((x_j-vt)/(v\tau)\bigr)$. Two profiles are used:

- tanh, $F(z)=\tfrac12(1+\tanh z)$;
- the compact hybrid, $F=\tfrac12[1+\tanh(z/(1-z^2/16))]$ on $\vert z\vert<4$ (`gaussian.fronts.Hybrid(8)`), with the same maximal slope as tanh.

A finite $\tau$ is meant to suppress the high-momentum quanta, which on the lattice are the slow ones that make the [bowl](#ballistic). This section gives the exact theory of such fronts in the continuum and on the lattice, its validation, and what $\tau$ predicts for the profile and for the energy left behind. Status labels: **D** derived, **V** numerically verified, **C** conjectured, model or qualitative.

Code: [`theory/front_continuum.py`]({{ page.repo }}/theory/front_continuum.py) (continuum, uniform ramps) and [`theory/floquet_smooth.py`]({{ page.repo }}/theory/floquet_smooth.py) (lattice). Numbers: [`reports/s2_theory/scripts/tau_continuum.py`]({{ page.repo }}/reports/s2_theory/scripts/tau_continuum.py) and [`tau_floquet.py`]({{ page.repo }}/reports/s2_theory/scripts/tau_floquet.py) ([scripts](#tau-scripts)). Validation: [`sections/s2_superluminal/tau_check.py`]({{ page.repo }}/sections/s2_superluminal/tau_check.py) (`results/s2_tau_check.md`).

### Continuum: a boosted uniform ramp {#tau-cont}

**Front frame (D, V).** With $u=1/v$, $\gamma=(1-u^2)^{-1/2}$ and $t'=\gamma(t-ux)$, one has $x-vt=-t'\sqrt{v^2-1}$, so $z=-t'/(\gamma\tau)$. For any profile the front is the spatially uniform ramp $F(-t'/\tau')$ of duration

$$
\begin{equation}\label{eq:tau-prime}
\tau'=\gamma\tau,
\end{equation}
$$

and every front-frame momentum $k'$ evolves on its own. All results depend on $\tau$ only through $x=m\gamma\tau$ ($\mu\gamma\tau$ for the fermion).

**tanh: closed forms (D, V).** For the ramp $\tfrac12[1-\tanh(t'/\tau')]$,

$$
\begin{align}
\text{boson:}\quad & n'=\frac{\sinh^2[\pi\tau'(\omega_{\rm in}-\omega_{\rm out})/2]}{\sinh(\pi\tau'\omega_{\rm in})\,\sinh(\pi\tau'\omega_{\rm out})},
\label{eq:tau-bd}\\
\text{Dirac:}\quad &
n'=\frac{\sinh[\pi\tau'(\Delta M-\Delta\omega)/2]\,\sinh[\pi\tau'(\Delta M+\Delta\omega)/2]}{\sinh(\pi\tau'\omega_1)\,\sinh(\pi\tau'\omega_2)},\label{eq:tau-dk}
\end{align}
$$

for the oscillator $\omega^2=\omega_{\rm out}^2+(\omega_{\rm in}^2-\omega_{\rm out}^2)F$ and the Bogoliubov–de Gennes block $H_{k'}=\left(\begin{smallmatrix}M&\Delta\\ \Delta&-M\end{smallmatrix}\right)$, with $M=M_2+(M_1-M_2)F$, $\Delta M=\vert M_1-M_2\vert$, $\Delta\omega=\vert\omega_1-\omega_2\vert$ and $\omega_i=(M_i^2+\Delta^2)^{1/2}$. These are Birrell–Davies Eq. 3.89 and its Dirac analogue.

- The continuum boson has $\omega_{\rm in}=(k'^2+m^2)^{1/2}$ and $\omega_{\rm out}=\vert k'\vert$.
- The continuum fermion has $M_1=\mu$, $M_2=0$ and $\Delta=k'$.
- Both reduce to the sudden occupations as $\tau'\to0$, since $(\Delta M^2-\Delta\omega^2)/4\omega_1\omega_2=\frac12[1-\cos\delta\theta]$, and both agree with direct integration to $10^{-10}$.
- Other profiles are handled by per-mode fourth-order Magnus integration.

**Lab frame and the profile (D, V).** Phase-space density is a scalar, so $n(k)=n'(k/\eta_0)$ for the co-moving $k>0$ and $n'(\eta_0\vert k\vert)$ for the counter-moving $k<0$. With $\varepsilon'=\int\frac{\mathrm{d}k'}{2\pi}\vert k'\vert\,n'$ the front-frame energy density, the two-front profile is Eq. $\eqref{eq:cont}$ with $\varepsilon_u\to\varepsilon'$:

$$
\begin{equation}\label{eq:tau-levels}
e_{\rm cold}=\frac{\varepsilon'}{\eta_0^2},\qquad e_h=\frac{\eta_0^2+\eta_0^{-2}}2\,\varepsilon'=\gamma^2(1+u^2)\,\varepsilon',\qquad J_E=2\gamma^2u\,\varepsilon',\qquad
\varepsilon_s=e_h-\frac{J_E}v=\varepsilon',
\end{equation}
$$

for every $\tau$ and profile. $\tau$ rescales both plateaus by $\varepsilon'(m\gamma\tau)/\varepsilon_u$ and keeps their ratio $(\eta_0^4+1)/2$. The energy left per unit length of front advance is the front-frame density, so a centre-out quench over a length $L$ leaves

$$
\begin{equation}\label{eq:tau-total}
\Delta E=\varepsilon'(m\gamma\tau)\,L+\delta_{\rm apex}+\text{end terms}.
\end{equation}
$$

Behind the fronts, the 1D massless field is $T_{++}(x+t)+T_{--}(x-t)$. The plateaus therefore carry no $1/t$ correction, and the apex leaves strips of width $O(v\tau)$ riding the light cone (on the lattice, dispersion spreads them as $1/t$). $\delta_{\rm apex}$ has not been computed in the continuum.

**Sudden side (D, V).** With $z$ distributed as $F'$ (variance ${\rm Var}$),

$$
\begin{aligned}
\text{boson:}\quad&\varepsilon'=\frac{m^2}{8\pi}-\frac{m^4\tau'^2}{4\pi}\Bigl[{\rm Var}\,\ln\frac1{m\tau'}-K_2\Bigr]
\ \overset{\rm tanh}{=}\ \frac{m^2}{8\pi}-\frac{\pi m^4\tau'^2}{48}\Bigl[\ln\frac1{\pi m\tau'}-12\zeta'(-1)-\gamma_E\Bigr],\\
\text{fermion:}\quad&\varepsilon'=\frac{\mu^2}{4\pi}\Bigl[\ln\frac1{\mu\tau'}+C_F\Bigr],\qquad C_F=-\tfrac12-\gamma_E-\langle\ln\vert z_1-z_2\vert\rangle\ \overset{\rm tanh}{=}\
\tfrac12-\ln\pi.
\end{aligned}
$$

The continuum Majorana $\varepsilon_u$ is UV-log-divergent (on the lattice, $\varepsilon_u^{\rm Ising}=\frac{\mu^2}{4\pi}[\ln\frac8\mu-\frac32]+o(\mu^2)$), and any $\tau>0$ cuts it off at $k'\sim1/\tau'$. The profile constants are:

- hybrid: ${\rm Var}=0.62860$, $-K_2/{\rm Var}=0.44955$, $C_F=-0.56192$;
- tanh: ${\rm Var}=\pi^2/12$, $-K_2/{\rm Var}=0.26311$, $C_F=-0.64473$.

An independent quadrature agrees to $3\times10^{-10}$.

**Slow side, tanh: a thermal source (D, V).** Exactly, $n'/n_{\rm Bose}=(1-e^{-\pi\tau'(\omega-k')})^2/(1-e^{-2\pi\tau'\omega})$. For $m\tau'\gg1$ the boson spectrum is therefore thermal, at

$$
\begin{equation}\label{eq:tau-T}
T'=\frac{\kappa}{2\pi},\qquad \kappa=-\lim_{t'\to\infty}\frac{\mathrm{d}\ln m_{\rm eff}}{\mathrm{d}t'}=\frac1{\tau'}\ \text{(boson, }m^2F),\quad\frac2{\tau'}\ \text{(fermion, }\mu F).
\end{equation}
$$

The temperature is set by the exponential approach of the mass to zero: the $k'=0$ mode is $H_0^{(1)}(m_{\rm eff}/\kappa)$ and $\lim k'n'=\kappa/2\pi$. The fermion spectrum is Fermi only for $k'^2\ll\mu/\tau'$. The energies are:

- boson: $24\pi\tau'^2\varepsilon'=1-6e^{-\pi m\tau'}[1+O(1/m\tau')]$, thermal to $5\times10^{-4}$ at $m\tau'=3$;
- fermion, with $x=\mu\tau'$: $12\pi\tau'^2\varepsilon'=1-\frac{3\pi}{8x}+\frac{3\pi^2}{16x^2}-\frac{\pi(17\pi^2-24)}{128x^3}+O(x^{-4})$, still 12% below the thermal value at $x=10$.

In the lab, the two chiralities carry $T_{R,L}=(1\pm u)\kappa_\tau/2\pi$, with $\kappa_\tau=1/\tau$ (boson) or $2/\tau$ (fermion). The hot region is a thermal state moving at $u=c^2/v$, and

$$
\begin{equation}\label{eq:tau-slow}
\varepsilon_s\to\frac{c\,\kappa_\tau^2}{24\pi}(1-u^2),\qquad e_h\to\frac{c\,\kappa_\tau^2}{24\pi}(1+u^2),\qquad e_{\rm cold}\to\frac{c\,\kappa_\tau^2}{24\pi}(1-u)^2,
\end{equation}
$$

that is, $\varepsilon_s\to(1-1/v^2)/(24\pi\tau^2)$ for the boson and $(1-1/v^2)/(12\pi\tau^2)$ for the Majorana, independent of the mass.

- As $v\to1^+$, $\gamma\to\infty$ puts every $\tau>0$ in this regime. Then $\varepsilon_s\propto v-1$, $e_{\rm cold}\propto(v-1)^2$, and the hot level saturates at $1/(12\pi\tau^2)$ (boson) instead of growing like $\eta_0^2$.
- A finite $\tau$ thus regularises Eq. $\eqref{eq:cont}$ at $v\to1$, and joins continuously onto the subluminal side, where nothing is emitted.

**The cold region (D).** It holds the counter-moving quanta of the two fronts, which are independent. Its reduced state is Gaussian with $\langle aa\rangle=0$: a product of single-mode Gibbs states, that is, a generalised Gibbs ensemble. It has a single temperature $T_L$ only in the slow tanh regime, and only for $\vert k\vert\ll m/\eta_0$ (boson) or $k^2\ll\mu/\eta_0^2\tau'$ (fermion).

A counter-mover at $x\in(-t,t)$ has its pair partner at $y=[2vt+(v-1)x]/(v+1)$. The cold region is therefore entangled with the inner hot strip $t<\vert y\vert<t(3v-1)/(v+1)$, of width $2t/\eta_0^2$, with $\vert\langle a_{-q}a_{\eta_0^2q}\rangle\vert^2=n(n+1)$ (boson) or $n(1-n)$ (fermion).

**Hybrid: no universal slow limit (V; C for the law).** The hybrid reaches $F=0$ at a finite time, with an essential singularity ($F\simeq e^2e^{-16/\delta}$, $\delta=z+4$) where the local rate $\kappa$ diverges.

- Its low-$k'$ spectrum is still thermal, at a $T_{\rm low}$ that grows with $m\tau'$ (Table 3).
- $\varepsilon'=0.95\,\pi T_{\rm low}^2/6$ for the boson and 0.77–0.79 $\pi cT_{\rm low}^2/6$ for the fermion. $\varepsilon'\tau'^2$ keeps growing, by ×2.0/3.5/2.9 per decade over $m\tau'=3$–1000.
- A freeze-out argument ($m_{\rm eff}\sim\kappa$) gives $T_{\rm low}\propto\ln^2(m\tau')/\tau'$, which explains the growth but not the numbers.

The slow-ramp temperature is set by how $F\to0$ behind the front, not by the front's maximal slope.

The large-$k'$ tails (Born, with exact exponents) are $n'\sim e^{-2\pi\tau'k'}$ for tanh and $\exp(-16\sqrt{\tau'k'})$ for the hybrid (saddles at the singularities $z=\pm4$). In the lab, the tanh co-moving tail is $e^{-2\pi\tau k/(1+u)}$ and the counter-moving one $e^{-2\pi\tau\vert k\vert/(1-u)}$. At first order, the apex quanta of a centre-out quench decay only as $e^{-\pi\tau\vert k\vert}$. In a finite chain the apex therefore dominates the high-$\vert k\vert$ counter-moving population, the slow lattice modes of the cold region.

<div class="table-scroll" markdown="1">

| $x$ | boson $\varepsilon'/\varepsilon_u$ tanh | boson hybrid | fermion $\varepsilon'/\mu^2$ tanh | fermion hybrid | $m\tau'$ | $T_{\rm low}\tau'$ boson | $T_{\rm low}\tau'$ fermion | $\varepsilon'\tau'^2$ boson | $\varepsilon'\tau'^2$ fermion |
| --: | --: | --: | --: | --: | --: | --: | --: | --: | --: |
| 0.1 | 0.9578 | 0.9654 | 0.13504 | 0.14106 | 3 | 0.2247 | 0.3512 | 0.0252 | 0.0250 |
| 0.316 | 0.7661 | 0.7984 | 0.05754 | 0.06154 | 10 | 0.3218 | 0.4546 | 0.0515 | 0.0417 |
| 1 | 0.2791 | 0.3181 | 0.01332 | 0.01437 | 30 | 0.4385 | 0.5585 | 0.0956 | 0.0632 |
| 3.16 | 0.0333 | 0.0653 | 0.001978 | 0.002557 | 100 | 0.6009 | 0.6889 | 0.1798 | 0.0968 |
| 10 | 0.00333 | 0.01293 | 0.000238 | 0.000417 | 1000 | 1.0214 | 0.9972 | 0.5215 | 0.2059 |

</div>
<div class="caption" markdown="1">
Table 3: Left five columns: continuum front-frame energy against $x=m\gamma\tau$ (boson over $\varepsilon_u=m^2/8\pi$). Right five columns: the hybrid slow regime. For comparison, tanh gives $T\tau'=1/2\pi=0.159$ (boson) and $1/\pi=0.318$ (fermion), and $\varepsilon'\tau'^2=0.0133$, $0.0265$. Generated by `tau_continuum.py --part tables|hybrid`.
</div>

<!-- FIGURE IDEA: eps'(x)/eps_u against x = m gamma tau for tanh and hybrid, with the sudden and thermal asymptotes. -->

**2+1D planar fronts (D, V).** The front frame sees an isotropic uniform ramp. For tanh, $\varepsilon'^{2D}=m^3/24\pi-m^4\tau'/32+O(\tau'^2)$ on the sudden side and $\to\zeta(3)/(8\pi^4\tau'^3)$ on the slow side, with $e_h=\gamma^2(1+u^2/2)\varepsilon'$ and $\varepsilon_s=\varepsilon'$ ([2+1D continuum](#dims-continuum)). In the slow regime the hot level vanishes as $1/\gamma$ when $v\to1$ (as $\gamma^{1-d}$ in $d$ dimensions; 1D is the marginal case).

### Lattice: exact Floquet–Bloch theory at any $\tau$ {#tau-lattice}

**The co-moving symmetry survives (D).** For any profile, $g_j(t)=G(t-j/v)$ with $G(s)=J+\tfrac\mu2F(-s/\tau)$. So $(j,t)\to(j+1,t+1/v)$ is still a symmetry, $\theta$ is conserved, and Eq. $\eqref{eq:delay-ising}$ holds with $\Theta(-s)\to F(-s/\tau)$ (likewise for the boson). Channels, flux, (pseudo-)unitarity, $n(k)=\vert S_{+-}(\theta(k))\vert^2$, the partner map and the levels $\eqref{eq:levels}$ are all unchanged. Nothing requires the front to fit between two sites: a wide front only widens the window.

**Solver (D, V).** In the [period split](#solver) the coefficients now depend on $\sigma$: $\mathrm{d}u/\mathrm{d}\sigma=M(\sigma)u$, with diagonal blocks set by $G(mh+\sigma)$.

- The one-period map is the time-ordered $U=\mathcal T\exp\int_0^hM(\sigma)\,\mathrm{d}\sigma$ (DOP853, rtol $10^{-13}$). The gauge $U(\theta)=DU(0)D^{-1}$ holds at every $\sigma$, so one real propagator serves all $\theta$.
- The boundary-value problem is unchanged, with a window covering the front: $4v\tau$ periods per side for the hybrid (exact) and $16v\tau$ for tanh ($1-F=1.3\times10^{-14}$), plus the evanescent margin `default_K`. It is banded (couplings beyond 16 periods are $<h^{16}/16!$).
- The steady work comes from the solution inside the periods:

  $$
  W_{\rm single}=\frac\mu2\int\mathrm{d}s\,\Bigl(-\frac{\mathrm{d}F_j}{\mathrm{d}t}\Bigr)\langle s^z(s)\rangle\quad\text{(Ising)},\qquad
  W_{\rm single}=-\frac{m^2}2\int\mathrm{d}s\,\Bigl(-\frac{\mathrm{d}F_j}{\mathrm{d}t}\Bigr)\langle\phi^2(s)\rangle\quad\text{(boson)},
  $$

  with $-\mathrm{d}F_j/\mathrm{d}t=F'(-s/\tau)/\tau$ of unit area. The sharp limit is the [sharp-front theory](#floquet).

Accuracy over 408 spectra (both chains, $\mu,m=0.25,0.5,2$, $v=1.2$–3, $\tau=0$–3, both profiles):

- the unitarity defect is $\le1.7\times10^{-12}$;
- the spectrum and work routes to $\varepsilon_s$ agree to $\le1.6\times10^{-12}\varepsilon_u$;
- rtol, quadrature nodes, panels, $1.5K$ and the tanh cut ($16\to18$) move $D$ by $\le6\times10^{-13}$;
- $\tau\to0$ reproduces `floquet_front`, with differences $\propto\tau^2$ ($10^{-9}$ – $2\times10^{-7}$ at $\tau=10^{-4}$);
- a direct Yoshida-4 evolution of one front entering a chain (no Bloch ansatz, $v\tau=0.075$–6) gives $W_{\rm single}$ to $3\times10^{-13}$ – $7\times10^{-10}$.

One spectrum takes 1–10 s (windows up to $\pm76$ periods at $v\tau=4$, tanh).

**Uniform ramp, $v=\infty$ (D, V).** Per lattice mode the closed forms hold exactly:

- boson: Eq. $\eqref{eq:tau-bd}$ with $\omega_{\rm out}=2\vert\sin\frac k2\vert$ and $\omega_{\rm in}=(m^2+\omega_{\rm out}^2)^{1/2}$;
- Ising: Eq. $\eqref{eq:tau-dk}$ with $M=(1-\cos k)+\mu F$ and $\Delta=\sin k$.

The smooth solver approaches them as $O(v^{-2})$ ($v^2(\varepsilon_s/\varepsilon_{\rm ramp}-1)$ is constant to three digits at $v=10$, 30, 100), and the $N=400$ lattice ramps reproduce them to $5\times10^{-7}$.

For slow ramps, $24\pi T^2\varepsilon=1+O(T^{-2})$ for the boson, but $12\pi T^2\varepsilon=1-\frac{3\pi}8\bigl(1+\frac1\mu\bigr)\frac1T+O(T^{-2})$ for the Ising chain. The extra '1' is the lattice Wilson mass $1-\cos k\simeq k^2/2$ of the Ising Bogoliubov–de Gennes Hamiltonian ($\omega_1-\mu=(1+1/\mu)k^2/2$, equivalently the velocity $\sqrt{1+\mu}$ of the massive side). It enters the exponent of the occupation, a relative $O(1/\tau)$ correction, whereas the boson's dispersion corrections are $O(1/\tau^2)$.

**Born layer with the switch form factor (D, V).** At $O(\text{mass}^2)$, the sum over sites gives $k+q=E/v$ mod $2\pi$ times the form factor of one site's switch at the lab pair energy $E=\omega_k+\omega_q$:

$$
\begin{equation}\label{eq:tau-born}
n_B(k;\tau)=n_B(k;0)\,\vert\varphi(E\tau)\vert^2,\qquad\varphi(\kappa)=\int\mathrm{d}z\,F'(z)\,e^{-i\kappa z}\quad\Bigl(\text{tanh: }\frac{\pi\kappa/2}{\sinh(\pi\kappa/2)}\Bigr),
\end{equation}
$$

with the sharp spectra of the [closed-form layer](#born) (Ising) and $n_B(k;0)=m^4/[4\omega_k\omega_qE^2(1-v_g(k)/v)(1-v_g(q)/v)]$ (boson; $v\to\infty$ gives $m^4/16\omega^4$).

- The cut acts on the switch time, not on the width $v\tau$. Pairs with $E\tau\gtrsim1$ are suppressed however narrow the front, and since $E\le4$, the slow quanta ($k\to\pi$) go first.
- As $E\tau=E'\gamma\tau$, with $E'$ the front-frame pair energy, the form factor is exactly the front-frame ramp. The lattice breaks the boost through the sharp-front structure and the non-perturbative regime, not through the switching per site.
- Eq. $\eqref{eq:tau-born}$ is exact at $O(\text{mass}^2)$ ($n/n_B-1$ is linear in $\mu$ and quadratic in $m$), but it is useful only for $m\gamma\tau\lesssim0.3$. The smooth front's emission is non-perturbative in $m\tau'$, and beyond that the Born energies are off by factors of 2 to $2\times10^4$.

### What $\tau$ does: profile and energy left behind {#tau-results}

<div class="table-scroll" markdown="1">

| $v$ | $\frac{\eta_0^4+1}2$ | $\tau$ | $v\tau$ | Ising $\varepsilon_s/\varepsilon_u$ | Ising $e_h/e_{\rm cold}$ | Ising bowl | Ising $R$ | boson $\varepsilon_s/\varepsilon_u$ | boson $e_h/e_{\rm cold}$ | boson bowl | boson $R$ |
| --: | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: |
| 1.5 | 13 | 0 | 0 | 0.598 | 6.43 | 2.68 | 0.598 | 0.986 | 9.39 | 1.27 | 0.986 |
| | | 0.1 | 0.15 | 0.580 | 6.57 | 2.70 | 0.613 | 0.973 | 9.51 | 1.27 | 0.992 |
| | | 0.3 | 0.45 | 0.472 | 7.54 | 2.82 | 0.688 | 0.882 | 10.30 | 1.23 | 1.012 |
| | | 1 | 1.5 | 0.179 | 11.08 | 1.57 | 0.787 | 0.461 | 12.18 | 0.50 | 1.021 |
| | | 3 | 4.5 | 0.0404 | 12.60 | 0.02 | 0.871 | 0.0805 | 12.86 | 0.003 | 1.008 |
| 3 | 2.5 | 0 | 0 | 0.905 | 2.16 | 0.61 | 0.905 | 1.000 | 2.34 | 0.16 | 1.000 |
| | | 0.1 | 0.3 | 0.878 | 2.17 | 0.60 | 0.909 | 0.988 | 2.35 | 0.15 | 1.000 |
| | | 0.3 | 0.9 | 0.717 | 2.25 | 0.55 | 0.931 | 0.915 | 2.40 | 0.14 | 1.003 |
| | | 1 | 3 | 0.287 | 2.43 | 0.15 | 0.954 | 0.561 | 2.48 | 0.03 | 1.003 |
| | | 3 | 9 | 0.0651 | 2.49 | 0.000 | 0.971 | 0.125 | 2.50 | 0.000 | 1.001 |

</div>
<div class="caption" markdown="1">
Table 4: Exact single-front levels of tanh fronts, Ising $\mu=0.5$ and boson $m=0.5$ (`tau_floquet.py --part table`). Bowl: $[\varepsilon_{\rm ball}(0.9t)-\varepsilon_{\rm ball}(0)]/\varepsilon_{\rm ball}(0)$ from Eq. $\eqref{eq:ball}$. $R=\varepsilon_s/\varepsilon_{\rm ramp}^{\rm lat}(\gamma\tau)$ is the energy left over that of the lattice uniform ramp of duration $\gamma\tau$ ($R=1$ in the continuum, $1-D$ at $\tau=0$). Hybrid fronts leave 2–9% more energy at equal $\tau$.
</div>

<!-- FIGURE IDEA: eps_s/eps_u and the bowl depth against tau (or v*tau), Ising vs boson, at v = 1.5 and 3. -->

- **The switch time, not the width, sets the scale.** $D$ moves by $\le0.013$ at $\tau=0.05$, but a front narrower than a site is not sharp: at $v=3$, $\tau=0.3$ ($v\tau=0.9$), the Ising $\varepsilon_s/\varepsilon_u$ already falls from 0.905 to 0.717.
- **The bowl disappears at $v\tau^*\approx$ 4–5.5 sites for the Ising chain and 1.7–4.2 for the boson** (bowl $<5\%$). The share of the cold centre carried by $v_g<0.97$ quanta falls below 5% already at $\tau\approx$ 0.8–1.6.
  - This happens once the co-moving temperature $T_R=(1+u)\kappa_\tau/2\pi$ is small on the lattice scale. The Ising chain, with twice the boson's $\kappa$, needs about twice the $\tau$.
  - Beyond that, the profile is Eq. $\eqref{eq:tau-levels}$ with the lattice $\varepsilon_s$. At $\tau=3$, $e_h/e_{\rm cold}$ is within 0.4–3% of $(\eta_0^4+1)/2$ for $v\ge1.5$, and within 4–8% at $v=1.2$, where $\tau=3$ is not yet enough.
  - The [precursor](#precursor) is absorbed into the ramp, so the relevant reference is no longer the sudden quench.
- **Energy left, boson: the continuum predicts it.** $\varepsilon_s/\varepsilon'_{\rm cont}(m\gamma\tau)=$ 1.00–1.02 for $m\le0.5$, $v\ge1.5$ and all $\tau$. At $\tau=3$ the boson's infrared spectrum is the boosted Bose function to 0.1–1%. Earlier production rows with hybrid fronts at $\tau=1$ (from before the switch to tanh, see [profile choice](#tau-protocol)) follow Eq. $\eqref{eq:tau-levels}$ to 0.1–2.5% at $v\ge2$ (6% at $v=1.5$), where the $\tau=0$ prediction was 16–20% off.
- **Energy left, Ising: the boosted Wilson mass.** $R$ rises from $1-D_{\rm sharp}$ but stays at $0.79/0.87/0.93/0.97$ at $\tau=3$ ($v=1.2/1.5/2/3$), nearly independent of $\mu$ between 0.25 and 2.
  - The Wilson mass is a function of the lab momentum. A co-moving quantum $k=\eta_0k'$ feels $\eta_0^2k'^2/2$, and a counter-moving one $k'^2/2\eta_0^2$.
  - Per chirality, the Dirac form $\eqref{eq:tau-dk}$ with $M_1=\mu+ck'^2/2$, $M_2=ck'^2/2$, $c=\eta_0^{\pm2}$ gives a model $R_W$ (`front_continuum.wilson_ratio`, **C**). It gives $(1-R_W)/(1-R)=$ 0.84–1.40 (median 1.09) at $\tau=$ 2–3 and 0.4–1.6 at $\tau=1$, and it fails below.
  - Its slow limit, $1-R\to\frac{3\pi}4u^2\gamma/\tau$, is independent of $\mu$ and $\propto u^2$ (confirmed by the exact solver at $v=5$ and 10), but it is reached only near $\tau\sim100$.

  For the Ising chain the continuum is therefore not the limit of the production grid; the exact solver is. The counter-movers share their blue partners' occupations, so the Ising cold centre is also colder than the Fermi value at $T_L$ ([validation](#tau-validation)).
- **Strong mass.** At $m=2$ the boson overshoots ($R=1.78$ at $v=1.2$, $\tau=0.5$). Half of $\varepsilon_s$ sits at $\vert k\vert>1$, in nearly dispersionless lattice quanta that see the local ramp of duration $\tau$, not $\gamma\tau$, so $\varepsilon_{\rm ramp}(\gamma\tau)<\varepsilon_s<\varepsilon_{\rm ramp}(\tau)$. By $\tau=3$, 89% of $\varepsilon_s$ is at $\vert k\vert<0.5$ and $R=1.03$.

**What $\tau$ predicts for the energy after the quench.** The energy left per site is $\varepsilon_s(v,\tau)$, given exactly by the smooth solver. It is split as in Eq. $\eqref{eq:tau-levels}$: the cold centre holds $\varepsilon_s/\eta_0^2$ and the hot region $\tfrac12(\eta_0^2+\eta_0^{-2})\varepsilon_s$, with the lattice bowl gone once $v\tau\gtrsim4$.

- $\varepsilon_s$ falls steeply with $\tau$: $0.60\to0.47\to0.18\to0.04\,\varepsilon_u$ at $\tau=0,0.3,1,3$ (Ising, $\mu=0.5$, $v=1.5$).
- For tanh fronts in the slow regime it becomes mass-independent and thermal, Eq. $\eqref{eq:tau-slow}$. The bosonic cold centre is a Gibbs state at $T_L=(1-1/v)/(2\pi\tau)$, and it vanishes as $(v-1)^2$.
- On the boson chain, the continuum boosted ramp gives $\varepsilon_s$ to 2%. On the Ising chain, the boosted Wilson mass keeps it 3–21% below the continuum value up to $\tau=3$.

### Validation against exact lattice evolutions {#tau-validation}

The validation script is [`sections/s2_superluminal/tau_check.py`]({{ page.repo }}/sections/s2_superluminal/tau_check.py) (`results/s2_tau_check.md`): 317 jobs, about 4 CPU-hours. The runs are:

- centre-out runs at $N=400$: Ising $\mu=0.25$, 0.5 and boson $m=0.25$ at $v=1.5$, 3 with tanh and hybrid fronts at $\tau=0.1$, 0.3, 1, 3, plus Ising at $v=1.2$, 2 with $\tau=1$;
- the same three groups near $c$, at $v=1.01$, 1.1, 1.2 with tanh $\tau=0.1$, 0.3, 1, 3 (group `nearc`);
- 8 strong-mass runs ($\mu=m=2$, tanh, $v=1.5$, 3, $\tau=2$, 3);
- 28 uniform ramps, 24 single fronts ($N=200$), and the [start-time study](#tau-protocol).

Setup:

- Tanh runs start at $-10\tau$ in the fully massive ground state.
- Time stepping is Yoshida-4 with $\mathrm{d}t=0.05$ (0.03 at mass 2). Halving $\mathrm{d}t$ moves the region means by $\le7\times10^{-6}$.
- Every run records snapshots every $\Delta t=2$ and at exactly $t_q$, $t_q+2\tau$ and $t_{\rm end}$: site energies and their excess over the ground state of $H(t)$, $E(t)$, the half-chain and central-block entanglement entropies, and the centre correlations.

Estimators:

- The profile criteria use the snapshot at $t_q=(N-1)/2v$, when the fronts reach the end sites and before quanta reflected at the open ends come back in.
- Profiles are bulk-referenced ($\hat e=e_t-e_c$). Masks and Eq. $\eqref{eq:ball}$ are taken at $t_q$.
- $N_{\rm end}+\lceil2v\tau\rceil$ end sites are excluded: $N_{\rm end}=15$, plus the front's own tail.
- T3–T5 gate the tanh runs. The hybrid runs are contrast rows, with the same estimators but not gated.

The tolerances of T1–T7 were fixed before the data were seen. T8, the near-luminal regime, has tolerances set after exploratory runs.

<div class="table-scroll" markdown="1">

| criterion | measured | limit | result |
| :-- | :-- | :-- | :-- |
| T1 all 103 spectra: unitarity; spectrum vs work | $3.0\times10^{-11}$; $5.5\times10^{-12}\varepsilon_u$ | $10^{-9}$ | PASS |
| T2 single fronts, $\vert W_{\rm lab}/W_{\rm single}-1\vert$, $v\tau=0.075$–3 | Ising $7.8\times10^{-10}$, boson $4.7\times10^{-10}$ | $10^{-7}$ | PASS |
| T3 hot mean vs $e_h$, $v\ge1.5$ (tanh) | Ising $-0.22\%$, $-0.35\%$; boson $+0.11\%$ | 1% | PASS |
| T4 cold mean vs Eq. $\eqref{eq:ball}$ (tanh) | $-0.46\%$, $-0.19\%$; $-0.23\%$ | 2% | PASS |
| T5 pointwise RMS / $e_h$, 11 sites (tanh) | 2.8%, 3.9%; 2.6% (at $\tau=3$, $v=1.5$; $\le1.3\%$ for $\tau\le1$) | 2% | accepted (see text) |
| T6 uniform ramps vs the exact lattice ramp | $5.4\times10^{-7}$ | $10^{-5}$ | PASS |
| T7 strong mass: cold; hot vs theory | Ising $\le0.61\%$; $\le1.1\%$, boson $\le0.92\%$; 4.4% ($v=3$, $\tau=3$) | 2% | accepted (see text) |
| T8 near $c$ ($v=1.01$–1.2, at $t_m$): hot mean vs $e_h$ | $+1.22\%$, $+0.92\%$; $-0.29\%$ | 1% | 1 FAIL |
| T8 cold mean − Eq. $\eqref{eq:ball}$, over $e_h$ | $+0.13\%$, $+0.20\%$; $-0.11\%$ | 2% | PASS |
| T8 RMS / $e_h$ off the step, 11 sites inside $W$ | 0.43%, 0.60%; 0.27% | 2% | PASS |

</div>
<div class="caption" markdown="1">
Table 5: Validation of the smooth-front theory at $t_q$ (T3–T7) and $t_m$ (T8). Measured values are listed for Ising $\mu=0.25$, Ising $\mu=0.5$ and boson $m=0.25$, in that order. Overall: 23 PASS (4 of them accepted after inspection) and 1 FAIL. The hybrid contrast rows give T3 $\le0.03\%$ and T5 3.0%, 4.2%, 2.7%, all at $\tau=3$, $v=1.5$.
</div>

**T5 and T7: the cold/hot step and the front's tail.** T5 exceeds 2% at tanh $\tau=3$, $v=1.5$ in all three groups (2.8%, 3.9%, 2.6%; the hybrid's 3.0–4.2% likewise). The residual sits at the cold/hot step.

- Away from the step ($\vert\vert x\vert-t\vert>12$), the RMS is $\le0.2\%$ in every run on the reference $\hat e'$ defined below.
- The step lies inward of Eq. $\eqref{eq:ball}$, by 0.6–1.9 sites for tanh $\tau=3$ (0.6–2.1 for the hybrid; $\le0.6$ at $\tau\le1$). The snapshots show this offset constant in time to $\pm0.01$ sites from $t=30$ to $t_q$.
- A separate check (Ising $\mu=0.5$, $v=1.5$; boson $v=1.5$, 3) finds the offset independent of $\mathrm{d}t$, $N$ and the $k$ grid of the theory.

The offset is therefore a physical $O(v\tau)$ emission offset, not a numerical artefact. The near-luminal quanta of a wide front leave from behind its centre, while Eq. $\eqref{eq:ball}$ starts them at the centre. This is the analogue of the subluminal apex shift (**C**).

T7 exceeds 2% for the boson at $v=3$, $\tau=3$ (hot $+4.4\%$). At $t_q$ the bulk-referenced $\hat e=e_t-e_c$ still contains the vacuum energy of the front's residual tail ($F\sim10^{-4}$–$10^{-3}$ at $\vert z\vert\approx$ 2–4, just inside the end zone), which grows with the mass. The excess over the ground state of $H(t_q)$, $\hat e'=\Delta e_t+e_{\rm crit}-e_c$, does not contain it. On $\hat e'$ the strong runs give hot $\le0.09\%$ and cold $\le0.96\%$, and the Ising $\mu=2$ hot $-1.1\%$ becomes $+0.01\%$. The levels are not in question.

I accepted both criteria as they are: the step offset is physics, and T7's excess is an edge effect of the front's tail at the chain ends that does not concern the bulk. An earlier estimator at $t_{\rm end}=t_q+10\tau$ (report only) is contaminated by quanta reflected at the open ends.

**Near $c$ (T8).** As $v\to1^+$ the exact theory has no divergence:

- $e_h$ stays finite (it changes by at most a factor 3 from $v=1.2$ to 1.01);
- $\varepsilon_s$ falls, roughly as $\sqrt{v-1}$ at $\tau=3$;
- the emitted energy is carried by quanta with $v_g\approx1$, in a hot shell of width $(v-1)t$ behind the front.

At $t_q$ this shell lies mostly in the end zone. T8 therefore uses $t_m$, the last snapshot with the front's tail ($\vert z\vert\le4$) clear of the end zone, on the window $W=\{\vert x\vert\le vt_m-\max(2,\lceil4v\tau\rceil)\}$. The 11-site smoothing is restricted to $W$; otherwise it leaks the massive region ahead of the front into the window.

- The lattice follows Eq. $\eqref{eq:ball}$ down to $v=1.01$. Off the cold/hot step the RMS is $\le0.6\%$ of $e_h$, and the cold level is within 0.2% of $e_h$.
- The full RMS reaches 4–9% at $\tau=3$, $v=$ 1.1–1.2, all of it at the step, which lags further as $v\to1$ (1.7–2.6 sites at $v=1.2$, $\tau=3$).
- The hot level matches $e_h$ within 0.3%, except for Ising $\mu=0.25$ at $v=1.1$, $\tau=0.1$ and 0.3 ($+1.02\%$, $+1.22\%$; FAIL). The hot window there (26 sites) sits next to the front, and the vacuum energy of its partly massive tail enters $\hat e$. On $\hat e'$ both are $+0.47\%$.

At $v=1.01$ the shell is narrower than the front, and its peak saturates near $e_h$ rather than growing: there is no sonic boom.

**Additional reported quantities.**

- *Cold-region temperature.* The bosonic cold region is the Gibbs state at $T_L$: $T_E/T_L=$ 1.003–1.017, against a prediction of 1.001–1.017 ($T_E$ is the temperature of equal energy). The Ising cold region is colder, $T_E/T_L=$ 0.74–0.80, and the exact theory reproduces this to $\le0.003$, momentum by momentum. At $v=1.5$, $\tau=2$, $n/n_F(T_L)=0.646/0.535/0.272$ at $\omega=T_L/2T_L/4T_L$, against $0.646/0.536/0.272$ predicted. Each counter-mover shares the occupation of its blue partner, which feels the boosted Wilson mass.
- *Bowl and $R$.* The bowl depth and the slow share follow Eq. $\eqref{eq:ball}$ to $\le0.015$ and $\le0.013$. The lattice $R$ is 0.61–0.98 (Ising) and 0.994–1.004 (boson), as the solver gives.
- *Total energy.* $\Delta E/N$ lies 0.6–5% below $\varepsilon_s$. The open-chain edge energy ($-7.7\,\varepsilon_u$ for Ising $\mu=0.25$, $-18.5\,\varepsilon_u$ for the boson) is partly offset by the apex and end work ($+2$ to $+12$ sites' worth).
- *Earlier runs.* The four earlier hybrid $\tau=1$ production rows are reproduced to $1.1\times10^{-4}$.
- *Independent harnesses.* Two of them agree with the results above: a first lattice campaign of 218 runs at $\mathrm{d}t=0.025$ (same estimators), and an independent single front entering an open chain, which by the method of images is the two-front profile (hot plateau to $2\times10^{-4}$ Ising, $3.5\times10^{-4}$ boson; bowl mean to 1%).

### Choice of profile and start time {#tau-protocol}

The superluminal production runs use tanh fronts, for two reasons: the continuum is exactly solvable for tanh, and slow tanh fronts are thermal with a mass-independent energy. The hybrid's slow limit instead depends on how $F$ reaches zero ([continuum](#tau-cont)). The exact lattice solver treats both, and the hybrid stays here as the contrast.

A tanh front never fully switches on, so a run starts at $t_0=-Z\tau$, here in the ground state of $H(t_0)$. The tail then switches on adiabatically, and the error does not grow with $\tau$ (Table 6).

- The error is about 1% of $1-F(t_0)$, so $1-F<10^{-6}$ ($Z=7$) is not needed. At $Z=5$ the end-of-quench $\Delta E$ is off by $\le10^{-6}$, and the subluminal centre energy by $\le2\times10^{-5}$ of its signal, for $\tau=$ 1–6 and both chains.
- The runs therefore use $Z=5$ and end the end-of-quench runs at $t_q+5\tau$, where $F\le4.5\times10^{-5}$ on every site, with the excess taken over the ground state of $H(t_{\rm end})$.
- Starting from the uniform massive ground state instead loses the adiabatic suppression (5–10 times larger errors at $\tau=6$).

The hybrid starts at $-4\tau$, so tanh costs one $\tau$ more. The subluminal parts of the project keep the hybrid. At equal $\tau$, its spatial power at the subluminal emission threshold $q^*$ is 5–400 times smaller (for $qv\tau\approx$ 4–12, below the $qv\tau\approx13$ crossover to its stretched-exponential tail). Tanh would need about 14% more $\tau$ to reach $P\le10^{-8}$: 4.0 instead of 3.5 for Ising at $v=0.7$, and 8.7 instead of 7.6 for XXZ at $v=0.8$.

<div class="table-scroll" markdown="1">

| chain | observable | $\tau$ | $Z=3$ | $Z=4$ | $Z=5$ | $Z=6$ |
| :-- | :-- | --: | --: | --: | --: | --: |
| Ising | $\Delta E$, $v=1.5$ | 1 | $1.4\times10^{-5}$ | $2.0\times10^{-6}$ | $1.9\times10^{-7}$ | $7.3\times10^{-9}$ |
| | | 2 | $2.0\times10^{-5}$ | $5.8\times10^{-7}$ | $2.4\times10^{-7}$ | $1.9\times10^{-8}$ |
| | | 6 | $1.2\times10^{-5}$ | $7.4\times10^{-7}$ | $7.3\times10^{-8}$ | $2.0\times10^{-8}$ |
| | $\Delta E$, $v=1.5$, massive start | 6 | $1.1\times10^{-4}$ | $5.9\times10^{-6}$ | $3.7\times10^{-7}$ | $5.7\times10^{-8}$ |
| boson | $\Delta E$, $v=1.5$ | 1 | $3.6\times10^{-5}$ | $5.3\times10^{-6}$ | $2.0\times10^{-7}$ | $1.1\times10^{-7}$ |
| | | 2 | $6.4\times10^{-5}$ | $9.4\times10^{-6}$ | $6.9\times10^{-7}$ | $2.7\times10^{-9}$ |
| | | 6 | $3.6\times10^{-5}$ | $7.2\times10^{-6}$ | $9.6\times10^{-7}$ | $1.1\times10^{-7}$ |
| Ising | centre, $t=30$, $v=0.7$ | 1 | $1.9\times10^{-4}$ | $1.1\times10^{-4}$ | $9.2\times10^{-6}$ | $1.0\times10^{-6}$ |
| | | 2 | $8.6\times10^{-4}$ | $4.7\times10^{-5}$ | $7.9\times10^{-6}$ | $1.1\times10^{-5}$ |
| | | 6 | $6.9\times10^{-4}$ | $8.0\times10^{-5}$ | $8.5\times10^{-6}$ | $1.5\times10^{-6}$ |
| boson | centre, $t=30$, $v=0.7$ | 1 | $1.4\times10^{-3}$ | $6.3\times10^{-5}$ | $1.8\times10^{-5}$ | $4.4\times10^{-7}$ |
| | | 2 | $1.1\times10^{-4}$ | $1.5\times10^{-5}$ | $3.1\times10^{-6}$ | $1.4\times10^{-6}$ |
| | | 6 | $6.5\times10^{-4}$ | $8.5\times10^{-5}$ | $1.1\times10^{-5}$ | $2.0\times10^{-7}$ |

</div>
<div class="caption" markdown="1">
Table 6: Start-time error of tanh fronts started at $-Z\tau$ in the ground state of $H(t_0)$, against $Z=10$ ($N=100$, mass 0.5). Shown: the relative error of the superluminal end-of-quench $\Delta E$, and of the subluminal centre energy over its signal $\vert e_c-e_{\rm vac}\vert$ (the boson $\tau=1$ signal is small, $7\times10^{-6}$). The subluminal $Z\ge5$ entries are near the time-step floor. "Massive start": started in the ground state of the uniform massive $H$ instead, for contrast. (`tau_check` group `tstart`; the runs end at $t_q+10\tau$.)
</div>

### Open problems

1. $\delta_{\rm apex}(\tau,v)$, the apex energy of Eq. $\eqref{eq:tau-total}$, in the continuum and on the lattice.
2. A quantitative theory of the Ising Wilson deficit at intermediate $\tau$ (the model is good to 12% only for $\tau\ge2$), and of the hybrid freeze-out beyond leading logs.
3. The optimal profile. The slow-limit energy is set by how $F\to0$ behind the front, and tanh fronts end exponentially. Profiles ending as a power law, or compact ones with a gentler essential singularity, may leave less energy.
4. Smooth planar fronts on the 2D lattice. Each transverse sector is the boson chain with a uniform mass $M_n^2$, which the smooth solver can take as is.
5. Interacting models. The conserved $\theta$, the form factor $\eqref{eq:tau-born}$ and the boost of Eq. $\eqref{eq:tau-prime}$ survive, but the closed $2\times2$ problem does not.
6. The emission offset of wide fronts ([validation](#tau-validation)): a time delay of the smooth $S$ matrix in $s$, which should place each band's step at $\vert x\vert=v_gt-\delta(k)$.

**Scripts for this section** (in `reports/s2_theory/scripts/`; one thread, run from the repository root):
{: #tau-scripts}

<div class="table-scroll" markdown="1">

| script | content | runtime |
| :-- | :-- | --: |
| `tau_continuum.py --part checks` | closed forms vs ODE, asymptotics, normalisations | 16 s |
| `tau_continuum.py --part tables\|hybrid` | $\varepsilon'(x)$, lab levels, production rows; hybrid $T_{\rm low}$ | 107 / 30 s |
| `tau_continuum.py --part lattice\|wilson\|2d` | uniform ramps vs the engines; Wilson model; 2+1D | 61 / 38 / 2 s |
| `tau_floquet.py --part checks [--full]` | $\tau\to0$, $v\to\infty$, unitarity, balance, convergence, direct lattice | 111 s (9.5 min) |
| `tau_floquet.py --part table [--full]` | levels, $D$, $R$ (cached in `results/s2/tau/`) | 9 min first run |
| `tau_floquet.py --part born\|thresholds\|boost` | Born map; bowl thresholds; continuum comparison | 58 / 2 / 2 s |
| `sections.s2_superluminal.tau_check` | validation T1–T8 against exact lattice evolutions (317 jobs; `--smoke`: T1, T2 in 5 s) | 4 CPU-h; report 40 s |

</div>

## Entanglement and correlations: pair counting and the local GGE {#entanglement}

The single-front spectrum $n(k)$ fixes more than the energy profile. Every emitted quantum has a partner, so the state behind the fronts is a collection of pairs that separate ballistically, and every point of the light cone is locally a Gaussian generalised Gibbs ensemble (GGE) of the quanta that reach it. This section derives the entanglement entropies and equal-time correlators that follow, tests them against the entropies and correlators recorded by the production runs, and reads Eq. $\eqref{eq:cont}$ as a chiral thermal CFT.

Code: [`theory/gge.py`]({{ page.repo }}/theory/gge.py) (GGE correlators), [`theory/pair_counting.py`]({{ page.repo }}/theory/pair_counting.py) (pairs) and [`theory/chiral_cft.py`]({{ page.repo }}/theory/chiral_cft.py) (CFT forms); their docstrings hold the derivations. Check: [`sections/s2_superluminal/corr_check.py`]({{ page.repo }}/sections/s2_superluminal/corr_check.py) (`results/s2_corr_check.md`, 158 rows). The check runs no simulation. It reads, all at the snapshot $t_q$:

- the tanh production records ($N=400$, $\tau=1$, $\mu=m=0.25$, 0.5, $v=1.2$–3 and $\infty$);
- the records of the [$\tau$ scan](#tau-validation): 34 records, $\tau=0.1$–3, including mass 2.

### Physical picture and glossary {#ent-picture}

**In words.** Where the front switches the mass off, it creates quasiparticles in pairs. Both members have the same occupation $n$ and are entangled with each other. The pairs are lopsided: their momenta differ by the Doppler factor $\eta_0^2=(v+1)/(v-1)$.

- The co-mover (blue, energetic) cannot keep up with the front ($v_g\le1<v$) and stays in the hot strip $t<\vert x\vert<vt$.
- The counter-mover (red, soft) streams back to the centre (Figure 1).

The cold region $\vert x\vert<t$ therefore holds only red counter-movers, from both fronts, each with its partner far away. It is a dilute gas of independent quanta whose occupation was fixed at birth. Free quanta never collide, so this gas never thermalises by itself. Three consequences organise the section.

1. The entanglement across a cut is the entropy of the pairs it splits. The cut at $x=0$ splits every pair whose red member has crossed it, a number that grows linearly in $t$.
2. Correlations decay because the quanta between two points scramble them. The decay length is set by how many quanta sit in between (for the spin) or by their wavelength (for local operators).
3. The CFT applies only if the gas is thermal, and that needs a thermal *emission*: slow fronts, with both partners in the continuum regime. Near $v=1$ the cold gas is cold but not thermal, because its occupations are inherited from blue partners $\eta_0^2$ times more energetic, at the lattice scale.

**Glossary.**

- *GGE* (generalised Gibbs ensemble): free quanta conserve every mode occupation $n(k)$. Instead of a thermal state, the system relaxes to the most random state with those $n(k)$: each mode independently occupied with probability $n(k)$, with no phase relation between modes. Thermal is the special case $n=1/(e^{\omega/T}\pm1)$.
- *Yang–Yang entropy* $s=\int\frac{\mathrm{d}k}{2\pi}s(n)$: the thermodynamic entropy per site of a GGE, with Eq. $\eqref{eq:s-pair}$ per momentum cell (a coin occupied with probability $n$). $s_{\rm cold}$ is the cold region's.
- *Entanglement entropy* $S_{\rm half}$ (cut at the centre) and $S_b$ (central block of $b$ sites): the von Neumann entropy of the region's reduced state. In the vacuum it is $\frac c3\ln b$, from short-range virtual pairs at the boundaries. Each real pair with one member outside adds $s(n)$.
- *CEF rate* (Calabrese–Essler–Fagotti): $\langle\sigma^x_0\sigma^x_r\rangle\propto e^{r\Lambda}$ with $\Lambda=\int\frac{\mathrm{d}k}{2\pi}\ln\vert1-2n\vert$. Ising quasiparticles act as domain walls of $\sigma^x$. Each one between $0$ and $r$ flips the sign, and the average of $(-1)^{\text{number in between}}$ over independent modes is $\prod_k(1-2n_k)$.
- *Temperatures* of the cold centre:
  - $T_{\rm IR}$, of the softest modes (`gge.ir_temperature`; Fermi $n=\frac12-k/4T$, Bose $n=T/k-\frac12$). It is the CFT temperature, since long distances are governed by these modes.
  - $T_E$, of the energy, $\varepsilon=\frac{\pi c}6T_E^2$. $T_E/T_{\rm IR}=1$ for a thermal gas; this ratio is our thermality measure.
  - $T_{\rm slow}=(1-1/v)\kappa_\tau/2\pi$, the slow-front prediction of Eq. $\eqref{eq:tau-slow}$, called $T_L$ [above](#tau). A slow switch radiates thermally, like a Hawking/Unruh horizon, and the result is then Doppler-shifted.
  - $T_{\rm soft}=T_0/\eta_0$ and $T_{\rm hard}=T_0\eta_0$, the Doppler temperatures of counter- and co-movers.
- *Massless zero mode* (boson): shifting the whole field costs no energy, so after the quench the uniform part of $\phi$ drifts like a free particle, $\langle\phi^2\rangle\simeq mt/4$. Blocks count the growing spread as extra entropy, $\sim\frac12\ln t$, unrelated to pairs.
- *Pair coherence* (undephased): a new pair has a fixed internal phase, so correlators carry terms $\cos2\omega t$. Summed over $k$ they average out (dephasing, the approach to the GGE), slowest where $\omega$ is stationary. In a GGE, kinetic and potential energy are equal mode by mode, $\langle\nabla\phi\nabla\phi\rangle=\langle\pi\pi\rangle$; any residual is energy still sloshing coherently between them.

### Pairs and the quasiparticle picture {#ent-pairs}

**Pairs (D).** The right front emits pairs $(k,q)$, with $q$ the [partner](#floquet), $\theta(q)=-\theta(k)$ mod $2\pi$, and both members have the occupation $n(q)=n(k)$. In the continuum, $q=-k/\eta_0^2$ for $k>0$ and $q=-k\eta_0^2$ for $k<0$. The label $\theta=k-\omega/v$ is uniformly distributed, so per unit front path the front emits

$$
\begin{equation}\label{eq:pair-measure}
\frac{\mathrm{d}\theta}{2\pi}=\Bigl(1-\frac{v_g(k)}{v}\Bigr)\frac{\mathrm{d}k}{2\pi}
\end{equation}
$$

labels. It advances by $v\,\mathrm{d}t'$ per unit time, and a sum over the whole zone counts each pair twice. Each pair is a two-mode state entangled by

$$
\begin{equation}\label{eq:s-pair}
s(n)=\begin{cases}-n\ln n-(1-n)\ln(1-n) & \text{Ising: }\sqrt{1-n}\,\vert0\rangle+\sqrt n\,\vert kq\rangle,\\
(n+1)\ln(n+1)-n\ln n & \text{boson: two-mode squeezed state.}\end{cases}
\end{equation}
$$

A pair emitted by front $\sigma$ ($+1$ right, $-1$ left, the mirror image) at $t'$ starts at $\sigma vt'$. At time $t$ its members are at $p_a(t')=\sigma v_g(a)\,t+\sigma\bigl(v-v_g(a)\bigr)t'$, $a=k,q$, strictly monotone in $t'$ since $v>\vert v_g\vert$.

**Entropy of a region (D).** This is the Alba–Calabrese counting, generalised to a moving source. A region $A$ holds the entropy of the pairs that have exactly one member inside:

$$
\begin{equation}\label{eq:SA}
S_A(t)=\sum_{\sigma=\pm}\int\frac{\mathrm{d}k}{2\pi}\,\tfrac12\bigl(v-v_g(k)\bigr)\,s\bigl(n(k)\bigr)\,L_{\rm xor}(\sigma,k,t),\qquad
L_{\rm xor}=\vert I_k\vert+\vert I_q\vert-2\vert I_k\cap I_q\vert,
\end{equation}
$$

where $I_a=[0,t]\cap p_a^{-1}(A)$ is an interval with analytic endpoints, so no quadrature over $t'$ is needed. Eq. $\eqref{eq:SA}$ is `pair_counting.pair_entropy`, evaluated on the spectrum's own $k$ grid. It omits the vacuum entanglement of the cut and any pair created at the apex.

**Half chain: the slope identity (D, V).** For $A=(-\infty,0)$ all endpoints scale with $t$, so $S_{\rm half}=t\,S_{\rm half}(1)$ exactly. For a normal pair of the right front ($k<0$, $q>0$), only the counter-mover enters $A$, for $t'<\vert v_g(k)\vert t/(v+\vert v_g(k)\vert)$. The weight $\frac12(v+\vert v_g(k)\vert)$ turns this into $\frac12\vert v_g(k)\vert t$; the partner's $k$-element counts the same pair once more, and the left front mirrors it:

$$
\begin{equation}\label{eq:half-slope}
\frac{\mathrm{d}S_{\rm half}}{\mathrm{d}t}=2\int_{k<0}\frac{\mathrm{d}k}{2\pi}\,\vert v_g(k)\vert\,s\bigl(n(k)\bigr)
\end{equation}
$$

(`pair_counting.half_chain_slope`).

On the lattice, the quanta with $k<k_u$ (`front_born.umklapp_edge`, $-1.107$ at $v=1.5$) have their partner at $q<0$ too (umklapp: both members counter-moving). For them Eq. $\eqref{eq:SA}$ counts $\vert t_k-t_q\vert$ instead of $t_k+t_q$. The full count (`general_slope`) lies below Eq. $\eqref{eq:half-slope}$ by $9.5\times10^{-7}$ (Ising) and $2.0\times10^{-7}$ (boson) at $v=1.5$, mass 0.25, $\tau=1$ (relative $4\times10^{-5}$ and $7\times10^{-6}$), and by at most 0.04% over the 16 production spectra. In the continuum $\vert v_g\vert=1$, and Eq. $\eqref{eq:half-slope}$ becomes

$$
\begin{equation}\label{eq:s-cold}
\frac{\mathrm{d}S_{\rm half}}{\mathrm{d}t}=s_{\rm cold}=\int_{-\pi}^{\pi}\frac{\mathrm{d}k}{2\pi}\,s\bigl(n(-\vert k\vert)\bigr),
\end{equation}
$$

the Yang–Yang entropy density of the [cold-region GGE](#ent-gge).

- The picture: the counter-movers of the right front fill $(-t,0)$ at entropy density $s_{\rm cold}/2$, all with their partners at $x>0$, and those of the left front fill $(0,t)$ with their partners at $x<0$. The partner position is the $y(x)$ of the [continuum section](#tau-cont): the cold region is entangled with the inner hot strip.
- For the boosted continuum sudden quench, pair counting gives $S_{\rm half}=s_{\rm cold}t$ to $10^{-15}$ and the block saturation to $10^{-14}$ (`check_continuum`).
- On the lattice the $\vert v_g\vert<1$ weight makes the slope slightly smaller than $s_{\rm cold}$. Over the $\tau$ scan, slope$/s_{\rm cold}=$ 0.949–1.003, lowest at $\tau=0.1$, where the slow quanta carry weight.

**Saturation (D).** Deep in the cold region only counter-movers are present, with occupation $n(-\vert k\vert)$. A block of $b$ sites whose quanta have all lost their partners holds $S_b\to b\,s_{\rm cold}$. The hot strip $t<\vert x\vert<vt$ holds both kinds of quanta of one front, $s_{\rm hot}=\int\frac{\mathrm{d}k}{2\pi}s(n(k))$ (`pair_counting.saturation`). At finite $b$ the vacuum entanglement adds $\simeq\frac c3\ln b$, so blocks are compared with the full GGE, and $s_{\rm cold}$ with the increment $\Delta S/\Delta b$.

**Uniform ramps, $v=\infty$ (D).** The pairs are $(k,-k)$ and $n$ is even. A pair born at $x_0$ straddles the cut while $\vert x_0\vert<\vert v_g\vert t$, so $\mathrm{d}S_{\rm half}/\mathrm{d}t=\int_{-\pi}^{\pi}\frac{\mathrm{d}k}{2\pi}\vert v_g\vert\,s(n_{\rm ramp})$. This is the $v\to\infty$ limit of Eq. $\eqref{eq:half-slope}$, with no umklapp.

### The local GGE {#ent-gge}

**Occupations (D).** A point $(x,t)$ of the two-front light cone holds

$$
n(x,t;k)=n(k)\,\mathbf 1[v_g(k)t\le x\le vt]+n(-k)\,\mathbf 1[-vt\le x\le v_g(k)t]
$$

(`gge.local_occupation`), the occupations behind Eq. $\eqref{eq:ball}$. The centre is the GGE of $n_{\rm cold}(k)=n(-\vert k\vert)$. Its reduced state is Gaussian with no pair coherence, because the partners of the counter-movers are in the hot strip. This is exact for the ballistic state; the comparison tests how close the finite-time lattice state is to it at $t_q$.

**Ising kernels (D, V).** With $a_j=\gamma_{2j}$, $b_j=\gamma_{2j+1}$, $\Gamma=i\langle\gamma\gamma\rangle$ and $r=j-l$, the critical GGE is

$$
\begin{equation}\label{eq:gge-ising}
\Gamma_{a_jb_l}=\frac1\pi\int_0^\pi\mathrm{d}k\,\bigl[1-n(k)-n(-k)\bigr]\sin\bigl(k(r-\tfrac12)\bigr),\qquad
\Gamma_{a_ja_l}=\Gamma_{b_jb_l}=\frac1\pi\int_0^\pi\mathrm{d}k\,\bigl[n(k)-n(-k)\bigr]\sin(kr).
\end{equation}
$$

- $n=0$ gives the closed form $\Gamma_{ab}(r)=1/(\pi(r-\frac12))$ ($\langle s^z\rangle=2/\pi$, energy density $-2/\pi$).
- $\Gamma_{aa}$ is nonzero only for a chiral $n$. It carries the energy current, $-2Jg\,\Gamma_{aa}(-1)=\int\frac{\mathrm{d}k}{2\pi}\,\omega v_g n=J_E$.
- `gge.ising_gamma` fills an $M$-site Toeplitz window ($M=129$ here), the exact reduced state of the infinite chain, so the repository's `entropy`, `sxsx_from` (JW-string Pfaffian) and `szsz_connected` apply unchanged. The builder reproduces the closed form to $3\times10^{-16}$.
- The bulk of an open chain of $N=400$ differs from the infinite chain by $O(1/N)$ image terms ($1.2\times10^{-3}$ absolute, 7.6% at $r=20$). The builder is therefore tested against the closed form, not against an open chain.

**Boson kernels (D, V).** $G_r=\int\frac{\mathrm{d}k}{2\pi}\cos(kr)\frac{2n+1}{2\omega}$, $P_r=\int\frac{\mathrm{d}k}{2\pi}\cos(kr)\,\omega\frac{2n+1}2$ and $R_r=-\int\frac{\mathrm{d}k}{2\pi}n(k)\sin(kr)$ are $\langle\phi\phi\rangle$, $\langle\pi\pi\rangle$ and $\langle\phi\pi\rangle_{\rm sym}$.

- $G$ is IR-divergent for every $n$ (vacuum: $\ln(1/k_{\min})/2\pi$; emitted $n\simeq m/4\vert k\vert$: $1/k_{\min}$), and takes $k_{\min}=1/t_q$. $P$ and $R$ are IR-finite.
- In any GGE, $\langle\nabla\phi_j\nabla\phi_l\rangle=2G_r-G_{r+1}-G_{r-1}=P_r$ exactly ($4\sin^2\frac k2=\omega^2$; $4.4\times10^{-14}$ numerically). So $\nabla\phi\nabla\phi-\pi\pi$ in the data measures the pair coherence $\langle b_kb_{-k}\rangle$ that the finite-time state still holds.

**Decay of $\langle\sigma^x\sigma^x\rangle$ (D).** In a stationary Gaussian state with symmetric $n$, $\langle s^x_0s^x_r\rangle\sim e^{r\Lambda}$ with the CEF rate $\Lambda=\int_{-\pi}^{\pi}\frac{\mathrm{d}k}{2\pi}\ln\vert1-2n(k)\vert$ (`gge.cef_rate`). This is an asymptotic statement in $r$.

**Numerics.**

- Integrals are folded onto $[k_{\min},\pi]$ and done with composite Gauss–Legendre quadrature (16 nodes per panel; $n_k=2^{14}$ nodes on uniform panels, plus geometric panels down to $2^{-40}$ for the boson's IR tails). The $\sin(k(r-\frac12))$ moments need $n_k\gtrsim5r_{\max}$.
- Spectra are interpolated with PCHIP, separately on each side of $k=0$, where $n$ jumps (co- versus counter-movers), and for the boson as $k\,n(k)$. Linear interpolation of a `floquet_smooth` spectrum loses $1.8\times10^{-4}$ (Ising) and $3.8\times10^{-5}$ (boson) of $J_E$; PCHIP loses $9\times10^{-7}$ and $1.2\times10^{-7}$.
- Self-tests (`python -m theory.gge`): after a sudden uniform quench ($N=200$, $t=60$, $\mu=0.25$), the open chain matches its GGE to $5.1\times10^{-5}$ ($\langle\sigma^x\sigma^x\rangle$), $2.5\times10^{-5}$ ($\langle\sigma^z\sigma^z\rangle_c$) and $1.4\times10^{-4}$ ($S_b$, $b\le16$). The GGE Pfaffian decays at the CEF rate to $6.4\times10^{-4}$.
- The boson's $P_r$ is off by $\pm4\times10^{-4}$ with alternating sign, from the not yet dephased $k\approx\pi$ pairs.

### Comparison with the lattice records {#ent-results}

The estimators are documented in the `corr_check.py` docstring.

- The $S_{\rm half}$ slope is a least-squares fit over $t\in[\max(20,10\tau),t_q]$, never past $t_q$, after which quanta reflected at the open ends come back.
- Correlators run along the row of the site at $x=+\frac12$.
- Decay rates are fitted on fixed windows ($\sigma^x\sigma^x$ on $[10,30]$, $\sigma^z\sigma^z$ on $[2,12]$, $\pi\pi$ on $[2,8]$), applied identically to data, GGE and CFT curves, with the float32 floor $10^{-5}$ of the production $\sigma^z\sigma^z$ and $\pi\pi$ records.

The criteria C1–C13 are proposals, with tolerances fixed before the data were seen, so every row is report-only (Table 7).

<div class="table-scroll" markdown="1">

| criterion | measured | tol. | |
| :-- | :-- | :-- | :-- |
| C1 $S_{\rm half}$ slope vs Eq. $\eqref{eq:half-slope}$, 16 records | $-0.03\%$ to $+0.50\%$ | 2% | within |
| C2 Ising $(S_{64}-S_{32})/32$ vs $s_{\rm cold}$ | $+0.00\%$ to $+0.70\%$ (boson $-4.9$ to $-11.7\%$) | 3% | within |
| C3 Ising $\max\vert S_b-S_b^{\rm GGE}\vert$, $b\le16$ | $7.3\times10^{-6}$ – $1.5\times10^{-5}$ | $2\times10^{-2}$ | within |
| C4 Ising $\max\vert\langle\sigma^x\sigma^x\rangle-{\rm GGE}\vert$, $r\le20$ | $7.7\times10^{-6}$ – $1.7\times10^{-5}$ | $10^{-3}$ | within |
| C5 Ising $\sigma^x\sigma^x$ rate on $[10,30]$, data/GGE | $\le0.01\%$ (data/CEF $+0.03$ to $+27\%$) | 3% | within |
| C6 Ising $\max\vert\langle\sigma^z\sigma^z\rangle_c-{\rm GGE}\vert$, $r\le8$ | $1.4\times10^{-6}$ – $3.1\times10^{-6}$ | $10^{-4}$ | within |
| C7 boson $\max\vert\langle\pi\pi\rangle-P\vert$, $r\le5$ | $1.9\times10^{-5}$ – $1.3\times10^{-4}$ | $5\times10^{-4}$ | within |
| C8 boson $\max\vert\nabla\phi\nabla\phi-\pi\pi\vert$, $r\le10$ (0 in a GGE) | $4.7\times10^{-5}$ – $2.6\times10^{-4}$ | – | report |
| C9 ramps ($v=\infty$): slope vs $\int\vert v_g\vert s(n_{\rm ramp})$ | $-0.40\%$ to $+0.36\%$ | 2% | within |
| C11 $\tau$ scan, $v\ge1.5$ (33 records): C1; C2 (Ising) | $-0.90\%$ to $+0.34\%$; $\le0.71\%$ | 2, 3% | within |
| C11 $\tau$ scan, $v=1.01$–1.2 (36 records): C1 | $-5.7\%$ to $+228\%$ (text) | 2% | 20 outside |

</div>
<div class="caption" markdown="1">
Table 7: Entanglement and correlations at $t_q$ against pair counting and the cold GGE (`results/s2_corr_check.md`; production records, Ising $\mu$ and boson $m=0.25$, 0.5, $v=1.2$–3, $\tau=1$, unless stated). The criteria are proposals, so every row is report-only, and "within" refers to the proposed tolerance. The boson C2 rows have no tolerance (zero mode, C13). C10, C12 and C13 are discussed in the text.
</div>

**Half-chain entropy (V).** In all 16 production records, $S_{\rm half}(t)$ is a straight line from $t\approx20$ to $t_q$, with the slope of Eq. $\eqref{eq:half-slope}$.

- Ising $\mu=0.25$, $v=1.5$: $0.022762$ against $0.022761$. Boson $m=0.25$, $v=1.5$: $0.028100$ against $0.028075$. The largest deviation is $+0.50\%$ (boson $m=0.25$, $v=1.2$).
- Plotted against the predicted growth, every run collapses on the diagonal (Figure 5).
- The $\tau$ scan at $v\ge1.5$ ($\tau=0.1$–3, including $\mu=m=2$) stays within $-0.90\%$ to $+0.34\%$.
- The fitted intercept, 0.11–0.48 against $S_{\rm half}(0)=$ 0.14–0.24, is not predicted: it holds the vacuum entanglement of the cut and the apex emission.

**Near $c$: the front must outrun its own width (V).** The near-luminal records ($v=1.01$–1.2) deviate, by up to $+228\%$ (boson, $v=1.01$, $\tau=3$), always for wide fronts. The single-front spectrum describes an *established* front, one that has separated from the co-movers it emits. The hot strip behind the front is $(v-1)t$ wide and the front is $2v\tau$ wide, so the front has outrun its own width only for $t\gg t_{\rm sep}=2v\tau/(v-1)$. At $v=1.01$, $\tau=3$, $t_{\rm sep}=606$, three times the run's $t_q=197$. Before that, the front still overlaps its fresh co-movers and the local slope is higher.

- Plotted against $t/t_{\rm sep}$, the local slope over the prediction collapses onto one curve that reaches 1 after a few $t_{\rm sep}$ (Figure 5, right).
- At $v=1.1$, $\tau=3$ it goes from 1.50 ($t=$ 20–50) to 1.00 ($t\ge110$, $t/t_{\rm sep}\ge1.7$). At $v=1.01$, $\tau=3$ it is still at 1.40 (Ising) and 1.96 (boson) at $t_q$. The boson approaches more slowly than the Ising chain.
- The nearly sudden $v=1.01$ Ising fronts ($\tau=0.1$, 0.3, $t_{\rm sep}<0.3\,t_q$) settle 5–6% *below* the prediction, which this criterion does not explain. This is open.

{% include figure.liquid loading="lazy" path="assets/img/blogs/superluminal-fronts/s2_corr_check_entropy.png" class="img-fluid rounded" %}
<div class="caption" markdown="1">
Figure 5: Half-chain entanglement growth against pair counting. Left and centre: measured $S_{\rm half}(t)-S_{\rm half}(t_1)$ against the prediction $2\int_{k<0}\frac{\mathrm{d}k}{2\pi}\vert v_g\vert s(n)\,(t-t_1)$, for Ising and boson chains at mass 0.25, $\tau=0.1$–3 and $v=1.01$–3. Right: local slope over the prediction, against $t/t_{\rm sep}$ with $t_{\rm sep}=2v\tau/(v-1)$. The prediction holds once the front has outrun its own width.
</div>

**Block entropies (V).**

- *Ising.* The cold GGE on the 129-site window reproduces $S_b(t_q)$ for $b\le16$ to $\le1.5\times10^{-5}$ (C3), and $\Delta S/\Delta b$ between $b=32$ and 64 equals $s_{\rm cold}$ to $\le0.7\%$ (C2, largest at $v=1.2$).
- *The clean view* is the entropy *above the vacuum* (that of the infinite chain: the cold region never felt the chain ends) per site of pair entropy, $(S_b-S_b^{\rm vac})/(b\,s_{\rm cold})$ (Figure 6). It is small for blocks shorter than the wavelength of the quanta, which they cannot resolve. It rises to 1 once $b\gg\lambda_T=1/T_{\rm IR}$, where every quantum of the block has its partner outside.
  - For slow fronts ($\tau=3$) the CFT crossover $\frac c3\ln[\sinh(\pi T_{\rm IR}b)/(\pi T_{\rm IR}b)]$ follows the data.
  - For nearly sudden fronts ($\tau=0.1$) the data rise much earlier than the CFT, because the non-thermal tail of short-wavelength quanta saturates small blocks.
- *Boson.* The increments sit 4.9–11.7% below $s_{\rm cold}$, and the blocks lie above the GGE for every $k_{\min}$ tried. The massless chain's zero mode makes $S_b$ grow as $\frac12\ln t$. The measured $t_q\,\mathrm{d}S_{64}/\mathrm{d}t$ is 0.55–0.96, against $\frac12$ for the bare zero mode and 0.69–1.18 for the GGE's own $\mathrm{d}S_{64}/\mathrm{d}\ln(1/k_{\min})$. Pair counting contributes nothing at $b=64$ (C13).

For the boson, then, only the slope, the block increments and the short-range $\langle\pi\pi\rangle$ test the GGE.

{% include figure.liquid loading="lazy" path="assets/img/blogs/superluminal-fronts/s2_corr_check_blocks.png" class="img-fluid rounded" %}
<div class="caption" markdown="1">
Figure 6: Block entropy above the vacuum, per site of pair entropy, against block size $b$. Left: Ising, $\tau=0.1$. Centre: Ising, $\tau=3$. Dots are data, solid lines the cold GGE, dashed lines the CFT at $T_{\rm IR}$. Blocks become extensive once $b\gg1/T_{\rm IR}$. Right: for the boson, the block entropy keeps growing like $\ln t$ because of the zero mode.
</div>

**Correlators (V).**

- The Ising $\langle\sigma^x\sigma^x\rangle$ (JW string) and $\langle\sigma^z\sigma^z\rangle_c$ agree with the cold GGE to $1.7\times10^{-5}$ and $3.1\times10^{-6}$ (C4, C6), and the $\sigma^x\sigma^x$ decay rates on $[10,30]$ agree to $\le0.01\%$ (C5).
- Divided by the vacuum correlator, every curve shows what the excitations do to the vacuum: close to a straight line on a log scale, with slope $-1/\xi$.
- The CEF rate $\Lambda$ is approached only when the window is asymptotic. Data$/\Lambda-1=+0.03\%$ where $\xi_\sigma=12$, but $+4.2\%$ at $v=1.5$ ($\xi_\sigma=30$) and $+27\%$ at $v=1.2$ ($\xi_\sigma=50$), both at $\mu=0.25$. The GGE fitted on the same window shows the same offset, so this is a property of the window, not of the state.
- The boson $\langle\pi\pi\rangle$ ($r\le5$) agrees with the GGE's $P$ to $\le1.3\times10^{-4}$ (C7). The difference $\nabla\phi\nabla\phi-\pi\pi=4.7\times10^{-5}$ – $2.6\times10^{-4}$ (C8), zero in every GGE, is the residual pair coherence of the finite-time state.

<!-- FIGURE: s2_corr_check_lengths.png (correlators divided by the vacuum) could go here. -->

**Length scales (V).** The cold gas has a hierarchy of lengths. For Ising $\mu=0.25$, $v=1.5$, $\tau=1$ / 3, in sites:

| length | $\tau=1$ | $\tau=3$ |
| :-- | --: | --: |
| initial correlation length $1/\mu$ | 4 | 4 |
| thermal wavelength $\lambda_T=1/T_{\rm IR}$ (wavelength of a typical quantum) | 26 | 43 |
| spin correlation length $\xi_\sigma=-1/\Lambda$ | 32 | 56 |
| mean spacing of the quanta $1/\rho$, with $\rho=\int\frac{\mathrm{d}k}{2\pi}n$ | 109 | 200 |
| the cold region itself, $2t_q$ | 266 | 266 |

- Beyond $\lambda_T$, blocks become extensive. Local correlators ($\sigma^z\sigma^z$, $\pi\pi$) decay over $\lambda_T/2\pi\approx$ 4–7 sites.
- $\xi_\sigma$ is about $0.3$ times the mean spacing of the quanta. The cold region therefore holds only a few quanta, about four thermal wavelengths apart: a dilute quantum gas.
- All these lengths stretch roughly as $\eta_0$ as $v\to1$ (Doppler red-shift). At $\tau=0.1$, $\xi_\sigma=14$, 24, 46, 77, 168 for $v=3$, 1.5, 1.2, 1.1, 1.01.
- They also grow with $\tau$, because slower fronts emit fewer quanta. At $v=1.01$, $\tau=3$, $\xi_\sigma=1457$ exceeds the chain, and the cold region is effectively vacuum.
- On short windows, $\langle\sigma^z\sigma^z\rangle_c$ and the boson $\langle\pi\pi\rangle$ are dominated by the vacuum $r^{-2}$ power law, so a raw exponential fit there does not give the asymptotic $\xi$. Dividing by the vacuum removes it.

### Chiral CFT reading of the continuum result {#ent-cft}

**Doppler temperatures (D, V).** In a chiral thermal state of a CFT with central charge $c$, with right movers at $T_+$ and left movers at $T_-$ (not the $T_L$ of the smooth-front section, which is our $T_{\rm slow}$),

$$
\begin{equation}\label{eq:cft-chiral}
\varepsilon=\frac{\pi c}{12}\bigl(T_+^2+T_-^2\bigr),\qquad s=\frac{\pi c}{6}\bigl(T_++T_-\bigr).
\end{equation}
$$

In the front frame, the sudden quench of a CFT is thermal at $T_0$, with $\varepsilon_u=\frac{\pi c}6T_0^2$. Back in the lab, one front leaves its counter-movers at $T_{\rm soft}=T_0/\eta_0$ and its co-movers at $T_{\rm hard}=T_0\eta_0$. With Eq. $\eqref{eq:cft-chiral}$, the cold region $(T_{\rm soft},T_{\rm soft})$ and the hot strip $(T_{\rm soft},T_{\rm hard})$ give exactly $\varepsilon_u/\eta_0^2$ and $\frac12(\eta_0^2+\eta_0^{-2})\varepsilon_u$. **Eq. $\eqref{eq:cont}$ is a statement about Doppler temperatures** (identity with `predicted_densities` to $3.3\times10^{-16}$).

- For slow tanh fronts, Eq. $\eqref{eq:tau-T}$ gives $T_{\rm soft}=(1-1/v)\kappa_\tau/2\pi$ and $T_{\rm hard}=(1+1/v)\kappa_\tau/2\pi$, with $\kappa_\tau=1/\tau$ (boson) and $2/\tau$ (Ising), consistent with Eq. $\eqref{eq:tau-slow}$.
- The lattice thermal entropy matches $\frac{\pi c}3T$ to $2.3\times10^{-4}$ (Ising) and $1.3\times10^{-4}$ (boson) at $T=0.02$.
- Equal-time correlators follow by mapping each chirality, $r^{-2h}\to[\pi T_i/\sinh(\pi T_ir)]^{2h}$. This gives $\xi_\sigma=8/(\pi(T_++T_-))$ and $\xi_\varepsilon=1/(\pi(T_++T_-))$, and, for $\langle\pi\pi\rangle$ (a sum over chiralities), $\xi_\pi=1/(2\pi\min_i T_i)$.
- In general, $\xi_O=\lambda_T/(2\pi\Delta_O)$ in a symmetric state ($\Delta_O=h+\bar h$): heavier operators lose their correlations faster.

**Is the cold gas thermal? (V).** A thermal gas has $\ln(1/n-1)=\omega/T$, a straight line, and $T_E=T_{\rm IR}$ (Figure 7). Low energy is necessary but not sufficient: free quanta never collide, so the shape of $n(k)$ is the shape of the emission. The measured $T_E/T_{\rm IR}$ at $v=1.01$, 1.1, 1.2, 1.5, 3 is:

| | $\tau=0.1$ | $\tau=3$ |
| :-- | :-- | :-- |
| Ising $\mu=0.25$ | 19.1, 3.8, 2.6, 1.8, 1.6 | 2.1, 1.03, 0.98, 0.95, 0.95 |
| boson $m=0.25$ | 5.6, 1.37, 1.21, 1.14, 1.11 | 1.49, 1.03, 1.01, 1.00, 1.00 |

So the cold gas is thermal only for slow fronts away from $v=1$, and it becomes *less* thermal as $v\to1$, although it also becomes colder. The reason is the pair structure. Each cold quantum shares its occupation with a blue partner $\eta_0^2$ times more energetic. As $v\to1$, that partner reaches the lattice scale ($T_{\rm hard}\to1/\pi\tau$, about 3 at $\tau=0.1$) or the momenta where the lattice dispersion bends away from light-like, $q^2\gtrsim24(v-1)$, and the cold gas inherits that distortion.

- The CFT correlation length follows the same pattern: $\xi_\sigma/\xi_\sigma^{\rm CFT}(T_{\rm IR})=$ 0.99–1.02 at $\tau=3$, $v\ge1.1$, but 0.29–0.83 at $\tau=0.1$, and 0.76 at $v=1.01$, $\tau=3$.
- The entropy–energy relation is more forgiving: $s_{\rm cold}/\frac{\pi c}3T_E=$ 0.97–1.00 at $\tau=1$, $v\ge1.2$ (C10), because both integrals weigh the same quanta.
- $T_E$ measured from the cold-mask mean ($\vert x\vert\le0.9t_q$) is higher, up to $1.32\,T_E$ at $v=1.2$, because the mask holds the bowl's lagging hot quanta.

{% include figure.liquid loading="lazy" path="assets/img/blogs/superluminal-fronts/s2_corr_check_thermal.png" class="img-fluid rounded" %}
<div class="caption" markdown="1">
Figure 7: Is the cold region thermal? Left and centre: $\ln(1/n-1)$ against $\omega/T_{\rm IR}$ for the Ising cold region at $\tau=0.1$ and $\tau=3$. A Fermi distribution at $T_{\rm IR}$ is the dashed diagonal. Right: $T_E/T_{\rm IR}$ against $v-1$ for both chains and several $\tau$. The gas is thermal ($T_E/T_{\rm IR}=1$) only for slow fronts away from $v=1$.
</div>

**Slow limit (V).** For slow fronts the gas is thermal, but the Ising chain's temperature lies below the slow-front prediction: $T_{\rm IR}/T_{\rm slow}=$ 0.63–0.66 at $\mu=0.25$, $\tau=3$, $v=$ 1.01–3, against 0.85–1.00 for the boson. Each cold quantum shares its occupation with a blue partner at $\eta_0^2$ times its momentum, where the lattice Ising quasiparticle is stiffer than the continuum one (the $1-\cos q$ "Wilson mass"). The switch excites the partner less, so both are less occupied ([smooth-front validation](#tau-validation)).

**Hot strip (theory only, C12).** No record stores hot-strip correlators, so this compares the chiral GGE `occupation(sp, "right")` with the Doppler CFT.

- $s_{\rm hot}/\frac{\pi c}6(T_{\rm soft}+T_{\rm hard})=$ 0.30–0.90.
- The $\xi$ ratios are 1.68–3.35 ($\sigma$), 1.72–3.05 ($\varepsilon$) and 0.24–0.90 ($\pi$).
- $T_{\rm hard}$ reaches 0.92, against the lattice bandwidth $\omega_{\max}=2$, and $T_0$ is built from the lattice $\varepsilon_u$, not from a thermal state.

The hot strip is not conformal.

### Limitations and open problems {#ent-open}

1. Hot-strip correlators: no record stores them, and the pair coherence between late-emitted partners, both inside the strip, needs the complex $S$ matrix, not only $n(k)$.
2. An IR-regular boson probe of the length scale: the excitation part of $\langle\pi\pi\rangle$, or the GGE with $k_{\min}=1/t$ treated as part of the prediction.
3. The $S_{\rm half}$ intercept: the apex emission and the vacuum entanglement of the cut.
4. The nearly sudden $v=1.01$ Ising fronts settle 5–6% below the predicted entropy growth.
5. The tolerances of C1–C13 are still proposals.

## Higher dimensions {#dims}

Every number in this section is printed by a script in [`reports/s2_theory/scripts/`]({{ page.repo }}/reports/s2_theory/scripts/) ([scripts](#dims-scripts)). Status: **D** derived, **V** numerically verified, **C** conjectured.

### What carries over in general {#dims-general}

- **The conserved label (D).** For a planar front with normal $\hat n$ and switch times $t_{\mathbf R}=\mathbf R\cdot\hat n/v$, the quench is invariant under $(\mathbf R,t)\to(\mathbf R+\mathbf R',\,t+\mathbf R'\cdot\hat n/v)$ for every lattice vector $\mathbf R'$. So $\boldsymbol\theta=\mathbf k-\omega(\mathbf k)\hat n/v$ (mod $2\pi$) is conserved, in any direction and for interacting models too.
  - For a free model, the ansatz $x_{\mathbf R}(t)=e^{i\boldsymbol\theta\cdot\mathbf R}X(t-\mathbf R\cdot\hat n/v)$ reduces the problem to one delay equation with a single switch. For $v$ above the maximal group velocity there is exactly one channel per sign of $\omega$: the same $2\times2$ structure as in 1D.
  - Axis-aligned fronts keep the simple one-site, $1/v$ period. A rational direction $\tan\varphi=p/q$ becomes a supercell of $p^2+q^2$ sites with $p^2+q^2$ switch instants per period. Irrational directions keep the Bloch reduction, with incommensurate delays.
  - Only axis-aligned fronts have been solved.
- **The work identity (D, V)** $\eqref{eq:work-identity}$ needs only a shared initial state and final $H$. It is verified in the interacting 2D TFIM (ED, $\le5\times10^{-10}$) and in a long-range chain ($3\times10^{-9}$).
- **The ballistic picture** holds while the emitted quanta are dilute ($n\sim10^{-3}$–$10^{-2}$ here).

### Planar fronts in the 2D free boson: an exact solution {#dims-boson}

**Sector decomposition (D, V).** Take an $N\times L_y$ square lattice, Dirichlet in $x$ and periodic in $y$, with column $x$ switched at $t_x=\vert x-x_c\vert/v$. The Fourier sectors $k_n=2\pi n/L_y$ decouple exactly: each is the 1D chain with a uniform extra mass $M_n^2=4\sin^2(k_n/2)$ plus $m^2f_x$. By Parseval, the column energy (site partition) is $L_y^{-1}\sum_n e_n(x)$, for the state and for every product reference.

- This is verified against a dense exact 2D stroboscopic evolution ($N=24$, $L_y=4$): the column excess agrees to $4.6\times10^{-15}$ and the work identity holds to $10^{-13}$ (`boson2d_sector_identity.py`).
- Uniform reference: $\varepsilon_u(m;M)=\frac1\pi\int_0^\pi\frac{(\Omega-\omega)^2}{4\Omega}\mathrm{d}k$, with $\Omega^2=m^2+M^2+4\sin^2\frac k2$ and $\omega^2=M^2+4\sin^2\frac k2$. Then $\varepsilon_u^{2D}=\frac1\pi\int_0^\pi\mathrm{d}k_y\,\varepsilon_u(m;2\sin\frac{k_y}2)$, which is $2.10286\times10^{-4}$ at $m=0.25$ and $1.67651\times10^{-3}$ at $m=0.5$.

**Sector Floquet–Bloch solution (D, V).** Each sector obeys $p'=r$, $r'=e^{i\theta}p(s-h)+e^{-i\theta}p(s+h)-(2+M^2+m^2\Theta(-s))p$, with $\omega=\sqrt{M^2+4\sin^2(k/2)}$ behind the front and $v_g=\sin k/\omega<1$. The flux is $C=2\varepsilon(1-v_g/v)$, $S$ is pseudo-unitary, and $n(k;M)=\vert S_{+-}\vert^2$.

- For $M>0$ there is no soft channel, and $\theta=0$ is regular. The $k$ grid is graded around the $\theta$-images of the fastest in- and out-modes, where the out$_-$ partner folds.
- Checks (`boson2d_floquet.py --part checks`): $M=0$ reproduces `floquet_front` ($D$ to $10^{-13}$); pseudo-unitarity holds to $\le6\times10^{-13}$; $W_{\rm single}$ agrees with the sector stroboscopic single front to $2\times10^{-14}$; $\vert D_{\rm spec}-D_{\rm work}\vert\le4\times10^{-13}$.
- 2D quantities are sector averages, $Q^{2D}=\sum_nw_nQ(M_n)$, and $D_{2D}=\sum w\,\varepsilon_u D/\sum w\,\varepsilon_u$.

<div class="table-scroll" markdown="1">

| $m$ | $v$ | $e_h^{2D}/\varepsilon_u^{2D}$ | $e_{\rm cold}(0)/\varepsilon_u^{2D}$ | $D_{2D}$ | $D_{2D}/D_{1D}$ | share of $e_h$ from $M>m$ |
| --: | --: | --: | --: | --: | --: | --: |
| 0.25 | 1.5 | 1.83638 | 0.25080 | $1.78347\times10^{-2}$ | 2.69 | 0.323 |
| 0.25 | 2 | 1.38882 | 0.37228 | $4.30829\times10^{-3}$ | 3.00 | 0.363 |
| 0.25 | 3 | 1.15385 | 0.53493 | $7.09917\times10^{-4}$ | 3.14 | 0.386 |
| 0.5 | 1.5 | 1.62192 | 0.32624 | $2.62530\times10^{-2}$ | 1.91 | 0.298 |
| 0.5 | 2 | 1.31271 | 0.42702 | $6.60263\times10^{-3}$ | 2.08 | 0.342 |
| 0.5 | 3 | 1.12895 | 0.57237 | $1.10544\times10^{-3}$ | 2.15 | 0.368 |

</div>
<div class="caption" markdown="1">
Table 8: Planar fronts in the 2D lattice boson, $L_y=\infty$ (`boson2d_floquet.py --part table`). The [continuum](#dims-continuum) hot level is $2.2/1.5/1.1875$ at $v=1.5/2/3$; the lattice approaches it slowly in $m$.
</div>

**Two-front profile (D, V).** Per sector, $R_M(y)=\int\frac{\mathrm{d}k_x}{2\pi}\,\omega n\,\mathbf 1[v_xt\le y\le vt]$ with $v_x=\sin k_x/\omega(k_x;M)$, and $\varepsilon^{2D}(x,t)=\sum_nw_n[R_{M_n}(x)+R_{M_n}(-x)]$.

- Behind each front, the hot region is exactly the steady single front, pointwise. That is $e_h$ plus a pair-coherence cross term $\langle a_ka_q\rangle$ of the out$_+$ and out$_-$ waves at equal $\theta$, with phase $(k+q)d$ at distance $d$.
- In massive sectors this ripple is large ($e/e_h$ between $-4.6$ and $+5.8$ at $M=2$), but it is given exactly by the Floquet mode functions (agreement with the stroboscopic single front to $\le10^{-9}$).
- Inside $\vert x\vert<t$, $v_x$ spans $(0,1)$ for every $M>0$, so the cold region is a continuous bowl. Only the $k_y=0$ sector keeps a step at $\vert x\vert=t$.

Validation ($L_y=8$, $m=0.5$, $v=2$; exact sector stroboscopic sum, bulk reference, ends excluded; `boson2d_profile_check.py`):

- with Eq. $\eqref{eq:ball}$ per sector: hot mean $-0.49\%$, cold mean $-0.31\%$, 11-site RMS 1.40% of $e_h$ ($N=240$);
- adding the coherence term inside $\vert x\vert<t$ while $d\le(v-\bar v)t$ (a **C** closure): cold $+0.08\%$, RMS 0.30%.

### Planar fronts in the 2+1D continuum {#dims-continuum}

**Boost (D, V).** In the front frame ($u=1/v$, $\gamma=(1-u^2)^{-1/2}$, $\eta_0=e^{\operatorname{artanh}u}$) the quench is a sudden uniform one, with the isotropic $n_u(k')=(\Omega-k')^2/(4\Omega k')$ and $\varepsilon_u^{2D}=m^3/(24\pi)$. Phase-space density is a Lorentz scalar, so $n_{\rm lab}(\mathbf k)=n_u(\omega')$ with $\omega'=\gamma(\omega-uk_x)$. With $P'=T'^{xx}$ (front frame),

$$
e_h=\gamma^2(\varepsilon_u+u^2P'),\qquad J_E=\gamma^2u(\varepsilon_u+P'),\qquad \varepsilon_s=e_h-J_E/v=\varepsilon_u\ \text{(any }P'),
$$

and for the dephased massless 2D gas $P'=\varepsilon_u/2$, so $e_h^{2D}/\varepsilon_u=\gamma^2(1+u^2/2)=\frac{2v^2+1}{2(v^2-1)}=2.2/1.5/1.1875$ at $v=1.5/2/3$. In $d$ dimensions this is $\gamma^2(1+u^2/d)$; 1D gives $(\eta_0^2+\eta_0^{-2})/2$, Eq. $\eqref{eq:cont}$.

**The geometric separation fails already in the continuum (D, V).** Oblique quanta have $v_x=k_x/\vert\mathbf k\vert<1$. The right front's quanta with $v_x=c$ fill $[ct,vt]$, and their energy per unit $c$ is

$$
\rho(c)=\frac{\varepsilon_u}{\pi}\frac{(1-u^2)^{3/2}}{(1-uc)^3\sqrt{1-c^2}},
$$

spread over $(-1,1)$. The profile is $\varepsilon(x,t)=\Phi(s)+\Phi(-s)$, with $s=x/t$ and $\Phi(s)=E(v_x<s)$:

- zero for $\vert x\vert>vt$;
- exactly $e_h$ for $t<\vert x\vert<vt$;
- inside, a monotone bowl with a quadratic bottom and a square-root cusp at $\vert x\vert=t$, $\varepsilon=e_h-C\sqrt{1-\vert s\vert}$ with $C/\varepsilon_u=(\sqrt2/\pi)(\eta_0^3-\eta_0^{-3})$ (exponent $(d-1)/2$ in $d$ dimensions).

A point $0<x<t$ receives the counter-moving quanta of both fronts and the co-moving quanta of the nearer front with $0<v_x<x/t$. The centre is purely counter-moving, as in 1D. What 2D loses is the cold *plateau*.

<div class="table-scroll" markdown="1">

| $v$ | $s=0$ | $0.25$ | $0.5$ | $0.75$ | $0.9$ | $0.99$ | hot $\vert s\vert\ge1$ |
| --: | --: | --: | --: | --: | --: | --: | --: |
| 1.5 | 0.16569 | 0.18324 | 0.25217 | 0.46604 | 0.86871 | 1.71018 | 2.2 |
| 2 | 0.31084 | 0.33106 | 0.40365 | 0.58650 | 0.84964 | 1.27691 | 1.5 |
| 3 | 0.49293 | 0.51007 | 0.56794 | 0.69564 | 0.85279 | 1.07667 | 1.1875 |

</div>
<div class="caption" markdown="1">
Table 9: Continuum 2D profile $\varepsilon(x,t)/\varepsilon_u$ (`continuum2d_front.py`). The 1D cold/hot levels for comparison are $0.2/2.6$, $0.333/1.667$ and $0.5/1.25$. The mean over $\vert x\vert<t$ is $\varepsilon_u(2-u)/(2(1+u))$.
</div>

<!-- FIGURE IDEA: the 2D continuum bowl (Table 9) against the 1D plateau, for v = 1.5, 2, 3. -->

**Near-front coherent layer (D, V; no 1D counterpart).** Before dephasing, $P'(t')$ starts at $-\varepsilon_u$ (the Lorentz-invariant massive vacuum) and relaxes as Bessel/Struve functions. In the lab, $e(\Delta x)$ rises from $\varepsilon_u$ just behind the front to $e_h$, with a tail $e-e_h\simeq-m/(64\pi\Delta x^2)$ independent of $v$. The layer rides with the front and changes neither $\varepsilon_s$ nor the bulk densities.

### The precursor in any dimension {#prec-any}

**General leading order (D).** With $H(t)=H_m+\sum_l\theta(t-t_l)\Delta H_l$, work operator $O_j=\Delta H_j$ and lags $\tau_l=t_j-t_l$:

$$
\delta\langle O_j\rangle=i\sum_l\tau_l\langle[\Delta H_l,O_j]\rangle-\tfrac12\sum_l\tau_l^2\langle[\Delta H_l,[H_m,O_j]]\rangle_m
+\sum_{l,l'}c_{ll'}\langle[\Delta H_l,[\Delta H_{l'},O_j]]\rangle+O(\tau^3),
$$

with $c_{ll'}=-\tfrac12\min(\tau_l,\tau_{l'})^2-\theta(\tau_l-\tau_{l'})\tau_{l'}(\tau_l-\tau_{l'})$.

- The cross terms are of the same order in the lag. They drop out here only because all the $\Delta H$ commute ($s^z$, $\phi^2$).
- Odd orders vanish when $H$, $\psi_m$, $\Delta H$ and $O$ are real (time reversal), so the series runs in $1/v^2$.
- Sites switched at the same instant as $j$ never contribute.

*Counting rule:* the order is the smallest even number of commutators (one $\Delta H_l$, the rest $H_m$) with a non-zero expectation. For the TFIM, a site at graph distance $d$ enters at $O(\tau^{2d})$. Long-range couplings make every pair distance one. The boson needs four commutators.

**Planar 2D TFIM (D, V).** $H=-\sum XX-\sum gZ$ and $\Delta H_l=+hZ_l$ ($g$: $g_c+h\to g_c$). Since $[H_m,Z_j]=2i\sum_{i\sim j}X_iY_j$ and $[hZ_l,2iX_lY_j]=-4hY_lY_j$, with $l=(x-1,y)$ the only earlier neighbour,

$$
\delta\langle Z_j(t_j)\rangle=2h\langle Y_lY_j\rangle_m\tau^2+O(\tau^4),\qquad W^u-W=-\frac{2h^2\langle Y_lY_j\rangle_m}{v^2}.
$$

- ED on a $4\times3$ cylinder ($g_c(3)=2.54085$, $h=5g_c$) gives the exact Taylor coefficient $c_2=-0.83144752$, equal to $2h\langle YY\rangle$ to 8 digits, with $c_1=c_3=0$. The work identity holds to $5\times10^{-10}$ (`tfim2d_precursor_ed.py`).
- $\langle YY\rangle_m$ is cheap: first-order perturbation theory gives $-1/(2g)$, good to 0.3% at $6g_c$ (`tfim2d_yy_gs.py`).
- Oblique fronts agree at $O(v^{-2})$ (square symmetry) and differ at $O(v^{-4})$ (`tfim2d_oblique_ed.py`).

**The strong-field regime is not perturbative (D, V).** At $h=5g_c$, with $S'=g_m+g_c\approx$ 18–20, the $\tau^2$ law needs $v\gtrsim100$. A strong-field two-level resummation (the bond pair's $\vert{\uparrow\uparrow}\rangle/\vert{\downarrow\downarrow}\rangle$ amplitude after $l$ is quenched) gives, to leading order in $1/g$ and all orders in the lag,

$$
\delta\langle Z_j\rangle=2h\langle Y_lY_j\rangle_m\frac{\sin^2(S'\tau)}{S'^2},\qquad W^u-W=\frac{h^2}{g_mS'^2}\sin^2(S'/v),
$$

within 4% of ED for $v\gtrsim10$. The sharp-front deficit on these cylinders is therefore oscillatory in $v$, with nodes near $v\approx S'/(n\pi)$. Smooth fronts with $\tau=0.4$ ($S'\tau\approx$ 7–8) switch each bond pair nearly adiabatically, so for them this sharp-front deficit is not the relevant lattice effect; the emission threshold is.

**Boson, closed form (D, V).** The equations of motion carry the mass change of $j-1$ to $\langle\phi_j^2\rangle$ in four steps, $\delta\langle\phi_j^2\rangle=(m^2\tau^4/12)\langle\phi_{j-1}\phi_j\rangle_m+O(\tau^6)$. Hence, with $\mu^2=m^2+M^2$ in a sector, $G_p=\langle\phi_j\phi_{j-p}\rangle_{\mu^2}$ and $P_1=\langle\pi_j\pi_{j-1}\rangle$,

$$
W^u-W=m^4\Bigl[\frac{G_1}{24}\tau^4+\Bigl(-\frac{(2+\mu^2)G_1}{360}-\frac{P_1}{72}+\frac{4G_2}{45}+\frac{m^2G_1}{720}\Bigr)\tau^6+O(\tau^8)\Bigr],
\qquad \lim v^4D=\frac{m^4G_1}{24\,\varepsilon_u}.
$$

- For small $m$: $C_4=(m^2/6)[\ln(8/m)-2]$ in 1D, and linear in $m$ in 2D ($C_4^{2D}\to\pi G_1^{2D}(0)m$, $G_1^{2D}(0)=0.0819183$).
- This is checked against the exact solver and an exact stroboscopic evolution, including a genuine $40\times4$ 2D lattice, to 10 digits (`boson_precursor_order4.py`, `boson_precursor_2d.py`).

**Long-range couplings (D; C beyond strong field).** $\delta\langle Z_j\rangle=2h\sum_{r\ge1}J(r)\langle Y_{j-r}Y_j\rangle_m(r/v)^2$. With $\langle Y_0Y_r\rangle\simeq-J(r)/(2g_m)$, $W^u-W=(h^2/g_m)\zeta(2\alpha-2)/v^2$, which is finite only for $\alpha>3/2$. In the two-level form, the deficit scales as $\ln v/v^2$ at $\alpha=3/2$ and as $v^{1-2\alpha}$ for $1/2<\alpha<3/2$ (`lrtfim_precursor.py`). The long-range production fronts are smooth, so these sharp-front numbers do not apply to them directly.

### Interacting models {#interacting}

**Carries over:**

- the work identity;
- the leading-order precursor, with the interacting ground-state correlator. For the staggered XXZ chain, $W^u-W_j=-(h_0^2J/2)\langle S^x_{j-1}S^x_j+S^y_{j-1}S^y_j\rangle_m/v^2$ (derived but not yet checked); $\Delta$ enters only through the in-plane correlator;
- the conserved label $\boldsymbol\theta$, hence the pair kinematics $k+q=(\omega_k+\omega_q)/v$ mod $2\pi$, the emission threshold and the Doppler assignment;
- the ballistic picture, while the quasiparticles are dilute: generalised hydrodynamics with dressed velocities in the integrable XXZ chain, and finite lifetimes with late-time relaxation inside $\vert x\vert<t$ in the non-integrable 2D TFIM and long-range chains.

**Does not carry over:**

- the exact $2\times2$ closure, which needs a quadratic theory, so $n(k)$ must come from numerics or from a Born approximation with interacting correlators;
- closed-form references: $\varepsilon_u$ and $\langle YY\rangle_m$ need ED or DMRG;
- the continuum boost result for $e_h$, which becomes a dilute-gas statement once the final critical state is interacting;
- the apex population, which lies outside the single-front theory in every dimension and model.

### Open problems

1. An exact two-front treatment of the pair-coherence term inside $\vert x\vert<t$ in massive sectors.
2. The slow $m\to0$ approach of the lattice $e_h^{2D}/\varepsilon_u^{2D}$ to $\gamma^2(1+u^2/2)$.
3. The oblique-front solver (supercell window), and radial fronts (no single boost frame).
4. The precursor in the strong-field 2D TFIM regime beyond leading order in $1/g$, and $\langle YY\rangle_m$, $\varepsilon_u^{2D}$ by DMRG.
5. The XXZ precursor check at $\Delta=0$.
6. The apex population in every geometry.

**Scripts for this section** (in [`reports/s2_theory/scripts/`]({{ page.repo }}/reports/s2_theory/scripts/); run from the repository root, one thread):
{: #dims-scripts}

<div class="table-scroll" markdown="1">

| script | content | runtime |
| :-- | :-- | --: |
| `boson2d_lib.py` | library: sector Floquet solver, grids, steady profile, pair coherence, sector and dense 2D stroboscopic | – |
| `boson2d_sector_identity.py` | exact sector decomposition vs dense 2D evolution | 0.5 s |
| `boson2d_floquet.py --part checks\|table\|largev` | sector solver checks; 2D tables; large-$v$ deficit | 13 / 74 / 65 s |
| `boson2d_profile_check.py [--N 240]` | two-front validation ($L_y=8$, $m=0.5$, $v=2$) | 15–18 s |
| `continuum2d_front.py` | 2+1D continuum closed forms and profiles | 2 s |
| `boson_precursor_order4.py` | boson $C_4$, $C_6$, exact solvers, fits | 32 s |
| `boson_precursor_2d.py` | 2D sector averages, genuine 2D lattice | 13 s |
| `tfim2d_precursor_ed.py` | 2D TFIM ED: Taylor coefficients, work identity, two-level model | 2 s |
| `tfim2d_yy_gs.py` | $\langle YY\rangle_m$ by ED and perturbation theory | 10 s |
| `tfim2d_oblique_ed.py` | oblique precursor, $4\times4$ ED | 16 s |
| `lrtfim_precursor.py` | long-range sums, two-level forms, $N=14$ ED | 42 s |

</div>

## Reproducing everything {#repro}

All of this is on the [`blog-sections` branch]({{ page.repo }}/) of the repository. The Python environment comes from `uv.lock` (`uv sync`).

1. *Fast checks* (seconds):

   ```bash
   python -m theory.floquet_front     # spectra, levels, two routes to D
   python -m theory.front_born        # Born, c2 vs Kubo, series
   python -m sections.s2_superluminal.lattice_check --smoke   # A1
   uv run python smoke_test.py        # includes A1
   ```

2. *A minimal end-to-end comparison* (about 30 s):

   ```python
   import numpy as np
   from theory import floquet_front as ff, ballistic as bl
   from gaussian.stroboscopic import ising_sharp
   from theory.superluminal import super_regions
   mu, v, N = 0.25, 1.5, 400
   sp = ff.spectrum("ising", mu, v)                  # n(k) = |S_{+-}(theta(k))|^2
   eu = ff.uniform_density("ising", mu)
   print(ff.levels(sp, eu))                          # e_h, e_cold_center, J_E, eps_s, D
   r = ising_sharp(N, v, mu)                         # exact, dt-free, ends at t_q
   t = r["t_q"]; x = np.arange(N) - 0.5 * (N - 1)
   cold, hot = super_regions(N, t, v)
   pred = bl.profile(sp, x, t)                       # ballistic profile
   print(r["de"][hot].mean() / pred[hot].mean() - 1,
         r["de"][cold].mean() / pred[cold].mean() - 1)
   ```

   Expected output (33 s on one core): `D = 0.280241`, `e_h = 0.011987`, and the ratios $-2.9\times10^{-4}$ (hot) and $-3.3\times10^{-3}$ (cold). Here `de` is referenced to the finite chain's ground state and the end sites are kept. The bulk reference and the end exclusion of the [validation](#validation) move the cold ratio to $-2.9\times10^{-3}$ (A3).
3. *Production data* (time-stepped runs, report `results/s2_summary.md`): `uv run python -m sections.s2_superluminal.run`, then `uv run python -m sections.s2_superluminal.report`.
4. *Diagnostics*: `python -m sections.s2_superluminal.super_check` (momentum-resolved energy, band edges; 2 min) and `python -m sections.s2_superluminal.mode_check` (work identity, precursor, scaling; 1 h).
5. *Validation A1–A10*: `python -m sections.s2_superluminal.lattice_check` (5 min).
6. *Higher dimensions*: the [scripts](#dims-scripts) in `reports/s2_theory/scripts/`.
7. *Smooth fronts*: the [scripts](#tau-scripts) of that section, for example

   ```bash
   python reports/s2_theory/scripts/tau_continuum.py --part checks
   python reports/s2_theory/scripts/tau_floquet.py --part checks
   python reports/s2_theory/scripts/tau_floquet.py --part table      # levels, D, R
   python -m sections.s2_superluminal.tau_check --smoke
   python -m sections.s2_superluminal.tau_check                      # validation (a job)
   ```

   A smooth front in a few lines:

   ```python
   import numpy as np
   from theory import floquet_smooth as fs, ballistic as bl
   sp = fs.solve("ising", 0.5, 1.5, 1.0, "tanh")     # mu, v, tau, profile
   print(fs.all_levels(sp))                          # e_h, e_cold, J_E, eps_s, D
   x = np.arange(400) - 199.5
   e = bl.profile(sp, x, 133.0)                      # ballistic profile at t = 133
   ```

8. *Entanglement and correlations* (the check reads the saved records of `run.py` and `tau_check.py` and runs no simulation):

   ```bash
   python -m theory.gge                  # GGE self-tests (closed form, currents, uniform quench)
   python -m theory.pair_counting        # continuum identity; lattice slopes at v = 1.5
   python -m theory.chiral_cft           # Doppler identity; lattice thermal entropy
   python -m sections.s2_superluminal.corr_check --smoke   # self-tests (a few s)
   python -m sections.s2_superluminal.corr_check           # C1-C13 report and figures (42 s)
   ```

## References

- N. D. Birrell and P. C. W. Davies, *Quantum Fields in Curved Space* (Cambridge University Press, 1982): the tanh-ramp occupation, Eq. 3.89.
- P. Calabrese, F. H. L. Essler and M. Fagotti, quench dynamics of the transverse-field Ising chain (2011): the CEF decay rate of $\langle\sigma^x\sigma^x\rangle$.
- V. Alba and P. Calabrese, entanglement and thermodynamics after a quantum quench in integrable systems (2017): the quasiparticle pair-counting picture.
- C. N. Yang and C. P. Yang (1969): the Yang–Yang entropy of a GGE.

<!-- TODO: turn these into a _bibliography/superluminal.bib file and {% raw %}{% cite %}{% endraw %} them like the InstrumentalEval post. -->
