---
layout: opencs
title: Find Your Program — Soroptimist International of Poway
permalink: /sip/persona/
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap');

  .quiz-page { font-family: 'Jost', sans-serif; max-width: 720px; margin: 0 auto; padding: 48px 24px 80px; color: #d0ccc8; }
  .sip-back { display: inline-flex; align-items: center; gap: 8px; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; color: #777; text-decoration: none; margin-bottom: 48px; transition: color 0.15s; }
  .sip-back:hover { color: #aaa; }

  /* Intro */
  .intro-eyebrow { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.14em; color: #e8836a; margin-bottom: 12px; }
  .intro-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 5vw, 2.8rem); font-weight: 600; color: #f5f0eb; margin-bottom: 14px; line-height: 1.2; }
  .intro-body { font-size: 0.95rem; color: #a0a0a0; line-height: 1.85; margin-bottom: 10px; max-width: 580px; }
  .intro-note { font-size: 0.82rem; color: #666; line-height: 1.7; margin-bottom: 32px; font-style: italic; }
  .intro-start-btn { font-family: 'Jost', sans-serif; font-size: 0.82rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; padding: 14px 32px; border-radius: 4px; border: none; cursor: pointer; background: #e8836a; color: #111; transition: background 0.15s, transform 0.1s; }
  .intro-start-btn:hover { background: #f09a7e; transform: translateY(-1px); }

  /* Progress */
  .progress-bar-track { height: 3px; background: #1e1e1e; border-radius: 2px; margin-bottom: 40px; }
  .progress-bar-fill  { height: 3px; background: #e8836a; border-radius: 2px; transition: width 0.4s ease; }
  .progress-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #555; margin-bottom: 10px; }

  /* Question */
  .question-eyebrow { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.14em; color: #e8836a; margin-bottom: 10px; }
  .question-text { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.5rem, 4vw, 2rem); font-weight: 600; color: #f5f0eb; line-height: 1.35; margin-bottom: 28px; }

  /* Options */
  .options-grid { display: flex; flex-direction: column; gap: 10px; margin-bottom: 36px; }
  .option-btn { display: flex; align-items: flex-start; gap: 14px; background: rgba(255,255,255,0.02); border: 1px solid #2a2a2a; border-radius: 8px; padding: 16px 20px; cursor: pointer; text-align: left; font-family: 'Jost', sans-serif; color: #b8b4b0; font-size: 0.9rem; line-height: 1.65; transition: border-color 0.15s, background 0.15s, color 0.15s; width: 100%; }
  .option-btn:hover  { border-color: #e8836a60; background: rgba(232,131,106,0.05); color: #f0ece6; }
  .option-btn.chosen { border-color: #e8836a; background: rgba(232,131,106,0.09); color: #f0ece6; }
  .option-letter { display: inline-flex; align-items: center; justify-content: center; min-width: 26px; height: 26px; border-radius: 50%; border: 1px solid #3a3a3a; font-size: 0.7rem; font-weight: 600; color: #777; flex-shrink: 0; margin-top: 3px; transition: all 0.15s; }
  .option-btn.chosen .option-letter { border-color: #e8836a; background: #e8836a; color: #111; }

  /* Nav */
  .quiz-nav { display: flex; justify-content: space-between; align-items: center; }
  .quiz-btn { font-family: 'Jost', sans-serif; font-size: 0.78rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; padding: 12px 26px; border-radius: 4px; cursor: pointer; transition: background 0.15s, transform 0.1s; }
  .quiz-btn-primary { background: #e8836a; color: #111; border: none; }
  .quiz-btn-primary:hover { background: #f09a7e; transform: translateY(-1px); }
  .quiz-btn-secondary { background: transparent; color: #666; border: 1px solid #2a2a2a; }
  .quiz-btn-secondary:hover { color: #aaa; border-color: #444; }
  .quiz-btn:disabled { opacity: 0.3; cursor: not-allowed; transform: none; }

  /* Results */
  .results-eyebrow { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.14em; color: #e8836a; margin-bottom: 12px; }
  .results-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 5vw, 2.8rem); font-weight: 600; color: #f5f0eb; margin-bottom: 10px; }
  .results-intro { font-size: 0.92rem; color: #999; line-height: 1.8; margin-bottom: 36px; max-width: 580px; }

  /* Persona card */
  .persona-result-card { border-radius: 10px; padding: 28px; margin-bottom: 32px; }
  .persona-result-label { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.14em; color: rgba(0,0,0,0.45); margin-bottom: 6px; }
  .persona-result-title { font-family: 'Cormorant Garamond', serif; font-size: 1.9rem; font-weight: 700; color: #111; margin-bottom: 8px; }
  .persona-result-desc { font-size: 0.9rem; color: #1a1a1a; line-height: 1.8; margin-bottom: 14px; opacity: 0.88; }
  .persona-archetypes { display: flex; flex-wrap: wrap; gap: 6px; }
  .archetype-tag { font-size: 0.68rem; padding: 3px 9px; border-radius: 3px; background: rgba(0,0,0,0.12); color: #222; }

  /* Top program */
  .section-label { font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.12em; color: #666; margin-bottom: 14px; }
  .top-program-card { border-radius: 10px; padding: 28px 32px; margin-bottom: 12px; text-decoration: none; display: block; color: inherit; transition: transform 0.15s, box-shadow 0.2s; }
  .top-program-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(0,0,0,0.35); text-decoration: none; color: inherit; }
  .top-program-match   { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.14em; color: rgba(0,0,0,0.45); margin-bottom: 6px; }
  .top-program-eyebrow { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(0,0,0,0.55); margin-bottom: 8px; }
  .top-program-title   { font-family: 'Cormorant Garamond', serif; font-size: 1.9rem; font-weight: 700; color: #111; margin-bottom: 10px; }
  .top-program-desc    { font-size: 0.9rem; color: #1a1a1a; line-height: 1.8; margin-bottom: 18px; opacity: 0.85; }
  .top-program-cta     { display: inline-block; background: rgba(0,0,0,0.14); color: #111; font-size: 0.74rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 10px 20px; border-radius: 4px; }

  /* Other programs */
  .other-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 10px; margin-bottom: 40px; }
  .other-card { border: 1px solid #2a2a2a; border-radius: 8px; padding: 18px; text-decoration: none; display: block; color: inherit; transition: border-color 0.15s, transform 0.12s; }
  .other-card:hover { transform: translateY(-2px); text-decoration: none; color: inherit; }
  .other-card-icon    { font-size: 1.3rem; margin-bottom: 8px; display: block; }
  .other-card-eyebrow { font-size: 0.66rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px; }
  .other-card-title   { font-family: 'Cormorant Garamond', serif; font-size: 1.05rem; color: #f0ece6; margin-bottom: 6px; }
  .other-card-desc    { font-size: 0.78rem; color: #777; line-height: 1.6; }

  .retake-btn { font-family: 'Jost', sans-serif; font-size: 0.76rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; background: transparent; border: 1px solid #2a2a2a; color: #666; padding: 10px 22px; border-radius: 4px; cursor: pointer; transition: all 0.15s; margin-top: 8px; }
  .retake-btn:hover { border-color: #555; color: #aaa; }
  .save-notice { font-size: 0.8rem; color: #5ecb8a; margin-top: 14px; min-height: 1.2em; }
</style>

<div class="quiz-page">
  <a href="{{ site.baseurl }}/" class="sip-back">← Back to Programs</a>

  <!-- Intro -->
  <div id="intro-section">
    <p class="intro-eyebrow">We're Here to Help</p>
    <h1 class="intro-title">Let's find the right support for you.</h1>
    <p class="intro-body">Soroptimist International of Poway offers six programs serving women and communities in different ways. Answer a few honest questions about your situation and what you need most — we'll point you to the program that fits.</p>
    <p class="intro-note">Your answers are private and used only to match you with the right program. There are no wrong answers.</p>
    <button class="intro-start-btn" onclick="startQuiz()">Find My Program →</button>
  </div>

  <!-- Quiz -->
  <div id="quiz-section" style="display:none;">
    <div class="progress-label" id="progress-label"></div>
    <div class="progress-bar-track"><div class="progress-bar-fill" id="progress-bar" style="width:0%;"></div></div>
    <div id="question-area"></div>
    <div class="quiz-nav">
      <button class="quiz-btn quiz-btn-secondary" id="btn-back" onclick="goBack()">← Back</button>
      <button class="quiz-btn quiz-btn-primary"   id="btn-next" onclick="goNext()" disabled>Next →</button>
    </div>
  </div>

  <!-- Results -->
  <div id="results-section" style="display:none;"></div>
</div>

<script type="module">
import { pythonURI, fetchOptions, baseurl } from '{{ site.baseurl }}/assets/js/api/config.js';

// ── Programs ──────────────────────────────────────────────────────────────────
const PROGRAMS = [
  { id: 'transitional-housing',  title: 'Transitional Housing',  eyebrow: 'Community Support',      desc: 'Emergency shelter, housing resources, and a clear path toward stability for families in crisis.',                                                                color: '#e8836a', url: '/sip/transitional-housing/',  icon: '🏠' },
  { id: 'live-your-dream',       title: 'Live Your Dream',        eyebrow: 'Scholarship Award',       desc: 'Financial awards for women who are the primary supporters of their families — helping them invest in education and build a better future.',                    color: '#6ab0e8', url: '/sip/live-your-dream/',       icon: '🌟' },
  { id: 'dream-it-be-it',        title: 'Dream It, Be It',        eyebrow: 'Career Support',          desc: 'Career development and mentorship for high school girls — exposing them to professional women and real pathways to the futures they imagine.',                  color: '#d4b84a', url: '/sip/dreamit-beit/',           icon: '✨' },
  { id: 'stat',                  title: 'STAT!',                  eyebrow: 'Stop Trafficking',        desc: 'Education, awareness, and community action to identify and prevent human trafficking and protect the most vulnerable people around us.',                       color: '#e86a6a', url: '/sip/stat/',                   icon: '🛡️' },
  { id: 'abraxas-scholarship',   title: 'Abraxas Scholarship',    eyebrow: 'Scholarship Award',       desc: 'Recognizing students who combine strong academics with meaningful community service — because excellence and giving back go hand in hand.',                    color: '#5ecb8a', url: '/sip/abraxas-scholarship/',   icon: '🎓' },
  { id: 'colegio-la-esperanza',  title: 'Colegio La Esperanza',   eyebrow: 'International Education', desc: 'Funding schools, teachers, and materials in underserved Mexican communities — because no child\'s future should be limited by where they were born.',          color: '#b07de8', url: '/sip/colegio-la-esparanza/',  icon: '🌎' },
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

// ── Questions ─────────────────────────────────────────────────────────────────
const QUESTIONS = [
  {
    eyebrow: 'Your Situation',
    text: 'What is the biggest challenge you are facing right now?',
    options: [
      { letter: 'A', text: 'I am struggling financially while trying to support my family — I need help affording education or training so I can build a better future.',
        scores: { rosa: 5, 'live-your-dream': 5 } },
      { letter: 'B', text: 'I am dealing with unstable or unsafe housing — my family needs a secure place to live.',
        scores: { haven: 5, 'transitional-housing': 5 } },
      { letter: 'C', text: 'I am a young woman who does not know what career path is right for me — I need guidance and exposure to what is possible.',
        scores: { luna: 5, 'dream-it-be-it': 5 } },
      { letter: 'D', text: 'I work hard in school and give back to my community, but I need financial support and recognition to move forward.',
        scores: { merit: 5, 'abraxas-scholarship': 5 } },
      { letter: 'E', text: 'I have been affected by or witnessed trafficking or exploitation — I need resources, support, or a way to help others in the same situation.',
        scores: { voice: 5, stat: 5 } },
      { letter: 'F', text: 'I care deeply about children in underserved communities in Latin America who lack access to education.',
        scores: { solana: 5, 'colegio-la-esperanza': 5 } },
    ],
  },
  {
    eyebrow: 'What You Need Most',
    text: 'If Soroptimist could give you one thing right now, what would matter most?',
    options: [
      { letter: 'A', text: 'A financial award or scholarship to help me pursue my education or improve my career.',
        scores: { rosa: 3, 'live-your-dream': 4 } },
      { letter: 'B', text: 'Help finding safe, stable housing for me and my family.',
        scores: { haven: 3, 'transitional-housing': 4 } },
      { letter: 'C', text: 'Access to professional women mentors and career exploration opportunities.',
        scores: { luna: 3, 'dream-it-be-it': 4 } },
      { letter: 'D', text: 'Recognition and a scholarship that rewards my academic work and community service.',
        scores: { merit: 3, 'abraxas-scholarship': 4 } },
      { letter: 'E', text: 'Education, training, or advocacy tools related to human trafficking awareness and prevention.',
        scores: { voice: 3, stat: 4 } },
      { letter: 'F', text: 'Resources or funding to support education programs for children in Mexico.',
        scores: { solana: 3, 'colegio-la-esperanza': 4 } },
    ],
  },
  {
    eyebrow: 'Your Daily Life',
    text: 'Which of these best describes how you feel most days?',
    options: [
      { letter: 'A', text: 'Stretched thin — I am working hard to provide for everyone around me, but my own goals and dreams keep getting pushed aside.',
        scores: { rosa: 4, 'live-your-dream': 3 } },
      { letter: 'B', text: 'Uncertain — I am not sure where my family will be next month and it is hard to plan for anything beyond getting through the day.',
        scores: { haven: 4, 'transitional-housing': 3 } },
      { letter: 'C', text: 'Full of potential but unsure — I know I want more for my future, but I have never had someone show me what that could look like.',
        scores: { luna: 4, 'dream-it-be-it': 3 } },
      { letter: 'D', text: 'Proud but waiting — I have worked hard and given a lot, and I am hoping the right opportunity will finally recognize that.',
        scores: { merit: 4, 'abraxas-scholarship': 3 } },
      { letter: 'E', text: 'Angry and motivated — I have seen injustice happen to real people and I feel called to do something about it.',
        scores: { voice: 4, stat: 3 } },
      { letter: 'F', text: 'Called to serve — I feel a deep pull toward communities in need, especially those without access to basic education.',
        scores: { solana: 4, 'colegio-la-esperanza': 3 } },
    ],
  },
  {
    eyebrow: 'What Is Missing',
    text: 'What is the one thing most missing from your life or situation right now?',
    options: [
      { letter: 'A', text: 'Financial support to pursue education or job training without sacrificing what my family needs.',
        scores: { rosa: 3, 'live-your-dream': 4 } },
      { letter: 'B', text: 'A safe, stable home where my family can breathe and rebuild.',
        scores: { haven: 3, 'transitional-housing': 4 } },
      { letter: 'C', text: 'A role model — someone in a real career who looks like me and believes I can get there too.',
        scores: { luna: 3, 'dream-it-be-it': 4 } },
      { letter: 'D', text: 'Acknowledgment — I want my hard work and sacrifice to be seen and rewarded.',
        scores: { merit: 3, 'abraxas-scholarship': 4 } },
      { letter: 'E', text: 'Knowledge and community support to protect people from exploitation and trafficking.',
        scores: { voice: 3, stat: 4 } },
      { letter: 'F', text: 'A way to bring education and opportunity to children who have been left behind.',
        scores: { solana: 3, 'colegio-la-esperanza': 4 } },
    ],
  },
  {
    eyebrow: 'Your Barriers',
    text: 'What has held you back the most from getting to where you want to be?',
    options: [
      { letter: 'A', text: 'Money — the cost of education or training is out of reach when my whole paycheck goes to keeping my family afloat.',
        scores: { rosa: 4, 'live-your-dream': 4 } },
      { letter: 'B', text: 'Instability — it is hard to plan for the future when the present feels so uncertain and unsafe.',
        scores: { haven: 4, 'transitional-housing': 4 } },
      { letter: 'C', text: 'Lack of guidance — no one in my life has been able to show me a path or open a door to a real career.',
        scores: { luna: 4, 'dream-it-be-it': 4 } },
      { letter: 'D', text: 'Lack of opportunity — I have the grades and the drive, but I have not found the scholarship or program that takes a chance on me.',
        scores: { merit: 4, 'abraxas-scholarship': 4 } },
      { letter: 'E', text: 'Silence — the people and communities most at risk of trafficking do not have the awareness or resources to protect themselves.',
        scores: { voice: 4, stat: 4 } },
      { letter: 'F', text: 'Distance — the communities I care most about are far away and lack the infrastructure to give children a real education.',
        scores: { solana: 4, 'colegio-la-esperanza': 4 } },
    ],
  },
  {
    eyebrow: 'Your Hopes',
    text: 'A year from now, what do you most hope has changed?',
    options: [
      { letter: 'A', text: 'I am enrolled in a program or course that is moving my career forward — and my family is more financially stable because of it.',
        scores: { rosa: 3, 'live-your-dream': 4 } },
      { letter: 'B', text: 'My family has a safe, stable home and I am no longer living in fear of what tomorrow looks like.',
        scores: { haven: 3, 'transitional-housing': 4 } },
      { letter: 'C', text: 'I have met professional women who inspired me and I have a clearer picture of the career I am working toward.',
        scores: { luna: 3, 'dream-it-be-it': 4 } },
      { letter: 'D', text: 'My hard work has been recognized and I am using a scholarship to get closer to my goals.',
        scores: { merit: 3, 'abraxas-scholarship': 4 } },
      { letter: 'E', text: 'More people in my community know the signs of trafficking — and at least one person is safer because of it.',
        scores: { voice: 3, stat: 4 } },
      { letter: 'F', text: 'Children who had no school now have one — and the ripple effect of that education has already begun.',
        scores: { solana: 3, 'colegio-la-esperanza': 4 } },
    ],
  },
  {
    eyebrow: 'How We Can Help',
    text: 'How do you see Soroptimist fitting into your life?',
    options: [
      { letter: 'A', text: 'As a source of financial support that makes it possible for me to pursue education without choosing between my dreams and my family.',
        scores: { rosa: 2, 'live-your-dream': 3 } },
      { letter: 'B', text: 'As a community that provides immediate help and long-term support for families who need a safe place to land.',
        scores: { haven: 2, 'transitional-housing': 3 } },
      { letter: 'C', text: 'As a network of women who can mentor me and show me that the career I want is actually within reach.',
        scores: { luna: 2, 'dream-it-be-it': 3 } },
      { letter: 'D', text: 'As an organization that recognizes students who do more than study — who also serve and contribute to their communities.',
        scores: { merit: 2, 'abraxas-scholarship': 3 } },
      { letter: 'E', text: 'As a voice and resource in the fight against trafficking — helping communities recognize, respond to, and prevent exploitation.',
        scores: { voice: 2, stat: 3 } },
      { letter: 'F', text: 'As a bridge — connecting people who have resources with children who have none, and making education possible where it was not before.',
        scores: { solana: 2, 'colegio-la-esperanza': 3 } },
    ],
  },
];

// ── State ─────────────────────────────────────────────────────────────────────
let current = 0;
let answers = new Array(QUESTIONS.length).fill(null);

window.startQuiz = function() {
  document.getElementById('intro-section').style.display = 'none';
  document.getElementById('quiz-section').style.display = 'block';
  renderQuestion();
};

function renderQuestion() {
  const q = QUESTIONS[current];
  const total = QUESTIONS.length;
  const pct = Math.round(((current + 1) / total) * 100);

  document.getElementById('progress-label').textContent = `Question ${current + 1} of ${total}`;
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('btn-back').style.visibility = current === 0 ? 'hidden' : 'visible';
  document.getElementById('btn-next').textContent = current === total - 1 ? 'See My Results →' : 'Next →';
  document.getElementById('btn-next').disabled = answers[current] === null;

  document.getElementById('question-area').innerHTML = `
    <p class="question-eyebrow">${q.eyebrow}</p>
    <h2 class="question-text">${q.text}</h2>
    <div class="options-grid">
      ${q.options.map((opt, i) => `
        <button class="option-btn ${answers[current] === i ? 'chosen' : ''}"
                onclick="window._pick(${i})">
          <span class="option-letter">${opt.letter}</span>
          ${opt.text}
        </button>`).join('')}
    </div>`;
}

window._pick = function(i) {
  answers[current] = i;
  document.getElementById('btn-next').disabled = false;
  document.querySelectorAll('.option-btn').forEach((b, idx) => b.classList.toggle('chosen', idx === i));
};

window.goBack = function() {
  if (current > 0) { current--; renderQuestion(); }
};

window.goNext = function() {
  if (answers[current] === null) return;
  if (current < QUESTIONS.length - 1) { current++; renderQuestion(); }
  else showResults();
};

// ── Scoring ───────────────────────────────────────────────────────────────────
function calcScores() {
  const personaScores = {};
  const programScores = {};
  const programIds = new Set(PROGRAMS.map(p => p.id));

  QUESTIONS.forEach((q, qi) => {
    const chosen = answers[qi];
    if (chosen === null) return;
    for (const [key, pts] of Object.entries(q.options[chosen].scores || {})) {
      if (programIds.has(key)) programScores[key] = (programScores[key] || 0) + pts;
      else                     personaScores[key]  = (personaScores[key]  || 0) + pts;
    }
  });

  const topAlias    = Object.entries(personaScores).sort((a, b) => b[1] - a[1])[0]?.[0] || 'rosa';
  const sortedProgs = [...PROGRAMS].sort((a, b) => (programScores[b.id] || 0) - (programScores[a.id] || 0));
  return { topAlias, programScores, sortedProgs };
}

// ── Results ───────────────────────────────────────────────────────────────────
async function showResults() {
  document.getElementById('quiz-section').style.display = 'none';
  const el = document.getElementById('results-section');
  el.style.display = 'block';

  const { topAlias, programScores, sortedProgs } = calcScores();
  const persona = PERSONAS[topAlias];
  const topProg  = sortedProgs[0];
  const rest     = sortedProgs.slice(1);

  const archetypeHTML = (persona.archetypes || []).map(a => `<span class="archetype-tag">${a}</span>`).join('');
  const otherHTML = rest.map(p => {
    const score = programScores[p.id] || 0;
    return `
      <a href="${baseurl}${p.url}" class="other-card" style="${score > 0 ? `border-color:${p.color}50;` : ''}">
        <span class="other-card-icon">${p.icon}</span>
        <div class="other-card-eyebrow" style="color:${p.color};">${p.eyebrow}</div>
        <div class="other-card-title">${p.title}</div>
        <div class="other-card-desc">${p.desc}</div>
      </a>`;
  }).join('');

  el.innerHTML = `
    <p class="results-eyebrow">Your Results</p>
    <h1 class="results-title">Here's where we can help.</h1>
    <p class="results-intro">Based on your answers, here is the program and persona that best match your situation. We encourage you to reach out — Soroptimist is here for you.</p>

    <div class="persona-result-card" style="background:${persona.color};">
      <div class="persona-result-label">You Are</div>
      <div class="persona-result-title">${persona.title}</div>
      <div class="persona-result-desc">${persona.desc}</div>
      <div class="persona-archetypes">${archetypeHTML}</div>
    </div>

    <div class="section-label">Your Recommended Program</div>
    <a href="${baseurl}${topProg.url}" class="top-program-card" style="background:${topProg.color};">
      <div class="top-program-match">Best Match for You</div>
      <div class="top-program-eyebrow">${topProg.eyebrow}</div>
      <div class="top-program-title">${topProg.title}</div>
      <div class="top-program-desc">${topProg.desc}</div>
      <span class="top-program-cta">Learn more →</span>
    </a>

    <div class="section-label" style="margin-top:32px;">Other Programs</div>
    <div class="other-grid">${otherHTML}</div>

    <button class="retake-btn" onclick="window._retake()">↩ Retake Quiz</button>
    <div class="save-notice" id="save-notice"></div>`;

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

window._retake = function() {
  current = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  document.getElementById('results-section').style.display = 'none';
  document.getElementById('intro-section').style.display = 'block';
};
</script>
