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
    }

    /* ── Click-to-Play Video Wrapper ── */
    .video-wrapper {
      position: relative;
      display: inline-block;
      cursor: pointer;
      border-radius: 10px;
      overflow: hidden;
    }

    .video-wrapper video {
      display: block;
      border-radius: 10px;
      box-shadow: 2px 2px 12px rgba(0,0,0,0.12);
    }

    .click-label {
      text-align: center;
      font-size: 0.75rem;
      color: #888;
      margin-top: 6px;
    }

    .video-wrapper.playing ~ .click-label {
      visibility: hidden;
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
        width: 100% !important;
      }

      .card-video video {
        width: 100% !important;
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
  <div class="project-content" style="display: flex; align-items: flex-start; gap: 20px;">
    <p style="flex: 1;">
    </p>
    <div class="card-video" style="flex-shrink: 0; width: 300px;">
      <video autoplay muted playsinline loop style="width: 300px;">
        <source src="/Supplemental Video S1.mp4" type="video/mp4">
      </video>
    </div>
  </div>
  <div class="pub-links">
    <span class="pub-label">📄 Publications</span>
    <a href="https://www.biorxiv.org/content/10.64898/2026.06.05.730527v1">Vashistha et al.</a>
  </div>
</div>


  <script>
    document.querySelectorAll('.video-wrapper').forEach(function(wrapper) {
      const video = wrapper.querySelector('video');
      const label = wrapper.parentElement.querySelector('.click-label');

      wrapper.addEventListener('click', function () {
        if (video.readyState === 0) {
          video.load();
        }

        // Always restart from beginning — no pause on click
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(function () {
              wrapper.classList.add('playing');
              if (label) label.style.visibility = 'hidden';
            })
            .catch(function (err) {
              console.error('Video play failed:', err);
            });
        }
      });

      // When video ends, restore "Click to play" label
      video.addEventListener('ended', function () {
        wrapper.classList.remove('playing');
        if (label) label.style.visibility = 'visible';
      });
    });
  </script>

