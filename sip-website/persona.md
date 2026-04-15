---
layout: opencs
title: Find Your Program — Soroptimist International of Poway
permalink: /sip/persona/
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap');

  * { box-sizing: border-box; }

  .quiz-page {
    font-family: 'Jost', sans-serif;
    max-width: 780px;
    margin: 0 auto;
    padding: 48px 24px 80px;
    color: #d0ccc8;
  }

  .sip-back {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em;
    color: #555; text-decoration: none; margin-bottom: 48px; transition: color 0.15s;
  }
  .sip-back:hover { color: #aaa; }

  /* ── Intro ───────────────────────────── */
  #intro-section { animation: fadeUp 0.5s ease both; }
  .intro-eyebrow { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.14em; color: #e8836a; margin-bottom: 12px; }
  .intro-title   { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem,5vw,2.8rem); font-weight: 600; color: #f5f0eb; margin-bottom: 14px; line-height: 1.2; }
  .intro-body    { font-size: 0.95rem; color: #a0a0a0; line-height: 1.85; margin-bottom: 32px; max-width: 580px; }

  /* ── Choice Cards ────────────────────── */
  .choice-row {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 14px; margin-bottom: 28px;
  }
  @media (max-width: 520px) { .choice-row { grid-template-columns: 1fr; } }
  .choice-card {
    background: rgba(255,255,255,0.02); border: 1.5px solid #222;
    border-radius: 12px; padding: 24px 20px; cursor: pointer; text-align: left;
    transition: border-color 0.2s, background 0.2s, transform 0.15s;
  }
  .choice-card:hover { border-color: rgba(232,131,106,0.5); background: rgba(232,131,106,0.04); transform: translateY(-2px); }
  .choice-card.selected { border-color: #e8836a; background: rgba(232,131,106,0.08); }
  .choice-card-icon  { font-size: 1.5rem; display: block; margin-bottom: 12px; }
  .choice-card-title { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 700; color: #f5f0eb; margin-bottom: 8px; }
  .choice-card-desc  { font-size: 0.82rem; color: #666; line-height: 1.65; }

  .intro-cta-btn {
    font-family: 'Jost', sans-serif; font-size: 0.88rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.1em; padding: 16px 40px;
    border-radius: 4px; border: none; cursor: pointer;
    background: #e8836a; color: #111;
    transition: background 0.15s, transform 0.1s, box-shadow 0.15s, opacity 0.15s;
    box-shadow: 0 4px 20px rgba(232,131,106,0.3);
  }
  .intro-cta-btn:hover:not(:disabled) { background: #f09a7e; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(232,131,106,0.4); }
  .intro-cta-btn:disabled { opacity: 0.35; cursor: default; box-shadow: none; }

  /* ── Browse Programs ─────────────────── */
  #browse-section { display: none; animation: fadeUp 0.4s ease both; }
  .browse-back {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 0.74rem; text-transform: uppercase; letter-spacing: 0.1em;
    color: #555; background: none; border: none; cursor: pointer;
    margin-bottom: 36px; padding: 0; transition: color 0.15s;
  }
  .browse-back:hover { color: #aaa; }
  .browse-eyebrow { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.14em; color: #e8836a; margin-bottom: 12px; }
  .browse-title   { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,4vw,2.4rem); font-weight: 600; color: #f5f0eb; margin-bottom: 10px; line-height: 1.2; }
  .browse-sub     { font-size: 0.9rem; color: #888; line-height: 1.8; margin-bottom: 32px; max-width: 540px; }

  .prog-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 12px;
  }
  .prog-card {
    background: rgba(255,255,255,0.02); border: 1.5px solid #222;
    border-radius: 12px; padding: 22px 18px; cursor: pointer;
    transition: border-color 0.18s, transform 0.15s, box-shadow 0.15s;
    text-decoration: none; display: block; color: inherit;
    animation: revealUp 0.4s ease both;
  }
  .prog-card:nth-child(1){ animation-delay: 0.05s; }
  .prog-card:nth-child(2){ animation-delay: 0.12s; }
  .prog-card:nth-child(3){ animation-delay: 0.19s; }
  .prog-card:nth-child(4){ animation-delay: 0.26s; }
  .prog-card:nth-child(5){ animation-delay: 0.33s; }
  .prog-card:nth-child(6){ animation-delay: 0.40s; }
  .prog-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(0,0,0,0.4); text-decoration: none; color: inherit; }
  .prog-card-icon    { font-size: 1.5rem; display: block; margin-bottom: 10px; }
  .prog-card-eyebrow { font-size: 0.66rem; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 6px; }
  .prog-card-title   { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 700; color: #f5f0eb; margin-bottom: 8px; }
  .prog-card-desc    { font-size: 0.79rem; color: #777; line-height: 1.6; margin-bottom: 14px; }
  .persona-pill {
    display: inline-block; font-size: 0.66rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.08em;
    padding: 3px 10px; border-radius: 20px; margin-bottom: 10px;
  }
  .prog-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 12px; }
  .prog-tag  { font-size: 0.66rem; padding: 2px 8px; border-radius: 12px; background: rgba(255,255,255,0.05); color: #555; }
  .prog-learn { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }

  /* ── Progress ────────────────────────── */
  .progress-wrap { margin-bottom: 36px; }
  .progress-steps { display: flex; gap: 8px; align-items: center; margin-bottom: 10px; flex-wrap: wrap; }
  .step-dot {
    width: 28px; height: 28px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.68rem; font-weight: 700;
    border: 1.5px solid #2a2a2a; color: #444;
    transition: all 0.3s ease; flex-shrink: 0;
  }
  .step-dot.active { border-color: #e8836a; color: #e8836a; background: rgba(232,131,106,0.1); box-shadow: 0 0 0 3px rgba(232,131,106,0.15); }
  .step-dot.done   { border-color: #e8836a; background: #e8836a; color: #111; }
  .progress-bar-track { height: 2px; background: #1a1a1a; border-radius: 2px; }
  .progress-bar-fill  { height: 2px; background: #e8836a; border-radius: 2px; transition: width 0.5s cubic-bezier(0.4,0,0.2,1); }

  /* ── Shared slide ────────────────────── */
  .question-slide { animation: slideIn 0.38s cubic-bezier(0.4,0,0.2,1) both; }
  .question-text  { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.4rem,3.2vw,1.9rem); font-weight: 600; color: #f5f0eb; line-height: 1.35; margin-bottom: 10px; }
  .question-sub   { font-size: 0.88rem; color: #888; line-height: 1.75; margin-bottom: 28px; }
  .round-tag {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 0.66rem; text-transform: uppercase; letter-spacing: 0.13em;
    color: #e8836a; background: rgba(232,131,106,0.1);
    border: 1px solid rgba(232,131,106,0.2); border-radius: 20px;
    padding: 3px 12px; margin-bottom: 14px;
  }

  /* ── Nav ─────────────────────────────── */
  .quiz-nav { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: 28px; }
  .quiz-btn {
    font-family: 'Jost', sans-serif; font-size: 0.78rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.1em;
    padding: 11px 24px; border-radius: 4px; cursor: pointer;
    transition: background 0.15s, color 0.15s, transform 0.1s, box-shadow 0.15s;
  }
  .quiz-btn-back { background: transparent; color: #555; border: 1px solid #222; }
  .quiz-btn-back:hover { color: #aaa; border-color: #444; }
  .quiz-btn-next {
    background: #e8836a; color: #111; border: none;
    box-shadow: 0 4px 16px rgba(232,131,106,0.25);
  }
  .quiz-btn-next:hover { background: #f09a7e; transform: translateY(-1px); box-shadow: 0 6px 22px rgba(232,131,106,0.35); }

  /* ── SLIDER ─────────────────────────── */
  .slider-poles {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 12px; margin-bottom: 24px;
  }
  @media (max-width: 480px) { .slider-poles { grid-template-columns: 1fr; } }
  .pole-card {
    background: rgba(255,255,255,0.02); border: 1.5px solid #222;
    border-radius: 12px; padding: 16px; text-align: center;
    font-size: 0.82rem; color: #666; line-height: 1.55;
    transition: border-color 0.25s, background 0.25s, color 0.25s, transform 0.2s;
  }
  .pole-card.pole-lit {
    border-color: #e8836a; color: #e8836a;
    background: rgba(232,131,106,0.07); transform: translateY(-2px);
  }
  .pole-icon { font-size: 1.75rem; display: block; margin-bottom: 8px; }

  input[type=range].sip-slider {
    -webkit-appearance: none; appearance: none;
    width: 100%; height: 4px; border-radius: 4px;
    background: #2a2a2a; outline: none; cursor: grab; display: block;
  }
  input[type=range].sip-slider::-webkit-slider-thumb {
    -webkit-appearance: none; width: 36px; height: 36px; border-radius: 50%;
    background: #e8836a; border: 3px solid #111;
    box-shadow: 0 0 0 4px rgba(232,131,106,0.2), 0 2px 10px rgba(0,0,0,0.5);
    cursor: grab; transition: transform 0.15s, box-shadow 0.15s;
  }
  input[type=range].sip-slider:active { cursor: grabbing; }
  input[type=range].sip-slider:active::-webkit-slider-thumb {
    transform: scale(1.2);
    box-shadow: 0 0 0 8px rgba(232,131,106,0.13), 0 4px 18px rgba(0,0,0,0.5);
    cursor: grabbing;
  }
  input[type=range].sip-slider::-moz-range-thumb {
    width: 36px; height: 36px; border-radius: 50%;
    background: #e8836a; border: 3px solid #111; cursor: grab;
  }
  .slider-track-wrap { padding: 10px 0 6px; }
  .slider-reading {
    text-align: center; font-size: 0.78rem; color: #555;
    margin-top: 10px; min-height: 1.3em; font-style: italic;
    transition: color 0.2s;
  }
  .slider-reading.leaning { color: rgba(232,131,106,0.85); }

  /* ── BUCKET TOSS ─────────────────────── */
  .mine-zone {
    border: 2px dashed #282828; border-radius: 14px;
    padding: 16px 16px 10px; margin-bottom: 18px;
    min-height: 100px; transition: border-color 0.2s, background 0.2s;
  }
  .mine-zone.dz-hover  { border-color: #e8836a; background: rgba(232,131,106,0.05); }
  .mine-zone.dz-filled { border-color: rgba(232,131,106,0.3); }
  .zone-label {
    font-size: 0.66rem; text-transform: uppercase; letter-spacing: 0.14em;
    color: #e8836a; margin-bottom: 10px;
  }
  .zone-empty-msg { font-size: 0.8rem; color: #2c2c2c; font-style: italic; text-align: center; padding: 12px 0 6px; }
  .zone-chips { display: flex; flex-direction: column; gap: 8px; }

  .chip-pool { display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px; }
  .b-chip {
    display: flex; align-items: flex-start; gap: 12px;
    background: rgba(255,255,255,0.02); border: 1.5px solid #222;
    border-radius: 10px; padding: 12px 14px;
    cursor: grab; user-select: none; -webkit-user-select: none;
    font-size: 0.845rem; color: #777; line-height: 1.55;
    transition: border-color 0.18s, background 0.18s, color 0.18s, transform 0.15s, opacity 0.2s;
  }
  .b-chip:hover { border-color: rgba(232,131,106,0.4); color: #bbb; }
  .b-chip.chip-mine { border-color: #e8836a; background: rgba(232,131,106,0.08); color: #f0ece6; }
  .b-chip.chip-drag { opacity: 0.28; transform: scale(0.97); cursor: grabbing; }
  .b-icon { font-size: 1.25rem; flex-shrink: 0; padding-top: 2px; }
  .b-text { flex: 1; }
  .b-tick { flex-shrink: 0; color: #e8836a; font-size: 0.9rem; opacity: 0; transition: opacity 0.18s; padding-top: 3px; }
  .b-chip.chip-mine .b-tick { opacity: 1; }
  .bucket-tap-hint { font-size: 0.74rem; color: #333; text-align: center; margin-top: 8px; font-style: italic; }

  /* ── CARD SORT ────────────────────────── */
  .rank-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px; }
  .r-card {
    display: flex; align-items: center; gap: 14px;
    background: rgba(255,255,255,0.02); border: 1.5px solid #222;
    border-radius: 12px; padding: 13px 15px;
    cursor: grab; user-select: none; -webkit-user-select: none;
    transition: border-color 0.15s, background 0.15s, transform 0.12s;
    position: relative;
  }
  .r-card:hover { border-color: rgba(232,131,106,0.3); transform: translateX(3px); }
  .r-card.r-dragging { opacity: 0.22; transform: scale(0.98); }
  .r-card.r-above { box-shadow: 0 -3px 0 0 #e8836a; }
  .r-card.r-below { box-shadow: 0 3px 0 0 #e8836a; }
  .r-num {
    min-width: 30px; height: 30px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.7rem; font-weight: 700; flex-shrink: 0;
    border: 1.5px solid #2a2a2a; color: #555;
    transition: all 0.25s;
  }
  .r-icon { font-size: 1.25rem; flex-shrink: 0; }
  .r-text { flex: 1; font-size: 0.845rem; color: #777; line-height: 1.55; }
  .r-arrows { display: flex; flex-direction: column; gap: 1px; flex-shrink: 0; }
  .r-arrow {
    background: none; border: none; color: #2e2e2e; cursor: pointer;
    font-size: 0.72rem; padding: 3px 5px; transition: color 0.15s; line-height: 1;
    font-family: 'Jost', sans-serif;
  }
  .r-arrow:hover { color: #e8836a; }
  .rk-1 .r-num { border-color: #e8836a; color: #e8836a; background: rgba(232,131,106,0.12); }
  .rk-1 .r-text { color: #f0ece6; }
  .rk-2 .r-num { border-color: rgba(232,131,106,0.65); color: rgba(232,131,106,0.65); }
  .rk-2 .r-text { color: #d8d4d0; }
  .rk-3 .r-num { border-color: rgba(232,131,106,0.4); color: rgba(232,131,106,0.4); }
  .rk-3 .r-text { color: #b4b0ac; }

  /* ── Results ────────────────────────── */
  #results-section { display: none; }
  .results-eyebrow { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.14em; color: #e8836a; margin-bottom: 12px; }
  .results-title   { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem,5vw,2.8rem); font-weight: 600; color: #f5f0eb; margin-bottom: 10px; }
  .results-intro   { font-size: 0.92rem; color: #888; line-height: 1.8; margin-bottom: 36px; max-width: 580px; }

  .persona-reveal { animation: revealUp 0.55s cubic-bezier(0.4,0,0.2,1) 0.1s both; }
  .program-reveal  { animation: revealUp 0.55s cubic-bezier(0.4,0,0.2,1) 0.3s both; }
  .others-reveal   { animation: revealUp 0.55s cubic-bezier(0.4,0,0.2,1) 0.5s both; }

  .persona-result-card { border-radius: 12px; padding: 30px; margin-bottom: 32px; position: relative; overflow: hidden; }
  .persona-result-card::after { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0.08); pointer-events: none; }
  .persona-result-label { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.14em; color: rgba(0,0,0,0.5); margin-bottom: 4px; }
  .persona-result-title { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 700; color: #111; margin-bottom: 10px; }
  .persona-result-desc  { font-size: 0.9rem; color: #1a1a1a; line-height: 1.8; margin-bottom: 14px; opacity: 0.85; }
  .persona-archetypes   { display: flex; flex-wrap: wrap; gap: 6px; }
  .archetype-tag { font-size: 0.68rem; padding: 3px 10px; border-radius: 20px; background: rgba(0,0,0,0.12); color: #222; }

  .section-label { font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.12em; color: #555; margin-bottom: 14px; }

  .top-program-card {
    border-radius: 12px; padding: 28px 32px; margin-bottom: 12px;
    text-decoration: none; display: block; color: inherit;
    transition: transform 0.15s, box-shadow 0.2s;
  }
  .top-program-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.4); text-decoration: none; color: inherit; }
  .top-program-match   { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.14em; color: rgba(0,0,0,0.45); margin-bottom: 6px; }
  .top-program-eyebrow { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(0,0,0,0.55); margin-bottom: 8px; }
  .top-program-title   { font-family: 'Cormorant Garamond', serif; font-size: 1.9rem; font-weight: 700; color: #111; margin-bottom: 10px; }
  .top-program-desc    { font-size: 0.9rem; color: #1a1a1a; line-height: 1.8; margin-bottom: 18px; opacity: 0.85; }
  .top-program-cta     { display: inline-block; background: rgba(0,0,0,0.14); color: #111; font-size: 0.74rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 10px 20px; border-radius: 4px; }

  .other-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; margin-bottom: 40px; }
  .other-card { border: 1px solid #2a2a2a; border-radius: 10px; padding: 18px; text-decoration: none; display: block; color: inherit; transition: border-color 0.15s, transform 0.12s; animation: revealUp 0.4s ease both; }
  .other-card:nth-child(1) { animation-delay: 0.55s; }
  .other-card:nth-child(2) { animation-delay: 0.65s; }
  .other-card:nth-child(3) { animation-delay: 0.75s; }
  .other-card:nth-child(4) { animation-delay: 0.85s; }
  .other-card:nth-child(5) { animation-delay: 0.95s; }
  .other-card:hover { transform: translateY(-2px); text-decoration: none; color: inherit; }
  .other-card-icon    { font-size: 1.4rem; margin-bottom: 8px; display: block; }
  .other-card-eyebrow { font-size: 0.66rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px; }
  .other-card-title   { font-family: 'Cormorant Garamond', serif; font-size: 1.05rem; color: #f0ece6; margin-bottom: 6px; }
  .other-card-desc    { font-size: 0.78rem; color: #666; line-height: 1.6; }

  .retake-btn { font-family: 'Jost', sans-serif; font-size: 0.76rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; background: transparent; border: 1px solid #2a2a2a; color: #555; padding: 10px 22px; border-radius: 4px; cursor: pointer; transition: all 0.15s; margin-top: 8px; }
  .retake-btn:hover { border-color: #555; color: #aaa; }
  .save-notice { font-size: 0.8rem; color: #5ecb8a; margin-top: 14px; min-height: 1.2em; }

  /* ── Keyframes ──────────────────────── */
  @keyframes fadeUp  { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
  @keyframes slideIn { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: none; } }
  @keyframes revealUp{ from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
</style>

<div class="quiz-page">
  <a href="{{ site.baseurl }}/" class="sip-back">← Back to Programs</a>

  <!-- ── Intro / Choice ────────────────────── -->
  <div id="intro-section">
    <p class="intro-eyebrow">We're Here to Help</p>
    <h1 class="intro-title">Let's find the right support for you.</h1>
    <p class="intro-body">Soroptimist International of Poway offers six programs serving women and communities in different ways. How would you like to find yours?</p>

    <div class="choice-row">
      <div class="choice-card" id="choice-browse" onclick="selectChoice('browse')">
        <span class="choice-card-icon">🗂</span>
        <div class="choice-card-title">Browse Programs</div>
        <div class="choice-card-desc">See all six programs and their personas side by side — pick the one that speaks to you.</div>
      </div>
      <div class="choice-card" id="choice-quiz" onclick="selectChoice('quiz')">
        <span class="choice-card-icon">✦</span>
        <div class="choice-card-title">Take the Survey</div>
        <div class="choice-card-desc">Answer a few honest questions and we'll match you with the best-fit program for your situation.</div>
      </div>
    </div>

    <button class="intro-cta-btn" id="intro-cta" disabled onclick="proceedFromIntro()">Continue →</button>
  </div>

  <!-- ── Browse Programs ───────────────────── -->
  <div id="browse-section">
    <button class="browse-back" onclick="goBackToIntro()">← Back</button>
    <p class="browse-eyebrow">All Programs</p>
    <h2 style="font-family:'Cormorant Garamond',serif;font-size:clamp(1.8rem,4vw,2.4rem);font-weight:600;color:#f5f0eb;margin-bottom:10px;line-height:1.2;">Choose the program that fits.</h2>
    <p class="browse-sub">Each program is designed for a different situation and goal. Read through and click the one that resonates most with where you are right now.</p>
    <div class="prog-grid" id="prog-grid"></div>
  </div>

  <!-- ── Survey ────────────────────────────── -->
  <div id="game-section" style="display:none;">
    <div class="progress-wrap">
      <div class="progress-steps" id="progress-steps"></div>
      <div class="progress-bar-track"><div class="progress-bar-fill" id="progress-bar" style="width:0%;"></div></div>
    </div>
    <div id="game-area"></div>
    <div class="quiz-nav">
      <button class="quiz-btn quiz-btn-back" id="btn-back" style="visibility:hidden;" onclick="window._gameBack()">← Back</button>
      <span id="nav-hint" style="font-size:0.74rem;color:#444;text-align:center;flex:1;"></span>
      <button class="quiz-btn quiz-btn-next" id="btn-next" onclick="window._gameNext()">Next →</button>
    </div>
  </div>

  <!-- ── Results ────────────────────────────── -->
  <div id="results-section"></div>
</div>

<script type="module">
import { pythonURI, fetchOptions, baseurl } from '{{ site.baseurl }}/assets/js/api/config.js';

// ── Programs ──────────────────────────────────────────────────────────────────
const PROGRAMS = [
  { id: 'transitional-housing', title: 'Transitional Housing', eyebrow: 'Community Support',      desc: 'Emergency shelter, housing resources, and a clear path toward stability for families in crisis.',                                                              color: '#e8836a', url: '/sip/transitional-housing/',  icon: '🏠' },
  { id: 'live-your-dream',      title: 'Live Your Dream',       eyebrow: 'Scholarship Award',       desc: 'Financial awards for women who are the primary supporters of their families — helping them invest in education and build a better future.',                  color: '#6ab0e8', url: '/sip/live-your-dream/',       icon: '🌟' },
  { id: 'dream-it-be-it',       title: 'Dream It, Be It',       eyebrow: 'Career Support',          desc: 'Career development and mentorship for high school girls — exposing them to professional women and real pathways to the futures they imagine.',                color: '#d4b84a', url: '/sip/dreamit-beit/',           icon: '✨' },
  { id: 'stat',                 title: 'STAT!',                 eyebrow: 'Stop Trafficking',        desc: 'Education, awareness, and community action to identify and prevent human trafficking and protect the most vulnerable people around us.',                     color: '#e86a6a', url: '/sip/stat/',                   icon: '🛡️' },
  { id: 'abraxas-scholarship',  title: 'Abraxas Scholarship',   eyebrow: 'Scholarship Award',       desc: 'Recognizing students who combine strong academics with meaningful community service — because excellence and giving back go hand in hand.',                  color: '#5ecb8a', url: '/sip/abraxas-scholarship/',   icon: '🎓' },
  { id: 'colegio-la-esperanza', title: 'Colegio La Esperanza',  eyebrow: 'International Education', desc: 'Funding schools, teachers, and materials in underserved Mexican communities — because no child\'s future should be limited by where they were born.',        color: '#b07de8', url: '/sip/colegio-la-esparanza/',  icon: '🌎' },
];

// ── Personas ──────────────────────────────────────────────────────────────────
const PERSONAS = {
  rosa:   { title: 'The Breadwinner', color: '#6ab0e8', desc: 'You carry your family. You work hard, sacrifice daily, and keep going — even when there\'s little left for you. You deserve the same support you give to everyone else.', archetypes: ['Resilient', 'Determined', 'Provider'] },
  haven:  { title: 'The Seeker',      color: '#e8836a', desc: 'You are navigating instability with courage. You are not defined by your crisis — you are defined by your will to move through it and build something better.', archetypes: ['Courageous', 'Resourceful', 'Survivor'] },
  luna:   { title: 'The Dreamer',     color: '#d4b84a', desc: 'You have ambition and drive, but you\'ve never had a mentor who believed in you first. You just need someone to open a door — and you will walk through it.', archetypes: ['Ambitious', 'Curious', 'Emerging Leader'] },
  merit:  { title: 'The Achiever',    color: '#5ecb8a', desc: 'You show up — for your studies, your community, and the people around you. You\'ve earned recognition. Let the right opportunity finally find you.', archetypes: ['Disciplined', 'Service-oriented', 'Scholar'] },
  voice:  { title: 'The Advocate',    color: '#e86a6a', desc: 'You have seen injustice and you refuse to stay silent. You know that awareness is the first weapon — and you are ready to use it.', archetypes: ['Fierce', 'Compassionate', 'Protector'] },
  solana: { title: 'The Bridge',      color: '#b07de8', desc: 'You carry two worlds inside you. You believe education is the most powerful gift — and that geography should never determine a child\'s future.', archetypes: ['Empathetic', 'Cross-cultural', 'Connector'] },
};

// Map program id → persona alias for the browse grid
const PROGRAM_PERSONA = {
  'transitional-housing': 'haven',
  'live-your-dream':      'rosa',
  'dream-it-be-it':       'luna',
  'stat':                 'voice',
  'abraxas-scholarship':  'merit',
  'colegio-la-esperanza': 'solana',
};

// ── Game Data ─────────────────────────────────────────────────────────────────
const SLIDERS = [
  {
    question: 'Right now, what feels most urgent?',
    leftIcon: '🏠', rightIcon: '🎓',
    leftLabel: 'Safe, stable housing for my family',
    rightLabel: 'Financial support to pursue my education',
    leftScores:  { haven: 5, 'transitional-housing': 5 },
    rightScores: { rosa: 5, 'live-your-dream': 5 },
    hint: 'Drag toward whichever end feels truer',
  },
  {
    question: 'Which path fits where you are in life?',
    leftIcon: '✨', rightIcon: '🎓',
    leftLabel: "I'm a young woman figuring out my career path",
    rightLabel: 'I work hard in school and serve my community',
    leftScores:  { luna: 5, 'dream-it-be-it': 5 },
    rightScores: { merit: 5, 'abraxas-scholarship': 5 },
    hint: 'Neither is wrong — be honest',
  },
  {
    question: 'What cause speaks to you most deeply?',
    leftIcon: '🛡️', rightIcon: '🌎',
    leftLabel: 'Stopping trafficking and protecting the vulnerable',
    rightLabel: 'Bringing education to underserved communities abroad',
    leftScores:  { voice: 5, stat: 5 },
    rightScores: { solana: 5, 'colegio-la-esperanza': 5 },
    hint: 'Where does your heart pull you?',
  },
];

const BUCKET_ITEMS = [
  { id: 'b1', icon: '💸', text: 'Financial support to pursue education or job training without sacrificing what my family needs.', scores: { rosa: 3, 'live-your-dream': 4 } },
  { id: 'b2', icon: '🏘️', text: 'A safe, stable home where my family can breathe and rebuild.', scores: { haven: 3, 'transitional-housing': 4 } },
  { id: 'b3', icon: '🌹', text: 'A role model — someone in a real career who looks like me and believes I can get there too.', scores: { luna: 3, 'dream-it-be-it': 4 } },
  { id: 'b4', icon: '🎖️', text: 'Acknowledgment — I want my hard work and sacrifice to be truly seen and rewarded.', scores: { merit: 3, 'abraxas-scholarship': 4 } },
  { id: 'b5', icon: '🔍', text: 'Knowledge and community support to protect people from exploitation and trafficking.', scores: { voice: 3, stat: 4 } },
  { id: 'b6', icon: '🎒', text: 'A way to bring education and opportunity to children who have been left behind.', scores: { solana: 3, 'colegio-la-esperanza': 4 } },
];

const SORT_ITEMS = [
  { id: 's1', icon: '📈', text: 'I am enrolled in a program moving my career forward and my family is more financially stable.', scores: { rosa: 3, 'live-your-dream': 4 } },
  { id: 's2', icon: '🌅', text: 'My family has a safe, stable home and we are no longer living in fear of what tomorrow looks like.', scores: { haven: 3, 'transitional-housing': 4 } },
  { id: 's3', icon: '💡', text: 'I have met professional women who inspired me and I have a clearer picture of the career I am working toward.', scores: { luna: 3, 'dream-it-be-it': 4 } },
  { id: 's4', icon: '🏅', text: 'My hard work has been recognized and I am using a scholarship to get closer to my goals.', scores: { merit: 3, 'abraxas-scholarship': 4 } },
  { id: 's5', icon: '🕊️', text: 'More people in my community know the signs of trafficking — and at least one person is safer because of it.', scores: { voice: 3, stat: 4 } },
  { id: 's6', icon: '📗', text: 'Children who had no school now have one — and the ripple effect of that education has already begun.', scores: { solana: 3, 'colegio-la-esperanza': 4 } },
];

// ── State ─────────────────────────────────────────────────────────────────────
let sliderValues  = [50, 50, 50];
let currentSlider = 0;
let bucketMine    = new Set();
let sortOrder     = SORT_ITEMS.map(s => s.id);
let phase         = 'sliders';
let dragSrcId     = null;
const TOTAL_STEPS = 5;

function stepIndex() {
  if (phase === 'sliders') return currentSlider;
  if (phase === 'buckets') return 3;
  return 4;
}

// ── Intro / Choice ────────────────────────────────────────────────────────────
let introChoice = null;

window.selectChoice = function(val) {
  introChoice = val;
  document.getElementById('choice-browse').classList.toggle('selected', val === 'browse');
  document.getElementById('choice-quiz').classList.toggle('selected', val === 'quiz');
  const btn = document.getElementById('intro-cta');
  btn.disabled = false;
  btn.textContent = val === 'browse' ? 'Browse Programs →' : 'Start Survey →';
};

window.proceedFromIntro = function() {
  if (!introChoice) return;
  document.getElementById('intro-section').style.display = 'none';
  if (introChoice === 'browse') {
    showBrowse();
  } else {
    startQuiz();
  }
};

window.goBackToIntro = function() {
  document.getElementById('browse-section').style.display = 'none';
  document.getElementById('intro-section').style.display  = 'block';
};

// ── Browse Programs ───────────────────────────────────────────────────────────
function showBrowse() {
  const section = document.getElementById('browse-section');
  section.style.display = 'block';
  const grid = document.getElementById('prog-grid');
  grid.innerHTML = PROGRAMS.map(p => {
    const alias   = PROGRAM_PERSONA[p.id];
    const persona = PERSONAS[alias];
    const pillBg  = p.color + '22';
    const tags    = persona.archetypes.map(t => `<span class="prog-tag">${t}</span>`).join('');
    return `
      <a href="${baseurl}${p.url}" class="prog-card" style="border-color:${p.color}44;">
        <span class="prog-card-icon">${p.icon}</span>
        <div class="prog-card-eyebrow" style="color:${p.color};">${p.eyebrow}</div>
        <div class="prog-card-title">${p.title}</div>
        <div class="prog-card-desc">${p.desc}</div>
        <div class="persona-pill" style="background:${pillBg};color:${p.color};">You are ${persona.title}</div>
        <div style="font-size:0.78rem;color:#888;line-height:1.65;margin-bottom:10px;">${persona.desc}</div>
        <div class="prog-tags">${tags}</div>
        <div class="prog-learn" style="color:${p.color};margin-top:12px;">Learn more →</div>
      </a>`;
  }).join('');
}

// ── Survey Boot ───────────────────────────────────────────────────────────────
window.startQuiz = function () {
  document.getElementById('intro-section').style.display  = 'none';
  document.getElementById('browse-section').style.display = 'none';
  document.getElementById('game-section').style.display   = 'block';
  phase = 'sliders'; currentSlider = 0;
  buildDots();
  renderSlider();
};

function buildDots() {
  document.getElementById('progress-steps').innerHTML =
    Array.from({ length: TOTAL_STEPS }, (_, i) =>
      `<div class="step-dot" id="dot-${i}">${i + 1}</div>`
    ).join('');
}

function syncProgress() {
  const step = stepIndex();
  for (let i = 0; i < TOTAL_STEPS; i++) {
    const d = document.getElementById(`dot-${i}`);
    d.className = 'step-dot' + (i < step ? ' done' : i === step ? ' active' : '');
  }
  document.getElementById('progress-bar').style.width =
    Math.round(((step + 1) / TOTAL_STEPS) * 100) + '%';
  document.getElementById('btn-back').style.visibility =
    (phase === 'sliders' && currentSlider === 0) ? 'hidden' : 'visible';
}

// ── SLIDERS ───────────────────────────────────────────────────────────────────
function renderSlider() {
  phase = 'sliders';
  syncProgress();
  const s   = SLIDERS[currentSlider];
  const val = sliderValues[currentSlider];
  document.getElementById('nav-hint').textContent = s.hint;
  document.getElementById('btn-next').textContent = 'Next →';

  document.getElementById('game-area').innerHTML = `
    <div class="question-slide">
      <div class="round-tag">⟵⟶ Drag the Slider · ${currentSlider + 1} of 3</div>
      <h2 class="question-text">${s.question}</h2>
      <div class="slider-poles">
        <div class="pole-card ${val < 50 ? 'pole-lit' : ''}" id="pole-left">
          <span class="pole-icon">${s.leftIcon}</span>
          ${s.leftLabel}
        </div>
        <div class="pole-card ${val > 50 ? 'pole-lit' : ''}" id="pole-right">
          <span class="pole-icon">${s.rightIcon}</span>
          ${s.rightLabel}
        </div>
      </div>
      <div class="slider-track-wrap">
        <input type="range" class="sip-slider" id="main-slider"
               min="0" max="100" value="${val}"
               oninput="window._sliderMove(this.value)">
      </div>
      <div class="slider-reading ${val !== 50 ? 'leaning' : ''}" id="slider-read">
        ${sliderReadText(val)}
      </div>
    </div>`;

  updateSliderTrack(val);
}

window._sliderMove = function (raw) {
  const val = parseInt(raw);
  sliderValues[currentSlider] = val;
  updateSliderTrack(val);
  const rd = document.getElementById('slider-read');
  rd.textContent = sliderReadText(val);
  rd.className   = 'slider-reading' + (val !== 50 ? ' leaning' : '');
  document.getElementById('pole-left').classList.toggle('pole-lit',  val < 50);
  document.getElementById('pole-right').classList.toggle('pole-lit', val > 50);
};

function updateSliderTrack(val) {
  const el = document.getElementById('main-slider');
  if (el) el.style.background =
    `linear-gradient(to right, #e8836a ${val}%, #2a2a2a ${val}%)`;
}

function sliderReadText(val) {
  if (val <= 10) return '← Strongly left';
  if (val <= 30) return '← Leaning left';
  if (val <= 44) return '← Slightly left';
  if (val <= 56) return 'Right in the middle';
  if (val <= 70) return 'Slightly right →';
  if (val <= 88) return 'Leaning right →';
  return 'Strongly right →';
}

// ── BUCKET TOSS ───────────────────────────────────────────────────────────────
function renderBuckets() {
  phase = 'buckets';
  syncProgress();
  document.getElementById('nav-hint').textContent = 'Drag statements into "This is me" — or tap to toggle';
  document.getElementById('btn-next').textContent = 'Next →';

  const poolItems = BUCKET_ITEMS.filter(b => !bucketMine.has(b.id));
  const mineItems = BUCKET_ITEMS.filter(b =>  bucketMine.has(b.id));

  document.getElementById('game-area').innerHTML = `
    <div class="question-slide">
      <div class="round-tag">⬇ Toss into Bucket · Round 2</div>
      <h2 class="question-text">What is most missing from your life right now?</h2>
      <p class="question-sub">Drag any statements that resonate into the bucket below. Leave the rest.</p>
      <div class="mine-zone ${mineItems.length ? 'dz-filled' : ''}" id="mine-zone">
        <div class="zone-label">This is me</div>
        ${mineItems.length
          ? `<div class="zone-chips">${mineItems.map(chipHTML).join('')}</div>`
          : '<div class="zone-empty-msg">Drop statements here ↓</div>'
        }
      </div>
      <div class="chip-pool" id="chip-pool">
        ${poolItems.map(chipHTML).join('')}
      </div>
      <div class="bucket-tap-hint">Tip: tap a statement to instantly move it</div>
    </div>`;

  setupBucketEvents();
}

function chipHTML(item) {
  const inMine = bucketMine.has(item.id);
  return `<div class="b-chip ${inMine ? 'chip-mine' : ''}"
               id="chip-${item.id}" data-id="${item.id}" draggable="true">
    <span class="b-icon">${item.icon}</span>
    <span class="b-text">${item.text}</span>
    <span class="b-tick">✓</span>
  </div>`;
}

function setupBucketEvents() {
  const mineZone = document.getElementById('mine-zone');
  const pool     = document.getElementById('chip-pool');

  document.querySelectorAll('.b-chip').forEach(chip => {
    chip.addEventListener('click',     () => toggleChip(chip.dataset.id));
    chip.addEventListener('dragstart', e => {
      dragSrcId = chip.dataset.id;
      chip.classList.add('chip-drag');
      e.dataTransfer.effectAllowed = 'move';
    });
    chip.addEventListener('dragend', () => chip.classList.remove('chip-drag'));
  });

  mineZone.addEventListener('dragover',  e => { e.preventDefault(); mineZone.classList.add('dz-hover'); });
  mineZone.addEventListener('dragleave', () => mineZone.classList.remove('dz-hover'));
  mineZone.addEventListener('drop', e => {
    e.preventDefault();
    mineZone.classList.remove('dz-hover');
    if (dragSrcId && !bucketMine.has(dragSrcId)) { bucketMine.add(dragSrcId); renderBuckets(); }
  });

  pool.addEventListener('dragover',  e => { e.preventDefault(); pool.style.outline = '1px dashed #383838'; });
  pool.addEventListener('dragleave', () => pool.style.outline = '');
  pool.addEventListener('drop', e => {
    e.preventDefault();
    pool.style.outline = '';
    if (dragSrcId && bucketMine.has(dragSrcId)) { bucketMine.delete(dragSrcId); renderBuckets(); }
  });
}

function toggleChip(id) {
  if (bucketMine.has(id)) bucketMine.delete(id);
  else bucketMine.add(id);
  renderBuckets();
}

// ── CARD SORT ─────────────────────────────────────────────────────────────────
function renderCardSort() {
  phase = 'cardsort';
  syncProgress();
  document.getElementById('nav-hint').textContent = 'Drag to reorder — most important at the top';
  document.getElementById('btn-next').textContent = 'See My Results →';

  document.getElementById('game-area').innerHTML = `
    <div class="question-slide">
      <div class="round-tag">↕ Rank by Preference · Round 3</div>
      <h2 class="question-text">A year from now, what do you most hope has changed?</h2>
      <p class="question-sub">Drag the cards into your personal priority order — or use the arrows.</p>
      <div class="rank-list" id="rank-list">
        ${sortOrder.map((id, i) => rankCardHTML(id, i)).join('')}
      </div>
    </div>`;

  setupCardSortEvents();
}

function rankCardHTML(id, rank) {
  const item = SORT_ITEMS.find(s => s.id === id);
  return `<div class="r-card rk-${rank < 3 ? rank + 1 : ''}"
               id="rcard-${id}" data-id="${id}" draggable="true">
    <div class="r-num">${rank + 1}</div>
    <div class="r-icon">${item.icon}</div>
    <div class="r-text">${item.text}</div>
    <div class="r-arrows">
      <button class="r-arrow" onclick="window._rankMove('${id}',-1)" title="Move up">▲</button>
      <button class="r-arrow" onclick="window._rankMove('${id}', 1)" title="Move down">▼</button>
    </div>
  </div>`;
}

window._rankMove = function (id, dir) {
  const idx = sortOrder.indexOf(id);
  const nxt = idx + dir;
  if (nxt < 0 || nxt >= sortOrder.length) return;
  [sortOrder[idx], sortOrder[nxt]] = [sortOrder[nxt], sortOrder[idx]];
  renderCardSort();
};

function setupCardSortEvents() {
  document.querySelectorAll('.r-card').forEach(card => {
    card.addEventListener('dragstart', e => {
      dragSrcId = card.dataset.id;
      card.classList.add('r-dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('r-dragging');
      document.querySelectorAll('.r-card').forEach(c => c.classList.remove('r-above', 'r-below'));
    });
    card.addEventListener('dragover', e => {
      e.preventDefault();
      if (card.dataset.id === dragSrcId) return;
      const rect = card.getBoundingClientRect();
      const half = (e.clientY - rect.top) < rect.height / 2 ? 'above' : 'below';
      card.dataset.dropHalf = half;
      document.querySelectorAll('.r-card').forEach(c => c.classList.remove('r-above', 'r-below'));
      card.classList.add(`r-${half}`);
    });
    card.addEventListener('drop', e => {
      e.preventDefault();
      document.querySelectorAll('.r-card').forEach(c => c.classList.remove('r-above', 'r-below'));
      if (!dragSrcId || dragSrcId === card.dataset.id) return;
      const half    = card.dataset.dropHalf || 'below';
      const fromIdx = sortOrder.indexOf(dragSrcId);
      sortOrder.splice(fromIdx, 1);
      const toIdx   = sortOrder.indexOf(card.dataset.id);
      sortOrder.splice(half === 'above' ? toIdx : toIdx + 1, 0, dragSrcId);
      renderCardSort();
    });
  });
}

// ── Navigation ────────────────────────────────────────────────────────────────
window._gameNext = function () {
  if (phase === 'sliders') {
    if (currentSlider < SLIDERS.length - 1) { currentSlider++; renderSlider(); }
    else renderBuckets();
  } else if (phase === 'buckets') {
    renderCardSort();
  } else {
    showResults();
  }
};

window._gameBack = function () {
  if (phase === 'sliders' && currentSlider > 0) { currentSlider--; renderSlider(); }
  else if (phase === 'buckets') { currentSlider = SLIDERS.length - 1; renderSlider(); }
  else if (phase === 'cardsort') { renderBuckets(); }
};

// ── Scoring ───────────────────────────────────────────────────────────────────
function calcScores() {
  const personaScores = {};
  const programScores = {};
  const programIds    = new Set(PROGRAMS.map(p => p.id));

  function add(scores, mult = 1) {
    for (const [key, pts] of Object.entries(scores)) {
      const v = pts * mult;
      if (programIds.has(key)) programScores[key] = (programScores[key] || 0) + v;
      else                     personaScores[key]  = (personaScores[key]  || 0) + v;
    }
  }

  SLIDERS.forEach((s, i) => {
    const v = sliderValues[i] / 100;
    add(s.leftScores,  5 * (1 - v));
    add(s.rightScores, 5 * v);
  });

  BUCKET_ITEMS.forEach(item => {
    if (bucketMine.has(item.id)) add(item.scores);
  });

  sortOrder.forEach((id, rank) => {
    const item = SORT_ITEMS.find(s => s.id === id);
    add(item.scores, (SORT_ITEMS.length - rank) / SORT_ITEMS.length);
  });

  const topAlias    = Object.entries(personaScores).sort((a, b) => b[1] - a[1])[0]?.[0] || 'rosa';
  const sortedProgs = [...PROGRAMS].sort((a, b) => (programScores[b.id] || 0) - (programScores[a.id] || 0));
  return { topAlias, programScores, sortedProgs };
}

// ── Results ───────────────────────────────────────────────────────────────────
async function showResults() {
  document.getElementById('game-section').style.display = 'none';
  const el = document.getElementById('results-section');
  el.style.display = 'block';

  const { topAlias, programScores, sortedProgs } = calcScores();
  const persona = PERSONAS[topAlias];
  const topProg = sortedProgs[0];
  const rest    = sortedProgs.slice(1);

  const archetypeHTML = (persona.archetypes || []).map(a => `<span class="archetype-tag">${a}</span>`).join('');
  const otherHTML = rest.map(p => {
    const score = programScores[p.id] || 0;
    return `
      <a href="${baseurl}${p.url}" class="other-card" style="${score > 0 ? `border-color:${p.color}40;` : ''}">
        <span class="other-card-icon">${p.icon}</span>
        <div class="other-card-eyebrow" style="color:${p.color};">${p.eyebrow}</div>
        <div class="other-card-title">${p.title}</div>
        <div class="other-card-desc">${p.desc}</div>
      </a>`;
  }).join('');

  el.innerHTML = `
    <div style="animation:fadeUp 0.4s ease both;">
      <p class="results-eyebrow">Your Results</p>
      <h1 class="results-title">Here's where we can help.</h1>
      <p class="results-intro">Based on your answers, here is the program and persona that best match your situation. We encourage you to reach out — Soroptimist is here for you.</p>
    </div>

    <div class="persona-reveal">
      <div class="persona-result-card" style="background:${persona.color};">
        <div class="persona-result-label">You Are</div>
        <div class="persona-result-title">${persona.title}</div>
        <div class="persona-result-desc">${persona.desc}</div>
        <div class="persona-archetypes">${archetypeHTML}</div>
      </div>
    </div>

    <div class="program-reveal">
      <div class="section-label">Your Recommended Program</div>
      <a href="${baseurl}${topProg.url}" class="top-program-card" style="background:${topProg.color};">
        <div class="top-program-match">Best Match for You</div>
        <div class="top-program-eyebrow">${topProg.eyebrow}</div>
        <div class="top-program-title">${topProg.title}</div>
        <div class="top-program-desc">${topProg.desc}</div>
        <span class="top-program-cta">Learn more →</span>
      </a>
    </div>

    <div class="others-reveal">
      <div class="section-label" style="margin-top:32px;">Other Programs</div>
      <div class="other-grid">${otherHTML}</div>
      <button class="retake-btn" onclick="window._retake()">↩ Take It Again</button>
      <div class="save-notice" id="save-notice"></div>
    </div>`;

  savePersona(topAlias);
}

async function savePersona(alias) {
  const notice = document.getElementById('save-notice');
  try {
    const check = await fetch(`${pythonURI}/api/id`, fetchOptions);
    if (!check.ok) { notice.textContent = 'Log in to save your results to your profile.'; return; }
    const allRes = await fetch(`${pythonURI}/api/persona`, fetchOptions);
    if (!allRes.ok) return;
    const all = await allRes.json();
    const persona = all.find(p => p.alias === alias);
    if (!persona) return;
    const res = await fetch(`${pythonURI}/api/user/persona`, {
      ...fetchOptions, method: 'POST',
      body: JSON.stringify({ persona_id: persona.id, weight: 2 }),
    });
    if (res.ok || res.status === 200) notice.textContent = '✓ Your results have been saved to your profile.';
  } catch(e) {}
}

window._retake = function () {
  sliderValues  = [50, 50, 50];
  currentSlider = 0;
  bucketMine    = new Set();
  sortOrder     = SORT_ITEMS.map(s => s.id);
  phase         = 'sliders';
  introChoice   = null;
  document.getElementById('results-section').style.display = 'none';
  document.getElementById('browse-section').style.display  = 'none';
  document.getElementById('game-section').style.display    = 'none';
  document.getElementById('intro-section').style.display   = 'block';
  document.getElementById('choice-browse').classList.remove('selected');
  document.getElementById('choice-quiz').classList.remove('selected');
  document.getElementById('intro-cta').disabled = true;
  document.getElementById('intro-cta').textContent = 'Continue →';
};
</script>