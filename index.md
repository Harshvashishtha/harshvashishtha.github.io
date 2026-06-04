<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>About Me</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f9f9f9;
      color: #2c2c2c;
      line-height: 1.75;
    }

    .page-wrapper {
      max-width: 860px;
      margin: 60px auto;
      padding: 0 24px;
    }

    h1.page-title {
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #1a1a2e;
      margin-bottom: 40px;
      border-bottom: 3px solid #4a90d9;
      padding-bottom: 10px;
    }

    .profile-card {
      display: flex;
      gap: 36px;
      align-items: flex-start;
      background: #ffffff;
      border-radius: 12px;
      padding: 36px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
    }

    .profile-image-wrapper {
      flex-shrink: 0;
    }

    .profile-image-wrapper img {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid #4a90d9;
      display: block;
    }

    .profile-text p {
      font-size: 1rem;
      color: #3a3a3a;
      margin-bottom: 16px;
    }

    .profile-text p:last-child {
      margin-bottom: 0;
    }

    .profile-text a {
      color: #4a90d9;
      text-decoration: none;
      font-weight: 500;
      border-bottom: 1px solid transparent;
      transition: border-bottom 0.2s ease;
    }

    .profile-text a:hover {
      border-bottom: 1px solid #4a90d9;
    }

    .contact-section {
      margin-top: 36px;
      background: #ffffff;
      border-radius: 12px;
      padding: 24px 36px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .contact-section .label {
      font-weight: 600;
      color: #1a1a2e;
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .contact-section a {
      color: #4a90d9;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
    }

    .contact-section a:hover {
      text-decoration: underline;
    }

    /* Mobile */
    @media (max-width: 620px) {
      .profile-card {
        flex-direction: column;
        align-items: center;
        padding: 28px 20px;
      }

      .profile-image-wrapper img {
        width: 140px;
        height: 140px;
      }

      .profile-text {
        text-align: left;
      }

      h1.page-title {
        font-size: 1.5rem;
      }

      .contact-section {
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        gap: 6px;
      }

      .page-wrapper {
        margin: 32px auto;
      }
    }
  </style>
</head>
<body>
  <div class="page-wrapper">
    <h1 class="page-title">About Me</h1>

    <div class="profile-card">
      <div class="profile-image-wrapper">
        <img src="Picture.png" alt="Profile photo" />
      </div>
      <div class="profile-text">
        <p>
          I am a postdoctoral associate in neuroscience in the research group of
          <a href="https://clarklab.yale.edu/">Dr. Damon Clark</a> at Yale University.
          My research focuses on understanding how neural circuitry works to interpret
          complex visual patterns in the natural world. I use fruit fly as a model organism
          and perform psychophysical experiments combined with live 2-photon imaging to
          find answers to these problems.
        </p>
        <p>
          Prior to my current position, I completed my Ph.D. in physics with
          <a href="https://salmanhanna.wixsite.com/salman-lab/">Dr. Hanna Salman</a>
          at the University of Pittsburgh. During my doctoral studies, I explored the
          growth dynamics of bacterium <em>E. coli</em> and developed a specialized
          microfluidic device to study the inheritance patterns of physical cellular
          traits, such as cell size, across multiple generations of bacteria.
        </p>
        <p>
          Outside of my academic pursuits, I enjoy playing cricket, reading about
          archaeological discoveries, and attending live music concerts.
        </p>
        <p>
          Thank you for visiting my website. Please feel free to explore my work and
          reach out via email if you'd like to connect or discuss further.
        </p>
      </div>
    </div>

    <div class="contact-section">
      <span class="label">Email</span>
      <a href="mailto:harsh.vashistha@yale.edu">harsh.vashistha@yale.edu</a>
    </div>

  </div>
</body>
</html>
