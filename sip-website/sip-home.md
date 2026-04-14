---
layout: opencs
title: Soroptimist International of Poway
permalink: /
---

<style>
  /* ── Flower canvas ── */
  #flower-canvas {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  /* ── Card base ── */
  .sip-card {
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(0,0,0,0.4);
    text-decoration: none;
    display: block;
    transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
    cursor: default;
  }
  .sip-card:hover {
    transform: translateY(-4px) scale(1.015);
    box-shadow: 0 12px 36px rgba(0,0,0,0.55);
    filter: brightness(1.08);
  }
  .sip-card:active {
    transform: translateY(-1px) scale(1.005);
    filter: brightness(1.04);
  }

  /* ── Learn More button ── */
  .sip-btn {
    display: inline-block;
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 10px 20px;
    border-radius: 4px;
    text-decoration: none !important;
    color: #fff !important;
    transition: opacity 0.15s ease, transform 0.15s ease;
  }
  .sip-btn:hover {
    opacity: 0.88;
    transform: translateY(-1px);
    color: #fff !important;
  }
  .sip-btn:visited, .sip-btn:active {
    color: #fff !important;
  }

  /* ── Scroll-reveal for program cards ── */
  .reveal-card {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .reveal-card.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── Main content sits above canvas ── */
  #sip-main {
    position: relative;
    z-index: 1;
  }
</style>

<!-- Flower background canvas -->
<canvas id="flower-canvas"></canvas>

<div id="sip-main" style="font-family: 'Georgia', 'Times New Roman', serif; max-width: 1100px; margin: 0 auto; padding: 40px 24px;">

  <!-- Hero -->
  <div style="text-align: center; margin-bottom: 56px;">
    <div style="display: inline-block; border-top: 3px solid #e8836a; border-bottom: 3px solid #e8836a; padding: 10px 0; margin-bottom: 16px;"></div>
    <p style="font-size: 1.25rem; color: #e8836a; font-style: italic; margin: 0; letter-spacing: 0.06em;">Soroptimist International of Poway</p>
    <p style="font-size: 0.95rem; color: #aaa; margin-top: 14px; max-width: 560px; margin-left: auto; margin-right: auto; line-height: 1.7;">Empowering women and girls through programs that help them achieve their goals and reach their full potential.</p>
  </div>

  <!-- Get Involved Card -->
  <div style="margin-bottom: 24px; background: #111118; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.4); border-top: 4px solid #e8836a;">
    <div style="padding: 28px 26px 26px;">
      <div style="width: 44px; height: 44px; background: rgba(232,131,106,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 18px;">
        <span style="font-size: 1.4rem;">🤝</span>
      </div>
      <h2 style="font-size: 1.05rem; font-weight: 700; color: #f0ece6; text-transform: uppercase; letter-spacing: 0.07em; margin: 0 0 10px 0;">Get Involved</h2>
      <div style="width: 32px; height: 2px; background: #e8836a; margin-bottom: 14px;"></div>
      <p style="color: #aaa; font-size: 0.92rem; line-height: 1.75; margin: 0 0 24px 0;">Your time and generosity fuel real change. Every contribution — big or small — helps women and girls in our community build better lives.</p>

      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: stretch;">

        <!-- Support Us -->
        <div style="flex: 1; min-width: 220px; background: rgba(232,131,106,0.07); border: 1px solid rgba(232,131,106,0.25); border-radius: 6px; padding: 20px; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h3 style="font-size: 0.95rem; font-weight: 700; color: #f0ece6; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 8px 0;">💛 Support Us</h3>
            <p style="color: #999; font-size: 0.88rem; line-height: 1.7; margin: 0 0 16px 0;">Your donation directly funds scholarships, housing support, and career programs for women who need it most. Every dollar makes a measurable difference — giving a woman the resources she needs to become self-sufficient and thrive.</p>
          </div>
          <a href="https://www.paypal.com/us/fundraiser/charity/4220142" class="sip-btn" style="background: #e8836a; align-self: flex-start;">Donate Now</a>
        </div>

        <!-- Volunteer -->
        <div style="flex: 1; min-width: 220px; background: rgba(94,203,138,0.07); border: 1px solid rgba(94,203,138,0.25); border-radius: 6px; padding: 20px; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h3 style="font-size: 0.95rem; font-weight: 700; color: #f0ece6; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 8px 0;">🌿 Volunteer</h3>
            <p style="color: #999; font-size: 0.88rem; line-height: 1.7; margin: 0 0 16px 0;">Share your skills, time, and passion. Whether mentoring young women or helping at events, volunteers are the heart of everything we do in the Poway community. Your presence shows women and girls that people care — and that kind of support can change the course of a life.</p>
          </div>
          <a href="/sip/contact" class="sip-btn" style="background: #5ecb8a; align-self: flex-start;">Get Started</a>
        </div>

      </div>
    </div>
  </div>

  <!-- Program Cards Grid -->
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">

    <!-- Card 1: Transitional Housing -->
    <div class="sip-card reveal-card" style="background: #1e1e2a; border-top: 4px solid #e8836a;">
      <div style="padding: 28px 26px 26px; display: flex; flex-direction: column; height: 100%; box-sizing: border-box;">
        <div style="width: 44px; height: 44px; background: rgba(232,131,106,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 18px;">
          <span style="font-size: 1.4rem;">🏠</span>
        </div>
        <h2 style="font-size: 1.05rem; font-weight: 700; color: #f0ece6; text-transform: uppercase; letter-spacing: 0.07em; margin: 0 0 10px 0;">Transitional Housing</h2>
        <div style="width: 32px; height: 2px; background: #e8836a; margin-bottom: 14px;"></div>
        <p style="color: #aaa; font-size: 0.92rem; line-height: 1.75; margin: 0 0 20px 0; flex: 1;">Supporting women and families in need of safe, stable housing as they work toward independence and long-term stability in our community.</p>
        <a href="/sip/transitional-housing" class="sip-btn" style="background: #e8836a; align-self: flex-start;">Learn More</a>
      </div>
    </div>

    <!-- Card 2: Live Your Dream -->
    <div class="sip-card reveal-card" style="background: #1a1f2e; border-top: 4px solid #6ab0e8;">
      <div style="padding: 28px 26px 26px; display: flex; flex-direction: column; height: 100%; box-sizing: border-box;">
        <div style="width: 44px; height: 44px; background: rgba(106,176,232,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 18px;">
          <span style="font-size: 1.4rem;">⭐</span>
        </div>
        <h2 style="font-size: 1.05rem; font-weight: 700; color: #f0ece6; text-transform: uppercase; letter-spacing: 0.07em; margin: 0 0 10px 0;">Live Your Dream</h2>
        <div style="width: 32px; height: 2px; background: #6ab0e8; margin-bottom: 14px;"></div>
        <p style="color: #aaa; font-size: 0.92rem; line-height: 1.75; margin: 0 0 20px 0; flex: 1;">Awards education and training grants to women who are the primary financial supporters of their families, helping them gain the skills needed for a better life.</p>
        <a href="/sip/live-your-dream" class="sip-btn" style="background: #6ab0e8; align-self: flex-start;">Learn More</a>
      </div>
    </div>

    <!-- Card 3: Dream It, Be It -->
    <div class="sip-card reveal-card" style="background: #1e1d14; border-top: 4px solid #d4b84a;">
      <div style="padding: 28px 26px 26px; display: flex; flex-direction: column; height: 100%; box-sizing: border-box;">
        <div style="width: 44px; height: 44px; background: rgba(212,184,74,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 18px;">
          <span style="font-size: 1.4rem;">✨</span>
        </div>
        <h2 style="font-size: 1.05rem; font-weight: 700; color: #f0ece6; text-transform: uppercase; letter-spacing: 0.07em; margin: 0 0 10px 0;">"Dream It, Be It"</h2>
        <div style="width: 32px; height: 2px; background: #d4b84a; margin-bottom: 14px;"></div>
        <p style="color: #aaa; font-size: 0.92rem; line-height: 1.75; margin: 0 0 20px 0; flex: 1;">A career development program for girls, helping them set career goals, overcome obstacles, and connect with inspiring women who model what is possible.</p>
        <a href="/sip/dreamit-beit" class="sip-btn" style="background: #d4b84a; align-self: flex-start;">Learn More</a>
      </div>
    </div>

    <!-- Card 4: STAT! -->
    <div class="sip-card reveal-card" style="background: #221616; border-top: 4px solid #e86a6a;">
      <div style="padding: 28px 26px 26px; display: flex; flex-direction: column; height: 100%; box-sizing: border-box;">
        <div style="width: 44px; height: 44px; background: rgba(232,106,106,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 18px;">
          <span style="font-size: 1.4rem;">🩺</span>
        </div>
        <h2 style="font-size: 1.05rem; font-weight: 700; color: #f0ece6; text-transform: uppercase; letter-spacing: 0.07em; margin: 0 0 10px 0;">STAT!</h2>
        <div style="width: 32px; height: 2px; background: #e86a6a; margin-bottom: 14px;"></div>
        <p style="color: #aaa; font-size: 0.92rem; line-height: 1.75; margin: 0 0 20px 0; flex: 1;">Stop Trafficking and Trauma — providing support and resources to survivors of human trafficking and connecting them to the services they need to reclaim their lives.</p>
        <a href="/sip/stat" class="sip-btn" style="background: #e86a6a; align-self: flex-start;">Learn More</a>
      </div>
    </div>

    <!-- Card 5: Abraxas Scholarship -->
    <div class="sip-card reveal-card" style="background: #141f18; border-top: 4px solid #5ecb8a;">
      <div style="padding: 28px 26px 26px; display: flex; flex-direction: column; height: 100%; box-sizing: border-box;">
        <div style="width: 44px; height: 44px; background: rgba(94,203,138,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 18px;">
          <span style="font-size: 1.4rem;">🎓</span>
        </div>
        <h2 style="font-size: 1.05rem; font-weight: 700; color: #f0ece6; text-transform: uppercase; letter-spacing: 0.07em; margin: 0 0 10px 0;">Abraxas Scholarship</h2>
        <div style="width: 32px; height: 2px; background: #5ecb8a; margin-bottom: 14px;"></div>
        <p style="color: #aaa; font-size: 0.92rem; line-height: 1.75; margin: 0 0 20px 0; flex: 1;">Scholarship support for students at Abraxas High School, recognizing and uplifting young people who demonstrate commitment to education and personal growth.</p>
        <a href="/sip/abraxas-scholarship" class="sip-btn" style="background: #5ecb8a; align-self: flex-start;">Learn More</a>
      </div>
    </div>

    <!-- Card 6: Colegio La Esperanza -->
    <div class="sip-card reveal-card" style="background: #1c1626; border-top: 4px solid #b07de8;">
      <div style="padding: 28px 26px 26px; display: flex; flex-direction: column; height: 100%; box-sizing: border-box;">
        <div style="width: 44px; height: 44px; background: rgba(176,125,232,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 18px;">
          <span style="font-size: 1.4rem;">🌺</span>
        </div>
        <h2 style="font-size: 1.05rem; font-weight: 700; color: #f0ece6; text-transform: uppercase; letter-spacing: 0.07em; margin: 0 0 10px 0;">Colegio La Esperanza</h2>
        <div style="width: 32px; height: 2px; background: #b07de8; margin-bottom: 14px;"></div>
        <p style="color: #aaa; font-size: 0.92rem; line-height: 1.75; margin: 0 0 20px 0; flex: 1;">Supporting girls' education at Colegio La Esperanza, ensuring access to quality schooling and opportunity for young women across the border in Tijuana, Mexico.</p>
        <a href="/sip/colegio-la-esparanza" class="sip-btn" style="background: #b07de8; align-self: flex-start;">Learn More</a>
      </div>
    </div>

  </div>

  <!-- Footer -->
  <div style="text-align: center; margin-top: 48px; padding-top: 24px; border-top: 1px solid #333;">
    <p style="font-size: 0.82rem; color: #666; letter-spacing: 0.05em; text-transform: uppercase; margin: 0;">Soroptimist International of Poway &nbsp;·&nbsp; Empowering Women &amp; Girls</p>
  </div>

</div>

<script>
(function () {
  /* ─────────────────────────────────────────────
     FLOWER CANVAS
  ───────────────────────────────────────────── */
  const canvas = document.getElementById('flower-canvas');
  const ctx    = canvas.getContext('2d');

  // Palette pulled from the site's accent colours
  const PETAL_PALETTES = [
    ['#e8836a','#f0a080','#ffd0bb'],  // orange-coral
    ['#6ab0e8','#90c8f8','#c0e0ff'],  // blue
    ['#d4b84a','#f0d870','#fff0a0'],  // gold
    ['#5ecb8a','#80e8a8','#b0f8cc'],  // green
    ['#e86a6a','#f89090','#ffbbbb'],  // red
    ['#b07de8','#cc9eff','#e8d0ff'],  // purple
  ];

  let flowers = [];
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  /* One flower object */
  function makeFlower() {
    const palette = PETAL_PALETTES[Math.floor(Math.random() * PETAL_PALETTES.length)];
    return {
      x:        Math.random() * W,
      y:        Math.random() * H,
      // grow 0→1 then stay
      progress: 0,
      // each flower has its own pace
      speed:    0.004 + Math.random() * 0.008,
      // final size
      maxR:     14 + Math.random() * 22,
      petals:   4 + Math.floor(Math.random() * 4),   // 4–7 petals
      palette,
      rotation: Math.random() * Math.PI * 2,
      // after fully grown, slowly fade out over a long wait
      waitTicks: 180 + Math.random() * 300,
      waited:    0,
      fadeSpeed: 0.003 + Math.random() * 0.004,
      alpha:     0,
      done:      false,
    };
  }

  /* Spawn a fresh batch */
  function seed(n) {
    for (let i = 0; i < n; i++) {
      const f = makeFlower();
      // stagger starts so they don't all bloom at once
      f.progress = Math.random();
      flowers.push(f);
    }
  }
  seed(18); // initial population

  /* Draw one flower */
  function drawFlower(f) {
    if (f.alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = f.alpha;
    ctx.translate(f.x, f.y);
    ctx.rotate(f.rotation);

    const r   = f.maxR * f.progress;   // current radius
    const pr  = r * 0.55;              // petal offset
    const [c1, c2, c3] = f.palette;

    // petals
    for (let p = 0; p < f.petals; p++) {
      const angle = (p / f.petals) * Math.PI * 2;
      const px = Math.cos(angle) * pr;
      const py = Math.sin(angle) * pr;
      ctx.beginPath();
      ctx.ellipse(px, py, r * 0.38, r * 0.24, angle, 0, Math.PI * 2);
      // radial gradient per petal
      const g = ctx.createRadialGradient(px, py, 0, px, py, r * 0.4);
      g.addColorStop(0, c2);
      g.addColorStop(1, c1);
      ctx.fillStyle = g;
      ctx.fill();
    }

    // centre dot
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.22, 0, Math.PI * 2);
    ctx.fillStyle = c3;
    ctx.fill();

    // tiny centre shadow ring
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.22, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(0,0,0,0.18)';
    ctx.lineWidth = r * 0.06;
    ctx.stroke();

    ctx.restore();
  }

  /* Animation loop */
  function tick() {
    ctx.clearRect(0, 0, W, H);

    flowers = flowers.filter(f => !f.done);

    // keep at least 14 alive at all times
    while (flowers.length < 14) flowers.push(makeFlower());

    for (const f of flowers) {
      if (f.progress < 1) {
        // sprouting phase
        f.progress = Math.min(1, f.progress + f.speed);
        f.alpha    = Math.min(0.75, f.alpha + f.speed * 2);
      } else {
        // fully grown – wait, then fade
        f.waited++;
        if (f.waited > f.waitTicks) {
          f.alpha -= f.fadeSpeed;
          if (f.alpha <= 0) { f.done = true; continue; }
        }
      }
      drawFlower(f);
    }

    requestAnimationFrame(tick);
  }
  tick();

  /* ─────────────────────────────────────────────
     SCROLL-REVEAL for .reveal-card
  ───────────────────────────────────────────── */
  const cards = document.querySelectorAll('.reveal-card');

  // Stagger delay so cards in the same row cascade nicely
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${(i % 3) * 0.12}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.12 }
  );

  cards.forEach(card => observer.observe(card));
})();
</script>