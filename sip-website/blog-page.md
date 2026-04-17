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
      display: flex; align-items: center; justify-content: space-between;
      padding: 20px 40px; border-bottom: 1px solid var(--border2);
      position: sticky; top: 0;
      background: rgba(17,17,16,0.92); backdrop-filter: blur(12px); z-index: 100;
    }
    .nav-logo { font-family: var(--serif); font-size: 1.05rem; font-weight: 600; color: var(--text-primary); text-decoration: none; letter-spacing: 0.02em; }
    .nav-logo span { color: var(--accent); }
    .nav-actions { display: flex; align-items: center; gap: 16px; }
    .nav-back { display: inline-flex; align-items: center; gap: 6px; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-label); text-decoration: none; transition: color 0.15s; }
    .nav-back:hover { color: var(--accent); }
    .btn-admin { font-family: var(--sans); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; padding: 8px 18px; border-radius: 4px; cursor: pointer; transition: background 0.15s, transform 0.1s; border: none; }
    .btn-admin-out { background: rgba(232,131,106,0.12); border: 1px solid rgba(232,131,106,0.3); color: var(--accent); }
    .btn-admin-out:hover { background: rgba(232,131,106,0.2); }

    /* ── HERO ── */
    .hero { max-width: 860px; margin: 0 auto; padding: 64px 24px 48px; }
    .eyebrow { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.14em; color: var(--accent); margin-bottom: 14px; }
    .hero-title { font-family: var(--serif); font-size: clamp(2.2rem, 5vw, 3.4rem); font-weight: 600; color: var(--text-primary); line-height: 1.15; margin-bottom: 20px; }
    .hero-rule { width: 56px; height: 3px; background: var(--accent); margin-bottom: 28px; }
    .hero-lead { font-size: 1.05rem; line-height: 1.82; color: var(--text-lead); max-width: 620px; }

    /* ── ADMIN BAR ── */
    .admin-bar { max-width: 860px; margin: 0 auto 8px; padding: 0 24px; display: none; }
    .admin-bar.visible { display: flex; justify-content: flex-end; }
    .btn-new-post { background: var(--accent); color: #111; font-family: var(--sans); font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; padding: 11px 24px; border-radius: 4px; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: background 0.15s, transform 0.15s; }
    .btn-new-post:hover { background: var(--accent-hover); transform: translateY(-1px); }

    /* ── ADMIN LOGIN PROMPT ── */
    .btn-admin-login { background: rgba(232,131,106,0.12); border: 1px solid rgba(232,131,106,0.3); color: var(--accent); font-family: var(--sans); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; padding: 8px 18px; border-radius: 4px; cursor: pointer; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; transition: background 0.15s; }
    .btn-admin-login:hover { background: rgba(232,131,106,0.22); }

    /* ── POSTS GRID ── */
    .posts-wrap { max-width: 860px; margin: 0 auto; padding: 8px 24px 72px; }
    .posts-empty { text-align: center; padding: 80px 24px; color: var(--text-muted); font-size: 0.9rem; letter-spacing: 0.04em; }
    .posts-empty .empty-icon { font-size: 2rem; margin-bottom: 16px; opacity: 0.4; }

    .post-card { background: var(--surface2); border: 1px solid var(--border); border-radius: 8px; padding: 32px; margin-bottom: 20px; position: relative; transition: border-color 0.2s, transform 0.2s; animation: fadeSlideIn 0.4s ease both; }
    .post-card:hover { border-color: rgba(232,131,106,0.25); transform: translateY(-2px); }
    .post-card.draft { border-color: rgba(255,255,255,0.12); opacity: 0.75; }
    @keyframes fadeSlideIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

    .post-meta { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; margin-bottom: 14px; }
    .post-date { font-size: 0.73rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent); }
    .post-tag { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); padding: 2px 8px; border: 1px solid var(--border2); border-radius: 2px; }
    .draft-badge { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; color: #f0c060; padding: 2px 8px; border: 1px solid rgba(240,192,96,0.35); border-radius: 2px; }
    .post-title { font-family: var(--serif); font-size: 1.65rem; font-weight: 600; color: var(--text-primary); line-height: 1.25; margin-bottom: 14px; }
    .post-body { font-size: 0.95rem; line-height: 1.85; color: var(--text-body); white-space: pre-wrap; }
    .post-body.clamped { display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }

    /* ── POST IMAGE GALLERY ── */
    .post-gallery { margin-top: 20px; }
    .post-gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 10px;
    }
    .gallery-img-wrap {
      position: relative;
      border-radius: 5px;
      overflow: hidden;
      background: rgba(255,255,255,0.04);
      aspect-ratio: 1;
      cursor: pointer;
    }
    .gallery-img-wrap img {
      width: 100%; height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.2s;
    }
    .gallery-img-wrap:hover img { transform: scale(1.04); }
    .gallery-img-delete {
      position: absolute; top: 5px; right: 5px;
      background: rgba(0,0,0,0.7); border: none;
      color: #fff; font-size: 0.65rem;
      border-radius: 3px; padding: 3px 6px;
      cursor: pointer; opacity: 0;
      transition: opacity 0.15s;
      text-transform: uppercase; letter-spacing: 0.06em;
    }
    .gallery-img-wrap:hover .gallery-img-delete { opacity: 1; }

    /* ── LIGHTBOX ── */
    #sipLightbox {
      display: none; position: fixed; inset: 0;
      background: rgba(0,0,0,0.92); z-index: 2147483647;
      align-items: center; justify-content: center;
    }
    #sipLightbox.open { display: flex; }
    #sipLightbox img { max-width: 90vw; max-height: 88vh; border-radius: 6px; object-fit: contain; box-shadow: 0 20px 60px rgba(0,0,0,0.8); }
    .lb-close { position: absolute; top: 20px; right: 28px; background: none; border: none; color: #fff; font-size: 2rem; cursor: pointer; line-height: 1; opacity: 0.7; transition: opacity 0.15s; }
    .lb-close:hover { opacity: 1; }
    .lb-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.1); border: none; color: #fff; font-size: 1.5rem; padding: 16px 14px; cursor: pointer; border-radius: 4px; transition: background 0.15s; }
    .lb-arrow:hover { background: rgba(255,255,255,0.2); }
    .lb-prev { left: 16px; }
    .lb-next { right: 16px; }

    .post-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 22px; padding-top: 18px; border-top: 1px solid var(--border2); }
    .post-author { font-size: 0.77rem; letter-spacing: 0.06em; color: var(--text-muted); }
    .post-actions { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
    .btn-read-more { background: none; border: none; font-family: var(--sans); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); cursor: pointer; padding: 0; transition: color 0.15s; }
    .btn-read-more:hover { color: var(--accent-hover); }
    .btn-delete { background: none; border: 1px solid var(--border2); font-family: var(--sans); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); cursor: pointer; padding: 4px 10px; border-radius: 3px; transition: border-color 0.15s, color 0.15s; }
    .btn-delete:hover { border-color: #c0392b; color: #c0392b; }
    .btn-edit-post { background: none; border: 1px solid var(--border2); font-family: var(--sans); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); cursor: pointer; padding: 4px 10px; border-radius: 3px; transition: border-color 0.15s, background 0.15s; }
    .btn-edit-post:hover { border-color: var(--accent); background: rgba(232,131,106,0.08); }
    .btn-publish-toggle { background: none; border: 1px solid var(--border2); font-family: var(--sans); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: #f0c060; cursor: pointer; padding: 4px 10px; border-radius: 3px; transition: border-color 0.15s, background 0.15s; }
    .btn-publish-toggle:hover { border-color: #f0c060; background: rgba(240,192,96,0.08); }
    .btn-publish-toggle.published { color: var(--text-muted); }
    .btn-publish-toggle.published:hover { border-color: var(--text-muted); background: none; }

    /* ── TOAST ── */
    .toast { position: fixed; bottom: 32px; right: 32px; background: var(--surface); border: 1px solid var(--accent); border-radius: 6px; padding: 14px 22px; font-size: 0.85rem; color: var(--text-primary); z-index: 999999; transform: translateY(20px); opacity: 0; transition: transform 0.25s ease, opacity 0.25s ease; pointer-events: none; }
    .toast.show { transform: translateY(0); opacity: 1; }

    /* ── FOOTER ── */
    .sip-footer { margin-top: 64px; padding: 24px; border-top: 1px solid var(--border2); font-size: 0.78rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.07em; text-align: center; }

    /* ── ADMIN BADGE ── */
    .admin-badge { display: none; align-items: center; gap: 6px; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); padding: 4px 10px; border: 1px solid rgba(232,131,106,0.3); border-radius: 20px; }
    .admin-badge.visible { display: flex; }
    .admin-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }

    @media (max-width: 600px) {
      .nav { padding: 16px 20px; }
      .hero { padding: 40px 20px 32px; }
      .posts-wrap { padding: 8px 20px 48px; }
      .post-gallery-grid { grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); }
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

<!-- ADMIN LOGIN PROMPT -->
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

<!-- LIGHTBOX -->
<div id="sipLightbox">
  <button class="lb-close" onclick="closeLightbox()">✕</button>
  <button class="lb-arrow lb-prev" onclick="lbStep(-1)">‹</button>
  <img id="sipLightboxImg" src="" alt="Blog photo" />
  <button class="lb-arrow lb-next" onclick="lbStep(1)">›</button>
</div>

<!-- FOOTER -->
<footer class="sip-footer">
  Soroptimist International of Poway &nbsp;·&nbsp; Empowering Women &amp; Girls
</footer>

<!-- TOAST -->
<div class="toast" id="toast"></div>

<script>
  /* ── CONFIG ── */
  var API_BASE = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
    ? 'http://localhost:8427'
    : 'https://sipoway.opencodingsociety.com';

  /* ── STATE ── */
  let isAdmin        = false;
  let posts          = [];
  let editingPostId  = null;

  // Images staged inside the post modal (new uploads not yet sent)
  let uploadQueue    = [];   // Array of { dataURL, name }
  let postImages     = {};   // { [postId]: [ { filename, data } ] }

  // Lightbox state
  let lbImages       = [];
  let lbIndex        = 0;

  /* ═══════════════════════════════════════════════
     AUTH
  ═══════════════════════════════════════════════ */
  function checkAdminSession() {
    fetch(`${API_BASE}/api/id`, { credentials: 'include' })
      .then(r => r.ok ? r.json() : Promise.reject(r.status))
      .then(user => { user.is_admin ? setAdmin(true) : loadPosts(); })
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
    document.getElementById('adminBtn').style.display = val ? '' : 'none';
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

  /* ═══════════════════════════════════════════════
     POSTS: LOAD + RENDER
  ═══════════════════════════════════════════════ */
  function loadPosts() {
    fetch(`${API_BASE}/api/blog`, { credentials: 'include' })
      .then(r => r.ok ? r.json() : Promise.reject('Failed'))
      .then(data => { posts = data; renderPosts(); loadAllImages(); })
      .catch(() => { posts = []; renderPosts(); });
  }

  function loadAllImages() {
    posts.forEach(p => loadPostImages(p.id));
  }

  function loadPostImages(postId) {
    fetch(`${API_BASE}/api/blog/images/data?post_id=${postId}`, { credentials: 'include' })
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (!data) return;
        postImages[postId] = data.images || [];
        renderGallery(postId);
      })
      .catch(() => {});
  }

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

      const bodyId    = 'body_'    + p.id;
      const galleryId = 'gallery_' + p.id;

      card.innerHTML = `
        <div class="post-meta">
          <span class="post-date">${escHtml(fmtDate)}</span>
          ${p.program_tag ? `<span class="post-tag">${escHtml(p.program_tag)}</span>` : ''}
          ${isAdmin && !p.published ? `<span class="draft-badge">Draft</span>` : ''}
        </div>
        <h2 class="post-title">${escHtml(p.title || 'Untitled')}</h2>
        <div class="post-body clamped" id="${bodyId}">${escHtml(p.description || '')}</div>

        <!-- image gallery slot -->
        <div class="post-gallery" id="${galleryId}"></div>

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
              <button class="btn-edit-post"  onclick="openPostModal(${p.id})">Edit</button>
              <button class="btn-delete"     onclick="deletePost(${p.id})">Delete</button>
            ` : ''}
          </div>
        </div>`;

      wrap.appendChild(card);
    });

    // Populate galleries from cache
    Object.keys(postImages).forEach(id => renderGallery(Number(id)));
  }

  function renderGallery(postId) {
    const slot = document.getElementById('gallery_' + postId);
    if (!slot) return;
    const imgs = postImages[postId] || [];
    if (imgs.length === 0) { slot.innerHTML = ''; return; }

    const grid = document.createElement('div');
    grid.className = 'post-gallery-grid';

    imgs.forEach((img, idx) => {
      const wrap = document.createElement('div');
      wrap.className = 'gallery-img-wrap';
      wrap.innerHTML = `
        <img src="data:image/png;base64,${img.data}" alt="Post photo ${idx + 1}"
             onclick="openLightbox(${postId}, ${idx})" />
        ${isAdmin ? `<button class="gallery-img-delete" onclick="deletePostImage(event, ${postId}, '${escHtml(img.filename)}')">✕ Remove</button>` : ''}`;
      grid.appendChild(wrap);
    });

    slot.innerHTML = '';
    slot.appendChild(grid);
  }

  /* ═══════════════════════════════════════════════
     LIGHTBOX
  ═══════════════════════════════════════════════ */
  function openLightbox(postId, startIdx) {
    lbImages = (postImages[postId] || []).map(i => 'data:image/png;base64,' + i.data);
    lbIndex  = startIdx;
    document.getElementById('sipLightboxImg').src = lbImages[lbIndex] || '';
    document.getElementById('sipLightbox').classList.add('open');
  }

  function closeLightbox() {
    document.getElementById('sipLightbox').classList.remove('open');
  }

  function lbStep(dir) {
    lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
    document.getElementById('sipLightboxImg').src = lbImages[lbIndex] || '';
  }

  document.addEventListener('keydown', e => {
    if (!document.getElementById('sipLightbox').classList.contains('open')) return;
    if (e.key === 'ArrowRight') lbStep(1);
    if (e.key === 'ArrowLeft')  lbStep(-1);
    if (e.key === 'Escape')     closeLightbox();
  });
  document.getElementById('sipLightbox').addEventListener('mousedown', function(e) {
    if (e.target === this) closeLightbox();
  });

  /* ═══════════════════════════════════════════════
     PUBLISH TOGGLE
  ═══════════════════════════════════════════════ */
  function togglePublish(id) {
    const post = posts.find(p => p.id === id);
    if (!post) return;
    const newState = !post.published;
    fetch(`${API_BASE}/api/blog/publish`, {
      method: 'POST', credentials: 'include',
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

  /* ═══════════════════════════════════════════════
     DELETE POST
  ═══════════════════════════════════════════════ */
  function deletePost(id) {
    const post = posts.find(p => p.id === id);
    if (!confirm(`Delete "${post ? post.title : 'this post'}"? This cannot be undone.`)) return;

    // Also delete all images for this post
    fetch(`${API_BASE}/api/blog/images/all`, {
      method: 'DELETE', credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post_id: id }),
    }).catch(() => {}); // best-effort; don't block post deletion

    fetch(`${API_BASE}/api/blog`, {
      method: 'DELETE', credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    .then(r => r.ok ? r.json() : r.json().then(d => Promise.reject(d.message || 'Error')))
    .then(() => {
      posts = posts.filter(p => p.id !== id);
      delete postImages[id];
      renderPosts();
      showToast('Post deleted.');
    })
    .catch(err => showToast(String(err)));
  }

  /* ═══════════════════════════════════════════════
     DELETE SINGLE IMAGE
  ═══════════════════════════════════════════════ */
  function deletePostImage(event, postId, filename) {
    event.stopPropagation();
    if (!confirm('Remove this photo?')) return;
    fetch(`${API_BASE}/api/blog/images/delete`, {
      method: 'DELETE', credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post_id: postId, filename }),
    })
    .then(r => r.ok ? r.json() : r.json().then(d => Promise.reject(d.message || 'Error')))
    .then(() => {
      postImages[postId] = (postImages[postId] || []).filter(i => i.filename !== filename);
      renderGallery(postId);
      // Also refresh the in-modal existing photos if this post is being edited
      refreshModalExistingPhotos(postId);
      showToast('Photo removed.');
    })
    .catch(err => showToast(String(err)));
  }

  /* ═══════════════════════════════════════════════
     READ MORE TOGGLE
  ═══════════════════════════════════════════════ */
  function toggleRead(id) {
    const el  = document.getElementById('body_'  + id);
    const btn = document.getElementById('rmBtn_' + id);
    if (el.classList.toggle('clamped')) {
      btn.textContent = 'Read more →';
    } else {
      btn.textContent = '← Collapse';
    }
  }

  /* ═══════════════════════════════════════════════
     HELPERS
  ═══════════════════════════════════════════════ */
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
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ═══════════════════════════════════════════════
     MODAL BOOTSTRAP
  ═══════════════════════════════════════════════ */
  (function bootstrapModals() {
    /* ── shared styles ── */
    const style = document.createElement('style');
    style.textContent = `
      /* ── POST MODAL ── */
      #sipPostModal {
        display: none; position: fixed; inset: 0;
        background: rgba(0,0,0,0.82); z-index: 2147483647;
        align-items: flex-start; justify-content: center;
        padding: 40px 24px; overflow-y: auto;
        font-family: 'Jost', 'Segoe UI', sans-serif;
      }
      #sipPostModal.open { display: flex; }
      #sipPostModal .sip-modal-panel {
        background: #1a1917; border: 1px solid rgba(255,255,255,0.08);
        border-radius: 10px; width: 100%; max-width: 620px;
        padding: 40px 36px; position: relative;
        animation: sipModalIn 0.22s ease;
      }
      @keyframes sipModalIn {
        from { opacity:0; transform: scale(0.96) translateY(10px); }
        to   { opacity:1; transform: scale(1) translateY(0); }
      }
      #sipPostModal .sip-eyebrow { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.14em; color: #e8836a; margin-bottom: 8px; }
      #sipPostModal .sip-title   { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.9rem; font-weight: 600; color: #f5f0eb; margin-bottom: 24px; }
      #sipPostModal .sip-field   { margin-bottom: 18px; }
      #sipPostModal .sip-field label { display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: #777; margin-bottom: 7px; }
      #sipPostModal .sip-field input,
      #sipPostModal .sip-field textarea,
      #sipPostModal .sip-field select {
        width: 100%; background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1); border-radius: 5px;
        padding: 11px 14px; color: #f5f0eb;
        font-family: 'Jost', sans-serif; font-size: 0.93rem;
        outline: none; box-sizing: border-box; transition: border-color 0.15s;
      }
      #sipPostModal .sip-field input:focus,
      #sipPostModal .sip-field textarea:focus,
      #sipPostModal .sip-field select:focus { border-color: #e8836a; }
      #sipPostModal .sip-field select option { background: #1a1917; }
      #sipPostModal .sip-field textarea { resize: vertical; min-height: 140px; line-height: 1.7; }
      #sipPostModal .sip-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
      @media(max-width:520px){ #sipPostModal .sip-row { grid-template-columns:1fr; } }
      #sipPostModal .sip-error  { font-size:0.8rem; color:#e05555; margin-bottom:14px; display:none; }
      #sipPostModal .sip-error.visible { display:block; }
      #sipPostModal .sip-actions { display: flex; gap: 10px; flex-wrap: wrap; }
      #sipPostModal .sip-btn-publish {
        flex:1; background: #e8836a; color: #111;
        font-family: 'Jost', sans-serif; font-size: 0.8rem; font-weight: 600;
        text-transform: uppercase; letter-spacing: 0.1em;
        padding: 12px; border: none; border-radius: 4px; cursor: pointer;
        transition: background 0.15s; white-space: nowrap;
      }
      #sipPostModal .sip-btn-publish:hover { background: #f09a7e; }
      #sipPostModal .sip-btn-publish:disabled { opacity: 0.6; cursor: default; }
      #sipPostModal .sip-btn-draft {
        flex:1; background: transparent;
        border: 1px solid rgba(240,192,96,0.4); color: #f0c060;
        font-family: 'Jost', sans-serif; font-size: 0.8rem; font-weight: 600;
        text-transform: uppercase; letter-spacing: 0.1em;
        padding: 12px; border-radius: 4px; cursor: pointer;
        transition: border-color 0.15s, background 0.15s; white-space: nowrap;
      }
      #sipPostModal .sip-btn-draft:hover { border-color: #f0c060; background: rgba(240,192,96,0.08); }
      #sipPostModal .sip-btn-draft:disabled { opacity: 0.6; cursor: default; }
      #sipPostModal .sip-btn-cancel {
        background: transparent; border: 1px solid rgba(255,255,255,0.1);
        color: #777; font-family: 'Jost', sans-serif;
        font-size: 0.8rem; font-weight: 500;
        text-transform: uppercase; letter-spacing: 0.1em;
        padding: 12px 20px; border-radius: 4px; cursor: pointer;
        transition: border-color 0.15s, color 0.15s; white-space: nowrap;
      }
      #sipPostModal .sip-btn-cancel:hover { border-color: #aaa; color: #f5f0eb; }

      /* ── PHOTO SECTION INSIDE POST MODAL ── */
      .sip-photo-section {
        margin-bottom: 18px;
        border-top: 1px solid rgba(255,255,255,0.07);
        padding-top: 18px;
      }
      .sip-photo-section-header {
        display: flex; align-items: center; justify-content: space-between;
        margin-bottom: 12px;
      }
      .sip-photo-section-label {
        font-size: 0.72rem; text-transform: uppercase;
        letter-spacing: 0.1em; color: #777;
        display: flex; align-items: center; gap: 8px;
        margin: 0;
      }
      .sip-photo-section-label span { color: #555; font-weight: 400; text-transform: none; letter-spacing: 0; font-size: 0.7rem; }

      /* + add photos button */
      #sipPhotoAddBtn {
        display: inline-flex; align-items: center; gap: 6px;
        background: rgba(232,131,106,0.1); border: 1px solid rgba(232,131,106,0.3);
        color: #e8836a; font-family: 'Jost', sans-serif;
        font-size: 0.72rem; font-weight: 600; text-transform: uppercase;
        letter-spacing: 0.08em; padding: 5px 12px; border-radius: 4px;
        cursor: pointer; transition: background 0.15s, border-color 0.15s;
        flex-shrink: 0;
      }
      #sipPhotoAddBtn:hover { background: rgba(232,131,106,0.2); border-color: rgba(232,131,106,0.5); }
      #sipPhotoAddBtn .plus-icon {
        font-size: 1rem; line-height: 1; font-weight: 400;
        transition: transform 0.25s ease;
      }
      #sipPhotoAddBtn.open .plus-icon { transform: rotate(45deg); }

      /* collapsible drop zone wrapper */
      #sipModalDropWrapper {
        overflow: hidden;
        max-height: 0;
        opacity: 0;
        transition: max-height 0.3s ease, opacity 0.25s ease, margin-top 0.3s ease;
        margin-top: 0;
      }
      #sipModalDropWrapper.expanded {
        max-height: 200px;
        opacity: 1;
        margin-top: 10px;
      }

      /* existing photos strip */
      #sipModalExistingGrid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        gap: 7px; margin-bottom: 14px;
      }
      .existing-img-wrap {
        position: relative; border-radius: 5px;
        overflow: hidden; aspect-ratio: 1;
        background: rgba(255,255,255,0.04);
      }
      .existing-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .existing-remove {
        position: absolute; top: 4px; right: 4px;
        background: rgba(180,40,40,0.82); border: none;
        color: #fff; font-size: 0.62rem; border-radius: 3px;
        padding: 2px 5px; cursor: pointer; opacity: 0;
        transition: opacity 0.15s;
      }
      .existing-img-wrap:hover .existing-remove { opacity: 1; }

      /* drop zone */
      #sipModalDropZone {
        border: 2px dashed rgba(232,131,106,0.28);
        border-radius: 7px; padding: 20px 16px;
        text-align: center; cursor: pointer;
        transition: border-color 0.2s, background 0.2s;
      }
      #sipModalDropZone:hover,
      #sipModalDropZone.drag-over { border-color: #e8836a; background: rgba(232,131,106,0.05); }
      #sipModalDropZone .dz-icon  { font-size: 1.4rem; margin-bottom: 5px; opacity: 0.55; }
      #sipModalDropZone .dz-label { font-size: 0.8rem; color: #666; }
      #sipModalDropZone .dz-label span { color: #e8836a; text-decoration: underline; cursor: pointer; }
      #sipModalFileInput { display: none; }

      /* staged previews */
      #sipModalStagedGrid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        gap: 7px; margin-bottom: 10px;
      }
      .staged-img-wrap {
        position: relative; border-radius: 5px;
        overflow: hidden; aspect-ratio: 1;
        background: rgba(255,255,255,0.04);
      }
      .staged-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .staged-remove {
        position: absolute; top: 4px; right: 4px;
        background: rgba(0,0,0,0.7); border: none;
        color: #fff; font-size: 0.65rem; border-radius: 3px;
        padding: 2px 5px; cursor: pointer;
      }
      .staged-label {
        position: absolute; bottom: 0; left: 0; right: 0;
        background: rgba(0,0,0,0.55); color: #aaa;
        font-size: 0.58rem; text-align: center; padding: 3px;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      .sip-staged-count {
        font-size: 0.75rem; color: #e8836a;
        margin-bottom: 6px;
      }

      /* ── TOAST ── */
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

    /* ── POST MODAL (now includes photo section) ── */
    const postModal = document.createElement('div');
    postModal.id = 'sipPostModal';
    postModal.innerHTML = `
      <div class="sip-modal-panel">
        <p class="sip-eyebrow" id="sipModalEyebrow">✍️ New Entry</p>
        <h2 class="sip-title"  id="sipModalTitle">Create Post</h2>
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
              <option value="Transactional Housing">Transactional Housing</option>
              <option value="Live Your Dream">Live Your Dream</option>
              <option value="Dream It Be It">Dream It Be It</option>
              <option value="STAT!">STAT!</option>
              <option value="Abraxas Scholarship">Abraxas Scholarship</option>
              <option value="Colegio La Esperanz">Colegio La Esperanz</option>
              <option value="Announcement">Announcement</option>
            </select>
          </div>
        </div>
        <div class="sip-field">
          <label for="sipPostBody">Content *</label>
          <textarea id="sipPostBody" placeholder="Share your update with the community…"></textarea>
        </div>

        <!-- ── PHOTO SECTION ── -->
        <div class="sip-photo-section">
          <div class="sip-photo-section-header">
            <p class="sip-photo-section-label">📷 Photos </p>
            <button type="button" id="sipPhotoAddBtn" onclick="toggleDropZone()">
              <span class="plus-icon">+</span> Add Photos
            </button>
          </div>

          <!-- existing photos (shown in edit mode) -->
          <div id="sipModalExistingSection" style="display:none; margin-bottom:14px;">
            <div id="sipModalExistingGrid"></div>
          </div>

          <!-- staged (new) photos -->
          <div id="sipModalStagedSection" style="display:none; margin-bottom:10px;">
            <p class="sip-staged-count" id="sipModalStagedCount"></p>
            <div id="sipModalStagedGrid"></div>
          </div>

          <!-- collapsible drop zone -->
          <div id="sipModalDropWrapper">
            <div id="sipModalDropZone">
              <div class="dz-icon">🖼️</div>
              <p class="dz-label">Drag &amp; drop images here, or <span onclick="document.getElementById('sipModalFileInput').click()">browse files</span></p>
              <input type="file" id="sipModalFileInput" accept="image/*" multiple />
            </div>
          </div>
        </div>

        <div class="sip-error" id="sipPostError"></div>
        <div class="sip-actions">
          <button class="sip-btn-publish" id="sipPublishBtn" onclick="submitPost(true)">Publish</button>
          <button class="sip-btn-draft"   id="sipDraftBtn"   onclick="submitPost(false)">Save Draft</button>
          <button class="sip-btn-cancel"                     onclick="closePostModal()">Cancel</button>
        </div>
      </div>`;
    document.body.appendChild(postModal);
    postModal.addEventListener('mousedown', e => { if (e.target === postModal) closePostModal(); });

    /* ── TOAST ── */
    const toast = document.createElement('div');
    toast.id = 'sipToast';
    document.body.appendChild(toast);

    // Remove in-page toast (replaced by sipToast)
    const old = document.getElementById('toast');
    if (old) old.remove();

    /* ── DROP ZONE WIRING ── */
    const dz  = document.getElementById('sipModalDropZone');
    const fin = document.getElementById('sipModalFileInput');

    dz.addEventListener('dragover',  e => { e.preventDefault(); dz.classList.add('drag-over'); });
    dz.addEventListener('dragleave', () => dz.classList.remove('drag-over'));
    dz.addEventListener('drop', e => {
      e.preventDefault(); dz.classList.remove('drag-over');
      stageFiles(e.dataTransfer.files);
    });
    dz.addEventListener('click', e => { if (e.target !== fin) fin.click(); });
    fin.addEventListener('change', () => { stageFiles(fin.files); fin.value = ''; });

    // Also open drop zone when something is dragged over the whole modal panel
    document.getElementById('sipPostModal').addEventListener('dragover', e => {
      e.preventDefault();
      const wrapper = document.getElementById('sipModalDropWrapper');
      if (!wrapper.classList.contains('expanded')) toggleDropZone(true);
    });
  })();

  /* ═══════════════════════════════════════════════
     DROP ZONE TOGGLE
  ═══════════════════════════════════════════════ */
  function toggleDropZone(forceOpen) {
    const wrapper = document.getElementById('sipModalDropWrapper');
    const btn     = document.getElementById('sipPhotoAddBtn');
    const isOpen  = wrapper.classList.contains('expanded');
    if (forceOpen === true && isOpen) return;
    const opening = forceOpen === true || !isOpen;
    wrapper.classList.toggle('expanded', opening);
    btn.classList.toggle('open', opening);
  }

  /* ═══════════════════════════════════════════════
     PHOTO STAGING (inside post modal)
  ═══════════════════════════════════════════════ */
  function stageFiles(fileList) {
    Array.from(fileList).forEach(file => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = e => {
        uploadQueue.push({ dataURL: e.target.result, name: file.name });
        renderModalStagedGrid();
      };
      reader.readAsDataURL(file);
    });
    // Collapse drop zone after selecting files
    const wrapper = document.getElementById('sipModalDropWrapper');
    const btn     = document.getElementById('sipPhotoAddBtn');
    if (wrapper) { wrapper.classList.remove('expanded'); btn.classList.remove('open'); }
  }

  function renderModalStagedGrid() {
    const section = document.getElementById('sipModalStagedSection');
    const grid    = document.getElementById('sipModalStagedGrid');
    const count   = document.getElementById('sipModalStagedCount');
    if (!section) return;

    if (uploadQueue.length === 0) {
      section.style.display = 'none'; return;
    }
    section.style.display = 'block';
    count.textContent = uploadQueue.length + ' photo' + (uploadQueue.length !== 1 ? 's' : '') + ' ready to upload';
    grid.innerHTML = '';

    uploadQueue.forEach((item, idx) => {
      const wrap = document.createElement('div');
      wrap.className = 'staged-img-wrap';
      wrap.innerHTML = `
        <img src="${item.dataURL}" alt="${escHtml(item.name)}" />
        <button class="staged-remove" onclick="unstageImage(${idx})">✕</button>
        <div class="staged-label">${escHtml(item.name)}</div>`;
      grid.appendChild(wrap);
    });
  }

  function unstageImage(idx) {
    uploadQueue.splice(idx, 1);
    renderModalStagedGrid();
  }

  /* Refresh existing-photos strip inside the modal (used after a delete) */
  function refreshModalExistingPhotos(postId) {
    if (editingPostId !== postId) return;
    const imgs    = postImages[postId] || [];
    const section = document.getElementById('sipModalExistingSection');
    const grid    = document.getElementById('sipModalExistingGrid');
    if (!section || !grid) return;

    if (imgs.length === 0) { section.style.display = 'none'; return; }
    section.style.display = 'block';
    grid.innerHTML = '';

    imgs.forEach(img => {
      const wrap = document.createElement('div');
      wrap.className = 'existing-img-wrap';
      wrap.innerHTML = `
        <img src="data:image/png;base64,${img.data}" alt="photo" />
        <button class="existing-remove" onclick="deletePostImage(event, ${postId}, '${escHtml(img.filename)}')">✕</button>`;
      grid.appendChild(wrap);
    });
  }

  /* Upload all staged images for a given post id */
  async function uploadQueuedImages(postId) {
    if (uploadQueue.length === 0) return;
    const total = uploadQueue.length;
    let succeeded = 0;

    for (let i = 0; i < total; i++) {
      const item = uploadQueue[i];
      try {
        const resp = await fetch(`${API_BASE}/api/blog/images/upload`, {
          method: 'POST', credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ post_id: postId, image: item.dataURL }),
        });
        if (resp.ok) {
          const data = await resp.json();
          if (!postImages[postId]) postImages[postId] = [];
          postImages[postId].push({
            filename: data.filename,
            data: item.dataURL.split(',')[1],
          });
          succeeded++;
        }
      } catch (e) { /* continue */ }
    }

    uploadQueue = [];
    renderGallery(postId);
    return succeeded;
  }

  /* ═══════════════════════════════════════════════
     POST MODAL FUNCTIONS
  ═══════════════════════════════════════════════ */
  function openPostModal(postId) {
    editingPostId = postId || null;
    const isEdit  = editingPostId !== null;

    // Reset staged queue
    uploadQueue = [];
    renderModalStagedGrid();

    document.getElementById('sipModalEyebrow').textContent = isEdit ? '✏️ Edit Entry' : '✍️ New Entry';
    document.getElementById('sipModalTitle').textContent   = isEdit ? 'Edit Post'     : 'Create Post';
    document.getElementById('sipPublishBtn').disabled      = false;
    document.getElementById('sipDraftBtn').disabled        = false;
    document.getElementById('sipPublishBtn').textContent   = 'Publish';
    document.getElementById('sipDraftBtn').textContent     = 'Save Draft';
    clearPostError();

    if (isEdit) {
      const p = posts.find(post => post.id === editingPostId);
      if (!p) return;
      document.getElementById('sipPostTitle').value = p.title       || '';
      document.getElementById('sipPostDate').value  = p.event_date  || '';
      document.getElementById('sipPostTag').value   = p.program_tag || '';
      document.getElementById('sipPostBody').value  = p.description || '';
      // Show existing photos
      refreshModalExistingPhotos(editingPostId);
    } else {
      document.getElementById('sipPostTitle').value = '';
      document.getElementById('sipPostDate').value  = new Date().toISOString().slice(0, 10);
      document.getElementById('sipPostTag').value   = '';
      document.getElementById('sipPostBody').value  = '';
      // Hide existing photos section for new posts
      const exSection = document.getElementById('sipModalExistingSection');
      if (exSection) exSection.style.display = 'none';
    }

    document.getElementById('sipPostModal').classList.add('open');
    setTimeout(() => document.getElementById('sipPostTitle').focus(), 80);
  }

  function closePostModal() {
    document.getElementById('sipPostModal').classList.remove('open');
    editingPostId = null;
    uploadQueue   = [];
    renderModalStagedGrid();
    clearPostError();
    // Collapse drop zone
    const wrapper = document.getElementById('sipModalDropWrapper');
    const btn     = document.getElementById('sipPhotoAddBtn');
    if (wrapper) { wrapper.classList.remove('expanded'); btn.classList.remove('open'); }
  }

  async function submitPost(published) {
    const title       = document.getElementById('sipPostTitle').value.trim();
    const event_date  = document.getElementById('sipPostDate').value.trim();
    const program_tag = document.getElementById('sipPostTag').value.trim() || null;
    const description = document.getElementById('sipPostBody').value.trim();

    if (!title || title.length < 2)             return showPostError('Title is required (at least 2 characters).');
    if (!event_date)                             return showPostError('Event date is required.');
    if (!description || description.length < 2)  return showPostError('Content is required (at least 2 characters).');

    const isEdit  = editingPostId !== null;
    const payload = { title, event_date, description, program_tag, published };
    if (isEdit) payload.id = editingPostId;

    const pub  = document.getElementById('sipPublishBtn');
    const drft = document.getElementById('sipDraftBtn');
    pub.disabled  = drft.disabled  = true;
    pub.textContent  = published ? 'Publishing…' : 'Publish';
    drft.textContent = published ? 'Save Draft'  : 'Saving…';

    let saved;
    try {
      const r = await fetch(`${API_BASE}/api/blog`, {
        method: isEdit ? 'PUT' : 'POST', credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!r.ok) {
        const d = await r.json();
        throw new Error(d.message || 'Server error');
      }
      saved = await r.json();
    } catch (err) {
      showPostError(String(err));
      pub.disabled  = drft.disabled  = false;
      pub.textContent  = 'Publish';
      drft.textContent = 'Save Draft';
      return;
    }

    // Update local posts list
    if (isEdit) {
      const idx = posts.findIndex(p => p.id === editingPostId);
      if (idx !== -1) posts[idx] = saved;
    } else {
      posts.unshift(saved);
      postImages[saved.id] = [];
    }

    // Upload any staged photos
    const targetId    = saved.id;
    const hadPhotos   = uploadQueue.length > 0;
    let uploadedCount = 0;

    if (hadPhotos) {
      pub.textContent  = 'Uploading photos…';
      drft.textContent = 'Uploading photos…';
      uploadedCount = await uploadQueuedImages(targetId);
    }

    closePostModal();
    renderPosts();

    // Compose toast message
    let toast = isEdit
      ? (published ? 'Post published.' : 'Draft saved.')
      : (published ? 'Post published!' : 'Draft saved.');
    if (hadPhotos) {
      toast += ` ${uploadedCount} photo${uploadedCount !== 1 ? 's' : ''} uploaded.`;
    }
    showToast(toast);
  }

  function showPostError(msg) {
    const el = document.getElementById('sipPostError');
    el.textContent = msg; el.classList.add('visible');
  }
  function clearPostError() {
    const el = document.getElementById('sipPostError');
    if (el) { el.textContent = ''; el.classList.remove('visible'); }
  }

  /* ── INIT ── */
  checkAdminSession();
</script>
</body>
</html>