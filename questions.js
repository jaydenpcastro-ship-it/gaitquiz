/* Gait Review Live: which active structure (muscle) controls each phase of gait.
   Answers follow the PT 611 Gait lecture (Sullivan, Fall 2024): muscle actions per phase, rockers and phase deviations.
   Each question shows a stick figure from the Tom Collins gait deck (img/), with a short caption.
   correct = 0-based index into options. */
window.MQ_QUESTIONS = [
  {
    q: "At initial contact the hip is in 20° of flexion and body weight tries to flex it further. Which muscles control this hip flexion moment?",
    img: "img/phase_IC.png", cap: "Initial contact · hip 20° flexion",
    alt: "Stick figure at initial contact: right leg (teal) reaching forward, heel touching the floor.",
    options: ["Iliopsoas and rectus femoris", "Gluteus maximus and hamstrings", "Gluteus medius and minimus", "Adductor longus and pectineus"],
    correct: 1
  },
  {
    q: "In loading response the knee bends from 0° to 20° to absorb shock. Which muscle controls this knee flexion?",
    img: "img/phase_LR.png", cap: "Loading response · knee 0° → 20° flexion",
    alt: "Stick figure in loading response: weight on the right leg (teal) with the knee slightly bent.",
    options: ["Hamstrings, pulling the knee into flexion", "Gastrocnemius, working concentrically", "Quadriceps, working eccentrically", "Popliteus, unlocking the knee"],
    correct: 2
  },
  {
    q: "During the heel rocker in loading response, the foot lowers to the floor under control. Which muscle does this?",
    img: "img/rk_heel.png", cap: "Heel rocker · ankle 0° → 5° plantarflexion",
    alt: "Close-up of a foot pivoting on the heel as the forefoot lowers to the floor.",
    options: ["Tibialis anterior, working eccentrically", "Soleus, working eccentrically", "Fibularis (peroneus) longus", "Tibialis posterior"],
    correct: 0
  },
  {
    q: "This patient throws the trunk backward as the foot lands (posterior trunk lean). Which active structure is most likely weak?",
    img: "img/gmax_lurch.png", cap: "Loading response · trunk thrown backward",
    alt: "Stick figure leaning the trunk backward at heel contact, with the line of gravity behind the hip.",
    options: ["Iliopsoas", "Rectus abdominis", "Quadriceps", "Gluteus maximus"],
    correct: 3
  },
  {
    q: "In mid-stance the tibia rolls forward over the planted foot (ankle rocker). Which muscle group controls how fast the tibia advances?",
    img: "img/phase_MSt.png", cap: "Mid-stance · ankle 5° PF → 5° DF",
    alt: "Stick figure in mid-stance: body directly over the right foot (teal), left leg swinging.",
    options: ["Ankle dorsiflexors (tibialis anterior)", "Ankle plantarflexors (soleus), working eccentrically", "Toe extensors", "Hamstrings"],
    correct: 1
  },
  {
    q: "In mid-stance on the right leg, the LEFT side of the pelvis drops. Which active structure is failing?",
    img: "img/tr_uncomp.png", cap: "Standing on the right leg · viewed from behind",
    alt: "Back view of a figure standing on the right leg (orange) while the left side of the pelvis drops.",
    options: ["Right gluteus medius (hip abductors)", "Left gluteus medius", "Right adductor longus", "Left quadratus lumborum"],
    correct: 0
  },
  {
    q: "In terminal stance the heel rises over the forefoot rocker. This rocker depends mainly on the strength of which muscle group?",
    img: "img/phase_TSt.png", cap: "Terminal stance · heel rise, 5° → 10° DF",
    alt: "Stick figure in terminal stance: right heel (teal) lifting as the body moves ahead of the foot.",
    options: ["Tibialis anterior", "Quadriceps", "Gastrocnemius and soleus (plantarflexors)", "Gluteus medius"],
    correct: 2
  },
  {
    q: "Tom's right hip doesn't reach 20° of extension in terminal stance. Tightness of which muscle most directly limits it?",
    img: "img/hip_limited.png", cap: "Tom's right leg (orange) vs typical (faint teal)",
    alt: "Stick figure in terminal stance with the right thigh (orange) stopping short of the typical position shown faintly.",
    options: ["Iliopsoas (hip flexor)", "Gluteus maximus", "Hamstrings", "Gluteus medius"],
    correct: 0
  },
  {
    q: "In pre-swing the hip moves from 20° of extension back to neutral. Which muscles begin flexing the hip?",
    img: "img/phase_PSw.png", cap: "Pre-swing · hip 20° extension → neutral",
    alt: "Stick figure in pre-swing: right toes (teal) still on the floor with the knee bending.",
    options: ["Gluteus maximus and hamstrings", "Gluteus medius and TFL", "Iliopsoas, rectus femoris and adductor longus", "Quadriceps and gastrocnemius"],
    correct: 2
  },
  {
    q: "In terminal swing the knee extends to neutral before the heel lands. Which muscle decelerates knee extension (and hip flexion) to prepare the limb for stance?",
    img: "img/phase_TSw.png", cap: "Terminal swing · knee 30° → 0°",
    alt: "Stick figure in terminal swing: right leg (teal) reaching forward with the knee straightening.",
    options: ["Quadriceps", "Iliopsoas", "Tibialis anterior", "Hamstrings"],
    correct: 3
  }
];
