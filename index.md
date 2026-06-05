<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>About Me — Harsh Vashistha</title>
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

    /* ══ Header ══ */
    .site-header {
      position: relative;
      width: 100%;
      min-height: 300px;
      background-color: #1a1a2e;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 60px 24px;
    }

    .header-bg {
      position: absolute;
      inset: 0;
      background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/CajalFlyBrain.jpg/800px-CajalFlyBrain.jpg');
      background-size: cover;
      background-position: center;
      opacity: 0.10;
      filter: grayscale(100%);
      transform: scale(1.05);
    }

    .header-content {
      position: relative;
      z-index: 1;
      text-align: center;
    }

    .header-name {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 3rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: 0.04em;
      margin-bottom: 10px;
    }

    .header-title {
      font-size: 1.1rem;
      color: #a0bcd8;
      letter-spacing: 0.08em;
      margin-bottom: 28px;
    }

    .header-nav {
      display: flex;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    .header-nav a {
      color: #ffffff;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      padding: 8px 20px;
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 24px;
      transition: background 0.2s ease, border-color 0.2s ease;
    }

    .header-nav a:hover {
      background: rgba(74, 144, 217, 0.35);
      border-color: #4a90d9;
    }

    .header-nav a.active {
      background: rgba(74, 144, 217, 0.35);
      border-color: #4a90d9;
    }

    /* ══ Page Wrapper ══ */
    .page-wrapper {
      max-width: 900px;
      margin: 60px auto;
      padding: 0 24px;
    }

    /* ── Hero Card ── */
    .hero-card {
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
      padding: 40px;
      display: flex;
      gap: 36px;
      align-items: center;
      margin-bottom: 28px;
    }

    .hero-card img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid #4a90d9;
      flex-shrink: 0;
    }

    .hero-info h1 {
      font-size: 1.9rem;
      font-weight: 700;
      color: #1a1a2e;
      margin-bottom: 4px;
    }

    .hero-info .role {
      font-size: 1rem;
      color: #4a90d9;
      font-weight: 600;
      margin-bottom: 14px;
    }

    .hero-info p {
      font-size: 0.97rem;
      color: #3a3a3a;
      margin-bottom: 16px;
    }

    .hero-info p:last-child {
      margin-bottom: 0;
    }

    .hero-info a {
      color: #4a90d9;
      text-decoration: none;
      font-weight: 500;
    }

    .hero-info a:hover {
      text-decoration: underline;
    }

    .email-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #f0f6ff;
      border: 1px solid #c8dff8;
      border-radius: 8px;
      padding: 7px 14px;
      font-size: 0.9rem;
      color: #2c2c2c;
      margin-bottom: 16px;
      text-decoration: none;
    }

    .email-badge:hover {
      background: #dceeff;
    }

    .email-badge span.icon {
      font-size: 1rem;
    }

    /* ── Section Cards ── */
    .section-card {
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.07);
      padding: 32px 40px;
      margin-bottom: 28px;
    }

    .section-card h2 {
      font-size: 1.2rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #1a1a2e;
      border-bottom: 3px solid #4a90d9;
      padding-bottom: 10px;
      margin-bottom: 24px;
    }

    /* ── Research Interests Tags ── */
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .tag {
      background: #eef4fd;
      color: #2a6db5;
      border-radius: 20px;
      padding: 6px 16px;
      font-size: 0.88rem;
      font-weight: 500;
      border: 1px solid #c5daef;
    }

    /* ── Research Timeline ── */
    .timeline {
      display: flex;
      flex-direction: column;
      gap: 28px;
    }

    .timeline-item {
      border-left: 3px solid #4a90d9;
      padding-left: 20px;
      position: relative;
    }

    .timeline-item::before {
      content: '';
      width: 11px;
      height: 11px;
      background: #4a90d9;
      border-radius: 50%;
      position: absolute;
      left: -7px;
      top: 6px;
    }

    .timeline-item .tl-label {
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #4a90d9;
      margin-bottom: 4px;
    }

    .timeline-item h3 {
      font-size: 1.05rem;
      font-weight: 700;
      color: #1a1a2e;
      margin-bottom: 2px;
    }

    .timeline-item .tl-sub {
      font-size: 0.88rem;
      color: #777;
      margin-bottom: 10px;
    }

    .timeline-item p {
      font-size: 0.96rem;
      color: #3a3a3a;
    }

    /* ── Beyond the Lab ── */
    .hobby-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .hobby-item {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      background: #f9fbfe;
      border-radius: 10px;
      padding: 16px 20px;
      border: 1px solid #e4edf8;
    }

    .hobby-item .hobby-icon {
      font-size: 1.6rem;
      flex-shrink: 0;
    }

    .hobby-item h4 {
      font-size: 0.95rem;
      font-weight: 700;
      color: #1a1a2e;
      margin-bottom: 3px;
    }

    .hobby-item p {
      font-size: 0.9rem;
      color: #555;
    }

    /* ── Mobile ── */
    @media (max-width: 620px) {
      .header-name {
        font-size: 2rem;
      }

      .header-title {
        font-size: 0.95rem;
      }

      .site-header {
        min-height: 240px;
        padding: 40px 16px;
      }

      .hero-card {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 28px 20px;
      }

      .hero-card img {
        width: 120px;
        height: 120px;
      }

      .section-card {
        padding: 24px 20px;
      }

      .hero-info h1 {
        font-size: 1.5rem;
      }

      .page-wrapper {
        margin: 28px auto;
      }
    }
  </style>
</head>
<body>

  <!-- ══ Header ══ -->
  <header class="site-header">
    <div class="header-bg"></div>
    <div class="header-content">
      <h1 class="header-name">Harsh Vashistha</h1>
      <p class="header-title">Postdoctoral Associate &nbsp;·&nbsp; Visual Neuroscience &nbsp;·&nbsp; Yale University</p>
      <nav class="header-nav">
        <a href="index.html" class="active">About</a>
        <a href="research.html">Research</a>
        <a href="publications.html">Publications</a>
        <a href="cv.html">CV</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
  </header>

  <!-- ══ Page Content ══ -->
  <div class="page-wrapper">

    <!-- Hero -->
    <div class="hero-card">
      <img src="Picture.png" alt="Profile photo of Harsh Vashistha" />
      <div class="hero-info">
        <h1>Harsh Vashistha</h1>
        <div class="role">Postdoctoral Associate — Neuroscience</div>
        <a class="email-badge" href="mailto:harsh.vashistha@yale.edu">
          <span class="icon">✉</span> harsh.vashistha@yale.edu
        </a>
        <p>
          I am a postdoctoral associate in the
          <a href="https://clarklab.yale.edu/">Clark Lab</a> at Yale University,
          led by <a href="https://clarklab.yale.edu/">Dr. Damon Clark</a>.
          My research sits at the intersection of neuroscience, biophysics, and
          visual ecology, where I investigate how neural circuits process complex
          visual patterns encountered in the natural world.
        </p>
        <p>
          I use the fruit fly (<em>Drosophila melanogaster</em>) as a model organism,
          combining psychophysical behavioural experiments with live two-photon calcium
          imaging to dissect the circuit-level computations underlying visual perception.
        </p>
      </div>
    </div>

    <!-- Research Interests -->
    <div class="section-card">
      <h2>Research Interests</h2>
      <div class="tags">
        <span class="tag">Neural Circuits</span>
        <span class="tag">Visual Processing</span>
        <span class="tag">Drosophila</span>
        <span class="tag">Two-Photon Imaging</span>
        <span class="tag">Psychophysics</span>
        <span class="tag">Microfluidics</span>
        <span class="tag">Biophysics</span>
        <span class="tag">Cell Growth Dynamics</span>
        <span class="tag">Natural Scenes</span>
      </div>
    </div>

    <!-- Research -->
    <div class="section-card">
      <h2>Research</h2>
      <div class="timeline">

        <div class="timeline-item">
          <div class="tl-label">Current</div>
          <h3>Visual Neuroscience</h3>
          <div class="tl-sub">Postdoctoral Associate — Clark Lab, Yale University</div>
          <p>
            My current work focuses on understanding how neural circuitry interprets
            complex visual patterns present in naturalistic environments. By pairing
            rigorous behavioural assays with live two-photon imaging of identified
            neurons in <em>Drosophila</em>, I aim to reveal the computational strategies
            the brain employs to transform raw visual input into meaningful perceptual
            representations.
          </p>
        </div>

        <div class="timeline-item">
          <div class="tl-label">PhD</div>
          <h3>Biophysics and Bacterial Growth</h3>
          <div class="tl-sub">
            PhD in Physics — Salman Lab, University of Pittsburgh
            &nbsp;|&nbsp; Advisor: <a href="https://salmanhanna.wixsite.com/salman-lab/">Dr. Hanna Salman</a>
          </div>
          <p>
            My doctoral research explored the growth dynamics of <em>Escherichia coli</em>
            at the single-cell level. I designed and fabricated a specialised microfluidic
            device that allowed me to track individual bacterial cells across multiple
            consecutive generations, revealing how physical traits such as cell size are
            inherited and regulated over time. This work provided quantitative insights
            into the biophysical mechanisms governing cell-size homeostasis.
          </p>
        </div>

      </div>
    </div>

    <!-- Beyond the Lab -->
    <div class="section-card">
      <h2>Beyond the Lab</h2>
      <div class="hobby-list">

        <div class="hobby-item">
          <div class="hobby-icon">🏏</div>
          <div>
            <h4>Cricket</h4>
            <p>An avid player who enjoys the strategy and camaraderie the sport demands.</p>
          </div>
        </div>

        <div class="hobby-item">
          <div class="hobby-icon">🏺</div>
          <div>
            <h4>Archaeological Discoveries</h4>
            <p>Fascinated by how ancient civilisations lived, and always eager to read about the latest excavations and findings.</p>
          </div>
        </div>

        <div class="hobby-item">
          <div class="hobby-icon">🎵</div>
          <div>
            <h4>Live Music</h4>
            <p>A regular at concerts across genres, believing that live performance offers an irreplaceable connection between artist and audience.</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</body>
</html>
