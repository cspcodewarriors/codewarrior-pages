---
layout: post
title: Contact
description: Get involved or get help from Soroptimist International of Poway
permalink: /sip/contact
---

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">

<style>
  /* ── Design tokens matching home page ── */
  :root {
    --bg-primary:   #0d0d14;
    --bg-card:      #111118;
    --bg-card-alt:  #1a1a26;
    --coral:        #e8836a;
    --coral-dark:   #c4623d;
    --coral-dim:    rgba(232,131,106,0.15);
    --blue:         #6ab0e8;
    --blue-dim:     rgba(106,176,232,0.15);
    --gold:         #d4b84a;
    --gold-dim:     rgba(212,184,74,0.15);
    --green:        #5ecb8a;
    --text-primary: #f0ece6;
    --text-muted:   #aaa;
    --text-dim:     #666;
    --border:       rgba(255,255,255,0.08);
    --border-hover: rgba(255,255,255,0.15);
    --danger:       #e86a6a;
    --danger-dim:   rgba(232,106,106,0.12);
    --success-dim:  rgba(94,203,138,0.12);
  }

  /* ── Flower canvas ── */
  #contact-flower-canvas {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  /* ── Page wrapper ── */
  .sip-page {
    font-family: 'Georgia', 'Times New Roman', serif;
    color: var(--text-primary);
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5rem 4rem;
  }

  /* ── Hero ── */
  .sip-hero {
    text-align: center;
    padding: 4rem 2rem 3rem;
  }

  .hero-eyebrow {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--coral);
    margin-bottom: 0.75rem;
    font-family: 'Georgia', serif;
    font-style: italic;
  }

  .hero-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1.18;
    margin-bottom: 0.75rem;
    font-family: 'Georgia', 'Times New Roman', serif;
  }

  .hero-subtitle {
    font-size: 0.95rem;
    font-weight: 300;
    color: var(--text-muted);
    max-width: 480px;
    margin: 0 auto;
    line-height: 1.7;
  }

  /* ── Section labels ── */
  .section-label {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--coral);
    margin-bottom: 0.4rem;
    font-style: italic;
  }

  .section-heading {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.4rem;
    line-height: 1.2;
    font-family: 'Georgia', serif;
  }

  .section-desc {
    font-size: 0.88rem;
    color: var(--text-muted);
    margin-bottom: 1.75rem;
    line-height: 1.7;
  }

  /* ── Forms grid ── */
  .forms-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 720px) {
    .forms-grid { grid-template-columns: 1fr; }
  }

  .form-card {
    background: var(--bg-card);
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    transition: border-color 0.2s, transform 0.18s ease, box-shadow 0.18s ease;
  }
  .form-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-3px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  }

  .form-card-header {
    padding: 1.5rem 1.5rem 1.25rem;
    border-bottom: 1px solid var(--border);
  }

  .form-card:nth-child(1) .form-card-header {
    border-top: 4px solid var(--coral);
  }

  .form-card:nth-child(2) .form-card-header {
    border-top: 4px solid var(--gold);
  }

  .form-card-icon {
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
    display: block;
  }

  .form-card-header h2 {
    margin: 0 0 0.35rem;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--text-primary);
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-family: 'Georgia', serif;
  }

  .form-card:nth-child(1) .form-card-header h2 { color: var(--coral); }
  .form-card:nth-child(2) .form-card-header h2 { color: var(--gold); }

  .form-card-header p {
    margin: 0;
    font-size: 0.88rem;
    color: var(--text-muted);
    line-height: 1.6;
  }

  .form-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
  }

  /* ── Fields ── */
  .field { display: flex; flex-direction: column; gap: 0.3rem; }

  .field label {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .field select,
  .field textarea {
    padding: 0.6rem 0.8rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    font-size: 0.92rem;
    font-family: 'Georgia', serif;
    color: var(--text-primary);
    background: var(--bg-card-alt);
    transition: border-color 0.2s;
  }

  .field select:focus,
  .field textarea:focus {
    outline: none;
    border-color: var(--border-hover);
  }

  .field select.has-error { border-color: var(--danger); }
  .field select option { background: #1a1a26; color: var(--text-primary); }

  .field textarea { resize: vertical; min-height: 90px; }

  .field-err {
    font-size: 0.78rem;
    color: var(--danger);
    display: none;
  }
  .field-err.show { display: block; }

  /* ── Buttons ── */
  .btn-submit {
    padding: 0.65rem 1.4rem;
    border: none;
    border-radius: 4px;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    cursor: pointer;
    transition: opacity 0.15s, transform 0.15s;
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #111;
  }
  .btn-submit:disabled { opacity: 0.5; cursor: not-allowed; }
  .btn-submit:hover:not(:disabled) { opacity: 0.88; transform: translateY(-1px); }

  .btn-coral { background: var(--coral); }
  .btn-gold  { background: var(--gold); }

  /* ── Spinner ── */
  .spinner {
    width: 13px; height: 13px;
    border: 2px solid rgba(17,17,17,0.3);
    border-top-color: #111;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    display: none;
  }
  .spinner.show { display: inline-block; }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── Banners ── */
  .banner {
    display: none;
    border-radius: 4px;
    padding: 0.7rem 0.9rem;
    font-size: 0.88rem;
    line-height: 1.5;
  }
  .banner.show { display: block; }
  .banner-success { background: var(--success-dim); border: 1px solid rgba(94,203,138,0.3); color: var(--green); }
  .banner-error   { background: var(--danger-dim);  border: 1px solid rgba(232,106,106,0.3); color: var(--danger); }

  /* ── Divider ── */
  .divider {
    border: none;
    border-top: 1px solid var(--border);
    margin: 2.5rem 0;
  }

  /* ── Calendar section ── */
  .cal-section { margin-bottom: 3rem; }

  .cal-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .cal-nav { display: flex; align-items: center; gap: 1rem; }

  .cal-nav-btn {
    background: none;
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 0.3rem 0.75rem;
    cursor: pointer;
    font-size: 1rem;
    color: var(--text-primary);
    transition: background 0.15s, border-color 0.15s;
  }
  .cal-nav-btn:hover { background: rgba(255,255,255,0.05); border-color: var(--border-hover); }

  .cal-month-label {
    font-weight: 700;
    font-size: 1.05rem;
    color: var(--text-primary);
    min-width: 160px;
    text-align: center;
    font-family: 'Georgia', serif;
  }

  .cal-status-msg { font-size: 0.82rem; color: var(--text-muted); font-style: italic; }

  .cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px; }

  .cal-day-name {
    text-align: center;
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--text-dim);
    padding: 0.4rem 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .cal-cell {
    min-height: 76px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 0.3rem 0.4rem;
    font-size: 0.82rem;
    transition: border-color 0.15s;
  }
  .cal-cell:hover { border-color: var(--border-hover); }

  .cal-cell.other-month { background: rgba(13,13,20,0.5); opacity: 0.5; }
  .cal-cell.is-today    { border-color: var(--coral); background: rgba(232,131,106,0.06); }

  .cal-date { font-size: 0.78rem; font-weight: 700; color: var(--text-dim); margin-bottom: 0.2rem; }
  .cal-cell.is-today .cal-date { color: var(--coral); }

  .cal-evt {
    display: block;
    border-radius: 3px;
    padding: 0.15rem 0.35rem;
    font-size: 0.7rem;
    margin-bottom: 2px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: opacity 0.15s;
    line-height: 1.4;
    font-family: 'Georgia', serif;
  }
  .cal-evt:hover { opacity: 0.82; }

  .blue-evt { background: rgba(106,176,232,0.18); color: var(--blue); border: 1px solid rgba(106,176,232,0.3); }
  .gold-evt { background: rgba(212,184,74,0.18);  color: var(--gold); border: 1px solid rgba(212,184,74,0.3); }

  /* ── Modal ── */
  .modal-bg {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.65);
    z-index: 1000;
    align-items: center;
    justify-content: center;
  }
  .modal-bg.open { display: flex; }

  .modal-box {
    background: var(--bg-card);
    border: 1px solid var(--border-hover);
    border-radius: 8px;
    padding: 2rem;
    max-width: 420px;
    width: 90%;
    box-shadow: 0 12px 40px rgba(0,0,0,0.5);
    position: relative;
    font-family: 'Georgia', serif;
  }

  .modal-close {
    position: absolute;
    top: 1rem; right: 1rem;
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: var(--text-dim);
    line-height: 1;
  }
  .modal-close:hover { color: var(--text-primary); }

  .modal-pill {
    display: inline-block;
    border-radius: 3px;
    padding: 0.15rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    margin-bottom: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .pill-blue { background: var(--blue-dim); color: var(--blue); }
  .pill-gold { background: var(--gold-dim); color: var(--gold); }

  .modal-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 1rem;
  }

  .modal-row {
    display: flex;
    gap: 0.6rem;
    align-items: flex-start;
    margin-bottom: 0.55rem;
    font-size: 0.9rem;
  }

  .modal-row-label {
    font-weight: 700;
    color: var(--text-dim);
    min-width: 72px;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding-top: 0.15rem;
  }

  .modal-row-val { color: var(--text-muted); }

  .modal-actions {
    display: none;
    gap: 0.5rem;
    margin-top: 1.25rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
  }
  .modal-actions.show { display: flex; }

  .btn-modal-edit {
    padding: 0.45rem 1rem;
    background: var(--blue-dim);
    color: var(--blue);
    border: 1px solid rgba(106,176,232,0.3);
    border-radius: 4px;
    font-size: 0.82rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.15s;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .btn-modal-edit:hover { background: rgba(106,176,232,0.28); }

  .btn-modal-del {
    padding: 0.45rem 1rem;
    background: var(--danger-dim);
    color: var(--danger);
    border: 1px solid rgba(232,106,106,0.3);
    border-radius: 4px;
    font-size: 0.82rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.15s;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .btn-modal-del:hover { background: rgba(232,106,106,0.28); }

  /* ── Admin bar ── */
  .admin-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .admin-who { font-size: 0.85rem; color: var(--text-muted); }
  .admin-who strong { color: var(--coral); }

  .btn-toggle-admin {
    display: none;
    background: none;
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 0.3rem 0.85rem;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.15s;
  }
  .btn-toggle-admin:hover { border-color: var(--coral); color: var(--coral); }

  .admin-login-hint { display: none; text-align: right; margin-bottom: 0.75rem; }
  .admin-login-hint a { font-size: 0.82rem; color: var(--coral); text-decoration: underline; }

  /* ── Admin panel ── */
  .admin-panel {
    display: none;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 1.75rem;
  }
  .admin-panel.open { display: block; }

  .admin-panel-header {
    background: rgba(232,131,106,0.08);
    border-bottom: 1px solid var(--border);
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .admin-panel-header h3 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-family: 'Georgia', serif;
  }
  .admin-panel-header .admin-who-inline { font-size: 0.78rem; color: var(--text-muted); }
  .admin-panel-header .admin-who-inline strong { color: var(--coral); }

  .admin-body { padding: 1.5rem; }

  .admin-section-title {
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--text-dim);
    margin: 0 0 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  /* ── Event form ── */
  .evt-form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 600px) { .evt-form-grid { grid-template-columns: 1fr; } }
  .span2 { grid-column: 1 / -1; }

  .evt-form-grid label {
    display: block;
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--text-dim);
    margin-bottom: 0.2rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .evt-form-grid input,
  .evt-form-grid select,
  .evt-form-grid textarea {
    padding: 0.45rem 0.65rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    font-size: 0.9rem;
    font-family: 'Georgia', serif;
    background: var(--bg-card-alt);
    color: var(--text-primary);
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.15s;
  }
  .evt-form-grid input:focus,
  .evt-form-grid select:focus,
  .evt-form-grid textarea:focus { outline: none; border-color: var(--border-hover); }
  .evt-form-grid select option { background: #1a1a26; }
  .evt-form-grid textarea { min-height: 64px; resize: vertical; }

  .evt-form-actions { display: flex; gap: 0.5rem; }

  .btn-save-evt {
    padding: 0.5rem 1.1rem;
    background: var(--coral);
    color: #111;
    border: none;
    border-radius: 4px;
    font-size: 0.78rem;
    font-weight: 700;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    transition: opacity 0.15s;
  }
  .btn-save-evt:hover { opacity: 0.88; }
  .btn-save-evt:disabled { opacity: 0.5; cursor: not-allowed; }

  .btn-cancel-edit {
    display: none;
    padding: 0.5rem 1rem;
    background: none;
    color: var(--text-muted);
    border: 1px solid var(--border);
    border-radius: 4px;
    font-size: 0.78rem;
    font-weight: 700;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    transition: border-color 0.15s, color 0.15s;
  }
  .btn-cancel-edit:hover { border-color: var(--border-hover); color: var(--text-primary); }

  .admin-msg-bar {
    display: none;
    font-size: 0.85rem;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    margin-top: 0.6rem;
  }
  .admin-msg-bar.ok  { background: var(--success-dim); color: var(--green);  border: 1px solid rgba(94,203,138,0.3); }
  .admin-msg-bar.err { background: var(--danger-dim);  color: var(--danger); border: 1px solid rgba(232,106,106,0.3); }

  /* ── Event list ── */
  .evt-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--bg-card-alt);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 0.55rem 0.75rem;
    margin-bottom: 0.4rem;
    gap: 0.5rem;
    flex-wrap: wrap;
    transition: border-color 0.15s;
  }
  .evt-list-item:hover { border-color: var(--border-hover); }

  .evt-list-info { font-size: 0.88rem; flex: 1; }
  .evt-list-name { font-weight: 700; color: var(--text-primary); }
  .evt-list-meta { color: var(--text-muted); font-size: 0.78rem; margin-top: 0.1rem; }

  .evt-list-btns { display: flex; gap: 0.35rem; }

  .btn-evt-edit {
    padding: 0.25rem 0.6rem;
    background: var(--blue-dim);
    color: var(--blue);
    border: 1px solid rgba(106,176,232,0.3);
    border-radius: 3px;
    font-size: 0.72rem;
    cursor: pointer;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    transition: background 0.15s;
  }
  .btn-evt-edit:hover { background: rgba(106,176,232,0.28); }

  .btn-evt-del {
    padding: 0.25rem 0.6rem;
    background: var(--danger-dim);
    color: var(--danger);
    border: 1px solid rgba(232,106,106,0.3);
    border-radius: 3px;
    font-size: 0.72rem;
    cursor: pointer;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    transition: background 0.15s;
  }
  .btn-evt-del:hover { background: rgba(232,106,106,0.28); }

  /* ── Admin sep ── */
  .admin-sep { border: none; border-top: 1px solid var(--border); margin: 1.75rem 0 1.25rem; }

  /* ── Notification bell ── */
  .notif-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: var(--bg-card-alt);
    border: 1px solid var(--border);
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 1rem;
    transition: background 0.15s, border-color 0.15s;
    user-select: none;
  }
  .notif-row:hover { border-color: var(--border-hover); background: rgba(255,255,255,0.04); }

  .notif-bell-wrap { position: relative; font-size: 1.1rem; flex-shrink: 0; line-height: 1; }

  .notif-count {
    position: absolute;
    top: -5px; right: -7px;
    background: var(--danger); color: #fff;
    font-size: 0.55rem; font-weight: 800;
    border-radius: 99px;
    min-width: 14px; height: 14px;
    display: none;
    align-items: center; justify-content: center;
    padding: 0 2px;
  }
  .notif-count.show { display: flex; }

  .notif-label { flex: 1; font-size: 0.88rem; font-weight: 700; color: var(--text-primary); }
  .notif-caret { font-size: 0.65rem; color: var(--text-dim); transition: transform 0.2s; }
  .notif-caret.flipped { transform: rotate(180deg); }

  /* ── Approval tray ── */
  .approval-tray {
    display: none;
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 1.25rem;
  }
  .approval-tray.open { display: block; }

  .tray-head {
    padding: 0.55rem 1rem;
    background: rgba(232,131,106,0.08);
    border-bottom: 1px solid var(--border);
    font-size: 0.68rem; font-weight: 700;
    letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--text-dim);
  }

  .appr-card {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    padding: 0.75rem 1rem;
    background: var(--bg-card);
    border-bottom: 1px solid var(--border);
    transition: background 0.12s;
  }
  .appr-card:last-child { border-bottom: none; }
  .appr-card:hover { background: rgba(255,255,255,0.03); }

  .appr-avatar {
    width: 34px; height: 34px;
    border-radius: 50%;
    background: var(--coral-dim);
    color: var(--coral);
    font-size: 0.8rem; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    border: 1px solid rgba(232,131,106,0.25);
  }

  .appr-info { flex: 1; min-width: 0; }
  .appr-uid  { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); }

  .appr-meta {
    font-size: 0.72rem;
    color: var(--text-dim);
    margin-top: 0.1rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    align-items: center;
  }

  .appr-type-tag {
    background: var(--gold-dim);
    color: var(--gold);
    border-radius: 3px;
    padding: 0.06rem 0.35rem;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .appr-msg {
    font-size: 0.78rem;
    color: var(--text-dim);
    margin-top: 0.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .appr-btns { display: flex; gap: 0.35rem; flex-shrink: 0; }

  .btn-approve {
    padding: 0.28rem 0.75rem;
    border-radius: 99px;
    font-size: 0.72rem; font-weight: 700;
    cursor: pointer;
    background: var(--coral); color: #111; border: none;
    text-transform: uppercase; letter-spacing: 0.04em;
    transition: opacity 0.15s;
  }
  .btn-approve:hover:not(:disabled) { opacity: 0.82; }
  .btn-approve:disabled { opacity: 0.4; cursor: not-allowed; }

  .btn-decline {
    padding: 0.28rem 0.75rem;
    border-radius: 99px;
    font-size: 0.72rem; font-weight: 700;
    cursor: pointer;
    background: none; color: var(--text-dim);
    border: 1px solid var(--border);
    text-transform: uppercase; letter-spacing: 0.04em;
    transition: border-color 0.15s, color 0.15s;
  }
  .btn-decline:hover:not(:disabled) { border-color: var(--danger); color: var(--danger); }
  .btn-decline:disabled { opacity: 0.4; cursor: not-allowed; }

  .resolved-chip {
    padding: 0.22rem 0.6rem;
    border-radius: 99px;
    font-size: 0.7rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.04em;
  }
  .chip-ok { background: var(--success-dim); color: var(--green); }
  .chip-no { background: var(--danger-dim);  color: var(--danger); }

  .tray-empty { padding: 1.25rem; text-align: center; font-size: 0.85rem; color: var(--text-dim); background: var(--bg-card); }

  /* ── Submissions ── */
  .subs-filters { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.75rem; }

  .subs-filters select {
    padding: 0.3rem 0.6rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    font-size: 0.82rem;
    font-family: 'Georgia', serif;
    background: var(--bg-card-alt);
    color: var(--text-primary);
    cursor: pointer;
    transition: border-color 0.15s;
  }
  .subs-filters select:focus { outline: none; border-color: var(--border-hover); }
  .subs-filters select option { background: #1a1a26; }

  .sub-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 0.75rem 1rem;
    margin-bottom: 0.5rem;
    transition: border-color 0.15s;
  }
  .sub-card:hover { border-color: var(--border-hover); }

  .sub-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-bottom: 0.35rem;
  }

  .sub-uid  { font-weight: 700; font-size: 0.92rem; color: var(--text-primary); }
  .sub-ts   { font-size: 0.78rem; color: var(--text-dim); margin-top: 0.1rem; }

  .badge-row { display: flex; gap: 0.3rem; flex-wrap: wrap; align-items: center; }

  .badge {
    display: inline-block;
    border-radius: 3px;
    padding: 0.12rem 0.45rem;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .badge-involved { background: var(--coral-dim); color: var(--coral); }
  .badge-help     { background: var(--gold-dim);  color: var(--gold);  }
  .badge-new      { background: rgba(255,160,80,0.12); color: #f0a050; }
  .badge-progress { background: var(--blue-dim);  color: var(--blue);  }
  .badge-resolved { background: var(--success-dim); color: var(--green); }
  .badge-approved { background: var(--success-dim); color: var(--green); }
  .badge-declined { background: var(--danger-dim);  color: var(--danger); }

  .sub-selection { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.2rem; }
  .sub-selection strong { color: var(--text-primary); }

  .sub-message {
    font-size: 0.85rem;
    color: var(--text-dim);
    margin-top: 0.35rem;
    line-height: 1.5;
    border-top: 1px solid var(--border);
    padding-top: 0.35rem;
  }

  .sub-actions { display: flex; gap: 0.35rem; margin-top: 0.5rem; flex-wrap: wrap; }

  .btn-sub-status {
    padding: 0.2rem 0.55rem;
    border-radius: 3px;
    font-size: 0.72rem; font-weight: 700;
    cursor: pointer;
    border: 1px solid var(--border);
    background: none;
    color: var(--text-dim);
    text-transform: uppercase; letter-spacing: 0.04em;
    transition: all 0.15s;
  }
  .btn-sub-status:hover { border-color: var(--coral); color: var(--coral); }

  .btn-sub-del {
    padding: 0.2rem 0.55rem;
    border-radius: 3px;
    font-size: 0.72rem; font-weight: 700;
    cursor: pointer;
    border: 1px solid rgba(232,106,106,0.3);
    background: var(--danger-dim);
    color: var(--danger);
    text-transform: uppercase; letter-spacing: 0.04em;
    transition: all 0.15s;
    margin-left: auto;
  }
  .btn-sub-del:hover { background: rgba(232,106,106,0.28); }

  .sub-pager {
    display: none;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.75rem;
    font-size: 0.85rem;
    color: var(--text-muted);
  }

  .btn-page {
    padding: 0.25rem 0.65rem;
    background: none;
    border: 1px solid var(--border);
    border-radius: 4px;
    font-size: 0.78rem;
    cursor: pointer;
    color: var(--text-muted);
    transition: border-color 0.15s, color 0.15s;
  }
  .btn-page:hover:not(:disabled) { border-color: var(--border-hover); color: var(--text-primary); }
  .btn-page:disabled { opacity: 0.3; cursor: not-allowed; }

  /* ── Floating approval button ── */
  .sip-fab-wrap {
    position: fixed;
    bottom: 28px; right: 28px;
    display: none;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    z-index: 1500;
  }
  .sip-fab-wrap.visible { display: flex; }

  .sip-fab {
    width: 50px; height: 50px;
    border-radius: 50%;
    background: var(--coral);
    border: none; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 20px rgba(232,131,106,0.35);
    transition: transform .15s, box-shadow .15s;
    position: relative; flex-shrink: 0;
  }
  .sip-fab:hover  { transform: scale(1.08); box-shadow: 0 6px 28px rgba(232,131,106,0.45); }
  .sip-fab:active { transform: scale(0.97); }

  .sip-fab-badge {
    position: absolute; top: -3px; right: -3px;
    background: var(--danger); color: #fff;
    font-size: 9px; font-weight: 800;
    border-radius: 99px; min-width: 17px; height: 17px;
    display: none; align-items: center; justify-content: center;
    padding: 0 3px; border: 2px solid var(--bg-primary);
  }
  .sip-fab-badge.show { display: flex; }

  .sip-fab-panel {
    width: 310px;
    background: var(--bg-card);
    border-radius: 8px;
    border: 1px solid var(--border-hover);
    box-shadow: 0 12px 40px rgba(0,0,0,0.5);
    overflow: hidden;
    display: none;
    transform-origin: bottom right;
  }
  .sip-fab-panel.open { display: block; }

  .sip-fab-panel-head {
    background: rgba(232,131,106,0.1);
    border-bottom: 1px solid var(--border);
    padding: 11px 14px;
    display: flex; align-items: center; gap: 8px;
  }
  .sip-fab-panel-title { flex: 1; font-size: 12px; font-weight: 700; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.06em; }
  .sip-fab-panel-count {
    background: rgba(232,131,106,0.15); color: var(--coral);
    font-size: 10px; font-weight: 700;
    border-radius: 99px; padding: 2px 8px;
  }

  .sip-fab-panel-body { max-height: 300px; overflow-y: auto; }

  .sip-fab-req-card {
    display: flex; align-items: center; gap: 10px;
    padding: 11px 14px;
    border-bottom: 1px solid var(--border);
    background: var(--bg-card); transition: background .12s;
  }
  .sip-fab-req-card:hover      { background: rgba(255,255,255,0.03); }
  .sip-fab-req-card:last-child { border-bottom: none; }

  .sip-fab-req-avatar {
    width: 32px; height: 32px; border-radius: 50%;
    background: var(--coral-dim); color: var(--coral);
    font-size: 11px; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; border: 1px solid rgba(232,131,106,0.25);
  }
  .sip-fab-req-info  { flex: 1; min-width: 0; }
  .sip-fab-req-uid   { font-size: 12px; font-weight: 700; color: var(--text-primary); }
  .sip-fab-req-meta  { font-size: 10px; color: var(--text-dim); margin-top: 2px; display: flex; gap: 6px; align-items: center; }
  .sip-fab-req-btns  { display: flex; gap: 5px; flex-shrink: 0; }

  .sip-fab-btn-approve,
  .sip-fab-btn-decline {
    padding: 4px 9px; border-radius: 99px;
    font-size: 10px; font-weight: 700;
    cursor: pointer; transition: opacity 0.15s; border: none;
    text-transform: uppercase; letter-spacing: 0.04em;
  }
  .sip-fab-btn-approve:disabled,
  .sip-fab-btn-decline:disabled { opacity: .4; cursor: not-allowed; }
  .sip-fab-btn-approve                      { background: var(--coral); color: #111; }
  .sip-fab-btn-approve:hover:not(:disabled) { opacity: 0.82; }
  .sip-fab-btn-decline                      { background: none; color: var(--text-dim); border: 1px solid var(--border); }
  .sip-fab-btn-decline:hover:not(:disabled) { border-color: var(--danger); color: var(--danger); }

  .sip-fab-panel-footer {
    padding: 9px 14px;
    border-top: 1px solid var(--border);
    font-size: 11px; font-weight: 700; color: var(--coral);
    text-align: center; cursor: pointer;
    text-transform: uppercase; letter-spacing: 0.06em;
    background: var(--bg-card); transition: background .12s;
  }
  .sip-fab-panel-footer:hover { background: rgba(255,255,255,0.03); }

  @media (max-width: 560px) {
    .appr-card { flex-wrap: wrap; }
    .appr-btns { width: 100%; justify-content: flex-end; }
  }
</style>

<!-- Flower background canvas (matches home page) -->
<canvas id="contact-flower-canvas"></canvas>

<div class="sip-page">

    <!-- ── Contact Forms ── -->
    <div class="forms-grid">

      <!-- Get Involved -->
      <div class="form-card">
        <div class="form-card-header">
          <span class="form-card-icon">🤝</span>
          <h2>Get Involved</h2>
          <p>Support our mission by volunteering your time or joining as a member.</p>
        </div>
        <div class="form-body">
          <div class="field">
            <label for="inv-type">How would you like to contribute?</label>
            <select id="inv-type">
              <option value="" disabled selected>Select an option</option>
              <option value="volunteer">Volunteer</option>
              <option value="member">Join as a Member</option>
            </select>
            <span class="field-err" id="inv-type-err">Please select an option.</span>
          </div>
          <div class="field">
            <label for="inv-message">Message <span style="font-weight:400;color:var(--text-dim)">(optional)</span></label>
            <textarea id="inv-message" placeholder="Tell us a bit about yourself or your interest…"></textarea>
          </div>
          <div class="banner banner-error"   id="err-involved"></div>
          <div class="banner banner-success" id="ok-involved">✓ Thank you — we will be in touch soon.</div>
          <button class="btn-submit btn-coral" id="btn-involved" onclick="handleInvolvedSubmit()">
            <span class="spinner" id="sp-involved"></span>
            Send Message
          </button>
        </div>
      </div>

      <!-- Get Help -->
      <div class="form-card">
        <div class="form-card-header">
          <span class="form-card-icon">💛</span>
          <h2>Get Help</h2>
          <p>Learn about our programs, eligibility, and how to apply for support.</p>
        </div>
        <div class="form-body">
          <div class="field">
            <label for="help-program">Program you are inquiring about</label>
            <select id="help-program">
              <option value="" disabled selected>Select a program</option>
              <option value="transitional-housing">Transitional Housing</option>
              <option value="live-your-dream">Live Your Dream</option>
              <option value="dream-it-be-it">Dream It Be It</option>
              <option value="abraxas">Abraxas Scholarship</option>
              <option value="colegio">Colegio La Esperanza</option>
            </select>
            <span class="field-err" id="help-prog-err">Please select a program.</span>
          </div>
          <div class="field">
            <label for="help-message">Message <span style="font-weight:400;color:var(--text-dim)">(optional)</span></label>
            <textarea id="help-message" placeholder="Describe your situation or question…"></textarea>
          </div>
          <div class="banner banner-error"   id="err-help"></div>
          <div class="banner banner-success" id="ok-help">✓ Thank you — we will be in touch soon.</div>
          <button class="btn-submit btn-gold" id="btn-help" onclick="handleHelpSubmit()">
            <span class="spinner" id="sp-help"></span>
            Send Message
          </button>
        </div>
      </div>

    </div>

    <hr class="divider">

    <!-- ── Calendar ── -->
    <div class="cal-section">
      <p class="section-label">Schedule</p>
      <h2 class="section-heading">Upcoming Meetings</h2>
      <p class="section-desc">Click any event to view details.</p>

      <div class="admin-bar" id="admin-bar">
        <span class="admin-who" id="admin-who" style="display:none">
          Logged in as <strong id="admin-name"></strong>
        </span>
        <button class="btn-toggle-admin" id="btn-toggle-admin" onclick="toggleAdminPanel()">
          ⚙ Manage Events
        </button>
      </div>

      <div class="admin-login-hint" id="admin-login-hint">
        <a id="admin-login-link" href="/login">Log in to manage events</a>
      </div>

      <!-- Admin Panel -->
      <div class="admin-panel" id="admin-panel">
        <div class="admin-panel-header">
          <h3>Event Management</h3>
          <span class="admin-who-inline">Logged in as <strong id="admin-name-panel"></strong></span>
        </div>
        <div class="admin-body">

          <p class="admin-section-title" id="evt-form-title-label">Add New Event</p>
          <div class="evt-form-grid">
            <div>
              <label>Title</label>
              <input type="text" id="ef-title" placeholder="Meeting name">
            </div>
            <div>
              <label>Date</label>
              <input type="date" id="ef-date">
            </div>
            <div>
              <label>Start Time</label>
              <input type="text" id="ef-start" placeholder="6:30 PM">
            </div>
            <div>
              <label>End Time</label>
              <input type="text" id="ef-end" placeholder="8:00 PM">
            </div>
            <div class="span2">
              <label>Location</label>
              <input type="text" id="ef-location" placeholder="Building, Room">
            </div>
            <div>
              <label>Type</label>
              <select id="ef-type">
                <option value="blue">General (Blue)</option>
                <option value="gold">Board / Committee (Gold)</option>
              </select>
            </div>
            <div></div>
            <div class="span2">
              <label>Notes</label>
              <textarea id="ef-notes" placeholder="Additional details…"></textarea>
            </div>
          </div>
          <div class="evt-form-actions">
            <button class="btn-save-evt" id="btn-save-evt" onclick="saveEvent()">Add Event</button>
            <button class="btn-cancel-edit" id="btn-cancel-edit" onclick="cancelEdit()">Cancel</button>
          </div>
          <div class="admin-msg-bar" id="admin-msg"></div>

          <div class="evt-list-wrap" style="margin-top:1.25rem">
            <p class="admin-section-title">Existing Events</p>
            <div id="admin-events-list">
              <span style="font-size:0.83rem;color:var(--text-dim)">Loading…</span>
            </div>
          </div>

          <hr class="admin-sep">

          <p class="admin-section-title">Get Involved Requests</p>

          <div class="notif-row" id="notif-row" onclick="toggleApprovalTray()">
            <span class="notif-bell-wrap">
              🔔
              <span class="notif-count" id="notif-count">0</span>
            </span>
            <span class="notif-label" id="notif-label">Loading requests…</span>
            <span class="notif-caret" id="notif-caret">▼</span>
          </div>

          <div class="approval-tray" id="approval-tray">
            <div class="tray-head">Pending Approval</div>
            <div id="appr-cards">
              <div class="tray-empty">Loading…</div>
            </div>
          </div>

          <p class="admin-section-title" style="margin-top:1.25rem">All Submissions</p>
          <div class="subs-filters">
            <select id="sub-filter-type" onchange="loadSubmissions(1)">
              <option value="">All Types</option>
              <option value="involved">Get Involved</option>
              <option value="help">Get Help</option>
            </select>
            <select id="sub-filter-status" onchange="loadSubmissions(1)">
              <option value="">All Statuses</option>
              <option value="new">New</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="approved">Approved</option>
              <option value="declined">Declined</option>
            </select>
          </div>
          <div id="submissions-list">
            <span style="font-size:0.83rem;color:var(--text-dim)">Loading…</span>
          </div>
          <div class="sub-pager" id="sub-pager">
            <button class="btn-page" id="btn-sub-prev" onclick="loadSubmissions(subPage - 1)">← Prev</button>
            <span id="sub-page-info"></span>
            <button class="btn-page" id="btn-sub-next" onclick="loadSubmissions(subPage + 1)">Next →</button>
          </div>

        </div>
      </div>

      <!-- Calendar nav -->
      <div class="cal-toolbar">
        <div class="cal-nav">
          <button class="cal-nav-btn" onclick="changeMonth(-1)">←</button>
          <span class="cal-month-label" id="cal-month-label"></span>
          <button class="cal-nav-btn" onclick="changeMonth(1)">→</button>
        </div>
        <span class="cal-status-msg" id="cal-status"></span>
      </div>

      <div class="cal-grid" id="cal-day-names"></div>
      <div class="cal-grid" id="cal-cells"></div>

    </div>

    <!-- Footer -->
    <div style="text-align:center;margin-top:3rem;padding-top:1.5rem;border-top:1px solid var(--border);">
      <p style="font-size:0.78rem;color:var(--text-dim);letter-spacing:0.05em;text-transform:uppercase;margin:0;">Soroptimist International of Poway &nbsp;·&nbsp; Empowering Women &amp; Girls</p>
    </div>

  </div>

  <!-- Floating approval FAB -->
  <div class="sip-fab-wrap" id="sip-fab-wrap">
    <div class="sip-fab-panel" id="sip-fab-panel">
      <div class="sip-fab-panel-head">
        <span class="sip-fab-panel-title">Get Involved Requests</span>
        <span class="sip-fab-panel-count" id="sip-fab-count">0 pending</span>
      </div>
      <div class="sip-fab-panel-body" id="sip-fab-list"></div>
      <div class="sip-fab-panel-footer" id="sip-fab-footer">View all submissions →</div>
    </div>
    <button class="sip-fab" id="sip-fab-btn" title="Get Involved requests">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="#111" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
      <span class="sip-fab-badge" id="sip-fab-badge">0</span>
    </button>
  </div>

<!-- Event detail modal -->
<div class="modal-bg" id="event-modal" onclick="closeModalOutside(event)">
  <div class="modal-box">
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div class="modal-pill" id="modal-pill"></div>
    <h3 class="modal-title" id="modal-title"></h3>
    <div class="modal-row">
      <span class="modal-row-label">Date</span>
      <span class="modal-row-val" id="modal-date"></span>
    </div>
    <div class="modal-row">
      <span class="modal-row-label">Time</span>
      <span class="modal-row-val" id="modal-time"></span>
    </div>
    <div class="modal-row">
      <span class="modal-row-label">Location</span>
      <span class="modal-row-val" id="modal-location"></span>
    </div>
    <div class="modal-row" id="modal-notes-row">
      <span class="modal-row-label">Notes</span>
      <span class="modal-row-val" id="modal-notes"></span>
    </div>
    <div class="modal-actions" id="modal-admin-actions">
      <button class="btn-modal-edit" onclick="editFromModal()">Edit</button>
      <button class="btn-modal-del"  onclick="deleteFromModal()">Delete</button>
    </div>
  </div>
</div>


<script>
/* ── CONFIG ── */
const API_BASE = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:8427'
  : 'https://sipoway.opencodingsociety.com';

/* ── STATE ── */
let fabOpen     = false;
const TODAY     = new Date();
let viewYear    = TODAY.getFullYear();
let viewMonth   = TODAY.getMonth();
let MEETINGS    = [];
let editingId   = null;
let modalEvtId  = null;
let isAdmin     = false;
let subPage     = 1;
let trayOpen    = false;
let pendingItems = [];
const PER_PAGE  = 10;

const MONTHS = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];
const DAYS   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

/* ── FLOWER CANVAS (matches home page) ── */
(function() {
  const canvas = document.getElementById('contact-flower-canvas');
  const ctx    = canvas.getContext('2d');

  const PETAL_PALETTES = [
    ['#e8836a','#f0a080','#ffd0bb'],
    ['#6ab0e8','#90c8f8','#c0e0ff'],
    ['#d4b84a','#f0d870','#fff0a0'],
    ['#5ecb8a','#80e8a8','#b0f8cc'],
    ['#e86a6a','#f89090','#ffbbbb'],
    ['#b07de8','#cc9eff','#e8d0ff'],
  ];

  let flowers = [];
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function makeFlower() {
    const palette = PETAL_PALETTES[Math.floor(Math.random() * PETAL_PALETTES.length)];
    return {
      x: Math.random() * W, y: Math.random() * H,
      progress: 0, speed: 0.004 + Math.random() * 0.008,
      maxR: 14 + Math.random() * 22,
      petals: 4 + Math.floor(Math.random() * 4),
      palette, rotation: Math.random() * Math.PI * 2,
      waitTicks: 180 + Math.random() * 300, waited: 0,
      fadeSpeed: 0.003 + Math.random() * 0.004, alpha: 0, done: false,
    };
  }

  function seed(n) {
    for (let i = 0; i < n; i++) {
      const f = makeFlower(); f.progress = Math.random(); flowers.push(f);
    }
  }
  seed(18);

  function drawFlower(f) {
    if (f.alpha <= 0) return;
    ctx.save(); ctx.globalAlpha = f.alpha;
    ctx.translate(f.x, f.y); ctx.rotate(f.rotation);
    const r = f.maxR * f.progress, pr = r * 0.55;
    const [c1, c2, c3] = f.palette;
    for (let p = 0; p < f.petals; p++) {
      const angle = (p / f.petals) * Math.PI * 2;
      const px = Math.cos(angle) * pr, py = Math.sin(angle) * pr;
      ctx.beginPath(); ctx.ellipse(px, py, r * 0.38, r * 0.24, angle, 0, Math.PI * 2);
      const g = ctx.createRadialGradient(px, py, 0, px, py, r * 0.4);
      g.addColorStop(0, c2); g.addColorStop(1, c1);
      ctx.fillStyle = g; ctx.fill();
    }
    ctx.beginPath(); ctx.arc(0, 0, r * 0.22, 0, Math.PI * 2);
    ctx.fillStyle = c3; ctx.fill();
    ctx.restore();
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    flowers = flowers.filter(f => !f.done);
    while (flowers.length < 14) flowers.push(makeFlower());
    for (const f of flowers) {
      if (f.progress < 1) {
        f.progress = Math.min(1, f.progress + f.speed);
        f.alpha    = Math.min(0.75, f.alpha + f.speed * 2);
      } else {
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
})();

/* ── UTILS ── */
function esc(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function fmtDate(dateStr) {
  const [y,m,d] = dateStr.split('-').map(Number);
  return `${MONTHS[m-1]} ${d}, ${y}`;
}
function fmtDT(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})
       + ' · ' + d.toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'});
}

/* ── FORM HELPERS ── */
function setErr(fieldId, errId, show) {
  const f = document.getElementById(fieldId);
  const e = document.getElementById(errId);
  if (f) f.classList.toggle('has-error', show);
  if (e) e.classList.toggle('show', show);
}
function setBanner(id, msg, type) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.className   = `banner banner-${type}`;
  if (msg) el.classList.add('show'); else el.classList.remove('show');
}
function setLoading(btnId, spId, on) {
  const b = document.getElementById(btnId), s = document.getElementById(spId);
  if (b) b.disabled = on;
  if (s) s.classList.toggle('show', on);
}

/* ── CONTACT FORMS ── */
function handleInvolvedSubmit() {
  const sel = document.getElementById('inv-type').value;
  const msg = document.getElementById('inv-message').value.trim();
  setErr('inv-type','inv-type-err', !sel);
  if (!sel) return;
  setBanner('err-involved','','error');
  setLoading('btn-involved','sp-involved',true);
  fetch(`${API_BASE}/api/sip/contact/involved`, {
    method:'POST', credentials:'include',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({selection:sel, message:msg}),
  })
  .then(r => r.ok ? r.json() : r.json().then(d => Promise.reject(d.message||'Submission failed.')))
  .then(() => {
    setBanner('ok-involved','✓ Thank you — we will be in touch soon.','success');
    document.querySelectorAll('#inv-type,#inv-message').forEach(el => el.disabled=true);
    document.getElementById('btn-involved').disabled = true;
  })
  .catch(err => setBanner('err-involved', String(err), 'error'))
  .finally(() => setLoading('btn-involved','sp-involved',false));
}

function handleHelpSubmit() {
  const sel = document.getElementById('help-program').value;
  const msg = document.getElementById('help-message').value.trim();
  setErr('help-program','help-prog-err', !sel);
  if (!sel) return;
  setBanner('err-help','','error');
  setLoading('btn-help','sp-help',true);
  fetch(`${API_BASE}/api/sip/contact/help`, {
    method:'POST', credentials:'include',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({selection:sel, message:msg}),
  })
  .then(r => r.ok ? r.json() : r.json().then(d => Promise.reject(d.message||'Submission failed.')))
  .then(() => {
    setBanner('ok-help','✓ Thank you — we will be in touch soon.','success');
    document.querySelectorAll('#help-program,#help-message').forEach(el => el.disabled=true);
    document.getElementById('btn-help').disabled = true;
  })
  .catch(err => setBanner('err-help', String(err), 'error'))
  .finally(() => setLoading('btn-help','sp-help',false));
}

/* ── AUTH CHECK ── */
function checkAdminSession() {
  fetch(`${API_BASE}/api/id`, {credentials:'include'})
    .then(r => r.ok ? r.json() : Promise.reject(r.status))
    .then(user => {
      if (user.is_admin) {
        isAdmin = true;
        const name = user.name || user.uid;
        document.getElementById('admin-name').textContent       = name;
        document.getElementById('admin-name-panel').textContent = name;
        document.getElementById('admin-who').style.display      = 'inline';
        document.getElementById('btn-toggle-admin').style.display = 'inline-flex';
        renderAdminList();
        document.getElementById('sip-fab-wrap').classList.add('visible');
        loadSubmissions(1);
        loadPendingRequests();
      }
    })
    .catch(status => {
      if (status === 401) {
        const link = document.getElementById('admin-login-link');
        link.href = `/login?next=${encodeURIComponent(window.location.pathname)}`;
        document.getElementById('admin-login-hint').style.display = 'block';
      }
    });
}

/* ── ADMIN PANEL ── */
function toggleAdminPanel() {
  document.getElementById('admin-panel').classList.toggle('open');
}

function showAdminMsg(text, type) {
  const el = document.getElementById('admin-msg');
  el.textContent = text;
  el.className   = `admin-msg-bar ${type}`;
  el.style.display = 'block';
  setTimeout(() => el.style.display = 'none', 3500);
}

function renderAdminList() {
  const c = document.getElementById('admin-events-list');
  if (!MEETINGS.length) {
    c.innerHTML = '<span style="font-size:0.83rem;color:var(--text-dim)">No events yet.</span>';
    return;
  }
  const sorted = [...MEETINGS].sort((a,b) => a.date.localeCompare(b.date));
  c.innerHTML = sorted.map(m => `
    <div class="evt-list-item">
      <div class="evt-list-info">
        <div class="evt-list-name">${esc(m.title)}</div>
        <div class="evt-list-meta">${fmtDate(m.date)} &bull; ${esc(m.startTime)}</div>
      </div>
      <div class="evt-list-btns">
        <button class="btn-evt-edit" onclick="startEdit(${m.id})">Edit</button>
        <button class="btn-evt-del"  onclick="deleteEvent(${m.id})">Delete</button>
      </div>
    </div>`).join('');
}

function startEdit(id) {
  const m = MEETINGS.find(e => e.id === id);
  if (!m) return;
  editingId = id;
  document.getElementById('evt-form-title-label').textContent   = 'Edit Event';
  document.getElementById('btn-save-evt').textContent           = 'Save Changes';
  document.getElementById('btn-cancel-edit').style.display      = 'inline-block';
  document.getElementById('ef-title').value    = m.title;
  document.getElementById('ef-date').value     = m.date;
  document.getElementById('ef-start').value    = m.startTime;
  document.getElementById('ef-end').value      = m.endTime;
  document.getElementById('ef-location').value = m.location;
  document.getElementById('ef-type').value     = m.eventType;
  document.getElementById('ef-notes').value    = m.notes || '';
  document.getElementById('ef-title').scrollIntoView({behavior:'smooth',block:'center'});
}

function cancelEdit() {
  editingId = null;
  document.getElementById('evt-form-title-label').textContent  = 'Add New Event';
  document.getElementById('btn-save-evt').textContent          = 'Add Event';
  document.getElementById('btn-cancel-edit').style.display     = 'none';
  ['ef-title','ef-date','ef-start','ef-end','ef-location','ef-notes']
    .forEach(id => document.getElementById(id).value = '');
  document.getElementById('ef-type').value = 'blue';
}

function saveEvent() {
  const payload = {
    title:     document.getElementById('ef-title').value.trim(),
    date:      document.getElementById('ef-date').value,
    startTime: document.getElementById('ef-start').value.trim(),
    endTime:   document.getElementById('ef-end').value.trim(),
    location:  document.getElementById('ef-location').value.trim(),
    eventType: document.getElementById('ef-type').value,
    notes:     document.getElementById('ef-notes').value.trim(),
  };
  if (!payload.title||!payload.date||!payload.startTime||!payload.endTime||!payload.location) {
    showAdminMsg('Please fill in all required fields.','err'); return;
  }
  const btn = document.getElementById('btn-save-evt');
  btn.disabled = true;
  const isEdit = editingId !== null;
  const url    = isEdit ? `${API_BASE}/api/sip/events/${editingId}` : `${API_BASE}/api/sip/events`;
  const method = isEdit ? 'PUT' : 'POST';
  fetch(url, {
    method, credentials:'include',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(payload),
  })
  .then(r => r.ok ? r.json() : r.json().then(d => Promise.reject(d.message||'Error')))
  .then(evt => {
    if (isEdit) {
      const i = MEETINGS.findIndex(e => e.id === editingId);
      if (i !== -1) MEETINGS[i] = evt;
    } else {
      MEETINGS.push(evt);
    }
    cancelEdit(); renderCalendar(); renderAdminList();
    showAdminMsg(isEdit ? 'Event updated.' : 'Event added.', 'ok');
  })
  .catch(err => showAdminMsg(String(err),'err'))
  .finally(() => btn.disabled = false);
}

function deleteEvent(id) {
  if (!confirm('Delete this event?')) return;
  fetch(`${API_BASE}/api/sip/events/${id}`, {method:'DELETE',credentials:'include'})
    .then(r => r.ok ? r.json() : r.json().then(d => Promise.reject(d.message||'Error')))
    .then(() => {
      MEETINGS = MEETINGS.filter(e => e.id !== id);
      renderCalendar(); renderAdminList();
      showAdminMsg('Event deleted.','ok');
    })
    .catch(err => showAdminMsg(String(err),'err'));
}

/* ── FAB ── */
function toggleFabPanel() {
  fabOpen = !fabOpen;
  document.getElementById('sip-fab-panel').classList.toggle('open', fabOpen);
}

document.addEventListener('click', function(e) {
  if (fabOpen && !e.target.closest('#sip-fab-wrap')) {
    fabOpen = false;
    document.getElementById('sip-fab-panel').classList.remove('open');
  }
});

function renderFabCards() {
  const list  = document.getElementById('sip-fab-list');
  const badge = document.getElementById('sip-fab-badge');
  const count = document.getElementById('sip-fab-count');
  if (!list) return;
  const n = pendingItems.length;
  badge.textContent = n > 99 ? '99+' : String(n);
  badge.classList.toggle('show', n > 0);
  count.textContent = n === 0 ? 'all caught up' : `${n} pending`;
  if (!n) {
    list.innerHTML = `<div style="padding:18px;text-align:center;font-size:12px;color:var(--text-dim)">All caught up — no pending requests.</div>`;
    return;
  }
  list.innerHTML = pendingItems.map(s => {
    const init  = s.uid.slice(0, 2).toUpperCase();
    const label = SEL_LABELS[s.selection] || s.selection;
    return `
      <div class="sip-fab-req-card" id="sip-fab-rc-${s.id}">
        <div class="sip-fab-req-avatar">${esc(init)}</div>
        <div class="sip-fab-req-info">
          <div class="sip-fab-req-uid">${esc(s.uid)}</div>
          <div class="sip-fab-req-meta">
            <span class="appr-type-tag">${esc(label)}</span>
            ${esc(fmtDT(s.created_at))}
          </div>
        </div>
        <div class="sip-fab-req-btns">
          <button class="sip-fab-btn-approve" onclick="fabResolve(${s.id},'approve')">Approve</button>
          <button class="sip-fab-btn-decline" onclick="fabResolve(${s.id},'decline')">Decline</button>
        </div>
      </div>`;
  }).join('');
}

function fabResolve(id, action) {
  const card = document.getElementById(`sip-fab-rc-${id}`);
  if (!card) return;
  card.querySelectorAll('button').forEach(b => b.disabled = true);
  const btns = card.querySelector('.sip-fab-req-btns');
  const cls  = action === 'approve' ? 'chip-ok' : 'chip-no';
  const lbl  = action === 'approve' ? '✓ Approved' : '✕ Declined';
  if (btns) btns.innerHTML = `<span class="resolved-chip ${cls}">${lbl}</span>`;
  setTimeout(() => {
    card.style.transition    = 'opacity .3s, max-height .3s, padding .3s';
    card.style.overflow      = 'hidden';
    card.style.maxHeight     = card.scrollHeight + 'px';
    card.style.opacity       = '0';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      card.style.maxHeight     = '0';
      card.style.paddingTop    = '0';
      card.style.paddingBottom = '0';
    }));
    setTimeout(() => {
      pendingItems = pendingItems.filter(s => s.id !== id);
      renderFabCards();
    }, 320);
  }, 700);
}

document.addEventListener('DOMContentLoaded', function() {
  const btn    = document.getElementById('sip-fab-btn');
  const footer = document.getElementById('sip-fab-footer');
  if (btn)    btn.addEventListener('click', toggleFabPanel);
  if (footer) footer.addEventListener('click', function() {
    fabOpen = false;
    document.getElementById('sip-fab-panel').classList.remove('open');
    const ap = document.getElementById('admin-panel');
    if (ap) { ap.classList.add('open'); ap.scrollIntoView({behavior:'smooth'}); }
  });
});

/* ── APPROVAL TRAY ── */
const SEL_LABELS = {
  volunteer:'Volunteer', member:'Join as a Member',
  'transitional-housing':'Transitional Housing',
  'live-your-dream':'Live Your Dream',
  'dream-it-be-it':'Dream It Be It',
  abraxas:'Abraxas Scholarship', colegio:'Colegio La Esperanza',
};

function loadPendingRequests() {
  fetch(`${API_BASE}/api/sip/contact/pending`, {credentials:'include'})
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      pendingItems = data.items || [];
      const count  = data.count || 0;
      const badge  = document.getElementById('notif-count');
      const label  = document.getElementById('notif-label');
      badge.textContent = count > 99 ? '99+' : String(count);
      badge.classList.toggle('show', count > 0);
      label.textContent = count === 0
        ? 'No pending "Get Involved" requests'
        : `${count} pending "Get Involved" request${count !== 1 ? 's' : ''}`;
      if (trayOpen) renderApprovalCards();
      renderFabCards();
    })
    .catch(() => { document.getElementById('notif-label').textContent = 'Could not load requests.'; });
}

function toggleApprovalTray() {
  trayOpen = !trayOpen;
  document.getElementById('approval-tray').classList.toggle('open', trayOpen);
  document.getElementById('notif-caret').classList.toggle('flipped', trayOpen);
  if (trayOpen) renderApprovalCards();
}

function renderApprovalCards() {
  const c = document.getElementById('appr-cards');
  if (!pendingItems.length) {
    c.innerHTML = '<div class="tray-empty">🎉 All caught up — no pending requests.</div>';
    return;
  }
  c.innerHTML = pendingItems.map(s => {
    const init  = s.uid.slice(0,2).toUpperCase();
    const label = SEL_LABELS[s.selection] || s.selection;
    const snip  = s.message ? s.message.slice(0,80) + (s.message.length > 80 ? '…' : '') : '';
    return `
      <div class="appr-card" id="appr-${s.id}">
        <div class="appr-avatar">${esc(init)}</div>
        <div class="appr-info">
          <div class="appr-uid">${esc(s.uid)}</div>
          <div class="appr-meta">
            <span class="appr-type-tag">${esc(label)}</span>
            ${esc(fmtDT(s.created_at))}
          </div>
          ${snip ? `<div class="appr-msg">${esc(snip)}</div>` : ''}
        </div>
        <div class="appr-btns">
          <button class="btn-approve" onclick="resolveRequest(${s.id},'approve')">Approve</button>
          <button class="btn-decline" onclick="resolveRequest(${s.id},'decline')">Decline</button>
        </div>
      </div>`;
  }).join('');
}

function resolveRequest(id, action) {
  const card = document.getElementById(`appr-${id}`);
  if (card) card.querySelectorAll('button').forEach(b => b.disabled = true);
  fetch(`${API_BASE}/api/sip/contact/${id}/${action}`, {method:'PATCH', credentials:'include'})
    .then(r => r.ok ? r.json() : r.json().then(d => Promise.reject(d.message||'Error')))
    .then(() => {
      if (card) {
        const btnsEl = card.querySelector('.appr-btns');
        if (btnsEl) {
          const cls = action === 'approve' ? 'chip-ok' : 'chip-no';
          const lbl = action === 'approve' ? '✓ Approved' : '✕ Declined';
          btnsEl.innerHTML = `<span class="resolved-chip ${cls}">${lbl}</span>`;
        }
        setTimeout(() => {
          card.style.transition = 'opacity 0.3s, max-height 0.35s, padding 0.35s';
          card.style.overflow   = 'hidden';
          card.style.maxHeight  = card.scrollHeight + 'px';
          card.style.opacity    = '0';
          requestAnimationFrame(() => requestAnimationFrame(() => {
            card.style.maxHeight  = '0';
            card.style.paddingTop = '0';
            card.style.paddingBottom = '0';
          }));
          setTimeout(() => card.remove(), 400);
        }, 750);
      }
      pendingItems = pendingItems.filter(s => s.id !== id);
      setTimeout(() => {
        loadPendingRequests(); loadSubmissions(subPage);
        const remaining = document.querySelectorAll('#appr-cards .appr-card');
        if (remaining.length <= 1) {
          setTimeout(() => {
            if (!pendingItems.length)
              document.getElementById('appr-cards').innerHTML = '<div class="tray-empty">🎉 All caught up — no pending requests.</div>';
          }, 450);
        }
      }, 900);
    })
    .catch(err => {
      if (card) card.querySelectorAll('button').forEach(b => b.disabled = false);
      showAdminMsg(String(err), 'err');
    });
}

/* ── SUBMISSIONS ── */
const STATUS_NEXT  = {new:'in_progress',in_progress:'resolved',resolved:'new',approved:'resolved',declined:'new'};
const STATUS_LABEL = {new:'Mark In Progress',in_progress:'Mark Resolved',resolved:'Reopen',approved:'Mark Resolved',declined:'Reopen'};

function loadSubmissions(page) {
  subPage = page;
  const tf = document.getElementById('sub-filter-type').value;
  const sf = document.getElementById('sub-filter-status').value;
  let url  = `${API_BASE}/api/sip/contact?page=${page}&per_page=${PER_PAGE}`;
  if (tf) url += `&form_type=${tf}`;
  if (sf) url += `&status=${sf}`;
  const c = document.getElementById('submissions-list');
  c.innerHTML = '<span style="font-size:0.83rem;color:var(--text-dim)">Loading…</span>';
  fetch(url, {credentials:'include'})
    .then(r => r.ok ? r.json() : Promise.reject('Failed to load submissions.'))
    .then(data => renderSubmissions(data))
    .catch(err => { c.innerHTML = `<span style="font-size:0.83rem;color:var(--danger)">${esc(String(err))}</span>`; });
}

function badgeClass(status) {
  const map = {new:'badge-new',in_progress:'badge-progress',resolved:'badge-resolved',approved:'badge-approved',declined:'badge-declined'};
  return map[status] || 'badge-new';
}

function renderSubmissions(data) {
  const c = document.getElementById('submissions-list');
  if (!data.items?.length) {
    c.innerHTML = '<span style="font-size:0.83rem;color:var(--text-dim)">No submissions found.</span>';
    document.getElementById('sub-pager').style.display = 'none';
    return;
  }
  c.innerHTML = data.items.map(s => {
    const showToggle = !(s.form_type === 'involved' && s.status === 'new');
    const toggleBtn  = showToggle
      ? `<button class="btn-sub-status" onclick="updateSubStatus(${s.id},'${STATUS_NEXT[s.status]||'new'}')">
           ${STATUS_LABEL[s.status]||'Update'}
         </button>` : '';
    return `
      <div class="sub-card">
        <div class="sub-card-top">
          <div>
            <div class="sub-uid">${esc(s.uid)}</div>
            <div class="sub-ts">${fmtDT(s.created_at)}</div>
          </div>
          <div class="badge-row">
            <span class="badge ${s.form_type==='involved'?'badge-involved':'badge-help'}">
              ${s.form_type==='involved'?'Get Involved':'Get Help'}
            </span>
            <span class="badge ${badgeClass(s.status)}">${esc(s.status.replace('_',' '))}</span>
          </div>
        </div>
        <div class="sub-selection"><strong>Selection:</strong> ${esc(SEL_LABELS[s.selection]||s.selection)}</div>
        ${s.message?`<div class="sub-message">${esc(s.message)}</div>`:''}
        <div class="sub-actions">
          ${toggleBtn}
          <button class="btn-sub-del" onclick="deleteSub(${s.id})">Delete</button>
        </div>
      </div>`;
  }).join('');

  const pager = document.getElementById('sub-pager');
  pager.style.display = data.pages > 1 ? 'flex' : 'none';
  document.getElementById('sub-page-info').textContent =
    `Page ${data.page} of ${data.pages} (${data.total} total)`;
  document.getElementById('btn-sub-prev').disabled = data.page <= 1;
  document.getElementById('btn-sub-next').disabled = data.page >= data.pages;
}

function updateSubStatus(id, newStatus) {
  fetch(`${API_BASE}/api/sip/contact/${id}`, {
    method:'PATCH', credentials:'include',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({status:newStatus}),
  })
  .then(r => r.ok ? r.json() : r.json().then(d => Promise.reject(d.message||'Error')))
  .then(() => loadSubmissions(subPage))
  .catch(err => showAdminMsg(String(err),'err'));
}

function deleteSub(id) {
  if (!confirm('Permanently delete this submission?')) return;
  fetch(`${API_BASE}/api/sip/contact/${id}`, {method:'DELETE',credentials:'include'})
    .then(r => r.ok ? r.json() : r.json().then(d => Promise.reject(d.message||'Error')))
    .then(() => loadSubmissions(subPage))
    .catch(err => showAdminMsg(String(err),'err'));
}

/* ── CALENDAR ── */
function renderDayNames() {
  document.getElementById('cal-day-names').innerHTML =
    DAYS.map(d => `<div class="cal-day-name">${d}</div>`).join('');
}

function renderCalendar() {
  document.getElementById('cal-month-label').textContent = `${MONTHS[viewMonth]} ${viewYear}`;
  const firstDay    = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth+1, 0).getDate();
  const daysInPrev  = new Date(viewYear, viewMonth, 0).getDate();
  const cells = [];
  for (let i = firstDay-1; i >= 0; i--)
    cells.push({day:daysInPrev-i, m:viewMonth-1, y:viewYear, cur:false});
  for (let d = 1; d <= daysInMonth; d++)
    cells.push({day:d, m:viewMonth, y:viewYear, cur:true});
  while (cells.length < 42)
    cells.push({day:cells.length-firstDay-daysInMonth+1, m:viewMonth+1, y:viewYear, cur:false});

  document.getElementById('cal-cells').innerHTML = cells.map(cell => {
    let nm = cell.m, ny = cell.y;
    while (nm > 11) { nm -= 12; ny++; }
    while (nm <  0) { nm += 12; ny--; }
    const ds      = `${ny}-${String(nm+1).padStart(2,'0')}-${String(cell.day).padStart(2,'0')}`;
    const isToday = cell.cur && cell.day===TODAY.getDate() && nm===TODAY.getMonth() && ny===TODAY.getFullYear();
    const evts    = MEETINGS.filter(m => m.date === ds);
    return `<div class="cal-cell ${!cell.cur?'other-month':''} ${isToday?'is-today':''}">
      <div class="cal-date">${cell.day}</div>
      ${evts.map(m =>
        `<span class="cal-evt ${m.eventType==='gold'?'gold-evt':'blue-evt'}"
               onclick="openModal(${m.id})"
               title="${esc(m.title)}">${esc(m.title)}</span>`
      ).join('')}
    </div>`;
  }).join('');
}

function changeMonth(dir) {
  viewMonth += dir;
  if (viewMonth > 11) { viewMonth = 0;  viewYear++; }
  if (viewMonth <  0) { viewMonth = 11; viewYear--; }
  renderCalendar();
}

/* ── MODAL ── */
function openModal(id) {
  const m = MEETINGS.find(e => e.id === id);
  if (!m) return;
  modalEvtId = id;
  const pill = document.getElementById('modal-pill');
  if (m.eventType === 'gold') {
    pill.textContent = '📋 Board / Committee Meeting';
    pill.className   = 'modal-pill pill-gold';
  } else {
    pill.textContent = '📅 General Meeting';
    pill.className   = 'modal-pill pill-blue';
  }
  document.getElementById('modal-title').textContent    = m.title;
  document.getElementById('modal-date').textContent     = fmtDate(m.date);
  document.getElementById('modal-time').textContent     = `${m.startTime} – ${m.endTime}`;
  document.getElementById('modal-location').textContent = m.location;
  document.getElementById('modal-notes').textContent    = m.notes || 'No additional notes.';
  document.getElementById('modal-admin-actions').classList.toggle('show', isAdmin);
  document.getElementById('event-modal').classList.add('open');
}

function closeModal() {
  document.getElementById('event-modal').classList.remove('open');
  modalEvtId = null;
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('event-modal')) closeModal();
}

function editFromModal() {
  closeModal();
  if (!document.getElementById('admin-panel').classList.contains('open'))
    document.getElementById('admin-panel').classList.add('open');
  startEdit(modalEvtId);
}

function deleteFromModal() {
  const id = modalEvtId; closeModal(); deleteEvent(id);
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ── BOOTSTRAP ── */
function loadEvents() {
  document.getElementById('cal-status').textContent = 'Loading…';
  fetch(`${API_BASE}/api/sip/events`)
    .then(r => r.json())
    .then(data => {
      MEETINGS = data;
      document.getElementById('cal-status').textContent = '';
      renderCalendar();
      if (isAdmin) renderAdminList();
    })
    .catch(() => {
      document.getElementById('cal-status').textContent = 'Could not load events.';
    });
}

renderDayNames();
loadEvents();
checkAdminSession();
</script>