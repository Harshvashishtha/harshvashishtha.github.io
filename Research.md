
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Research — Harsh Vashistha</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f6f9;
      color: #2c2c2c;
      line-height: 1.75;
    }

    .page-wrapper {
      max-width: 900px;
      margin: 60px auto;
      padding: 0 24px;
    }

    /* ── Section Header ── */
    .section-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
      margin-top: 48px;
    }

    .section-header:first-child {
      margin-top: 0;
    }

    .section-header h2 {
      font-size: 1.35rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #1a1a2e;
      border-bottom: 3px solid #4a90d9;
      padding-bottom: 6px;
      flex: 1;
    }

    .section-header .section-icon {
      font-size: 1.5rem;
    }

    /* ── Project Card ── */
    .project-card {
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.07);
      padding: 32px 36px;
      margin-bottom: 24px;
      border-top: 4px solid #4a90d9;
      transition: box-shadow 0.2s ease;
    }

    .project-card:hover {
      box-shadow: 0 8px 32px rgba(74,144,217,0.13);
    }

    .project-card h3 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #1a1a2e;
      margin-bottom: 14px;
    }

    .project-card p {
      font-size: 0.96rem;
      color: #3a3a3a;
      line-height: 1.8;
    }

    /* ── Card with Video ── */
    .card-body {
      display: flex;
      gap: 24px;
      align-items: flex-start;
    }

    .card-body p {
      flex: 1;
    }

    .card-video {
      flex-shrink: 0;
      width: 200px;
    }

    .card-video video {
      width: 100%;
      border-radius: 10px;
      box-shadow: 2px 2px 12px rgba(0,0,0,0.12);
    }

    /* ── Publication Links ── */
    .pub-links {
      margin-top: 18px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
    }

    .pub-links .pub-label {
      font-size: 0.82rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #888;
      margin-right: 4px;
    }

    .pub-links a {
      display: inline-block;
      background: #eef4fd;
      color: #2a6db5;
      border: 1px solid #c5daef;
      border-radius: 20px;
      padding: 4px 14px;
      font-size: 0.85rem;
      font-weight: 500;
      text-decoration: none;
      transition: background 0.2s ease;
    }

    .pub-links a:hover {
      background: #d0e7f9;
      text-decoration: none;
    }

    /* ── Divider ── */
    .section-divider {
      border: none;
      border-top: 2px dashed #d0dce8;
      margin: 48px 0 0 0;
    }

    /* ── Mobile ── */
    @media (max-width: 620px) {
      .page-wrapper {
        margin: 28px auto;
      }

      .project-card {
        padding: 22px 18px;
      }

      .card-body {
        flex-direction: column;
      }

      .card-video {
        width: 100%;
      }

      .section-header h2 {
        font-size: 1.1rem;
      }
    }
  </style>
</head>
<body>
  <div class="page-wrapper">

    <!-- ══ Current Projects ══ -->
    <div class="section-header">
      <span class="section-icon">🔬</span>
      <h2>Current Projects</h2>
    </div>

    <!-- Project 1 -->
    <div class="project-card">
      <h3>Multiple Cue Integration in Visual Perception</h3>
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

    <!-- Project 2 -->
    <div class="project-card">
      <h3>Motion Computation in Olfaction</h3>
      <p>
        Odor-direction sensing is a fascinating aspect of sensory biology, where organisms demonstrate
        remarkable abilities to detect and navigate towards or away from specific odor sources.
        Specialised sensory receptors interact with volatile molecules in the environment, triggering
        signal transduction pathways that enable the organism to discern the direction of the odor
        gradient. From insects to mammals, organisms employ diverse strategies for odor-direction
        sensing — essential for foraging, predator avoidance, and mate selection. In this project we
        are exploring various mechanisms that enable organisms to detect odors in diverse environments.
      </p>
      <div class="pub-links">
        <span class="pub-label">📄 Publications</span>
        <a href="https://www.nature.com/articles/s41586-022-05423-4">Kadakia et al.</a>
      </div>
    </div>

    <hr class="section-divider" />

    <!-- ══ Past Projects ══ -->
    <div class="section-header" style="margin-top: 48px;">
      <span class="section-icon">📁</span>
      <h2>Past Projects</h2>
    </div>

    <!-- Project 3 -->
    <div class="project-card">
      <h3>Cell Size Regulation in <em>E. coli</em></h3>
      <div class="card-body">
        <p>
          Cell size regulation is a fundamental aspect of cell biology, essential for maintaining
          cellular homeostasis and ensuring proper growth and division. Various factors, including
          nutrient availability, environmental conditions, and genetic factors, can influence cell size.
          <em>E. coli</em> cells employ sophisticated molecular machinery to monitor their size and
          coordinate growth and division accordingly. In this project we developed a phenomenological
          model of cell size homeostasis and experimentally altered molecular entities involved in cell
          size monitoring to evaluate their effect on cell size.
        </p>
        <div class="card-video">
          <video autoplay muted playsinline loop>
            <source src="/Ecoli.mp4" type="video/mp4">
          </video>
        </div>
      </div>
      <div class="pub-links">
        <span class="pub-label">📄 Publications</span>
        <a href="https://www.nature.com/articles/s41467-023-41487-0">Vashistha et al.</a>
        <a href="https://www.cell.com/current-biology/pdf/S0960-9822(20)31776-0.pdf">Kohram et al.</a>
        <a href="https://www.pnas.org/doi/abs/10.1073/pnas.1615526115">Susman et al.</a>
      </div>
    </div>

    <!-- Project 4 -->
    <div class="project-card">
      <h3>Non-Genetic Inheritance and Phenotypic Variability in <em>E. coli</em></h3>
      <div class="card-body">
        <p>
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
        <div class="card-video">
          <video autoplay muted playsinline loop>
            <source src="/SV.mp4" type="video/mp4">
          </video>
        </div>
      </div>
      <div class="pub-links">
        <span class="pub-label">📄 Publications</span>
        <a href="https://elifesciences.org/articles/64779">Vashistha et al.</a>
        <a href="https://www.cell.com/iscience/pdf/S2589-0042(21)01648-5.pdf">Stawsky et al.</a>
        <a href="https://journals.aps.org/pre/abstract/10.1103/PhysRevE.108.L032401">ElGamel et al.</a>
      </div>
    </div>

  </div>
</body>
</html>
