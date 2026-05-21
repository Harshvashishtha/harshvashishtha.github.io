---
layout: page
title: ""
---

<style>
  .section-title {
    font-size: 1.8em;
    font-weight: bold;
    border-bottom: 3px solid #4a90d9;
    padding-bottom: 8px;
    margin-top: 40px;
    margin-bottom: 20px;
    color: #2c3e50;
  }

  .project-card {
    background: #f9f9f9;
    border-left: 5px solid #4a90d9;
    border-radius: 8px;
    padding: 20px 25px;
    margin-bottom: 30px;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.07);
  }

  .project-card h2 {
    margin-top: 0;
    color: #2c3e50;
  }

  .project-card p {
    color: #444;
    line-height: 1.7;
  }

  .pub-links {
    margin-top: 10px;
    font-size: 0.95em;
  }

  .pub-links a {
    color: #4a90d9;
    margin-right: 10px;
    text-decoration: none;
  }

  .pub-links a:hover {
    text-decoration: underline;
  }

  .video-container {
    margin-top: 15px;
    display: flex;
    gap: 15px;
    justify-content: center;
  }

  .video-container video {
    width: 60%;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.15);
  }
</style>

<div class="section-title">🔬 Current Projects</div>

<div class="project-card">
  <h2>Multiple cue integration in visual perception</h2>
  <p>
    To understand the three-dimensional structure of the world from the two-dimensional images 
    projected onto our retinas, our brains rely on inference mechanisms. Due to the inherent noise 
    in natural visual environments, a single visual cue often fails to provide enough information 
    to make a reliable inference. In this case, our brains integrate evidence from multiple visual 
    cues to make accurate inferences. This project seeks to investigate the neural processes 
    underlying the integration of multiple visual cues related to a single visual event, aiming 
    to reveal the mechanisms and brain regions involved in generating coherent visual perceptions.
  </p>
</div>

<div class="project-card">
  <h2>Motion computation in olfaction</h2>
  <p>
    Odor-direction sensing is a fascinating aspect of sensory biology, where organisms demonstrate 
    remarkable abilities to detect and navigate towards or away from specific odor sources. 
    Specialized sensory receptors interact with volatile molecules in the environment, triggering 
    signal transduction pathways that enable the organism to discern the direction of the odor 
    gradient. From insects to mammals, organisms employ diverse strategies for odor-direction 
    sensing — essential for foraging, predator avoidance, and mate selection. In this project we 
    are exploring various mechanisms that enable organisms to detect odors in diverse environments.
  </p>
  <div class="pub-links">
    📄 <a href="https://www.nature.com/articles/s41586-022-05423-4">Kadakia et al</a>
  </div>
</div>

---

<div class="section-title">📁 Past Projects</div>

<div class="project-card">
  <h2>Cell size regulation in <em>E. coli</em></h2>
  <p>
    Cell size regulation is a fundamental aspect of cell biology, essential for maintaining 
    cellular homeostasis and ensuring proper growth and division. Various factors, including 
    nutrient availability, environmental conditions, and genetic factors, can influence cell size. 
    <em>E. coli</em> cells employ sophisticated molecular machinery to monitor their size and 
    coordinate growth and division accordingly. In this project we developed a phenomenological 
    model of cell size homeostasis and experimentally altered molecular entities involved in cell 
    size monitoring to evaluate their effect on cell size.
  </p>
  <div class="pub-links">
    📄 <a href="https://www.nature.com/articles/s41467-023-41487-0">Vashistha et al</a>
    <a href="https://www.cell.com/current-biology/pdf/S0960-9822(20)31776-0.pdf">Kohram et al</a>
    <a href="https://www.pnas.org/doi/abs/10.1073/pnas.1615526115">Susman et al</a>
  </div>
   <video width="100px" autoplay muted playsinline loop style="border-radius: 8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.15); flex-shrink: 0;">
      <source src="/SV.mp4" type="video/mp4">
    </video>
  </div>
</div>

<div class="project-card">
  <h2>Non-genetic inheritance and phenotypic variability in <em>E. coli</em></h2>
  <div style="display: flex; gap: 20px; align-items: center;">
    <p style="flex: 1;">
      Stochasticity in biochemical processes leads to variability in physical properties of isogenic 
      cells over time. Although this heterogeneity helps cells survive changing environmental 
      conditions, it is partially restrained by the inheritance of cellular components between 
      consecutive generations. We answered key questions about the timescale of cellular property 
      changes and the reliability of non-genetic inheritance mechanisms by measuring inheritance 
      dynamics of sister cell properties. This study showed that non-genetic inheritance influences 
      cell properties over several generations — rather than the previously believed 1 or 2 — and 
      was corroborated by a theoretical model that reproduced multigenerational memory between 
      sister cells.
    </p>
    <video width="100px" autoplay muted playsinline loop style="border-radius: 8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.15); flex-shrink: 0;">
      <source src="/SV.mp4" type="video/mp4">
    </video>
  </div>
  <div class="pub-links">
    📄 <a href="https://elifesciences.org/articles/64779">Vashistha et al</a>
    <a href="https://www.cell.com/iscience/pdf/S2589-0042(21)01648-5.pdf">Stawsky et al</a>
    <a href="https://journals.aps.org/pre/abstract/10.1103/PhysRevE.108.L032401">ElGamel et al</a>
  </div>
