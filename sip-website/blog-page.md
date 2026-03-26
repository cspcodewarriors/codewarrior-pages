---
title: Blog
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

    /* ── ADMIN LOGIN PROMPT ── */
    .btn-admin-login {
      background: rgba(232,131,106,0.12);
      border: 1px solid rgba(232,131,106,0.3);
      color: var(--accent);
      font-family: var(--sans);
      font-size: 0.75rem; font-weight: 600;
      text-transform: uppercase; letter-spacing: 0.1em;
      padding: 8px 18px; border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex; align-items: center; gap: 6px;
      transition: background 0.15s;
    }
    .btn-admin-login:hover { background: rgba(232,131,106,0.22); }

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
    .post-card.draft { border-color: rgba(255,255,255,0.12); opacity: 0.75; }
    @keyframes fadeSlideIn {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .post-meta {
      display: flex; align-items: center; gap: 16px;
      flex-wrap: wrap;
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
    .draft-badge {
      font-size: 0.65rem; text-transform: uppercase;
      letter-spacing: 0.1em; color: #f0c060;
      padding: 2px 8px; border: 1px solid rgba(240,192,96,0.35);
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
    .post-actions { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
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
    .btn-edit-post {
      background: none; border: 1px solid var(--border2);
      font-family: var(--sans); font-size: 0.7rem;
      text-transform: uppercase; letter-spacing: 0.08em;
      color: var(--accent); cursor: pointer;
      padding: 4px 10px; border-radius: 3px;
      transition: border-color 0.15s, background 0.15s;
    }
    .btn-edit-post:hover { border-color: var(--accent); background: rgba(232,131,106,0.08); }
    .btn-publish-toggle {
      background: none; border: 1px solid var(--border2);
      font-family: var(--sans); font-size: 0.7rem;
      text-transform: uppercase; letter-spacing: 0.08em;
      color: #f0c060; cursor: pointer;
      padding: 4px 10px; border-radius: 3px;
      transition: border-color 0.15s, background 0.15s;
    }
    .btn-publish-toggle:hover { border-color: #f0c060; background: rgba(240,192,96,0.08); }
    .btn-publish-toggle.published { color: var(--text-muted); }
    .btn-publish-toggle.published:hover { border-color: var(--text-muted); background: none; }

    /* ── TOAST ── */
    .toast {
      position: fixed; bottom: 32px; right: 32px;
      background: var(--surface);
      border: 1px solid var(--accent);
      border-radius: 6px; padding: 14px 22px;
      font-size: 0.85rem; color: var(--text-primary);
      z-index: 999999;
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
    }
  </style>
</head>
<body>

<!-- NAV -->
<nav class="nav">
  <a href="/codewarrior-pages/sip/home/" class="nav-logo">Soroptimist <span>·</span> Poway</a>
  <div class="nav-actions">
    <a href="/codewarrior-pages/sip/home/" class="nav-back">← Programs</a>
    <div class="admin-badge" id="adminBadge"><span class="admin-dot"></span>Admin</div>
    <button class="btn-admin btn-admin-out" id="adminBtn" style="display:none" onclick="logout()">Sign Out</button>
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

<!-- ADMIN LOGIN PROMPT (shown when not logged in) -->
<div class="admin-bar" id="adminLoginPrompt" style="display:none; justify-content:flex-end; align-items:center;">
  <a id="adminLoginLink" href="{{ site.baseurl }}/login" class="btn-admin-login">
    🔒 Admin Login
  </a>
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

<!-- TOAST -->
<div class="toast" id="toast"></div>

<script>
  /* ── CONFIG ── */
  const API_BASE = 'http://localhost:8427';

  /* ── STATE ── */
  let isAdmin       = false;
  let posts         = [];
  let editingPostId = null;

  /* ─────────────────────────────
     AUTH
  ───────────────────────────── */
  function checkAdminSession() {
    fetch(`${API_BASE}/api/id`, { credentials: 'include' })
      .then(r => r.ok ? r.json() : Promise.reject(r.status))
      .then(user => {
        if (user.is_admin) {
          setAdmin(true);
        } else {
          loadPosts();
        }
      })
      .catch(status => {
        if (status === 401) {
          const link = document.getElementById('adminLoginLink');
          link.href = '{{ site.baseurl }}/login?next=' + encodeURIComponent(window.location.pathname);
          document.getElementById('adminLoginPrompt').style.display = 'flex';
        }
        loadPosts();
      });
  }

  function setAdmin(val) {
    isAdmin = val;
    document.getElementById('adminBar').classList.toggle('visible', val);
    document.getElementById('adminBadge').classList.toggle('visible', val);
    document.getElementById('adminLoginPrompt').style.display = 'none';
    const btn = document.getElementById('adminBtn');
    btn.style.display = val ? '' : 'none';
    loadPosts();
  }

  function logout() {
    fetch(`${API_BASE}/api/authenticate`, { method: 'DELETE', credentials: 'include' })
      .finally(() => {
        isAdmin = false;
        document.getElementById('adminBar').classList.remove('visible');
        document.getElementById('adminBadge').classList.remove('visible');
        document.getElementById('adminBtn').style.display = 'none';
        const link = document.getElementById('adminLoginLink');
        link.href = '{{ site.baseurl }}/login?next=' + encodeURIComponent(window.location.pathname);
        document.getElementById('adminLoginPrompt').style.display = 'flex';
        showToast('Signed out.');
        loadPosts();
      });
  }

  /* ─────────────────────────────
     POSTS: LOAD
  ───────────────────────────── */
  function loadPosts() {
    fetch(`${API_BASE}/api/blog`, { credentials: 'include' })
      .then(r => r.ok ? r.json() : Promise.reject('Failed to load posts'))
      .then(data => { posts = data; renderPosts(); })
      .catch(() => { posts = []; renderPosts(); });
  }

  /* ─────────────────────────────
     PUBLISH TOGGLE
  ───────────────────────────── */
  function togglePublish(id) {
    const post = posts.find(p => p.id === id);
    if (!post) return;
    const newState = !post.published;
    fetch(`${API_BASE}/api/blog/publish`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, published: newState }),
    })
    .then(r => r.ok ? r.json() : r.json().then(d => Promise.reject(d.message || 'Error')))
    .then(updated => {
      const idx = posts.findIndex(p => p.id === id);
      if (idx !== -1) posts[idx] = updated;
      renderPosts();
      showToast(newState ? 'Post published.' : 'Post moved to drafts.');
    })
    .catch(err => showToast(String(err)));
  }

  /* ─────────────────────────────
     DELETE
  ───────────────────────────── */
  function deletePost(id) {
    const post = posts.find(p => p.id === id);
    if (!confirm(`Delete "${post ? post.title : 'this post'}"? This cannot be undone.`)) return;
    fetch(`${API_BASE}/api/blog`, {
      method: 'DELETE',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    .then(r => r.ok ? r.json() : r.json().then(d => Promise.reject(d.message || 'Error')))
    .then(() => {
      posts = posts.filter(p => p.id !== id);
      renderPosts();
      showToast('Post deleted.');
    })
    .catch(err => showToast(String(err)));
  }

  /* ─────────────────────────────
     RENDER
  ───────────────────────────── */
  function renderPosts() {
    const wrap  = document.getElementById('postsWrap');
    const empty = document.getElementById('emptyState');
    wrap.querySelectorAll('.post-card').forEach(el => el.remove());
    if (posts.length === 0) { empty.style.display = 'block'; return; }
    empty.style.display = 'none';
    posts.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'post-card' + (p.published ? '' : ' draft');
      card.style.animationDelay = (i * 0.07) + 's';
      card.dataset.id = p.id;
      let fmtDate = '';
      if (p.event_date) {
        const [y, m, d] = p.event_date.split('-').map(Number);
        fmtDate = new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      }
      const bodyId = 'body_' + p.id;
      card.innerHTML = `
        <div class="post-meta">
          <span class="post-date">${escHtml(fmtDate)}</span>
          ${p.program_tag ? `<span class="post-tag">${escHtml(p.program_tag)}</span>` : ''}
          ${isAdmin && !p.published ? `<span class="draft-badge">Draft</span>` : ''}
        </div>
        <h2 class="post-title">${escHtml(p.title || 'Untitled')}</h2>
        <div class="post-body clamped" id="${bodyId}">${escHtml(p.description || '')}</div>
        <div class="post-footer">
          <span class="post-author">By ${escHtml(p.author || 'SIP Admin')}</span>
          <div class="post-actions">
            <button class="btn-read-more" id="rmBtn_${p.id}" onclick="toggleRead(${p.id})">Read more →</button>
            ${isAdmin ? `
              <button class="btn-publish-toggle ${p.published ? 'published' : ''}"
                      onclick="togglePublish(${p.id})"
                      title="${p.published ? 'Move to drafts' : 'Publish this post'}">
                ${p.published ? 'Unpublish' : 'Publish'}
              </button>
              <button class="btn-edit-post" onclick="openPostModal(${p.id})">Edit</button>
              <button class="btn-delete" onclick="deletePost(${p.id})">Delete</button>
            ` : ''}
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

  /* ─────────────────────────────
     HELPERS
  ───────────────────────────── */
  let toastTimer;
  function showToast(msg) {
    const t = document.getElementById('sipToast') || document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
  }

  function escHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ─────────────────────────────
     MODAL BOOTSTRAP
     Injected into real document.head/body to escape
     Jekyll's layout stacking context.
  ───────────────────────────── */
  (function bootstrapModal() {
    const style = document.createElement('style');
    style.textContent = `
      #sipPostModal {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.82);
        z-index: 2147483647;
        align-items: flex-start;
        justify-content: center;
        padding: 40px 24px;
        overflow-y: auto;
        font-family: 'Jost', 'Segoe UI', sans-serif;
      }
      #sipPostModal.open { display: flex; }
      #sipPostModal .sip-modal-panel {
        background: #1a1917;
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 10px;
        width: 100%;
        max-width: 580px;
        padding: 40px 36px;
        position: relative;
        animation: sipModalIn 0.22s ease;
      }
      @keyframes sipModalIn {
        from { opacity:0; transform: scale(0.96) translateY(10px); }
        to   { opacity:1; transform: scale(1)    translateY(0);    }
      }
      #sipPostModal .sip-eyebrow {
        font-size: 0.7rem; text-transform: uppercase;
        letter-spacing: 0.14em; color: #e8836a; margin-bottom: 8px;
      }
      #sipPostModal .sip-title {
        font-family: 'Cormorant Garamond', Georgia, serif;
        font-size: 1.9rem; font-weight: 600;
        color: #f5f0eb; margin-bottom: 24px;
      }
      #sipPostModal .sip-field { margin-bottom: 18px; }
      #sipPostModal .sip-field label {
        display: block; font-size: 0.72rem;
        text-transform: uppercase; letter-spacing: 0.1em;
        color: #777; margin-bottom: 7px;
      }
      #sipPostModal .sip-field input,
      #sipPostModal .sip-field textarea,
      #sipPostModal .sip-field select {
        width: 100%;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 5px; padding: 11px 14px;
        color: #f5f0eb;
        font-family: 'Jost', sans-serif;
        font-size: 0.93rem; outline: none;
        box-sizing: border-box;
        transition: border-color 0.15s;
      }
      #sipPostModal .sip-field input:focus,
      #sipPostModal .sip-field textarea:focus,
      #sipPostModal .sip-field select:focus {
        border-color: #e8836a;
      }
      #sipPostModal .sip-field select option { background: #1a1917; }
      #sipPostModal .sip-field textarea { resize: vertical; min-height: 140px; line-height: 1.7; }
      #sipPostModal .sip-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
      @media(max-width:520px){ #sipPostModal .sip-row { grid-template-columns:1fr; } }
      #sipPostModal .sip-error {
        font-size:0.8rem; color:#e05555;
        margin-bottom:14px; display:none;
      }
      #sipPostModal .sip-error.visible { display:block; }
      /* Three-button action row */
      #sipPostModal .sip-actions {
        display: flex; gap: 10px; flex-wrap: wrap;
      }
      #sipPostModal .sip-btn-publish {
        flex: 1;
        background: #e8836a; color: #111;
        font-family: 'Jost', sans-serif; font-size: 0.8rem; font-weight: 600;
        text-transform: uppercase; letter-spacing: 0.1em;
        padding: 12px; border: none; border-radius: 4px; cursor: pointer;
        transition: background 0.15s;
        white-space: nowrap;
      }
      #sipPostModal .sip-btn-publish:hover { background: #f09a7e; }
      #sipPostModal .sip-btn-publish:disabled { opacity: 0.6; cursor: default; }
      #sipPostModal .sip-btn-draft {
        flex: 1;
        background: transparent;
        border: 1px solid rgba(240,192,96,0.4);
        color: #f0c060;
        font-family: 'Jost', sans-serif; font-size: 0.8rem; font-weight: 600;
        text-transform: uppercase; letter-spacing: 0.1em;
        padding: 12px; border-radius: 4px; cursor: pointer;
        transition: border-color 0.15s, background 0.15s;
        white-space: nowrap;
      }
      #sipPostModal .sip-btn-draft:hover { border-color: #f0c060; background: rgba(240,192,96,0.08); }
      #sipPostModal .sip-btn-draft:disabled { opacity: 0.6; cursor: default; }
      #sipPostModal .sip-btn-cancel {
        background: transparent; border: 1px solid rgba(255,255,255,0.1);
        color: #777; font-family: 'Jost', sans-serif;
        font-size: 0.8rem; font-weight: 500;
        text-transform: uppercase; letter-spacing: 0.1em;
        padding: 12px 20px; border-radius: 4px; cursor: pointer;
        transition: border-color 0.15s, color 0.15s;
        white-space: nowrap;
      }
      #sipPostModal .sip-btn-cancel:hover { border-color: #aaa; color: #f5f0eb; }

      #sipToast {
        position:fixed; bottom:32px; right:32px;
        background:#1a1917; border:1px solid #e8836a;
        border-radius:6px; padding:14px 22px;
        font-size:0.85rem; color:#f5f0eb;
        font-family:'Jost',sans-serif;
        z-index:2147483647;
        transform:translateY(20px); opacity:0;
        transition:transform 0.25s ease, opacity 0.25s ease;
        pointer-events:none;
      }
      #sipToast.show { transform:translateY(0); opacity:1; }
    `;
    document.head.appendChild(style);

    const modal = document.createElement('div');
    modal.id = 'sipPostModal';
    modal.innerHTML = `
      <div class="sip-modal-panel">
        <p class="sip-eyebrow" id="sipModalEyebrow">✍️ New Entry</p>
        <h2 class="sip-title" id="sipModalTitle">Create Post</h2>
        <div class="sip-field">
          <label for="sipPostTitle">Post Title *</label>
          <input type="text" id="sipPostTitle" placeholder="e.g. Celebrating Our 2025 Graduates" />
        </div>
        <div class="sip-row">
          <div class="sip-field">
            <label for="sipPostDate">Event Date *</label>
            <input type="date" id="sipPostDate" />
          </div>
          <div class="sip-field">
            <label for="sipPostTag">Program Tag</label>
            <select id="sipPostTag">
              <option value="">— None —</option>
              <option value="Live Your Dream">Live Your Dream</option>
              <option value="Dream It Be It">Dream It Be It</option>
              <option value="STAT!">STAT!</option>
              <option value="Abraxas Scholarship">Abraxas Scholarship</option>
              <option value="Announcement">Announcement</option>
            </select>
          </div>
        </div>
        <div class="sip-field">
          <label for="sipPostBody">Content *</label>
          <textarea id="sipPostBody" placeholder="Share your update with the community…"></textarea>
        </div>
        <div class="sip-error" id="sipPostError"></div>
        <div class="sip-actions">
          <button class="sip-btn-publish" id="sipPublishBtn" onclick="submitPost(true)">Publish</button>
          <button class="sip-btn-draft"   id="sipDraftBtn"   onclick="submitPost(false)">Save Draft</button>
          <button class="sip-btn-cancel"                     onclick="closePostModal()">Cancel</button>
        </div>
      </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('mousedown', function(e) {
      if (e.target === this) closePostModal();
    });

    const toast = document.createElement('div');
    toast.id = 'sipToast';
    document.body.appendChild(toast);

    // Remove old in-page toast (no longer needed)
    const oldToast = document.getElementById('toast');
    if (oldToast) oldToast.remove();
  })();

  /* ─────────────────────────────
     MODAL FUNCTIONS
  ───────────────────────────── */
  function openPostModal(postId) {
    editingPostId = postId || null;
    const isEdit = editingPostId !== null;

    document.getElementById('sipModalEyebrow').textContent = isEdit ? '✏️ Edit Entry' : '✍️ New Entry';
    document.getElementById('sipModalTitle').textContent   = isEdit ? 'Edit Post'     : 'Create Post';

    // Button labels for edit mode
    document.getElementById('sipPublishBtn').textContent = isEdit ? 'Publish' : 'Publish';
    document.getElementById('sipDraftBtn').textContent   = isEdit ? 'Save Draft' : 'Save Draft';
    document.getElementById('sipPublishBtn').disabled    = false;
    document.getElementById('sipDraftBtn').disabled      = false;

    clearPostError();

    if (isEdit) {
      const p = posts.find(post => post.id === editingPostId);
      if (!p) return;
      document.getElementById('sipPostTitle').value = p.title       || '';
      document.getElementById('sipPostDate').value  = p.event_date  || '';
      document.getElementById('sipPostTag').value   = p.program_tag || '';
      document.getElementById('sipPostBody').value  = p.description || '';
    } else {
      document.getElementById('sipPostTitle').value = '';
      document.getElementById('sipPostDate').value  = new Date().toISOString().slice(0, 10);
      document.getElementById('sipPostTag').value   = '';
      document.getElementById('sipPostBody').value  = '';
    }

    document.getElementById('sipPostModal').classList.add('open');
    setTimeout(() => document.getElementById('sipPostTitle').focus(), 80);
  }

  function closePostModal() {
    document.getElementById('sipPostModal').classList.remove('open');
    editingPostId = null;
    clearPostError();
  }

  /* published param comes from which button was clicked */
  function submitPost(published) {
    const title       = document.getElementById('sipPostTitle').value.trim();
    const event_date  = document.getElementById('sipPostDate').value.trim();
    const program_tag = document.getElementById('sipPostTag').value.trim() || null;
    const description = document.getElementById('sipPostBody').value.trim();

    if (!title || title.length < 2)            return showPostError('Title is required (at least 2 characters).');
    if (!event_date)                            return showPostError('Event date is required.');
    if (!description || description.length < 2) return showPostError('Content is required (at least 2 characters).');

    const isEdit  = editingPostId !== null;
    const payload = { title, event_date, description, program_tag, published };
    if (isEdit) payload.id = editingPostId;

    const publishBtn = document.getElementById('sipPublishBtn');
    const draftBtn   = document.getElementById('sipDraftBtn');
    publishBtn.disabled = true;
    draftBtn.disabled   = true;
    publishBtn.textContent = published ? 'Publishing…' : 'Publish';
    draftBtn.textContent   = published ? 'Save Draft'  : 'Saving…';

    fetch(`${API_BASE}/api/blog`, {
      method: isEdit ? 'PUT' : 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    .then(r => r.ok ? r.json() : r.json().then(d => Promise.reject(d.message || 'Server error')))
    .then(saved => {
      if (isEdit) {
        const idx = posts.findIndex(p => p.id === editingPostId);
        if (idx !== -1) posts[idx] = saved;
      } else {
        posts.unshift(saved);
      }
      closePostModal();
      renderPosts();
      showToast(isEdit
        ? (published ? 'Post published.' : 'Draft saved.')
        : (published ? 'Post published!' : 'Draft saved.'));
    })
    .catch(err => {
      showPostError(String(err));
      publishBtn.disabled    = false;
      draftBtn.disabled      = false;
      publishBtn.textContent = 'Publish';
      draftBtn.textContent   = 'Save Draft';
    });
  }

  function showPostError(msg) {
    const el = document.getElementById('sipPostError');
    el.textContent = msg;
    el.classList.add('visible');
  }

  function clearPostError() {
    const el = document.getElementById('sipPostError');
    if (!el) return;
    el.textContent = '';
    el.classList.remove('visible');
  }

  /* ── INIT ── */
  checkAdminSession();
</script>
</body>
</html>