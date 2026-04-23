---
layout: page
title: Garden
permalink: /sip/garden/
search_exclude: true
show_reading_time: false
---

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --grass-dark:   #2d6a2d;
    --grass-mid:    #3a8a3a;
    --grass-bright: #66bb6a;
    --gold:         #C8973A;
  }

  html, body { width:100%; min-height:100vh; margin:0; overflow-x:hidden; font-family:'Nunito',sans-serif; }
  .page-content { padding: 0 !important; }
  .page-content .wrapper { width:100vw; max-width:none; padding:0; margin:0; }
  .opencs_root { width:100vw; max-width:none; }
  .post-title { display: none !important; }

  #garden-wrap {
    position: relative;
    width:100vw;
    margin: 0;
    min-height: calc(100vh - 5rem);
    height: calc(100vh - 5rem);
    background: linear-gradient(180deg, #b8e4f7 0%, #d4f1c0 52%, var(--grass-mid) 52%);
    overflow: hidden;
  }

  /* Clouds */
  .cloud { position:absolute; background:rgba(255,255,255,0.85); border-radius:50px; animation:floatCloud linear infinite; }
  .cloud::before,.cloud::after { content:''; position:absolute; background:inherit; border-radius:50%; }
  .cloud.c1 { width:120px;height:38px;top:8%;left:-140px;animation-duration:28s; }
  .cloud.c1::before { width:60px;height:55px;top:-28px;left:18px; }
  .cloud.c1::after  { width:45px;height:42px;top:-20px;left:55px; }
  .cloud.c2 { width:90px;height:28px;top:16%;left:-110px;animation-duration:38s;animation-delay:-12s; }
  .cloud.c2::before { width:45px;height:42px;top:-22px;left:12px; }
  .cloud.c2::after  { width:35px;height:32px;top:-14px;left:42px; }
  .cloud.c3 { width:150px;height:44px;top:5%;left:-170px;animation-duration:48s;animation-delay:-30s; }
  .cloud.c3::before { width:70px;height:65px;top:-34px;left:22px; }
  .cloud.c3::after  { width:55px;height:50px;top:-25px;left:70px; }
  @keyframes floatCloud { from{transform:translateX(0)} to{transform:translateX(calc(100vw + 200px))} }

  /* Ground */
  #ground {
    position:absolute; bottom:0; left:0;
    width:100%; height:48%;
    background:var(--grass-mid);
    overflow:visible;
  }

  /* Grass tufts — pinned to the top edge of the ground div */
  .tuft {
    position:absolute;
    top:0;          /* sits right at the ground's top edge */
    transform:translateY(-80%); /* peek up just enough */
    display:flex;
    gap:2px;
    align-items:flex-end;
    transform-origin:bottom center;
  }
  .tuft span {
    display:block;
    background:var(--grass-dark);
    border-radius:50% 50% 0 0 / 100% 100% 0 0;
    transform-origin:bottom center;
  }
  .tuft span:nth-child(odd)  { transform:rotate(-12deg); }
  .tuft span:nth-child(even) { transform:rotate(12deg); background:var(--grass-bright); }

  /* Garden canvas */
  #garden-canvas {
    position:absolute; bottom:0; left:0;
    width:100%; height:48%;
    pointer-events:none;
  }

  /* Sprites */
  .sprite {
    position:absolute;
    display:flex; flex-direction:column; align-items:center;
    animation:spriteFloat 3s ease-in-out infinite;
    pointer-events:all;
    user-select:none;
  }
  .sprite-icon { font-size:2.8rem; filter:drop-shadow(0 3px 6px rgba(0,0,0,0.25)); }
  .sprite-name {
    font-size:0.78rem; font-weight:700; color:#fff;
    background:rgba(0,63,135,0.75); border-radius:20px;
    padding:2px 10px; margin-top:4px;
    white-space:nowrap; max-width:110px;
    overflow:hidden; text-overflow:ellipsis;
  }
  @keyframes spriteFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }

  /* Creatures */
  .creature {
    position:absolute; font-size:1.5rem;
    animation:creatureFloat linear infinite;
    pointer-events:none;
  }
  @keyframes creatureFloat {
    0%  {transform:translate(0,0) rotate(0deg)}
    25% {transform:translate(18px,-22px) rotate(6deg)}
    50% {transform:translate(34px,4px) rotate(-6deg)}
    75% {transform:translate(14px,18px) rotate(4deg)}
    100%{transform:translate(0,0) rotate(0deg)}
  }

  /* Flowers */
  .flower {
    position:absolute;
    display:flex; flex-direction:column; align-items:center;
    animation:sway 4s ease-in-out infinite;
    transform-origin:bottom center;
    pointer-events:none;
  }
  .flower-head { font-size:1.8rem; line-height:1; }
  .flower-stem { width:3px; background:var(--grass-dark); border-radius:2px; }
  @keyframes sway { 0%,100%{transform:rotate(0deg)} 30%{transform:rotate(5deg)} 70%{transform:rotate(-5deg)} }

  /* Enter button */
  #enter-btn {
    position:fixed; top:5.5rem; right:1.5rem;
    background:var(--gold); color:#fff;
    font-family:'Nunito',sans-serif; font-size:0.92rem; font-weight:700;
    padding:0.55rem 1.3rem; border-radius:30px; border:none; cursor:pointer;
    box-shadow:0 4px 16px rgba(0,0,0,0.2); text-decoration:none;
    display:flex; align-items:center; gap:0.4rem;
    z-index:100; transition:background 0.2s,transform 0.15s;
  }
  #enter-btn:hover { background:#a07628; transform:scale(1.04); }

  /* Popup */
  #popup-overlay {
    position:fixed; inset:0;
    background:rgba(0,0,0,0.45);
    display:flex; align-items:center; justify-content:center;
    z-index:200; animation:fadeIn 0.35s ease;
  }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  #popup {
    background:#fff; border-radius:20px;
    padding:2rem 2.2rem 1.8rem;
    max-width:420px; width:90%;
    text-align:center;
    box-shadow:0 12px 48px rgba(0,0,0,0.3);
    animation:popIn 0.4s cubic-bezier(0.175,0.885,0.32,1.275);
    font-family:'Nunito',sans-serif;
    color:#111 !important;
  }
  @keyframes popIn { from{transform:scale(0.7);opacity:0} to{transform:scale(1);opacity:1} }
  #popup h2 {
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:0.25rem;
    font-family:'Playfair Display',serif;
    font-size:1.5rem;
    color:#111 !important;
    margin:0 0 0.8rem;
    line-height:1.1;
    text-align:center;
  }
  #popup .welcome-name {
    display:inline-block;
    font-style:normal;
    font-weight:700;
    color:#111 !important;
  }
  #popup .welcome-user {
    display:inline-flex;
    align-items:center;
    gap:0.15rem;
    color:#111 !important;
  }
  #popup p { font-size:0.95rem; color:#111 !important; line-height:1.75; margin:0.75rem 0 1rem; }
  #popup span,
  #popup button,
  #popup label,
  #popup li {
    color:#111 !important;
  }

  #sprite-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:0.5rem; margin:0.25rem 0 1.2rem; }
  .sprite-option {
    font-size:2rem; padding:0.45rem; border-radius:12px;
    border:2.5px solid transparent; cursor:pointer;
    transition:border-color 0.15s,background 0.15s,transform 0.15s;
    background:#f5f5f5;
  }
  .sprite-option:hover { background:#e8f5e9; transform:scale(1.12); }
  .sprite-option.selected { border-color:var(--grass-mid); background:#e8f5e9; box-shadow:0 0 0 3px rgba(58,138,58,0.2); }

  #popup-confirm {
    background:var(--grass-mid); color:#fff;
    font-family:'Nunito',sans-serif; font-size:0.95rem; font-weight:700;
    padding:0.65rem 2rem; border-radius:30px; border:none; cursor:pointer;
    transition:background 0.2s,transform 0.15s; width:100%;
  }
  #popup-confirm:hover:not(:disabled) { background:var(--grass-dark); transform:scale(1.02); }
  #popup-confirm:disabled { opacity:0.45; cursor:not-allowed; transform:none; }

  /* Greeting */
  #greeting {
    position:fixed; top:5.5rem; left:50%; transform:translateX(-50%);
    background:rgba(255,255,255,0.93); border-radius:30px;
    padding:0.45rem 1.4rem;
    font-family:'Playfair Display',serif; font-size:1rem; color:var(--grass-dark);
    box-shadow:0 4px 16px rgba(0,0,0,0.12);
    display:none; z-index:100; white-space:nowrap;
  }
  #greeting span { color:var(--gold); font-style:italic; }

  /* Chat stuff */
  #chat-window {
    position: fixed;
    top: 6.25rem;
    left: 1.5rem;
    width: min(24rem, 28vw);
    max-width: calc(100vw - 3rem);
    padding: 1rem;
    border: 1px solid rgba(200, 151, 58, 0.28);
    border-radius: 24px;
    background:
      linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(245, 251, 240, 0.94) 100%);
    box-shadow:
      0 18px 44px rgba(31, 60, 32, 0.18),
      inset 0 1px 0 rgba(255,255,255,0.8);
    backdrop-filter: blur(10px);
    z-index: 110;
    overflow: hidden;
  }

  #chat-window::before {
    content: '';
    position: absolute;
    inset: 0 0 auto;
    height: 4px;
    background: linear-gradient(90deg, var(--gold), #e7c66f, var(--grass-bright));
  }

  #chat-title {
    margin: 0 0 0.75rem;
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem;
    color: #2f2f2f;
    letter-spacing: 0.02em;
  }

  #chat {
    list-style: none;
    margin: 0 0 0.85rem;
    padding: 0.9rem 0.85rem;
    min-height: 12rem;
    max-height: 38vh;
    overflow-y: auto;
    border: 1px solid rgba(58, 138, 58, 0.14);
    border-radius: 18px;
    background:
      linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(234, 245, 228, 0.92) 100%);
    box-shadow: inset 0 1px 2px rgba(45, 106, 45, 0.08);
    scrollbar-width: thin;
    scrollbar-color: rgba(58, 138, 58, 0.55) rgba(255,255,255,0.35);
  }

  #chat li {
    margin: 0 0 0.55rem;
    padding: 0.65rem 0.8rem;
    border-radius: 14px;
    background: rgba(255,255,255,0.82);
    color: #3f3f3f;
    line-height: 1.4;
    font-size: 0.94rem;
    box-shadow: 0 6px 16px rgba(45, 106, 45, 0.08);
  }

  #chat li:last-child {
    margin-bottom: 0;
  }

  #msg {
    width: 100%;
    margin: 0 0 0.65rem;
    padding: 0.8rem 0.95rem;
    border: 1px solid rgba(58, 138, 58, 0.22);
    border-radius: 999px;
    background: rgba(255,255,255,0.92);
    color: #2f2f2f;
    font: inherit;
    outline: none;
    transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
  }

  #msg::placeholder {
    color: #7a7a7a;
  }

  #msg:focus {
    border-color: rgba(58, 138, 58, 0.55);
    box-shadow: 0 0 0 4px rgba(102, 187, 106, 0.16);
    background: #fff;
  }

  #send-message {
    width: 100%;
    border: none;
    border-radius: 999px;
    padding: 0.8rem 1rem;
    background: linear-gradient(135deg, var(--gold) 0%, #b78325 100%);
    color: #fff;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 10px 24px rgba(184, 131, 37, 0.28);
    transition: transform 0.15s ease, box-shadow 0.18s ease, filter 0.18s ease;
  }

  #send-message:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 30px rgba(184, 131, 37, 0.34);
    filter: saturate(1.05);
  }

  #send-message:active {
    transform: translateY(0);
  }

  @media (max-width: 900px) {
    #chat-window {
      top: auto;
      bottom: 1rem;
      left: 1rem;
      width: min(30rem, calc(100vw - 2rem));
      max-width: calc(100vw - 2rem);
    }
  }

  @media (max-width: 640px) {
    #chat-window {
      padding: 0.9rem;
      border-radius: 20px;
    }

    #chat {
      min-height: 9.5rem;
      max-height: 28vh;
    }
  }
</style>

<div id="garden-wrap">
  <div class="cloud c1"></div>
  <div class="cloud c2"></div>
  <div class="cloud c3"></div>
  <div id="ground"></div>
  <div id="garden-canvas"></div>
</div>

<div id="greeting"></div>

<div id="popup-overlay">
  <div id="popup">
    <h2>
      <span class="welcome-lead">Welcome to the Garden,</span>
      <span class="welcome-user"><span class="welcome-name" id="popup-name">friend</span>! 🌱</span>
    </h2>
    <p>You've just joined the Soroptimist community. Pick a sprite to represent you in our shared garden — a living symbol of every woman and girl we empower together.</p>
    <div id="sprite-grid"></div>
    <button id="popup-confirm" disabled>Plant Yourself in the Garden 🌻</button>
    <p id="popup-status" style="min-height:1.1em; margin-top:0.8rem; font-size:0.85rem; color:#c0392b;"></p>
  </div>
</div>

<script type="module">
    const socket = io("http://127.0.0.1:8427");

    function sendMsg() {
      const input = document.getElementById("msg");
      socket.send(input.value);
      input.value = "";
    }

    socket.on('message', function(msg) {
      const li = document.createElement("li");
      li.textContent = msg;
      document.getElementById("chat").appendChild(li);
    });

    document.getElementById("send-message").onclick = () => {
      sendMsg();
    }
    
</script>

<div id="chat-window">
  <p id="chat-title"><strong>Garden Chat</strong></p>
  <ul id="chat"><li>Example Message</li></ul>
  <input type="text" id="msg" placeholder="Share a note with the garden">
  <button id="send-message">Send</button>
</div>

<script src="https://cdn.socket.io/4.0.0/socket.io.min.js"></script> <!-- look I know this looks sketchy but we need it for WebSockets to work ok -->

<script type="module">

  import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';
  
  const SPRITES   = ['🌸','🌺','🌻','🌷','🌼','🦋','🐝','🐞','🐛','🦗',
                     '🍀','🌿','🪴','🌱','🍃','🐢','🦔','🐇','🦜','🌙'];
  const FLOWERS   = ['🌸','🌺','🌻','🌷','🌼','🪷'];
  const CREATURES = ['🦋','🐝','🐞','🐛','🪲'];

  // New signup lands here with this key set; returning logins use sip_uid
  const newUserUID = sessionStorage.getItem('sip_new_user_uid') || null;
  sessionStorage.removeItem('sip_new_user_uid');
  const popupStatus = document.getElementById('popup-status');

  async function fetchAllUsers() {
    try {
      const url = `${pythonURI}/api/users`;
      let res = await fetch(url, { ...fetchOptions, method: 'GET' });
      if (res.status === 405) {
        console.warn('fetchAllUsers got 405, retrying with trailing slash');
        res = await fetch(`${url}/`, { ...fetchOptions, method: 'GET' });
      }
      if (!res.ok) {
        console.warn('fetchAllUsers failed', res.status, await res.text());
        return [];
      }
      return await res.json();
    } catch (e) {
      console.error('fetchAllUsers error', e);
      return [];
    }
  }

  async function fetchCurrentUser() {
    try {
      const res = await fetch(`${pythonURI}/api/id`, { ...fetchOptions, method: 'GET' });
      if (res.status === 401) {
        return null; // Not authenticated or token missing
      }
      if (!res.ok) {
        console.warn('fetchCurrentUser failed', res.status, await res.text());
        return null;
      }
      return await res.json();
    } catch (e) {
      console.error('fetchCurrentUser error', e);
      return null;
    }
  }

  async function saveSpriteToDB(sprite) {
    try {
      const res = await fetch(`${pythonURI}/api/user`, {
        ...fetchOptions,
        method: 'PUT',
        body: JSON.stringify({ garden_sprite: sprite })
      });
      if (res.status === 401) {
        setPopupStatus('Please log in again before planting yourself in the garden.');
        return null;
      }
      if (!res.ok) {
        console.error('saveSpriteToDB failed', res.status, await res.text());
        setPopupStatus('We could not save your garden icon yet. Please try again.');
        return null;
      }
      return await res.json();
    } catch (e) {
      console.error('Failed to save sprite:', e);
      setPopupStatus('We could not save your garden icon yet. Please try again.');
      return null;
    }
  }

  async function init() {
    const allUsers = await fetchAllUsers();
    const me = await fetchCurrentUser();
    if (me) {
      sessionStorage.setItem('sip_uid', me.uid);
      document.getElementById('popup-name').textContent = newUserUID || me.uid;
      const sprite = me.garden_sprite ? me.garden_sprite : null;

      if (sprite) {
        document.getElementById('popup-overlay').style.display = 'none';
        showGreeting(me.uid, sprite);
        buildGarden({ name: me.uid, sprite }, allUsers);
        return;
      }

      // Logged in but no sprite chosen yet — show picker
      document.getElementById('popup-name').textContent = me.uid;
      buildSpriteGrid(allUsers, me);
      return;
    }

    if (newUserUID) {
      console.warn('Garden signup flow reached without an authenticated session.');
    }
    sessionStorage.removeItem('sip_uid');
    // Not logged in — just show the garden with community sprites
    document.getElementById('popup-overlay').style.display = 'none';
    buildGarden(null, allUsers);
  }

  function showGreeting(uid, sprite) {
    const greet = document.getElementById('greeting');
    greet.innerHTML = `Welcome back, <span>${uid}</span> ${sprite}`;
    greet.style.display = 'block';
  }

  function setPopupStatus(message = '') {
    popupStatus.textContent = message;
  }

  function buildSpriteGrid(allUsers, currentUser) {
    const grid = document.getElementById('sprite-grid');
    const confirmButton = document.getElementById('popup-confirm');
    let selectedSprite = null;

    grid.innerHTML = '';
    setPopupStatus('');

    SPRITES.forEach(emoji => {
      const btn = document.createElement('button');
      btn.className = 'sprite-option';
      btn.textContent = emoji;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sprite-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedSprite = emoji;
        confirmButton.disabled = false;
        setPopupStatus('');
      });
      grid.appendChild(btn);
    });

    confirmButton.addEventListener('click', async () => {
      if (!selectedSprite) {
        return;
      }
      if (!currentUser) {
        setPopupStatus('Please log in before planting yourself in the garden.');
        return;
      }

      confirmButton.disabled = true;
      const savedUser = await saveSpriteToDB(selectedSprite);
      if (!savedUser) {
        confirmButton.disabled = false;
        return;
      }

      sessionStorage.setItem('sip_uid', currentUser.uid);
      document.getElementById('popup-overlay').style.display = 'none';
      const greet = document.getElementById('greeting');
      greet.innerHTML = `You're in the garden, <span>${currentUser.uid}</span> ${savedUser.garden_sprite || selectedSprite}`;
      greet.style.display = 'block';
      buildGarden({ name: currentUser.uid, sprite: savedUser.garden_sprite || selectedSprite }, allUsers);
    });
  }

  function buildGarden(profile, allUsers) {
    const canvas = document.getElementById('garden-canvas');
    const ground = document.getElementById('ground');
    canvas.innerHTML = '';
    ground.innerHTML = '';

    // Grass tufts
    for (let i = 0; i < 50; i++) {
      const tuft = document.createElement('div');
      tuft.className = 'tuft';
      tuft.style.left = (Math.random() * 100) + '%';
      const blades = 3 + Math.floor(Math.random() * 3);
      for (let b = 0; b < blades; b++) {
        const blade = document.createElement('span');
        blade.style.width  = (4 + Math.random() * 4) + 'px';
        blade.style.height = (10 + Math.random() * 16) + 'px';
        tuft.appendChild(blade);
      }
      ground.appendChild(tuft);
    }

    // Flowers
    for (let i = 0; i < 24; i++) {
      const f = document.createElement('div');
      f.className = 'flower';
      f.style.left              = (2 + Math.random() * 96) + '%';
      f.style.bottom            = (2 + Math.random() * 65) + '%';
      f.style.animationDelay    = (Math.random() * 4) + 's';
      f.style.animationDuration = (3 + Math.random() * 3) + 's';
      const head = document.createElement('div');
      head.className   = 'flower-head';
      head.textContent = FLOWERS[Math.floor(Math.random() * FLOWERS.length)];
      const stem = document.createElement('div');
      stem.className   = 'flower-stem';
      stem.style.height = (14 + Math.random() * 28) + 'px';
      f.appendChild(head);
      f.appendChild(stem);
      canvas.appendChild(f);
    }

    // Creatures
    for (let i = 0; i < 10; i++) {
      const c = document.createElement('div');
      c.className = 'creature';
      c.style.left              = (4 + Math.random() * 88) + '%';
      c.style.bottom            = (10 + Math.random() * 80) + '%';
      c.style.animationDuration = (5 + Math.random() * 9) + 's';
      c.style.animationDelay    = (Math.random() * 6) + 's';
      c.textContent = CREATURES[Math.floor(Math.random() * CREATURES.length)];
      canvas.appendChild(c);
    }

    // Community sprites — all DB users with a sprite, excluding the current user
    const community = (allUsers || []).filter(u =>
      u.garden_sprite && u.uid !== (profile ? profile.name : null)
    );
    const zoneWidth = community.length > 0 ? 90 / community.length : 90;
    community.forEach((u, idx) => {
      placeSprite(canvas, {
        emoji: u.garden_sprite, label: u.uid,
        left:   (5 + idx * zoneWidth + Math.random() * (zoneWidth - 8)) + '%',
        bottom: (5 + Math.random() * 55) + '%',
        size: '2.1rem', labelBg: 'rgba(45,106,45,0.75)',
        delay: (idx * 0.4) + 's', duration: (2.5 + Math.random() * 2) + 's'
      });
    });

    // Current user's sprite
    if (profile) {
      placeSprite(canvas, {
        emoji: profile.sprite, label: profile.name,
        left:   (5  + Math.random() * 88) + '%',
        bottom: (8  + Math.random() * 60) + '%',
        size: '3rem', labelBg: 'rgba(0,63,135,0.85)',
        delay: '0s', duration: '2.8s'
      });
    }
  }

  function placeSprite(canvas, { emoji, label, left, bottom, size, labelBg, delay, duration }) {
    const wrap = document.createElement('div');
    wrap.className = 'sprite';
    wrap.style.cssText = `left:${left};bottom:${bottom};animation-delay:${delay};animation-duration:${duration};`;
    const icon = document.createElement('div');
    icon.className = 'sprite-icon';
    icon.style.fontSize = size;
    icon.textContent = emoji;
    const lbl = document.createElement('div');
    lbl.className = 'sprite-name';
    lbl.style.background = labelBg;
    lbl.textContent = label;
    wrap.appendChild(icon);
    wrap.appendChild(lbl);
    canvas.appendChild(wrap);
  }

  init();
</script>
