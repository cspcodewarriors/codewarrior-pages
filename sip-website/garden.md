---
layout: none
title: Welcome to the Garden
permalink: /sip/garden/
search_exclude: true
show_reading_time: false
---

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome to the Garden — Soroptimist International of Poway</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --grass-dark:   #2d6a2d;
    --grass-mid:    #3a8a3a;
    --grass-light:  #4caf50;
    --grass-bright: #66bb6a;
    --sky:          #87ceeb;
    --soil:         #5c3d1e;
    --gold:         #C8973A;
    --white:        #ffffff;
  }

  html, body {
    width: 100%; height: 100%;
    overflow: hidden;
    font-family: 'Nunito', sans-serif;
  }

  /* ── Sky ── */
  #garden-wrap {
    position: relative;
    width: 100vw; height: 100vh;
    background: linear-gradient(180deg, #b8e4f7 0%, #d4f1c0 55%, var(--grass-mid) 55%);
    overflow: hidden;
  }

  /* ── Clouds ── */
  .cloud {
    position: absolute;
    background: rgba(255,255,255,0.85);
    border-radius: 50px;
    animation: floatCloud linear infinite;
  }
  .cloud::before, .cloud::after {
    content: '';
    position: absolute;
    background: inherit;
    border-radius: 50%;
  }
  .cloud.c1 { width:120px; height:38px; top:8%; left:-140px; animation-duration:28s; }
  .cloud.c1::before { width:60px; height:55px; top:-28px; left:18px; }
  .cloud.c1::after  { width:45px; height:42px; top:-20px; left:55px; }
  .cloud.c2 { width:90px;  height:28px; top:16%; left:-110px; animation-duration:38s; animation-delay:-12s; }
  .cloud.c2::before { width:45px; height:42px; top:-22px; left:12px; }
  .cloud.c2::after  { width:35px; height:32px; top:-14px; left:42px; }
  .cloud.c3 { width:150px; height:44px; top:5%;  left:-170px; animation-duration:48s; animation-delay:-30s; }
  .cloud.c3::before { width:70px; height:65px; top:-34px; left:22px; }
  .cloud.c3::after  { width:55px; height:50px; top:-25px; left:70px; }
  @keyframes floatCloud {
    from { transform: translateX(0); }
    to   { transform: translateX(calc(100vw + 200px)); }
  }

  /* ── Ground / grass layer ── */
  #ground {
    position: absolute;
    bottom: 0; left: 0;
    width: 100%; height: 55%;
    background: var(--grass-mid);
  }

  /* ── Grass tufts (CSS drawn) ── */
  .tuft {
    position: absolute;
    bottom: 100%;
    display: flex;
    gap: 2px;
    transform-origin: bottom center;
  }
  .tuft span {
    display: block;
    background: var(--grass-dark);
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    transform-origin: bottom center;
  }
  .tuft span:nth-child(odd)  { transform: rotate(-12deg); }
  .tuft span:nth-child(even) { transform: rotate(12deg);  background: var(--grass-bright); }

  /* ── Garden canvas (sprites live here) ── */
  #garden-canvas {
    position: absolute;
    bottom: 0; left: 0;
    width: 100%; height: 55%;
  }

  /* ── User sprite ── */
  .sprite {
    position: absolute;
    bottom: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: spriteFloat 3s ease-in-out infinite;
    cursor: default;
    user-select: none;
  }
  .sprite-icon {
    font-size: 2.8rem;
    filter: drop-shadow(0 3px 6px rgba(0,0,0,0.25));
  }
  .sprite-name {
    font-family: 'Nunito', sans-serif;
    font-size: 0.78rem;
    font-weight: 700;
    color: #fff;
    background: rgba(0,63,135,0.75);
    border-radius: 20px;
    padding: 2px 10px;
    margin-top: 4px;
    white-space: nowrap;
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @keyframes spriteFloat {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-7px); }
  }

  /* ── Ambient creatures ── */
  .creature {
    position: absolute;
    font-size: 1.6rem;
    animation: creatureFloat linear infinite;
    pointer-events: none;
  }
  @keyframes creatureFloat {
    0%   { transform: translate(0,0) rotate(0deg); }
    25%  { transform: translate(15px,-20px) rotate(5deg); }
    50%  { transform: translate(30px,0px) rotate(-5deg); }
    75%  { transform: translate(15px,15px) rotate(3deg); }
    100% { transform: translate(0,0) rotate(0deg); }
  }

  /* ── Flowers ── */
  .flower {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: sway 4s ease-in-out infinite;
    transform-origin: bottom center;
  }
  .flower-head { font-size: 1.8rem; }
  .flower-stem {
    width: 3px;
    background: var(--grass-dark);
    border-radius: 2px;
  }
  @keyframes sway {
    0%,100% { transform: rotate(0deg); }
    30%      { transform: rotate(4deg); }
    70%      { transform: rotate(-4deg); }
  }

  /* ── Enter button ── */
  #enter-btn {
    position: fixed;
    top: 1.2rem; right: 1.5rem;
    background: var(--gold);
    color: #fff;
    font-family: 'Nunito', sans-serif;
    font-size: 0.92rem;
    font-weight: 700;
    padding: 0.55rem 1.3rem;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    z-index: 100;
    transition: background 0.2s, transform 0.15s;
  }
  #enter-btn:hover { background: #a07628; transform: scale(1.04); }

  /* ── Welcome popup overlay ── */
  #popup-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
    animation: fadeIn 0.35s ease;
  }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

  #popup {
    background: #fff;
    border-radius: 20px;
    padding: 2rem 2.2rem 1.8rem;
    max-width: 420px;
    width: 90%;
    text-align: center;
    box-shadow: 0 12px 48px rgba(0,0,0,0.3);
    animation: popIn 0.4s cubic-bezier(0.175,0.885,0.32,1.275);
    position: relative;
  }
  @keyframes popIn {
    from { transform: scale(0.7); opacity: 0; }
    to   { transform: scale(1);   opacity: 1; }
  }

  #popup h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.55rem;
    color: var(--grass-dark);
    margin-bottom: 0.3rem;
  }
  #popup .welcome-name {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    color: var(--gold);
  }
  #popup p {
    font-size: 0.9rem;
    color: #555;
    line-height: 1.6;
    margin: 0.8rem 0 1.2rem;
  }

  /* Sprite picker grid */
  #sprite-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.5rem;
    margin: 0.5rem 0 1.2rem;
  }
  .sprite-option {
    font-size: 2rem;
    padding: 0.45rem;
    border-radius: 12px;
    border: 2.5px solid transparent;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s, transform 0.15s;
    background: #f5f5f5;
  }
  .sprite-option:hover { background: #e8f5e9; transform: scale(1.12); }
  .sprite-option.selected {
    border-color: var(--grass-mid);
    background: #e8f5e9;
    box-shadow: 0 0 0 3px rgba(58,138,58,0.2);
  }

  #popup-confirm {
    background: var(--grass-mid);
    color: #fff;
    font-family: 'Nunito', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    padding: 0.65rem 2rem;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    width: 100%;
  }
  #popup-confirm:hover { background: var(--grass-dark); transform: scale(1.02); }
  #popup-confirm:disabled { opacity: 0.45; cursor: not-allowed; transform: none; }

  /* ── Greeting banner ── */
  #greeting {
    position: fixed;
    top: 1.2rem;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255,255,255,0.92);
    border-radius: 30px;
    padding: 0.45rem 1.4rem;
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    color: var(--grass-dark);
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    display: none;
    z-index: 100;
    white-space: nowrap;
  }
  #greeting span { color: var(--gold); font-style: italic; }
</style>
</head>
<body>

<div id="garden-wrap">

  <!-- Clouds -->
  <div class="cloud c1"></div>
  <div class="cloud c2"></div>
  <div class="cloud c3"></div>

  <!-- Ground -->
  <div id="ground"></div>

  <!-- Garden canvas (sprites + flowers + creatures rendered by JS) -->
  <div id="garden-canvas"></div>

</div>

<!-- Enter site button -->
<a href="/codewarrior-pages/sip/home/" id="enter-btn">🌸 Enter the Site</a>

<!-- Greeting banner (shown after popup) -->
<div id="greeting"></div>

<!-- Welcome popup -->
<div id="popup-overlay">
  <div id="popup">
    <h2>Welcome to the Garden, <span class="welcome-name" id="popup-name">friend</span>! 🌱</h2>
    <p>You've just joined the Soroptimist community. Pick a sprite to represent you in our shared garden — a living symbol of every woman and girl we empower together.</p>

    <div id="sprite-grid">
      <!-- Populated by JS -->
    </div>

    <button id="popup-confirm" disabled>Plant Yourself in the Garden 🌻</button>
  </div>
</div>

<script>
  // ── Sprite options ──────────────────────────────────────────
  const SPRITES = ['🌸','🌺','🌻','🌷','🌼','🦋','🐝','🐞','🐛','🦗',
                   '🍀','🌿','🪴','🌱','🍃','🐢','🦔','🐇','🦜','🌙'];

  // ── Flower/creature decorations ─────────────────────────────
  const FLOWERS  = ['🌸','🌺','🌻','🌷','🌼','💐','🪷'];
  const CREATURES = ['🦋','🐝','🐞','🐛','🪲'];

  // ── Read name from sessionStorage (set by signup page) ──────
  // Falls back to URL param ?name= for easy testing
  const params    = new URLSearchParams(window.location.search);
  const firstName = sessionStorage.getItem('sip_new_user_name')
                 || params.get('name')
                 || 'Friend';

  // ── Populate popup ───────────────────────────────────────────
  document.getElementById('popup-name').textContent = firstName;

  const grid = document.getElementById('sprite-grid');
  let selectedSprite = null;

  SPRITES.forEach(emoji => {
    const btn = document.createElement('button');
    btn.className = 'sprite-option';
    btn.textContent = emoji;
    btn.title = emoji;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sprite-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSprite = emoji;
      document.getElementById('popup-confirm').disabled = false;
    });
    grid.appendChild(btn);
  });

  // ── Confirm: close popup, place sprite, build garden ─────────
  document.getElementById('popup-confirm').addEventListener('click', () => {
    // Save to localStorage so the sprite persists on return visits
    const profile = { name: firstName, sprite: selectedSprite };
    localStorage.setItem('sip_garden_profile', JSON.stringify(profile));

    // Dismiss overlay
    document.getElementById('popup-overlay').style.display = 'none';

    // Show greeting
    const greet = document.getElementById('greeting');
    greet.innerHTML = `You're in the garden, <span>${firstName}</span> ${selectedSprite}`;
    greet.style.display = 'block';

    buildGarden(profile);
  });

  // ── If user already has a profile, skip popup ─────────────────
  const saved = JSON.parse(localStorage.getItem('sip_garden_profile') || 'null');
  if (saved) {
    document.getElementById('popup-overlay').style.display = 'none';
    const greet = document.getElementById('greeting');
    greet.innerHTML = `Welcome back, <span>${saved.name}</span> ${saved.sprite}`;
    greet.style.display = 'block';
    buildGarden(saved);
  }

  // ── Build garden scene ────────────────────────────────────────
  function buildGarden(profile) {
    const canvas = document.getElementById('garden-canvas');
    canvas.innerHTML = '';

    // --- Grass tufts ---
    const ground = document.getElementById('ground');
    ground.innerHTML = '';
    for (let i = 0; i < 40; i++) {
      const tuft = document.createElement('div');
      tuft.className = 'tuft';
      tuft.style.left = (Math.random() * 100) + '%';
      tuft.style.animationDelay = (Math.random() * 3) + 's';
      const blades = 3 + Math.floor(Math.random() * 3);
      for (let b = 0; b < blades; b++) {
        const blade = document.createElement('span');
        const h = 14 + Math.random() * 22;
        const w = 4 + Math.random() * 4;
        blade.style.width  = w + 'px';
        blade.style.height = h + 'px';
        tuft.appendChild(blade);
      }
      ground.appendChild(tuft);
    }

    // --- Flowers ---
    for (let i = 0; i < 22; i++) {
      const f = document.createElement('div');
      f.className = 'flower';
      f.style.left   = (3 + Math.random() * 94) + '%';
      f.style.animationDelay = (Math.random() * 4) + 's';
      f.style.animationDuration = (3 + Math.random() * 3) + 's';

      const head = document.createElement('div');
      head.className = 'flower-head';
      head.textContent = FLOWERS[Math.floor(Math.random() * FLOWERS.length)];

      const stem = document.createElement('div');
      stem.className = 'flower-stem';
      stem.style.height = (18 + Math.random() * 32) + 'px';

      f.appendChild(head);
      f.appendChild(stem);
      canvas.appendChild(f);
    }

    // --- Ambient creatures ---
    for (let i = 0; i < 8; i++) {
      const c = document.createElement('div');
      c.className = 'creature';
      c.style.left   = (5 + Math.random() * 85) + '%';
      c.style.bottom = (20 + Math.random() * 55) + '%';
      c.style.animationDuration  = (5 + Math.random() * 8) + 's';
      c.style.animationDelay     = (Math.random() * 5) + 's';
      c.textContent = CREATURES[Math.floor(Math.random() * CREATURES.length)];
      canvas.appendChild(c);
    }

    // --- User's own sprite ---
    const sprite = document.createElement('div');
    sprite.className = 'sprite';
    // Place near center-ish with slight randomness
    sprite.style.left = (35 + Math.random() * 30) + '%';
    sprite.style.animationDelay = '0s';

    const icon = document.createElement('div');
    icon.className = 'sprite-icon';
    icon.textContent = profile.sprite;

    const label = document.createElement('div');
    label.className = 'sprite-name';
    label.textContent = profile.name;

    sprite.appendChild(icon);
    sprite.appendChild(label);
    canvas.appendChild(sprite);

    // --- Other "community" sprites (simulated members) ---
    const communitySprites = [
      { name: 'Maria',   sprite: '🌸' },
      { name: 'Jane',    sprite: '🦋' },
      { name: 'Sarah',   sprite: '🌻' },
      { name: 'Luisa',   sprite: '🐝' },
      { name: 'Anika',   sprite: '🌷' },
      { name: 'Priya',   sprite: '🌺' },
      { name: 'Tomoko',  sprite: '🍀' },
    ];

    communitySprites.forEach((m, idx) => {
      const s = document.createElement('div');
      s.className = 'sprite';
      // Spread them across the width avoiding center cluster
      const positions = [8, 18, 28, 68, 78, 88, 95];
      s.style.left = positions[idx] + '%';
      s.style.animationDelay = (idx * 0.45) + 's';
      s.style.animationDuration = (2.5 + Math.random() * 2) + 's';

      const i2 = document.createElement('div');
      i2.className = 'sprite-icon';
      i2.textContent = m.sprite;
      i2.style.fontSize = '2.1rem'; // slightly smaller than the user

      const l2 = document.createElement('div');
      l2.className = 'sprite-name';
      l2.textContent = m.name;
      l2.style.background = 'rgba(45,106,45,0.75)';

      s.appendChild(i2);
      s.appendChild(l2);
      canvas.appendChild(s);
    });
  }

  // ── Hook into signup flow ────────────────────────────────────
  // The login.md signup handler should do this before redirecting:
  //   sessionStorage.setItem('sip_new_user_name', firstName);
  //   window.location.href = '/sip/garden/';
  // The garden reads it above and clears it after use.
  sessionStorage.removeItem('sip_new_user_name');
</script>

</body>
</html>