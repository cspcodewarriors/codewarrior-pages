---
layout: page
title: Login
permalink: /login
search_exclude: true
show_reading_time: false
---

<div id="sip-auth-root">

<style>
  #sip-auth-root {
    font-family: "Segoe UI", Georgia, sans-serif;
    max-width: 460px;
    margin: 1.5rem auto 3rem;
    padding: 0 1rem;
    color: #1a1a2e;
  }

  /* Page heading */
  #sip-auth-root .sip-heading {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  #sip-auth-root .sip-heading h2 {
    color: #003F87;
    font-size: 1.35rem;
    margin: 0 0 0.2rem;
    border: none;
    font-weight: 700;
  }
  #sip-auth-root .sip-heading p {
    color: #5a6278;
    font-size: 0.88rem;
    margin: 0;
  }
  #sip-auth-root .sip-gold-rule {
    border: none;
    border-top: 3px solid #C8973A;
    width: 48px;
    margin: 0.65rem auto;
    opacity: 0.75;
  }

  /* Card */
  #sip-auth-root .sip-card {
    border: 2px solid #dde3ec;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 16px rgba(0,63,135,0.09);
    background: #fff;
  }

  /* Tab strip */
  #sip-auth-root .sip-tab-strip {
    display: flex !important;
    background: #f0f4fa;
    border-bottom: 2px solid #dde3ec;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  #sip-auth-root .sip-tab-btn {
    flex: 1;
    padding: 0.85rem 0;
    background: transparent !important;
    color: #5a6278 !important;
    border: none !important;
    border-radius: 0 !important;
    font-size: 0.95rem !important;
    font-weight: 600 !important;
    cursor: pointer;
    font-family: inherit !important;
    transition: background 0.15s, color 0.15s;
    outline: none;
    text-align: center;
    display: block;
    width: 100%;
    line-height: 1.2;
    box-shadow: none !important;
  }
  #sip-auth-root .sip-tab-btn.sip-active {
    background: #003F87 !important;
    color: #fff !important;
  }
  #sip-auth-root .sip-tab-btn:not(.sip-active):hover {
    background: #e8f0fb !important;
    color: #003F87 !important;
  }

  /* Panels */
  #sip-auth-root .sip-panel {
    display: none;
    padding: 1.75rem;
  }
  #sip-auth-root .sip-panel.sip-active {
    display: block;
  }

  /* Form groups */
  #sip-auth-root .sip-fg {
    display: flex;
    flex-direction: column;
    gap: 0.28rem;
    margin-bottom: 1rem;
  }
  #sip-auth-root .sip-fg label {
    font-size: 0.85rem;
    font-weight: 600;
    color: #1a1a2e;
    display: block;
  }
  #sip-auth-root .sip-fg input,
  #sip-auth-root .sip-fg select {
    padding: 0.58rem 0.8rem !important;
    border: 1.5px solid #dde3ec !important;
    border-radius: 7px !important;
    font-size: 0.93rem !important;
    font-family: inherit !important;
    color: #1a1a2e !important;
    background: #fff !important;
    width: 100% !important;
    box-sizing: border-box !important;
    transition: border-color 0.2s;
    box-shadow: none !important;
  }
  #sip-auth-root .sip-fg input:focus,
  #sip-auth-root .sip-fg select:focus {
    outline: none !important;
    border-color: #1a5fa8 !important;
    box-shadow: 0 0 0 3px rgba(26,95,168,0.1) !important;
  }
  #sip-auth-root .sip-fg .hint {
    font-size: 0.77rem;
    color: #5a6278;
  }

  /* Buttons */
  #sip-auth-root .sip-submit {
    display: block !important;
    width: 100% !important;
    padding: 0.7rem !important;
    color: #fff !important;
    border: none !important;
    border-radius: 7px !important;
    font-size: 0.97rem !important;
    font-weight: 700 !important;
    cursor: pointer !important;
    font-family: inherit !important;
    margin-top: 0.35rem !important;
    box-shadow: none !important;
    transition: opacity 0.15s;
  }
  #sip-auth-root .sip-submit.sip-blue { background: #003F87 !important; }
  #sip-auth-root .sip-submit.sip-blue:hover { background: #1a5fa8 !important; }
  #sip-auth-root .sip-submit.sip-gold { background: #C8973A !important; }
  #sip-auth-root .sip-submit.sip-gold:hover { background: #a07628 !important; }
  #sip-auth-root .sip-submit:disabled { opacity: 0.55 !important; cursor: not-allowed !important; }

  /* Status messages */
  #sip-auth-root .sip-msg {
    display: block;
    margin-top: 0.85rem;
    font-size: 0.87rem;
    text-align: center;
    min-height: 1.1em;
    color: #c0392b;
  }
  #sip-auth-root .sip-msg.ok { color: #2e7d32; }

  /* Password match hint */
  #sip-auth-root .pw-hint { font-size: 0.77rem; }
  #sip-auth-root .pw-hint.ok  { color: #2e7d32; }
  #sip-auth-root .pw-hint.err { color: #c0392b; }

  /* Divider + footer */
  #sip-auth-root .sip-hr {
    border: none;
    border-top: 1px solid #dde3ec;
    margin: 1.25rem 0 1rem;
  }
  #sip-auth-root .sip-note {
    font-size: 0.8rem;
    color: #5a6278;
    text-align: center;
    line-height: 1.5;
  }
  #sip-auth-root .sip-note a { color: #003F87; text-decoration: none; }
  #sip-auth-root .sip-note a:hover { text-decoration: underline; }
</style>

<div class="sip-heading">
  <h2>Soroptimist International of Poway</h2>
  <hr class="sip-gold-rule">
  <p>Chapter Member &amp; Administrator Portal</p>
</div>

<div class="sip-card">

  <!-- Tab strip -->
  <div class="sip-tab-strip">
    <button class="sip-tab-btn sip-active" id="tab-login" onclick="sipSwitchTab('login')">Log In</button>
    <button class="sip-tab-btn" id="tab-signup" onclick="sipSwitchTab('signup')">Sign Up</button>
  </div>

  <!-- Login panel -->
  <div class="sip-panel sip-active" id="sip-panel-login">
    <form onsubmit="sipLogin(event)">
      <div class="sip-fg">
        <label for="sip-uid">Member ID</label>
        <input type="text" id="sip-uid" placeholder="Your assigned member ID" autocomplete="username" required>
        <span class="hint">Assigned to you by your chapter administrator</span>
      </div>
      <div class="sip-fg">
        <label for="sip-pw">Password</label>
        <input type="password" id="sip-pw" placeholder="Enter your password" autocomplete="current-password" required>
      </div>
      <button type="submit" class="sip-submit sip-blue" id="login-btn">Log In</button>
      <span class="sip-msg" id="login-msg"></span>
    </form>
  </div>

  <!-- Sign up panel -->
  <div class="sip-panel" id="sip-panel-signup">
    <form onsubmit="sipSignup(event)">
      <div class="sip-fg">
        <label for="su-name">Full Name</label>
        <input type="text" id="su-name" placeholder="Your full name" required>
      </div>
      <div class="sip-fg">
        <label for="su-email">Email Address</label>
        <input type="email" id="su-email" placeholder="your@email.com" required>
      </div>
      <div class="sip-fg">
        <label for="su-uid">Member ID</label>
        <input type="text" id="su-uid" placeholder="Choose a unique ID, e.g. jsmith" required>
        <span class="hint">This will be your login username</span>
      </div>
      <div class="sip-fg">
        <label for="su-role">Role</label>
        <select id="su-role" required>
          <option value="" disabled selected>Select your role</option>
          <option>Chapter Member</option>
          <option>Chapter Officer</option>
          <option>Program Volunteer</option>
        </select>
      </div>
      <div class="sip-fg">
        <label for="su-pw">Password</label>
        <input type="password" id="su-pw" placeholder="At least 8 characters" required>
      </div>
      <div class="sip-fg">
        <label for="su-pw2">Confirm Password</label>
        <input type="password" id="su-pw2" placeholder="Re-enter your password" required>
        <span class="pw-hint" id="pw-match-msg"></span>
      </div>
      <button type="submit" class="sip-submit sip-gold" id="signup-btn">Sign Up</button>
      <span class="sip-msg" id="signup-msg"></span>
      <hr class="sip-hr">
      <p class="sip-note">
        New accounts start with standard access. An administrator can upgrade your role after review.
        Questions? <a href="/sip/contact">Contact the chapter.</a>
      </p>
    </form>
  </div>

</div>
</div>

<script type="module">
  import { login, pythonURI } from '{{site.baseurl}}/assets/js/api/config.js';

  // ── Tab switching ────────────────────────────────────────────
  window.sipSwitchTab = function(tab) {
    ['login','signup'].forEach(t => {
      document.getElementById(`tab-${t}`).classList.toggle('sip-active', t === tab);
      document.getElementById(`sip-panel-${t}`).classList.toggle('sip-active', t === tab);
    });
  };

  // ── Redirect target ──────────────────────────────────────────
  function getNextUrl() {
    return new URLSearchParams(window.location.search).get('next') || '/sip/contact';
  }

  // ── Login ────────────────────────────────────────────────────
  window.sipLogin = function(e) {
    e.preventDefault();
    const btn = document.getElementById('login-btn');
    const msg = document.getElementById('login-msg');
    btn.disabled = true;
    btn.textContent = 'Logging in...';
    msg.textContent = '';
    msg.className = 'sip-msg';

    login({
      URL: `${pythonURI}/api/authenticate`,
      method: 'POST',
      cache: 'no-cache',
      body: {
        uid: document.getElementById('sip-uid').value,
        password: document.getElementById('sip-pw').value,
      },
      callback: function() {
        msg.textContent = 'Login successful. Redirecting...';
        msg.className = 'sip-msg ok';
        setTimeout(() => { window.location.href = getNextUrl(); }, 800);
      },
      message: 'login-msg',
    });

    setTimeout(() => {
      if (btn.disabled) {
        btn.disabled = false;
        btn.textContent = 'Log In';
        if (!msg.classList.contains('ok'))
          msg.textContent = 'Invalid member ID or password.';
      }
    }, 4000);
  };

  // ── Sign up ──────────────────────────────────────────────────
  window.sipSignup = function(e) {
    e.preventDefault();
    const pw  = document.getElementById('su-pw').value;
    const pw2 = document.getElementById('su-pw2').value;
    const msg = document.getElementById('signup-msg');
    const btn = document.getElementById('signup-btn');

    if (pw.length < 8) {
      msg.textContent = 'Password must be at least 8 characters.';
      msg.className = 'sip-msg';
      return;
    }
    if (pw !== pw2) {
      msg.textContent = 'Passwords do not match.';
      msg.className = 'sip-msg';
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Creating account...';
    msg.textContent = '';
    msg.className = 'sip-msg';

    fetch(`${pythonURI}/api/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name:     document.getElementById('su-name').value,
        uid:      document.getElementById('su-uid').value,
        email:    document.getElementById('su-email').value,
        password: pw,
      }),
    })
    .then(r => r.ok ? r.json() : r.json().then(d => Promise.reject(d.message || 'Sign up failed.')))
    .then(() => {
      // Store the MEMBER ID (uid) — this is what the garden uses as the display name
      const uid = document.getElementById('su-uid').value.trim();
      sessionStorage.setItem('sip_new_user_uid', uid);
  
      // Redirect to the community garden
      window.location.href = '/sip/garden/';
    })
      .catch(err => {
      msg.textContent = typeof err === 'string' ? err : 'Sign up failed. That member ID may already be taken.';
      msg.className = 'sip-msg';
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = 'Sign Up';
    });
  };

  // ── Password match indicator ─────────────────────────────────
  document.getElementById('su-pw2').addEventListener('input', function() {
    const el = document.getElementById('pw-match-msg');
    if (!this.value) { el.textContent = ''; el.className = 'pw-hint'; return; }
    const match = this.value === document.getElementById('su-pw').value;
    el.textContent = match ? 'Passwords match' : 'Passwords do not match';
    el.className = 'pw-hint ' + (match ? 'ok' : 'err');
  });
</script>
