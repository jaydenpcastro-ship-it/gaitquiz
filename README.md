# Gait Review Live

*Which muscle runs each phase of gait? A review quiz for the Tom Collins (Case 14) gait deck*

A live, Kahoot-style multiplayer quiz. Students join from their own phones
(no account, no sign-in, no app): open the link or scan the host's QR code, type a name, and answer.

- 10 multiple-choice questions, in gait-cycle order. Each one asks which active structure (muscle) is
  primarily responsible for, or failing in, a specific phase, and shows the matching stick figure from the
  gait deck (`img/`):
  - Q1-4, initial contact and loading response: gluteus maximus and hamstrings, quadriceps,
    tibialis anterior (heel rocker), posterior trunk lean
  - Q5-8, mid-stance and terminal stance: soleus (ankle rocker), gluteus medius (pelvic drop),
    gastrocnemius-soleus (forefoot rocker), tight iliopsoas (Tom's limited hip extension)
  - Q9-10, pre-swing and terminal swing: iliopsoas, rectus femoris and adductor longus; hamstrings
- Answers follow the PT 611 Gait lecture (Sullivan, Fall 2024)
- 5-second reading window on each question, then a 20-second answer timer (configurable, 10-60s);
  speed-weighted scoring counts from when answers open
- Host-only Pause / Resume (button, or Space / P)
- Every 5th wrong answer: the jump scare **plus an error buzzer** (Web Audio, no sound file; vibrates too
  on phones that support it). Audio unlocks on the player's first tap. An iPhone on silent mode stays silent.
- Live leaderboard, final podium, automatic winner

Live site: <https://gaitquiz.vercel.app>

## Files

- `index.html`: the whole app (host + player screens)
- `questions.js`: the question set (`q`, `img`, `cap`, `alt`, `options`, `correct` = 0-based index)
- `img/`: stick-figure diagrams from the gait deck
- `config.js`: Supabase project URL + publishable key
- `schema.sql`: database tables and policies (run once in the Supabase SQL Editor)

Built from the same template as `hipquiz` / `forefootquiz` / `khalilrehabquiz`; it uses the same Supabase
project as those quizzes (games are kept apart by their 4-letter room codes). Browser storage prefix: `gtl_`.
