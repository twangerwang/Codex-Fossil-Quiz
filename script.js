const studyCards = [
  {
    id: "ammonite",
    icon: "@",
    iconClass: "icon-marine",
    title: "Ammonite",
    fossil: "A coiled shell from an extinct ocean animal.",
    clue: "Ammonites lived in salt water, so they are evidence of a sea or ocean.",
    environment: "shallow sea"
  },
  {
    id: "shark",
    icon: "^",
    iconClass: "icon-marine",
    title: "Shark Tooth",
    fossil: "A pointed fossil tooth from an ancient shark.",
    clue: "Sharks need water and prey, so shark teeth can point to an ancient ocean or coastal water.",
    environment: "ocean or coast"
  },
  {
    id: "shells",
    icon: ")",
    iconClass: "icon-coast",
    title: "Oyster and Clam Shells",
    fossil: "Hard shells from animals that lived on the sea floor.",
    clue: "Many shells in rock layers can mean the area was once covered by shallow water.",
    environment: "shallow sea floor"
  },
  {
    id: "palmwood",
    icon: "|",
    iconClass: "icon-forest",
    title: "Petrified Palmwood",
    fossil: "Wood that slowly turned into stone.",
    clue: "Palm trees need warm places with enough water, so this fossil can point to an old warm forest.",
    environment: "warm forest"
  },
  {
    id: "dino",
    icon: "#",
    iconClass: "icon-ice",
    title: "Dinosaur Tracks",
    fossil: "Footprints pressed into soft mud and preserved in rock.",
    clue: "Tracks show where an animal walked, often near muddy river edges or shorelines.",
    environment: "muddy river edge"
  },
  {
    id: "mammoth",
    icon: "M",
    iconClass: "icon-ice",
    title: "Mammoth Tooth",
    fossil: "A wide, ridged tooth from an Ice Age mammal.",
    clue: "Mammoths ate grasses and plants, so their fossils can point to grasslands or open woodlands.",
    environment: "grassland"
  },
  {
    id: "mosasaur",
    icon: "~",
    iconClass: "icon-marine",
    title: "Mosasaur Bone",
    fossil: "A bone from a large swimming reptile.",
    clue: "Mosasaurs lived in the ocean, so their fossils are strong evidence for ancient sea water.",
    environment: "ocean"
  },
  {
    id: "leaf",
    icon: "/",
    iconClass: "icon-forest",
    title: "Leaf Print",
    fossil: "The shape of a leaf pressed into sediment.",
    clue: "Leaf fossils are evidence of plants, so they can point to forests, wetlands, or river areas.",
    environment: "plant-rich land"
  }
];

const labItems = [
  {
    id: "a",
    title: "Spiral ammonite shell",
    text: "Found with many other sea shells in limestone.",
    environment: "Ancient shallow sea"
  },
  {
    id: "b",
    title: "Petrified palmwood",
    text: "Looks like wood but feels like stone, with tiny dot patterns.",
    environment: "Warm forest"
  },
  {
    id: "c",
    title: "Mammoth tooth",
    text: "Wide ridges helped grind tough plants.",
    environment: "Open grassland"
  },
  {
    id: "d",
    title: "Dinosaur footprint",
    text: "Pressed into old mud before the mud hardened.",
    environment: "Muddy riverbank"
  }
];

const quizQuestions = [
  {
    question: "A student finds an ammonite fossil in Texas. What past environment does that best support?",
    answers: ["A snowy mountain", "A shallow sea", "A dry desert only", "A city street"],
    correct: 1,
    explain: "Ammonites were ocean animals, so they are evidence that the area had sea water long ago."
  },
  {
    question: "Why can a fossil help scientists describe a past environment?",
    answers: [
      "Every fossil means the same environment.",
      "Fossils only tell us the color of rocks.",
      "The organism's needs give clues about where it lived.",
      "Fossils are guesses with no evidence."
    ],
    correct: 2,
    explain: "Scientists use evidence. They compare the fossil to what that organism needed to survive."
  },
  {
    question: "Which fossil evidence would best support a warm forest in the past?",
    answers: ["A shark tooth", "A mosasaur bone", "An oyster shell", "Petrified palmwood"],
    correct: 3,
    explain: "Palm trees are plants that need warmth and water, so petrified palmwood can point to a warm forest."
  },
  {
    question: "Texas rocks with many oyster and clam fossils most likely formed in what environment?",
    answers: ["Outer space", "A parking lot", "Shallow water", "A frozen volcano"],
    correct: 2,
    explain: "Oysters and clams live in water, and many shell fossils together can point to an old sea floor."
  },
  {
    question: "A fossil footprint is different from a fossil bone because it is evidence of...",
    answers: ["A plant's roots", "A shell's color", "A cloud shape", "An animal's activity"],
    correct: 3,
    explain: "A footprint is a trace fossil. It shows an animal walked across a surface."
  },
  {
    question: "Which answer uses evidence and reasoning the best?",
    answers: [
      "I found a shark tooth, so this place was definitely a mountain.",
      "I found a rock, so there were dinosaurs.",
      "I found a shark tooth, so this place may have been ocean water because sharks live in water.",
      "I like fossils, so the environment was a forest."
    ],
    correct: 2,
    explain: "The best answer connects the fossil evidence to what the organism needed."
  },
  {
    question: "A mosasaur bone is found in a Texas rock layer. Which clue matters most?",
    answers: [
      "Mosasaurs were large swimming reptiles.",
      "Mosasaurs built nests in tall trees.",
      "Mosasaurs only lived on dry land.",
      "Mosasaurs were modern farm animals."
    ],
    correct: 0,
    explain: "A mosasaur was an ocean animal, so its fossil can be evidence of an ancient ocean."
  },
  {
    question: "A rock layer has fossil leaves and bits of petrified wood. What is the best inference?",
    answers: [
      "The area was always covered by deep ocean water.",
      "The area had plants growing nearby long ago.",
      "The area had no living things.",
      "The area was outer space."
    ],
    correct: 1,
    explain: "Leaves and wood are plant evidence, so they point to a land environment with plants."
  },
  {
    question: "Which fossil would be the strongest evidence for an ancient sea in Texas?",
    answers: ["Dinosaur footprint", "Leaf print", "Ammonite shell", "Mammoth tooth"],
    correct: 2,
    explain: "Ammonites lived in salt water, so an ammonite shell is strong evidence of a sea."
  },
  {
    question: "What should a scientist do before deciding what an old environment was like?",
    answers: [
      "Pick the funniest answer.",
      "Ignore the fossil location.",
      "Use only one guess and stop.",
      "Observe the fossils and compare them to living things and environments."
    ],
    correct: 3,
    explain: "Scientists make careful observations and use comparisons to support their explanations."
  },
  {
    question: "A mammoth tooth with flat ridges suggests the animal ate tough plants. What environment fits best?",
    answers: ["Grassland", "Deep ocean", "Coral reef", "Outer space"],
    correct: 0,
    explain: "Mammoths ate grasses and other plants, so the fossil can point to grasslands or open woodlands."
  },
  {
    question: "Which pair is matched correctly?",
    answers: [
      "Petrified palmwood: frozen ocean",
      "Shark tooth: ancient water environment",
      "Ammonite: dry desert only",
      "Mammoth tooth: city sidewalk"
    ],
    correct: 1,
    explain: "Sharks live in water, so a shark tooth can be evidence of an ancient ocean or coast."
  },
  {
    question: "If a fossil is found in a rock layer, what can the layer help scientists understand?",
    answers: [
      "Only the fossil's favorite food",
      "Only what the weather is today",
      "What environment may have existed when the fossil formed",
      "The exact name of every animal nearby"
    ],
    correct: 2,
    explain: "The fossil and the rock layer together can give clues about the past environment."
  },
  {
    question: "Which statement is a strong conclusion for TEKS 4.12C?",
    answers: [
      "Fossils are just decorations in rocks.",
      "All Texas fossils came from the same animal.",
      "A fossil is not useful unless it is a dinosaur.",
      "Fossil evidence can help identify and describe past environments."
    ],
    correct: 3,
    explain: "TEKS 4.12C focuses on using fossil evidence to identify and describe past environments."
  }
];

let selectedSpecimen = null;
let currentQuestion = -1;
let score = 0;
let answered = false;

const mastered = new Set(JSON.parse(localStorage.getItem("masteredFossils") || "[]"));

const views = document.querySelectorAll(".view");
const tabs = document.querySelectorAll(".tab");
const studyContainer = document.querySelector("#studyCards");
const masteredCount = document.querySelector("#masteredCount");
const specimenList = document.querySelector("#specimenList");
const environmentBoard = document.querySelector("#environmentBoard");
const labFeedback = document.querySelector("#labFeedback");
const quizTitle = document.querySelector("#quizTitle");
const quizBody = document.querySelector("#quizBody");
const nextQuestion = document.querySelector("#nextQuestion");
const resetQuiz = document.querySelector("#resetQuiz");
const scoreEl = document.querySelector("#score");
const totalEl = document.querySelector("#total");
const quizProgress = document.querySelector("#quizProgress");
const fossilPick = document.querySelector("#fossilPick");
const environmentPick = document.querySelector("#environmentPick");
const buildSentence = document.querySelector("#buildSentence");
const copySentence = document.querySelector("#copySentence");
const clearJournal = document.querySelector("#clearJournal");
const journalText = document.querySelector("#journalText");

function switchView(target) {
  tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === target));
  views.forEach((view) => view.classList.toggle("is-active", view.id === target));
}

function renderStudyCards() {
  studyContainer.innerHTML = studyCards.map((card) => `
    <article class="study-card">
      <div class="fossil-icon ${card.iconClass}" aria-hidden="true">${card.icon}</div>
      <div>
        <h3>${card.title}</h3>
        <p><strong>Fossil:</strong> ${card.fossil}</p>
      </div>
      <p><strong>Clue:</strong> ${card.clue}</p>
      <button class="master-btn ${mastered.has(card.id) ? "is-mastered" : ""}" data-master="${card.id}" type="button">
        ${mastered.has(card.id) ? "Mastered" : "Mark Mastered"}
      </button>
    </article>
  `).join("");
  updateMasteredCount();
}

function updateMasteredCount() {
  masteredCount.textContent = mastered.size;
  localStorage.setItem("masteredFossils", JSON.stringify([...mastered]));
}

function renderLab() {
  specimenList.innerHTML = labItems.map((item) => `
    <button class="specimen" data-specimen="${item.id}" type="button">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </button>
  `).join("");

  const environments = [...labItems]
    .map((item) => item.environment)
    .sort(() => Math.random() - 0.5);

  environmentBoard.innerHTML = environments.map((name) => `
    <button class="environment" data-environment="${name}" type="button">
      <h3>${name}</h3>
      <p>Does this fit the clue?</p>
    </button>
  `).join("");
}

function selectSpecimen(id) {
  selectedSpecimen = labItems.find((item) => item.id === id);
  document.querySelectorAll(".specimen").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.specimen === id);
  });
  labFeedback.textContent = `Selected: ${selectedSpecimen.title}. Now choose the matching environment.`;
}

function checkEnvironment(environmentName) {
  if (!selectedSpecimen) {
    labFeedback.textContent = "Pick a fossil clue first.";
    return;
  }

  const isMatch = selectedSpecimen.environment === environmentName;
  if (isMatch) {
    document.querySelector(`[data-specimen="${selectedSpecimen.id}"]`).classList.add("is-matched");
    document.querySelector(`[data-environment="${environmentName}"]`).classList.add("is-matched");
    labFeedback.textContent = `Correct. ${selectedSpecimen.title} is evidence for a ${environmentName.toLowerCase()}.`;
    selectedSpecimen = null;
    document.querySelectorAll(".specimen").forEach((button) => button.classList.remove("is-selected"));
  } else {
    labFeedback.textContent = `Try again. Ask: where would ${selectedSpecimen.title.toLowerCase()} most likely form or live?`;
  }
}

function resetQuizState() {
  currentQuestion = -1;
  score = 0;
  answered = false;
  scoreEl.textContent = "0";
  totalEl.textContent = quizQuestions.length;
  quizProgress.style.width = "0%";
  quizTitle.textContent = "Ready for a fossil challenge?";
  quizBody.innerHTML = "<p>Answer each question, then read the evidence explanation.</p>";
  nextQuestion.textContent = "Start Quiz";
}

function showQuestion() {
  currentQuestion += 1;
  answered = false;

  if (currentQuestion >= quizQuestions.length) {
    const percent = Math.round((score / quizQuestions.length) * 100);
    quizTitle.textContent = `Quiz complete: ${percent}%`;
    quizBody.innerHTML = `
      <p>You scored ${score} out of ${quizQuestions.length}.</p>
      <p>${percent >= 80 ? "Strong fossil detective work." : "Review the study cards, then try again."}</p>
    `;
    nextQuestion.textContent = "Try Again";
    currentQuestion = -1;
    return;
  }

  const item = quizQuestions[currentQuestion];
  quizTitle.textContent = `Question ${currentQuestion + 1}`;
  quizProgress.style.width = `${(currentQuestion / quizQuestions.length) * 100}%`;
  quizBody.innerHTML = `
    <h3>${item.question}</h3>
    <div class="answer-list">
      ${item.answers.map((answer, index) => `
        <button class="answer" data-answer="${index}" type="button">${answer}</button>
      `).join("")}
    </div>
    <p id="explainBox"></p>
  `;
  nextQuestion.textContent = currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next";
}

function answerQuestion(index) {
  if (answered || currentQuestion < 0) return;
  answered = true;
  const item = quizQuestions[currentQuestion];
  const correct = Number(index) === item.correct;
  if (correct) score += 1;
  scoreEl.textContent = score;
  quizProgress.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;

  document.querySelectorAll(".answer").forEach((button) => {
    const answerIndex = Number(button.dataset.answer);
    button.classList.toggle("is-correct", answerIndex === item.correct);
    button.classList.toggle("is-wrong", answerIndex === Number(index) && !correct);
  });

  document.querySelector("#explainBox").textContent = item.explain;
}

function renderJournalOptions() {
  fossilPick.innerHTML = studyCards.map((card) => `<option value="${card.title}">${card.title}</option>`).join("");
  environmentPick.innerHTML = studyCards.map((card) => `<option value="${card.environment}">${card.environment}</option>`).join("");
  journalText.value = "I think the past environment was __________ because the fossil evidence shows __________.";
}

function getBuilderSentence() {
  const fossil = fossilPick.value;
  const environment = environmentPick.value;
  return `I think the past environment was a ${environment} because the fossil evidence is ${fossil.toLowerCase()}, and that organism or trace fits that kind of place.`;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => switchView(tab.dataset.view));
});

studyContainer.addEventListener("click", (event) => {
  const button = event.target.closest("[data-master]");
  if (!button) return;
  const id = button.dataset.master;
  if (mastered.has(id)) {
    mastered.delete(id);
  } else {
    mastered.add(id);
  }
  renderStudyCards();
});

specimenList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-specimen]");
  if (button) selectSpecimen(button.dataset.specimen);
});

environmentBoard.addEventListener("click", (event) => {
  const button = event.target.closest("[data-environment]");
  if (button) checkEnvironment(button.dataset.environment);
});

quizBody.addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");
  if (button) answerQuestion(button.dataset.answer);
});

nextQuestion.addEventListener("click", showQuestion);
resetQuiz.addEventListener("click", resetQuizState);
buildSentence.addEventListener("click", () => {
  journalText.value = getBuilderSentence();
});
copySentence.addEventListener("click", () => {
  journalText.value = getBuilderSentence();
});
clearJournal.addEventListener("click", () => {
  journalText.value = "";
});

renderStudyCards();
renderLab();
resetQuizState();
renderJournalOptions();
