---
layout: post
title: Contact - Soroptimist International of Poway
description: Get involved or get help from Soroptimist International of Poway
permalink: /sip/contact
---

<style>
  :root {
    --blue: #003F87;
    --blue-light: #1a5fa8;
    --blue-pale: #e8f0fb;
    --gold: #C8973A;
    --gold-light: #f5e6c8;
    --gold-dark: #a07628;
    --gray: #f5f5f5;
    --border: #dde3ec;
    --text: #1a1a2e;
    --text-muted: #5a6278;
    --danger: #c0392b;
    --danger-light: #fdecea;
  }

  .sip-contact {
    font-family: "Segoe UI", Georgia, sans-serif;
    color: var(--text);
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1rem 4rem;
  }

  .sip-contact h1 {
    text-align: center;
    color: var(--blue);
    font-size: 2rem;
    margin-bottom: 0.25rem;
  }

  .page-subtitle {
    text-align: center;
    color: var(--text-muted);
    margin-bottom: 2.5rem;
    font-size: 1rem;
  }

  /* Two-column form layout */
  .forms-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 3.5rem;
  }

  @media (max-width: 720px) {
    .forms-grid { grid-template-columns: 1fr; }
  }

  .form-panel {
    border: 2px solid var(--border);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.07);
  }

  .form-panel-header { padding: 1.25rem 1.5rem; }
  .form-panel-header.involved { background: var(--blue); color: #fff; }
  .form-panel-header.help { background: var(--gold); color: #fff; }
  .form-panel-header h2 { margin: 0 0 0.35rem; font-size: 1.3rem; }
  .form-panel-header p { margin: 0; font-size: 0.92rem; opacity: 0.9; }

  .form-panel form {
    padding: 1.5rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-group { display: flex; flex-direction: column; gap: 0.3rem; }

  .form-group label {
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--text);
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.55rem 0.75rem;
    border: 1.5px solid var(--border);
    border-radius: 6px;
    font-size: 0.95rem;
    font-family: inherit;
    color: var(--text);
    background: #fff;
    transition: border-color 0.2s;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--blue-light);
  }

  .form-group textarea { resize: vertical; min-height: 90px; }

  .btn-involved {
    padding: 0.65rem 1.4rem;
    background: var(--blue);
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    align-self: flex-start;
  }
  .btn-involved:hover { background: var(--blue-light); }

  .btn-help {
    padding: 0.65rem 1.4rem;
    background: var(--gold);
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    align-self: flex-start;
  }
  .btn-help:hover { background: var(--gold-dark); }

  .form-success {
    display: none;
    background: #e8f5e9;
    border: 1.5px solid #81c784;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    font-size: 0.92rem;
    color: #2e7d32;
  }

  /* Calendar section */
  .calendar-section h2 { color: var(--blue); font-size: 1.6rem; margin-bottom: 0.25rem; }
  .section-desc { color: var(--text-muted); margin-bottom: 1.75rem; font-size: 0.95rem; }

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .calendar-nav { display: flex; align-items: center; gap: 1rem; }

  .cal-nav-btn {
    background: none;
    border: 1.5px solid var(--border);
    border-radius: 6px;
    padding: 0.3rem 0.75rem;
    cursor: pointer;
    font-size: 1rem;
    color: var(--blue);
    transition: background 0.15s;
  }
  .cal-nav-btn:hover { background: var(--blue-pale); }

  #cal-month-label {
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--blue);
    min-width: 160px;
    text-align: center;
  }

  .cal-status {
    font-size: 0.82rem;
    color: var(--text-muted);
    font-style: italic;
  }

  .cal-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
  }

  .cal-day-name {
    text-align: center;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--text-muted);
    padding: 0.4rem 0;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .cal-cell {
    min-height: 80px;
    background: #fff;
    border: 1.5px solid var(--border);
    border-radius: 6px;
    padding: 0.3rem 0.4rem;
    vertical-align: top;
    font-size: 0.82rem;
  }

  .cal-cell.other-month { background: var(--gray); }
  .cal-cell.today { border-color: var(--gold); background: var(--gold-light); }

  .cal-date {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-muted);
    margin-bottom: 0.2rem;
  }
  .cal-cell.today .cal-date { color: var(--gold-dark); }

  .cal-event {
    background: var(--blue);
    color: #fff;
    border-radius: 4px;
    padding: 0.15rem 0.35rem;
    font-size: 0.72rem;
    margin-bottom: 2px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: background 0.15s;
    line-height: 1.4;
  }
  .cal-event:hover { background: var(--blue-light); }
  .cal-event.event-gold { background: var(--gold); }
  .cal-event.event-gold:hover { background: var(--gold-dark); }

  /* Event detail modal */
  .modal-overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    z-index: 1000;
    align-items: center;
    justify-content: center;
  }
  .modal-overlay.open { display: flex; }

  .modal-box {
    background: #fff;
    border-radius: 12px;
    padding: 2rem;
    max-width: 420px;
    width: 90%;
    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
    position: relative;
  }

  .modal-box h3 { color: var(--blue); margin: 0 0 1rem; font-size: 1.2rem; }

  .modal-detail {
    display: flex;
    gap: 0.6rem;
    align-items: flex-start;
    margin-bottom: 0.6rem;
    font-size: 0.93rem;
    color: var(--text);
  }

  .modal-detail-label {
    font-weight: 700;
    color: var(--text-muted);
    min-width: 72px;
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    padding-top: 0.1rem;
  }

  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.3rem;
    cursor: pointer;
    color: var(--text-muted);
    line-height: 1;
  }
  .modal-close:hover { color: var(--blue); }

  .modal-tag {
    display: inline-block;
    background: var(--blue-pale);
    color: var(--blue);
    border-radius: 4px;
    padding: 0.15rem 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .modal-tag.gold { background: var(--gold-light); color: var(--gold-dark); }

  .modal-actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 1.25rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
  }

  .btn-edit {
    padding: 0.45rem 1rem;
    background: var(--blue);
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 0.88rem;
    font-weight: 600;
    cursor: pointer;
  }
  .btn-edit:hover { background: var(--blue-light); }

  .btn-delete {
    padding: 0.45rem 1rem;
    background: var(--danger);
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 0.88rem;
    font-weight: 600;
    cursor: pointer;
  }
  .btn-delete:hover { opacity: 0.85; }

  /* Admin panel */
  .admin-toggle-row {
    text-align: right;
    margin-bottom: 0.75rem;
  }

  .btn-admin-toggle {
    background: none;
    border: 1.5px solid var(--border);
    border-radius: 6px;
    padding: 0.3rem 0.85rem;
    font-size: 0.82rem;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.15s;
  }
  .btn-admin-toggle:hover { border-color: var(--blue); color: var(--blue); }

  .admin-panel {
    display: none;
    background: var(--gray);
    border: 1.5px solid var(--border);
    border-radius: 10px;
    padding: 1.5rem;
    margin-bottom: 1.75rem;
  }
  .admin-panel.open { display: block; }

  .admin-panel h3 {
    color: var(--blue);
    margin: 0 0 1rem;
    font-size: 1.1rem;
  }

  .admin-key-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;
  }

  .admin-key-row input {
    padding: 0.45rem 0.75rem;
    border: 1.5px solid var(--border);
    border-radius: 6px;
    font-size: 0.9rem;
    font-family: monospace;
    width: 220px;
  }

  .admin-key-row input:focus { outline: none; border-color: var(--blue-light); }

  .btn-unlock {
    padding: 0.45rem 1rem;
    background: var(--blue);
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 0.88rem;
    font-weight: 600;
    cursor: pointer;
  }
  .btn-unlock:hover { background: var(--blue-light); }

  .admin-auth-status {
    font-size: 0.82rem;
    font-style: italic;
  }
  .admin-auth-status.ok { color: #2e7d32; }
  .admin-auth-status.err { color: var(--danger); }

  .admin-form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 600px) { .admin-form-grid { grid-template-columns: 1fr; } }

  .admin-form-grid .full-width { grid-column: 1 / -1; }

  .admin-form-grid input,
  .admin-form-grid select,
  .admin-form-grid textarea {
    padding: 0.45rem 0.65rem;
    border: 1.5px solid var(--border);
    border-radius: 6px;
    font-size: 0.9rem;
    font-family: inherit;
    background: #fff;
    color: var(--text);
    width: 100%;
    box-sizing: border-box;
  }

  .admin-form-grid input:focus,
  .admin-form-grid select:focus,
  .admin-form-grid textarea:focus { outline: none; border-color: var(--blue-light); }

  .admin-form-grid label {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-muted);
    margin-bottom: 0.2rem;
  }

  .admin-form-grid textarea { min-height: 64px; resize: vertical; }

  .admin-form-actions { display: flex; gap: 0.5rem; }

  .btn-save {
    padding: 0.5rem 1.1rem;
    background: var(--blue);
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
  }
  .btn-save:hover { background: var(--blue-light); }
  .btn-save:disabled { opacity: 0.5; cursor: not-allowed; }

  .btn-cancel-edit {
    padding: 0.5rem 1rem;
    background: none;
    color: var(--text-muted);
    border: 1.5px solid var(--border);
    border-radius: 6px;
    font-size: 0.9rem;
    cursor: pointer;
  }

  .admin-event-list { margin-top: 1.25rem; }
  .admin-event-list h4 { font-size: 0.9rem; color: var(--text-muted); margin: 0 0 0.6rem; text-transform: uppercase; letter-spacing: 0.05em; }

  .admin-event-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border: 1.5px solid var(--border);
    border-radius: 6px;
    padding: 0.55rem 0.75rem;
    margin-bottom: 0.4rem;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .admin-event-info { font-size: 0.88rem; flex: 1; }
  .admin-event-info strong { color: var(--blue); }
  .admin-event-info span { color: var(--text-muted); margin-left: 0.4rem; font-size: 0.8rem; }

  .admin-item-btns { display: flex; gap: 0.35rem; }

  .btn-item-edit {
    padding: 0.25rem 0.6rem;
    background: var(--blue-pale);
    color: var(--blue);
    border: 1px solid var(--blue);
    border-radius: 5px;
    font-size: 0.78rem;
    cursor: pointer;
    font-weight: 600;
  }
  .btn-item-edit:hover { background: var(--blue); color: #fff; }

  .btn-item-delete {
    padding: 0.25rem 0.6rem;
    background: var(--danger-light);
    color: var(--danger);
    border: 1px solid var(--danger);
    border-radius: 5px;
    font-size: 0.78rem;
    cursor: pointer;
    font-weight: 600;
  }
  .btn-item-delete:hover { background: var(--danger); color: #fff; }

  .admin-msg {
    display: none;
    font-size: 0.85rem;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    margin-top: 0.6rem;
  }
  .admin-msg.ok { background: #e8f5e9; color: #2e7d32; border: 1px solid #81c784; }
  .admin-msg.err { background: var(--danger-light); color: var(--danger); border: 1px solid #e57373; }

  .divider {
    border: none;
    border-top: 2px solid var(--gold);
    margin: 2.5rem 0;
    opacity: 0.4;
  }
</style>

<div class="sip-contact">

  <h1>Contact Us</h1>
  <p class="page-subtitle">Soroptimist International of Poway — empowering women and girls in our community.</p>

  <div class="forms-grid">

    <!-- Get Involved -->
    <div class="form-panel">
      <div class="form-panel-header involved">
        <h2>Get Involved</h2>
        <p>Support our mission by donating, volunteering your time, or joining as a member.</p>
      </div>
      <form id="form-involved" onsubmit="handleSubmit(event, 'form-involved', 'success-involved')">
        <div class="form-group">
          <label for="inv-name">Name</label>
          <input type="text" id="inv-name" placeholder="Your full name" required>
        </div>
        <div class="form-group">
          <label for="inv-email">Email</label>
          <input type="email" id="inv-email" placeholder="you@example.com" required>
        </div>
        <div class="form-group">
          <label for="inv-type">How would you like to contribute?</label>
          <select id="inv-type" required>
            <option value="" disabled selected>Select an option</option>
            <option value="donate">Donate</option>
            <option value="volunteer">Volunteer</option>
            <option value="member">Join as a Member</option>
          </select>
        </div>
        <div class="form-group">
          <label for="inv-message">Message</label>
          <textarea id="inv-message" placeholder="Tell us a bit about yourself or your interest..."></textarea>
        </div>
        <div class="form-success" id="success-involved">
          Thank you for reaching out. We will be in touch soon.
        </div>
        <button type="submit" class="btn-involved">Send Message</button>
      </form>
    </div>

    <!-- Get Help -->
    <div class="form-panel">
      <div class="form-panel-header help">
        <h2>Get Help</h2>
        <p>Learn more about our programs, eligibility, and how to apply for support.</p>
      </div>
      <form id="form-help" onsubmit="handleSubmit(event, 'form-help', 'success-help')">
        <div class="form-group">
          <label for="help-name">Name</label>
          <input type="text" id="help-name" placeholder="Your full name" required>
        </div>
        <div class="form-group">
          <label for="help-email">Email</label>
          <input type="email" id="help-email" placeholder="you@example.com" required>
        </div>
        <div class="form-group">
          <label for="help-program">Program you are inquiring about</label>
          <select id="help-program" required>
            <option value="" disabled selected>Select a program</option>
            <option value="transitional-housing">Transitional Housing</option>
            <option value="live-your-dream">Live Your Dream</option>
            <option value="dream-it-be-it">Dream It Be It</option>
            <option value="abraxas">Abraxas Scholarship</option>
            <option value="colegio">Colegio La Esperanza</option>
          </select>
        </div>
        <div class="form-group">
          <label for="help-message">Message</label>
          <textarea id="help-message" placeholder="Describe your situation or question..."></textarea>
        </div>
        <div class="form-success" id="success-help">
          Thank you for reaching out. We will be in touch soon.
        </div>
        <button type="submit" class="btn-help">Send Message</button>
      </form>
    </div>

  </div>

  <hr class="divider">

  <!-- Meeting Calendar -->
  <div class="calendar-section">
    <h2>Upcoming Meetings</h2>
    <p class="section-desc">Click any meeting on the calendar to view details.</p>

    <!-- Admin toggle -->
    <div class="admin-toggle-row">
      <button class="btn-admin-toggle" onclick="toggleAdminPanel()">Manage Events</button>
    </div>

    <!-- Admin panel -->
    <div class="admin-panel" id="admin-panel">
      <h3>Event Management</h3>

      <div class="admin-key-row">
        <input type="password" id="admin-key-input" placeholder="Admin key">
        <button class="btn-unlock" onclick="setAdminKey()">Unlock</button>
        <span class="admin-auth-status" id="admin-auth-status"></span>
      </div>

      <div id="admin-controls" style="display:none">
        <!-- Add / Edit form -->
        <div id="event-form-section">
          <strong id="event-form-title" style="font-size:0.9rem;color:var(--blue);">Add New Event</strong>
          <div class="admin-form-grid" style="margin-top:0.75rem">
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
            <div class="full-width">
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
            <div>
              <label>&nbsp;</label><!-- spacer -->
            </div>
            <div class="full-width">
              <label>Notes</label>
              <textarea id="ef-notes" placeholder="Additional details..."></textarea>
            </div>
          </div>
          <div class="admin-form-actions">
            <button class="btn-save" id="btn-save-event" onclick="saveEvent()">Add Event</button>
            <button class="btn-cancel-edit" id="btn-cancel-edit" style="display:none" onclick="cancelEdit()">Cancel</button>
          </div>
          <div class="admin-msg" id="admin-msg"></div>
        </div>

        <!-- Existing events list -->
        <div class="admin-event-list">
          <h4>Existing Events</h4>
          <div id="admin-events-list">
            <span style="font-size:0.85rem;color:var(--text-muted)">Loading...</span>
          </div>
        </div>
      </div>
    </div>

    <div class="calendar-header">
      <div class="calendar-nav">
        <button class="cal-nav-btn" onclick="changeMonth(-1)">&#8592;</button>
        <span id="cal-month-label"></span>
        <button class="cal-nav-btn" onclick="changeMonth(1)">&#8594;</button>
      </div>
      <span class="cal-status" id="cal-status"></span>
    </div>

    <div class="cal-grid" id="cal-day-names"></div>
    <div class="cal-grid" id="cal-cells"></div>
  </div>

</div>

<!-- Event detail modal -->
<div class="modal-overlay" id="event-modal" onclick="closeModalOutside(event)">
  <div class="modal-box">
    <button class="modal-close" onclick="closeModal()" aria-label="Close">&times;</button>
    <div class="modal-tag" id="modal-tag"></div>
    <h3 id="modal-title"></h3>
    <div class="modal-detail">
      <span class="modal-detail-label">Date</span>
      <span id="modal-date"></span>
    </div>
    <div class="modal-detail">
      <span class="modal-detail-label">Time</span>
      <span id="modal-time"></span>
    </div>
    <div class="modal-detail">
      <span class="modal-detail-label">Location</span>
      <span id="modal-location"></span>
    </div>
    <div class="modal-detail" id="modal-notes-row">
      <span class="modal-detail-label">Notes</span>
      <span id="modal-notes"></span>
    </div>
    <!-- Admin quick actions inside modal (only shown when unlocked) -->
    <div class="modal-actions" id="modal-admin-actions" style="display:none">
      <button class="btn-edit" onclick="editFromModal()">Edit</button>
      <button class="btn-delete" onclick="deleteFromModal()">Delete</button>
    </div>
  </div>
</div>

<script>
  // ── Config ────────────────────────────────────────────────────
  const API_BASE = 'http://localhost:8001';

  // ── State ─────────────────────────────────────────────────────
  const today = new Date();
  let viewYear  = today.getFullYear();
  let viewMonth = today.getMonth();
  let MEETINGS  = [];           // populated from API
  let editingId = null;         // ID of event being edited (null = adding new)
  let modalEventId = null;      // currently open event's ID
  let adminKey = '';
  let adminUnlocked = false;

  // ── Form handling ─────────────────────────────────────────────
  function handleSubmit(e, formId, successId) {
    e.preventDefault();
    document.getElementById(successId).style.display = 'block';
    document.getElementById(formId)
      .querySelectorAll('input, select, textarea, button[type=submit]')
      .forEach(el => el.disabled = true);
  }

  // ── Admin panel ───────────────────────────────────────────────
  function toggleAdminPanel() {
    document.getElementById('admin-panel').classList.toggle('open');
  }

  function setAdminKey() {
    adminKey = document.getElementById('admin-key-input').value.trim();
    // Try a lightweight request to verify
    fetch(`${API_BASE}/api/sip/events`, {
      headers: { 'X-Admin-Key': adminKey }
    })
    .then(r => {
      if (r.ok) {
        adminUnlocked = true;
        document.getElementById('admin-auth-status').textContent = 'Access granted';
        document.getElementById('admin-auth-status').className = 'admin-auth-status ok';
        document.getElementById('admin-controls').style.display = 'block';
        renderAdminList();
      } else {
        throw new Error('invalid key');
      }
    })
    .catch(() => {
      adminUnlocked = false;
      document.getElementById('admin-auth-status').textContent = 'Invalid key';
      document.getElementById('admin-auth-status').className = 'admin-auth-status err';
      document.getElementById('admin-controls').style.display = 'none';
    });
  }

  function showAdminMsg(text, type) {
    const el = document.getElementById('admin-msg');
    el.textContent = text;
    el.className = `admin-msg ${type}`;
    el.style.display = 'block';
    setTimeout(() => { el.style.display = 'none'; }, 3500);
  }

  function renderAdminList() {
    const container = document.getElementById('admin-events-list');
    if (!MEETINGS.length) {
      container.innerHTML = '<span style="font-size:0.85rem;color:var(--text-muted)">No events yet.</span>';
      return;
    }
    const sorted = [...MEETINGS].sort((a, b) => a.date.localeCompare(b.date));
    container.innerHTML = sorted.map(m => `
      <div class="admin-event-item">
        <div class="admin-event-info">
          <strong>${escHtml(m.title)}</strong>
          <span>${formatDisplayDate(m.date)} &bull; ${escHtml(m.startTime)}</span>
        </div>
        <div class="admin-item-btns">
          <button class="btn-item-edit" onclick="startEdit(${m.id})">Edit</button>
          <button class="btn-item-delete" onclick="deleteEvent(${m.id})">Delete</button>
        </div>
      </div>
    `).join('');
  }

  function startEdit(id) {
    const m = MEETINGS.find(e => e.id === id);
    if (!m) return;
    editingId = id;
    document.getElementById('event-form-title').textContent = 'Edit Event';
    document.getElementById('btn-save-event').textContent = 'Save Changes';
    document.getElementById('btn-cancel-edit').style.display = 'inline-block';
    document.getElementById('ef-title').value = m.title;
    document.getElementById('ef-date').value = m.date;
    document.getElementById('ef-start').value = m.startTime;
    document.getElementById('ef-end').value = m.endTime;
    document.getElementById('ef-location').value = m.location;
    document.getElementById('ef-type').value = m.eventType;
    document.getElementById('ef-notes').value = m.notes || '';
    document.getElementById('event-form-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function cancelEdit() {
    editingId = null;
    document.getElementById('event-form-title').textContent = 'Add New Event';
    document.getElementById('btn-save-event').textContent = 'Add Event';
    document.getElementById('btn-cancel-edit').style.display = 'none';
    clearEventForm();
  }

  function clearEventForm() {
    ['ef-title','ef-date','ef-start','ef-end','ef-location','ef-notes'].forEach(id => {
      document.getElementById(id).value = '';
    });
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

    if (!payload.title || !payload.date || !payload.startTime || !payload.endTime || !payload.location) {
      showAdminMsg('Please fill in all required fields (title, date, times, location).', 'err');
      return;
    }

    const btn = document.getElementById('btn-save-event');
    btn.disabled = true;

    const isEdit = editingId !== null;
    const url    = isEdit ? `${API_BASE}/api/sip/events/${editingId}` : `${API_BASE}/api/sip/events`;
    const method = isEdit ? 'PUT' : 'POST';

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-Admin-Key': adminKey,
      },
      body: JSON.stringify(payload),
    })
    .then(r => r.ok ? r.json() : r.json().then(d => Promise.reject(d.message || 'Error')))
    .then(event => {
      if (isEdit) {
        const idx = MEETINGS.findIndex(e => e.id === editingId);
        if (idx !== -1) MEETINGS[idx] = event;
      } else {
        MEETINGS.push(event);
      }
      cancelEdit();
      renderCalendar();
      renderAdminList();
      showAdminMsg(isEdit ? 'Event updated.' : 'Event added.', 'ok');
    })
    .catch(err => showAdminMsg(String(err), 'err'))
    .finally(() => { btn.disabled = false; });
  }

  function deleteEvent(id) {
    if (!confirm('Delete this event?')) return;
    fetch(`${API_BASE}/api/sip/events/${id}`, {
      method: 'DELETE',
      headers: { 'X-Admin-Key': adminKey },
    })
    .then(r => r.ok ? r.json() : r.json().then(d => Promise.reject(d.message || 'Error')))
    .then(() => {
      MEETINGS = MEETINGS.filter(e => e.id !== id);
      renderCalendar();
      renderAdminList();
      showAdminMsg('Event deleted.', 'ok');
    })
    .catch(err => showAdminMsg(String(err), 'err'));
  }

  // ── Calendar rendering ────────────────────────────────────────
  const MONTH_NAMES = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];
  const DAY_NAMES = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  function renderDayNames() {
    document.getElementById('cal-day-names').innerHTML =
      DAY_NAMES.map(d => `<div class="cal-day-name">${d}</div>`).join('');
  }

  function renderCalendar() {
    document.getElementById('cal-month-label').textContent =
      `${MONTH_NAMES[viewMonth]} ${viewYear}`;

    const firstDay    = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const daysInPrev  = new Date(viewYear, viewMonth, 0).getDate();

    const cells = [];

    for (let i = firstDay - 1; i >= 0; i--)
      cells.push({ day: daysInPrev - i, month: viewMonth - 1, year: viewYear, current: false });

    for (let d = 1; d <= daysInMonth; d++)
      cells.push({ day: d, month: viewMonth, year: viewYear, current: true });

    const remaining = 42 - cells.length;
    for (let d = 1; d <= remaining; d++)
      cells.push({ day: d, month: viewMonth + 1, year: viewYear, current: false });

    document.getElementById('cal-cells').innerHTML = cells.map(cell => {
      const isToday = cell.current &&
        cell.day === today.getDate() &&
        cell.month === today.getMonth() &&
        cell.year === today.getFullYear();

      // Normalise month/year for events lookup
      let nm = cell.month, ny = cell.year;
      while (nm > 11) { nm -= 12; ny++; }
      while (nm < 0)  { nm += 12; ny--; }

      const dateStr = `${ny}-${String(nm + 1).padStart(2,'0')}-${String(cell.day).padStart(2,'0')}`;
      const events  = MEETINGS.filter(m => m.date === dateStr);

      const eventHTML = events.map(m =>
        `<div class="cal-event event-${m.eventType}" onclick="openModal(${m.id})" title="${escHtml(m.title)}">${escHtml(m.title)}</div>`
      ).join('');

      return `<div class="cal-cell ${!cell.current ? 'other-month' : ''} ${isToday ? 'today' : ''}">
        <div class="cal-date">${cell.day}</div>
        ${eventHTML}
      </div>`;
    }).join('');
  }

  function changeMonth(dir) {
    viewMonth += dir;
    if (viewMonth > 11) { viewMonth = 0; viewYear++; }
    if (viewMonth < 0)  { viewMonth = 11; viewYear--; }
    renderCalendar();
  }

  // ── Modal ─────────────────────────────────────────────────────
  function openModal(id) {
    const m = MEETINGS.find(e => e.id === id);
    if (!m) return;
    modalEventId = id;

    const [y, mo, d] = m.date.split('-').map(Number);
    const displayDate = `${MONTH_NAMES[mo - 1]} ${d}, ${y}`;

    const tag = document.getElementById('modal-tag');
    if (m.eventType === 'gold') {
      tag.textContent = 'Board / Committee Meeting';
      tag.className = 'modal-tag gold';
    } else {
      tag.textContent = 'General Meeting';
      tag.className = 'modal-tag';
    }

    document.getElementById('modal-title').textContent    = m.title;
    document.getElementById('modal-date').textContent     = displayDate;
    document.getElementById('modal-time').textContent     = `${m.startTime} – ${m.endTime}`;
    document.getElementById('modal-location').textContent = m.location;
    document.getElementById('modal-notes').textContent    = m.notes || 'No additional notes.';

    const adminRow = document.getElementById('modal-admin-actions');
    adminRow.style.display = adminUnlocked ? 'flex' : 'none';

    document.getElementById('event-modal').classList.add('open');
  }

  function closeModal() {
    document.getElementById('event-modal').classList.remove('open');
    modalEventId = null;
  }

  function closeModalOutside(e) {
    if (e.target === document.getElementById('event-modal')) closeModal();
  }

  function editFromModal() {
    closeModal();
    if (!document.getElementById('admin-panel').classList.contains('open')) {
      document.getElementById('admin-panel').classList.add('open');
    }
    startEdit(modalEventId);
  }

  function deleteFromModal() {
    const id = modalEventId;
    closeModal();
    deleteEvent(id);
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // ── Utility ───────────────────────────────────────────────────
  function escHtml(str) {
    return String(str)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function formatDisplayDate(dateStr) {
    const [y, m, d] = dateStr.split('-').map(Number);
    return `${MONTH_NAMES[m - 1]} ${d}, ${y}`;
  }

  // ── Bootstrap ─────────────────────────────────────────────────
  function loadEvents() {
    document.getElementById('cal-status').textContent = 'Loading...';
    fetch(`${API_BASE}/api/sip/events`)
      .then(r => r.json())
      .then(data => {
        MEETINGS = data;
        document.getElementById('cal-status').textContent = '';
        renderCalendar();
        if (adminUnlocked) renderAdminList();
      })
      .catch(() => {
        document.getElementById('cal-status').textContent = 'Could not load events.';
      });
  }

  renderDayNames();
  loadEvents();
</script>
