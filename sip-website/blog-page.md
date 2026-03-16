---
permalink: /sip/blog
---

<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Blog — Soroptimist International of Poway</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #111110;
      --surface: #1a1917;
      --surface2: rgba(255,255,255,0.04);
      --border: rgba(255,255,255,0.08);
      --border2: #2a2a2a;
      --accent: #e8836a;
      --accent-hover: #f09a7e;
      --text-primary: #f5f0eb;
      --text-body: #a0a0a0;
      --text-lead: #b8b4b0;
      --text-muted: #555;
      --text-label: #777;
      --serif: 'Cormorant Garamond', serif;
      --sans: 'Jost', sans-serif;
    }

    html { background: var(--bg); }
    body {
      font-family: var(--sans);
      background: var(--bg);
      color: var(--text-body);
      min-height: 100vh;
      line-height: 1.7;
    }

    /* ── NAV ── */
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 40px;
      border-bottom: 1px solid var(--border2);
      position: sticky;
      top: 0;
      background: rgba(17,17,16,0.92);
      backdrop-filter: blur(12px);
      z-index: 100;
    }
    .nav-logo {
      font-family: var(--serif);
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--text-primary);
      text-decoration: none;
      letter-spacing: 0.02em;
    }
    .nav-logo span { color: var(--accent); }
    .nav-actions { display: flex; align-items: center; gap: 16px; }
    .nav-back {
      display: inline-flex; align-items: center; gap: 6px;
      font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em;
      color: var(--text-label); text-decoration: none; transition: color 0.15s;
    }
    .nav-back:hover { color: var(--accent); }
    .btn-admin {
      font-family: var(--sans);
      font-size: 0.75rem; font-weight: 600;
      text-transform: uppercase; letter-spacing: 0.1em;
      padding: 8px 18px; border-radius: 4px; cursor: pointer;
      transition: background 0.15s, transform 0.1s; border: none;
    }
    .btn-admin-in {
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text-label);
    }
    .btn-admin-in:hover { border-color: var(--accent); color: var(--accent); }
    .btn-admin-out {
      background: rgba(232,131,106,0.12);
      border: 1px solid rgba(232,131,106,0.3);
      color: var(--accent);
    }
    .btn-admin-out:hover { background: rgba(232,131,106,0.2); }

    /* ── HERO ── */
    .hero {
      max-width: 860px; margin: 0 auto;
      padding: 64px 24px 48px;
    }
    .eyebrow {
      font-size: 0.75rem; text-transform: uppercase;
      letter-spacing: 0.14em; color: var(--accent);
      margin-bottom: 14px;
    }
    .hero-title {
      font-family: var(--serif);
      font-size: clamp(2.2rem, 5vw, 3.4rem);
      font-weight: 600; color: var(--text-primary);
      line-height: 1.15; margin-bottom: 20px;
    }
    .hero-rule { width: 56px; height: 3px; background: var(--accent); margin-bottom: 28px; }
    .hero-lead {
      font-size: 1.05rem; line-height: 1.82;
      color: var(--text-lead); max-width: 620px;
    }

    /* ── ADMIN BAR ── */
    .admin-bar {
      max-width: 860px; margin: 0 auto 8px;
      padding: 0 24px;
      display: none;
    }
    .admin-bar.visible { display: flex; justify-content: flex-end; }
    .btn-new-post {
      background: var(--accent);
      color: #111; font-family: var(--sans);
      font-size: 0.8rem; font-weight: 600;
      text-transform: uppercase; letter-spacing: 0.1em;
      padding: 11px 24px; border-radius: 4px;
      border: none; cursor: pointer;
      display: inline-flex; align-items: center; gap: 8px;
      transition: background 0.15s, transform 0.15s;
    }
    .btn-new-post:hover { background: var(--accent-hover); transform: translateY(-1px); }

    /* ── POSTS GRID ── */
    .posts-wrap { max-width: 860px; margin: 0 auto; padding: 8px 24px 72px; }
    .posts-empty {
      text-align: center; padding: 80px 24px;
      color: var(--text-muted); font-size: 0.9rem;
      letter-spacing: 0.04em;
    }
    .posts-empty .empty-icon { font-size: 2rem; margin-bottom: 16px; opacity: 0.4; }

    .post-card {
      background: var(--surface2);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 32px;
      margin-bottom: 20px;
      position: relative;
      transition: border-color 0.2s, transform 0.2s;
      animation: fadeSlideIn 0.4s ease both;
    }
    .post-card:hover { border-color: rgba(232,131,106,0.25); transform: translateY(-2px); }
    @keyframes fadeSlideIn {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .post-meta {
      display: flex; align-items: center; gap: 16px;
      margin-bottom: 14px;
    }
    .post-date {
      font-size: 0.73rem; text-transform: uppercase;
      letter-spacing: 0.12em; color: var(--accent);
    }
    .post-tag {
      font-size: 0.7rem; text-transform: uppercase;
      letter-spacing: 0.1em; color: var(--text-muted);
      padding: 2px 8px; border: 1px solid var(--border2);
      border-radius: 2px;
    }
    .post-title {
      font-family: var(--serif);
      font-size: 1.65rem; font-weight: 600;
      color: var(--text-primary); line-height: 1.25;
      margin-bottom: 14px;
    }
    .post-body {
      font-size: 0.95rem; line-height: 1.85;
      color: var(--text-body); white-space: pre-wrap;
    }
    .post-body.clamped {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .post-footer {
      display: flex; align-items: center;
      justify-content: space-between;
      margin-top: 22px; padding-top: 18px;
      border-top: 1px solid var(--border2);
    }
    .post-author {
      font-size: 0.77rem; letter-spacing: 0.06em;
      color: var(--text-muted);
    }
    .post-actions { display: flex; gap: 10px; }
    .btn-read-more {
      background: none; border: none;
      font-family: var(--sans); font-size: 0.75rem;
      font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.08em; color: var(--accent);
      cursor: pointer; padding: 0;
      transition: color 0.15s;
    }
    .btn-read-more:hover { color: var(--accent-hover); }
    .btn-delete {
      background: none; border: 1px solid var(--border2);
      font-family: var(--sans); font-size: 0.7rem;
      text-transform: uppercase; letter-spacing: 0.08em;
      color: var(--text-muted); cursor: pointer;
      padding: 4px 10px; border-radius: 3px;
      transition: border-color 0.15s, color 0.15s;
    }
    .btn-delete:hover { border-color: #c0392b; color: #c0392b; }

    /* ── MODAL BACKDROP ── */
    .modal-backdrop {
      display: none; position: fixed; inset: 0;
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(6px);
      z-index: 200;
      align-items: center; justify-content: center;
      padding: 24px;
    }
    .modal-backdrop.open { display: flex; }

    /* ── MODAL: LOGIN ── */
    .modal {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      width: 100%; max-width: 420px;
      padding: 40px 36px;
      animation: modalIn 0.25s ease;
    }
    @keyframes modalIn {
      from { opacity: 0; transform: scale(0.96) translateY(8px); }
      to   { opacity: 1; transform: scale(1) translateY(0); }
    }
    .modal-eyebrow {
      font-size: 0.7rem; text-transform: uppercase;
      letter-spacing: 0.14em; color: var(--accent); margin-bottom: 10px;
    }
    .modal-title {
      font-family: var(--serif); font-size: 1.9rem;
      font-weight: 600; color: var(--text-primary); margin-bottom: 28px;
    }
    .field { margin-bottom: 20px; }
    .field label {
      display: block; font-size: 0.73rem;
      text-transform: uppercase; letter-spacing: 0.1em;
      color: var(--text-label); margin-bottom: 8px;
    }
    .field input, .field textarea {
      width: 100%; background: rgba(255,255,255,0.04);
      border: 1px solid var(--border);
      border-radius: 5px; padding: 11px 14px;
      color: var(--text-primary); font-family: var(--sans);
      font-size: 0.93rem; outline: none;
      transition: border-color 0.15s;
    }
    .field input:focus, .field textarea:focus { border-color: var(--accent); }
    .field textarea { resize: vertical; min-height: 130px; line-height: 1.7; }
    .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .modal-error {
      font-size: 0.8rem; color: #c0392b;
      margin-bottom: 16px; display: none;
    }
    .modal-error.visible { display: block; }
    .modal-actions { display: flex; gap: 12px; margin-top: 8px; }
    .btn-primary {
      flex: 1; background: var(--accent); color: #111;
      font-family: var(--sans); font-size: 0.8rem; font-weight: 600;
      text-transform: uppercase; letter-spacing: 0.1em;
      padding: 12px; border: none; border-radius: 4px;
      cursor: pointer; transition: background 0.15s;
    }
    .btn-primary:hover { background: var(--accent-hover); }
    .btn-secondary {
      background: transparent; border: 1px solid var(--border);
      color: var(--text-label); font-family: var(--sans);
      font-size: 0.8rem; font-weight: 500;
      text-transform: uppercase; letter-spacing: 0.1em;
      padding: 12px 20px; border-radius: 4px; cursor: pointer;
      transition: border-color 0.15s, color 0.15s;
    }
    .btn-secondary:hover { border-color: var(--text-label); color: var(--text-primary); }

    /* ── MODAL: NEW POST (wider) ── */
    .modal-post { max-width: 600px; }

    /* ── TOAST ── */
    .toast {
      position: fixed; bottom: 32px; right: 32px;
      background: var(--surface);
      border: 1px solid var(--accent);
      border-radius: 6px; padding: 14px 22px;
      font-size: 0.85rem; color: var(--text-primary);
      z-index: 300;
      transform: translateY(20px); opacity: 0;
      transition: transform 0.25s ease, opacity 0.25s ease;
      pointer-events: none;
    }
    .toast.show { transform: translateY(0); opacity: 1; }

    /* ── FOOTER ── */
    .sip-footer {
      margin-top: 64px; padding: 24px;
      border-top: 1px solid var(--border2);
      font-size: 0.78rem; color: var(--text-muted);
      text-transform: uppercase; letter-spacing: 0.07em;
      text-align: center;
    }

    /* ── ADMIN BADGE ── */
    .admin-badge {
      display: none; align-items: center; gap: 6px;
      font-size: 0.7rem; text-transform: uppercase;
      letter-spacing: 0.1em; color: var(--accent);
      padding: 4px 10px;
      border: 1px solid rgba(232,131,106,0.3);
      border-radius: 20px;
    }
    .admin-badge.visible { display: flex; }
    .admin-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }

    @media (max-width: 600px) {
      .nav { padding: 16px 20px; }
      .hero { padding: 40px 20px 32px; }
      .posts-wrap { padding: 8px 20px 48px; }
      .modal { padding: 28px 22px; }
      .field-row { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

<!-- NAV -->
<nav class="nav">
  <a href="/codewarrior-pages/sip/home/" class="nav-logo">Soroptimist <span>·</span> Poway</a>
  <div class="nav-actions">
    <a href="/sip/home/" class="nav-back">← Programs</a>
    <div class="admin-badge" id="adminBadge"><span class="admin-dot"></span>Admin</div>
    <button class="btn-admin btn-admin-in" id="adminBtn" onclick="openLogin()">Admin Login</button>
  </div>
</nav>

<!-- HERO -->
<header class="hero">
  <p class="eyebrow">✍️ News &amp; Updates</p>
  <h1 class="hero-title">Community<br>Blog</h1>
  <div class="hero-rule"></div>
  <p class="hero-lead">Stories, announcements, and milestones from Soroptimist International of Poway — celebrating the women and girls we serve.</p>
</header>

<!-- ADMIN: NEW POST BUTTON -->
<div class="admin-bar" id="adminBar">
  <button class="btn-new-post" onclick="openPostModal()">
    <span>＋</span> New Post
  </button>
</div>

<!-- POSTS -->
<main class="posts-wrap" id="postsWrap">
  <div class="posts-empty" id="emptyState">
    <div class="empty-icon">📝</div>
    No posts yet. Check back soon for updates from our community.
  </div>
</main>

<!-- FOOTER -->
<footer class="sip-footer">
  Soroptimist International of Poway &nbsp;·&nbsp; Empowering Women &amp; Girls
</footer>

<!-- ── MODAL: LOGIN ── -->
<div class="modal-backdrop" id="loginModal">
  <div class="modal">
    <p class="modal-eyebrow">🔐 Admin Access</p>
    <h2 class="modal-title">Sign In</h2>
    <div class="modal-error" id="loginError">Incorrect credentials. Please try again.</div>
    <div class="field">
      <label>Username</label>
      <input type="text" id="loginUser" placeholder="admin" autocomplete="username" />
    </div>
    <div class="field">
      <label>Password</label>
      <input type="password" id="loginPass" placeholder="••••••••" autocomplete="current-password"
             onkeydown="if(event.key==='Enter')submitLogin()" />
    </div>
    <div class="modal-actions">
      <button class="btn-primary" onclick="submitLogin()">Sign In</button>
      <button class="btn-secondary" onclick="closeLogin()">Cancel</button>
    </div>
    <p style="margin-top:20px;font-size:0.73rem;color:var(--text-muted);line-height:1.6;">
      This area is restricted to authorized SIP administrators.<br>
      Contact your club coordinator for access credentials.
    </p>
  </div>
</div>

<!-- ── MODAL: NEW POST ── -->
<div class="modal-backdrop" id="postModal">
  <div class="modal modal-post">
    <p class="modal-eyebrow">✍️ New Entry</p>
    <h2 class="modal-title">Create Post</h2>
    <div class="field">
      <label>Post Title</label>
      <input type="text" id="postTitle" placeholder="e.g. Celebrating Our 2025 Graduates" />
    </div>
    <div class="field-row">
      <div class="field">
        <label>Date</label>
        <input type="date" id="postDate" />
      </div>
      <div class="field">
        <label>Tag / Category</label>
        <input type="text" id="postTag" placeholder="e.g. Announcement" />
      </div>
    </div>
    <div class="field">
      <label>Content</label>
      <textarea id="postBody" placeholder="Share your update with the community…"></textarea>
    </div>
    <div class="modal-actions">
      <button class="btn-primary" onclick="submitPost()">Publish Post</button>
      <button class="btn-secondary" onclick="closePostModal()">Cancel</button>
    </div>
  </div>
</div>

<!-- TOAST -->
<div class="toast" id="toast"></div>

<script>
  /* ── STATE ── */
  let isAdmin = false;
  let posts   = [];

  /* ────────────────────────────────
     AUTH
     In production, replace submitLogin() with a real
     API call:  POST /api/auth/login  { username, password }
     Expect a JWT/session token back, store securely,
     and gate all write operations with that token.
  ──────────────────────────────── */
  const ADMIN_CREDS = { user: 'admin', pass: 'sip2025' }; // ← replace with real backend auth

  function openLogin() { document.getElementById('loginModal').classList.add('open'); setTimeout(()=>document.getElementById('loginUser').focus(),50); }
  function closeLogin() { document.getElementById('loginModal').classList.remove('open'); document.getElementById('loginError').classList.remove('visible'); }

  function submitLogin() {
    const u = document.getElementById('loginUser').value.trim();
    const p = document.getElementById('loginPass').value;

    // ── BACKEND HOOK ──
    // fetch('/api/auth/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({username:u, password:p}) })
    //   .then(r=>r.json())
    //   .then(data=>{ if(data.token){ sessionStorage.setItem('sip_token', data.token); setAdmin(true); closeLogin(); } else showLoginError(); })
    //   .catch(showLoginError);

    if (u === ADMIN_CREDS.user && p === ADMIN_CREDS.pass) {
      setAdmin(true);
      closeLogin();
      showToast('Welcome back, admin.');
    } else {
      document.getElementById('loginError').classList.add('visible');
    }
  }

  function setAdmin(val) {
    isAdmin = val;
    document.getElementById('adminBar').classList.toggle('visible', val);
    document.getElementById('adminBadge').classList.toggle('visible', val);
    const btn = document.getElementById('adminBtn');
    if (val) {
      btn.textContent = 'Sign Out';
      btn.className = 'btn-admin btn-admin-out';
      btn.onclick = logout;
    } else {
      btn.textContent = 'Admin Login';
      btn.className = 'btn-admin btn-admin-in';
      btn.onclick = openLogin;
    }
    renderPosts();
  }

  function logout() {
    setAdmin(false);
    // sessionStorage.removeItem('sip_token');
    showToast('Signed out.');
  }

  /* ── POST MODAL ── */
  function openPostModal() {
    document.getElementById('postDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('postModal').classList.add('open');
    setTimeout(()=>document.getElementById('postTitle').focus(),50);
  }
  function closePostModal() { document.getElementById('postModal').classList.remove('open'); }

  function submitPost() {
    const title = document.getElementById('postTitle').value.trim();
    const date  = document.getElementById('postDate').value;
    const tag   = document.getElementById('postTag').value.trim() || 'Update';
    const body  = document.getElementById('postBody').value.trim();

    if (!title || !date || !body) { showToast('Please fill in all required fields.'); return; }

    const post = { id: Date.now(), title, date, tag, body, author: 'SIP Admin' };

    // ── BACKEND HOOK ──
    // const token = sessionStorage.getItem('sip_token');
    // fetch('/api/posts', { method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+token}, body: JSON.stringify(post) })
    //   .then(r=>r.json())
    //   .then(saved=>{ posts.unshift(saved); renderPosts(); });

    posts.unshift(post);
    renderPosts();
    closePostModal();
    clearPostForm();
    showToast('Post published successfully.');
  }

  function clearPostForm() {
    ['postTitle','postDate','postTag','postBody'].forEach(id=>document.getElementById(id).value='');
  }

  function deletePost(id) {
    if (!confirm('Delete this post? This cannot be undone.')) return;
    posts = posts.filter(p=>p.id!==id);

    // ── BACKEND HOOK ──
    // const token = sessionStorage.getItem('sip_token');
    // fetch('/api/posts/'+id, { method:'DELETE', headers:{'Authorization':'Bearer '+token} });

    renderPosts();
    showToast('Post deleted.');
  }

  /* ── RENDER ── */
  function renderPosts() {
    const wrap = document.getElementById('postsWrap');
    const empty = document.getElementById('emptyState');

    if (posts.length === 0) {
      empty.style.display = 'block';
      wrap.querySelectorAll('.post-card').forEach(el=>el.remove());
      return;
    }

    empty.style.display = 'none';
    wrap.querySelectorAll('.post-card').forEach(el=>el.remove());

    posts.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'post-card';
      card.style.animationDelay = (i * 0.07) + 's';
      card.dataset.id = p.id;

      const fmtDate = new Date(p.date + 'T00:00:00').toLocaleDateString('en-US', { month:'long', day:'numeric', year:'numeric' });
      const bodyId = 'body_' + p.id;

      card.innerHTML = `
        <div class="post-meta">
          <span class="post-date">${fmtDate}</span>
          ${p.tag ? `<span class="post-tag">${escHtml(p.tag)}</span>` : ''}
        </div>
        <h2 class="post-title">${escHtml(p.title)}</h2>
        <div class="post-body clamped" id="${bodyId}">${escHtml(p.body)}</div>
        <div class="post-footer">
          <span class="post-author">By ${escHtml(p.author)}</span>
          <div class="post-actions">
            <button class="btn-read-more" id="rmBtn_${p.id}" onclick="toggleRead(${p.id})">Read more →</button>
            ${isAdmin ? `<button class="btn-delete" onclick="deletePost(${p.id})">Delete</button>` : ''}
          </div>
        </div>`;
      wrap.appendChild(card);
    });
  }

  function toggleRead(id) {
    const el  = document.getElementById('body_'  + id);
    const btn = document.getElementById('rmBtn_' + id);
    if (el.classList.toggle('clamped')) {
      btn.textContent = 'Read more →';
    } else {
      btn.textContent = '← Collapse';
    }
  }

  /* ── TOAST ── */
  let toastTimer;
  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(()=>t.classList.remove('show'), 2800);
  }

  /* ── UTIL ── */
  function escHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* ── CLOSE MODALS ON BACKDROP CLICK ── */
  document.getElementById('loginModal').addEventListener('click', function(e){ if(e.target===this) closeLogin(); });
  document.getElementById('postModal').addEventListener('click', function(e){ if(e.target===this) closePostModal(); });

  /* ── SEED DEMO POST ── */
  posts = [{
    id: 1,
    title: "Celebrating 27 Years of Transitional Housing",
    date: "2024-11-12",
    tag: "Milestone",
    body: "This year marks our 27th anniversary supporting domestic violence survivors through our Transitional Housing Program. Since 1997, we have helped 91 families — and 218 children — rebuild their lives in safety and dignity.\n\nWe are grateful beyond words to every volunteer, sponsor, and community member who has stood with us on this journey. Here's to many more years of empowering women and girls in our community.",
    author: "SIP Admin"
  }];
  renderPosts();
</script>
</body>
</html>