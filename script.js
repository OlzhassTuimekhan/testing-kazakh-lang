const questions = [
    {
      "question": "«Сұлу» сөзінің синонимін табыңыз.",
      "options": [ "Әдепті", "Әдемі", "Сыпайы", "Салмақты" ],
      "answer": "Әдемі"
    },
    {
      "question": "Буын түрін анықтаңыз.",
      "options": [ "Тұйық", "Жалғау", "Жалаң", "Тасымал" ],
      "answer": "Тұйық"
    },
    {
      "question": "Көптік жалғауы дұрыс жалғанған сөзді табыңыз:",
      "options": ["кітап-тер", "үй-лар", "дос-дер", "балалар"],
      "answer": "балалар"
    },
    {
      "question": "Қазақ халқының ұлттық ойынын белгілеңіз.",
      "options": [ "Шахмат", "Дойбы", "Лото", "Тоғызқұмалақ" ],
      "answer": "Тоғызқұмалақ"
    },
    {
      "question": "«Қоян жүрек» фразеологизмінің антонимін табыңыз.",
      "options": [ "Қорқақ", "Әлсіз", "Батыр", "Күшті" ],
      "answer": "Батыр"
    },
    {
      "question": "Төмендегі сөйлемнің мағынасын анықтаңыз: Болашақта қазақ тілін жетік меңгеремін.",
      "options": ["Өткен шақ", "Тілекті білдіру", "Осы шақ", "Арман немесе жоспар"],
      "answer": "Арман немесе жоспар"
    },
    {
      "question": " Жалғауы ұяң дауыссыздан басталып тұрған сөзді табыңыз:",
      "options": [ "Оқушылар", "Көйлектер", "Қонақтар", "Қайындар" ],
      "answer": "Қайындар"
    },
    {
      "question": "Сөйлемдегі есімдіктердің түрін анықтаңыз: Мен ешқашан елімді сатпаймын!",
      "options": [ "Сілтеу, жалпылау", "Жіктеу, болымсыздық", "Жіктеу, сілтеу", "Жалпылау, белгісіздік" ],
      "answer": "Жіктеу, болымсыздық"
    },
    {
      "question": "Тек үнді дауыссыздары бар сөзді табыңыз.",
      "options": [ "Сапар", "Айман", "Алпыс", "Азат" ],
      "answer": "Айман"
    },
    {
      "question": "Шартты райлы етістікті табыңыз.",
      "options": [ "Ертең мектепке кел.", "Содан кейін мені сына.", "Жүкті шешпе, үйді әуре қыласың.", "Бір көрсем, арманым болмас еді." ],
      "answer": "Бір көрсем, арманым болмас еді."
    },
    {
      "question": "Сөйлемдегі бастауышты табыңыз: Абай өлең жазды.",
      "options": ["Абай", "өлең", "жазды", "жоқ"],
      "answer": "Абай"
    },
    {
      "question": "Баяндауышты табыңыз: Күзде жыл құстары жылы жаққа ұшып кетеді.",
      "options": [ "Күзде", "Жыл құстары", ";Жылы жаққа", "Ұшып кетеді" ],
      "answer": "Ұшып кетеді"
    },
    {
      "question": "Бірыңғай тұйық буынды сөздерді көрсетіңіз.",
      "options": [ "Ең, өте, тым.", "Аш, ат, от.", "Есім, мысал, көп.", "Ет, кет, аса." ],
      "answer": "Аш, ат, от."
    },
    {
      "question": "Тәуелденген сын есімді табыңыз.",
      "options": [ "Айтарың бар ма?", "Сенің балаң.", "Ешкімің жоқ.", "Жақсың қайсы?" ],
      "answer": "Сенің балаң."
    },
    {
      "question": "Реттік сан есім нені білдіретінін көрсетіңіз.",
      "options": [ " Заттың санын бөлшектеп көрсетеді.", "Заттың дәл нақты санын білдіреді.", "Заттың реттік санын білдіреді.", "Заттың санын жинақтап көрсетеді." ],
      "answer": "Заттың реттік санын білдіреді."
    },
    {
      "question": "Жекіру одағайын табыңыз.",
      "options": [ "Әттеген - ай.", "Тәйт.", "Беу.", "Моһ - моһ" ],
      "answer": "Тәйт."
    },
    {
      "question": "Буынға бөлінбейтін сөзді белгілеңіз.",
      "options": [ "Серт", "Уәде", "Болжам", "Әділхан" ],
      "answer": "Серт"
    },
    {
      "question": "Сөздің басында кездеспейтін дауыссыз дыбыстарды көрсетіңіз.",
      "options": [ " Ж, 3.", "Л, Р.", " Ң, Й.", "Ң, Г." ],
      "answer": " Ң, Й."
    },
    {
      "question": "Дара сын есімді көрсетіңіз.",
      "options": [ "Ақ.", "Қара ала.", "Қызыл сары.", "Сары ала." ],
      "answer": "Ақ."
    },
    {
      "question": "Оқшау сөздер түрлерін анықтаңыз.",
      "options": [ "Қыстырма сөз, қаратпа сез, одағай.", "Шылау, үстеу.", " Жұрнақтар, септіктер.", "Қыстырма сөз, қос сез." ],
      "answer": "Қыстырма сөз, қаратпа сез, одағай."
    },
    {
      "question": "Антоним сөздерді табыңыз:",
      "options": [ "Әдейі, арнайы.", "Биік, аласа", "Қатал,мықты", "Ыстық,жылы" ],
      "answer": "Биік, аласа"
    },
    {
      "question": " Дауыстылардың тілдің қатысына қарай түрлерін белгілеңіз.",
      "options": [ "Үнді, қатаң.", "Езулік, еріндік.", "Жуан, жіңішке.", "Ашық, қысаң." ],
      "answer": "Жуан, жіңішке."
    },
    {
      "question": "«Қазақ тілі» қай тілдік топқа жатады?",
      "options": ["Түркі тілдері", "Славян тілдері", "Роман тілдері", "Герман тілдері"],
      "answer": "Түркі тілдері"
    },
    {
      "question": "Қазақтың ұлттық тағамын таңдаңыз:",
      "options": ["Бешбармақ", "Пицца", "Суши", "Бургер"],
      "answer": "Бешбармақ"
    },
    {
      "question": "Үнді дауыссыздарды көрсетіңіз.",
      "options": [ "K, Л, М, Н...", " Р, Л, М, И...", "С, У, Ш, Ң...", "Ң, Р, Л, М.." ],
      "answer": "Ң, Р, Л, М.."
    },
    {
      "question": " Мақалды толықтырыңыз: «Отансыз ... - ормансыз бұлбұл»",
      "options": [ "Аспан", "Ер", "Адам", "Ел" ],
      "answer": "Адам"
    },
    {
      "question": "Жұрнағы бар сөзді анықтаңыз.",
      "options": [ "Мемлекетте", "Мемлекеті", "Мемлекетім", "Мемлекеттік" ],
      "answer": "Мемлекеттік"
    },
    {
      "question": " Қалау райда тұрған сөзді табыңыз.",
      "options": [ "Айтқым келеді.", "Айтуға болады.", "Айтып отыр.", "Айтса." ],
      "answer": "Айтқым келеді."
    },
    {
      "question": "Есептік сан есімді табыңыз.",
      "options": [ "Он", "Бесінші", "Үш-үштен", "Алтау" ],
      "answer": "Он"
    },
    {
      "question": "Қыстырма сөзді табыңыз.",
      "options": [ "Ой.", "Мүмкін.", "Сары.", "Досым." ],
      "answer": "Мүмкін."
    },
    {
      "question": "Қазақ халқының негізгі дәстүрін таңдаңыз:",
      "options": ["Бата беру", "Торт пісіру", "Кино көру", "Саяхаттау"],
      "answer": "Бата беру"
    },
    {
      "question": " Болымсыздық есімдігін белгілеңіз",
      "options": [ "Ешкім, ешқайсысы.", "Бірдеме, біреу.", "Түгел, тегіс.", " Өзің, өздері." ],
      "answer": "Ешкім, ешқайсысы."
    },
    {
      "question": " Пысықтауышты табыңыз: Биыл Қазақстан тәуелсіздігінің 33 жылдығын тойлады.",
      "options": [ "Тойлады", "Қазақстан", "Тәуелсіздігінің", "Биыл" ],
      "answer": "Биыл"
    },
    {
      "question": "«Қазақ тілі» мемлекеттік тіл ретінде қашан бекітілді?",
      "options": ["1989 жыл", "1991 жыл", "2000 жыл", "1995 жыл"],
      "answer": "1989 жыл"
    },
    {
      "question": "Сабақтас құрмалас сөйлемнің қай түріне жататын анықтаңыз. Ол жақсы оқыса,университетке түседі. ",
      "options": [ "Қарсылықты", "Шартты", "Мақсат", "Мезгіл" ],
      "answer": "Шартты"
    },
    {
      "question": "Тура мағыналы сөзді табыңыз.",
      "options": [ "Суық сөз.", "Ыстық ықылас.", "Ақ ниетті.", "Жақсы адам." ],
      "answer": "Жақсы адам."
    },
    {
      "question": "Қалау райлы етістіктің жұрнағын көрсетіңіз.",
      "options": [ "- а, - е, - й.", "- ғы, - п.", "- ның, - нің.", "- мын, - мін." ],
      "answer": "- ғы, - п."
    },
    {
      "question": "Күзден кейін келетін жыл мезгілін көрсетіңіз.",
      "options": [ "Көктем", "Қыс", "Жаз", "Күз" ],
      "answer": "Қыс"
    },
    {
      "question": "Сұрау есімдіктерін көрсетіңіз.",
      "options": [ "Кім,не.", "Ешкім,ештеңе", "Олар,сендер", "Анау,мынау." ],
      "answer": "Кім,не."
    },
    {
      "question": "Буынға дұрыс бөлінген сөзді көрсетіңіз.",
      "options": [ "Кө-зіл-дір-ік.", "Көз-іл-дір-ік.", "Кө-зіл-ді-рік.", "Көз-іл-ді-рік." ],
      "answer": "Кө-зіл-ді-рік."
    }

  ];


let currentQuestionIndex = 0;
let score = 0;
let timerInterval; // Variable to hold the timer interval

function displayQuestion() {
  const questionContainer = document.getElementById("question");
  const optionsContainer = document.getElementById("options");

  questionContainer.innerHTML = "";
  optionsContainer.innerHTML = "";

  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () => checkAnswer(option);
    button.style.marginBottom = "10px"; // Optional styling
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    clearInterval(timerInterval); // Stop the timer when the test ends
    calculateLevel();
  }
}
function calculateLevel() {
  const totalQuestions = questions.length;
  const percentage = (score / totalQuestions) * 100;

  let level;
  if (percentage >= 90) {
    level = "C";
  } else if (percentage >= 75) {
    level = "B2";
  } else if (percentage >= 50) {
    level = "B1";
  } else if (percentage >= 25) {
    level = "A2";
  } else {
    level = "A1";
  }

  // Create a result object for this test
  const result = {
    date: new Date().toLocaleString(), // Add the date and time
    score: score,
    totalQuestions: totalQuestions,
    percentage: percentage.toFixed(2),
    level: level,
  };

  // Retrieve existing results from localStorage or initialize a new array
  const storedResults = JSON.parse(localStorage.getItem("testResults")) || [];
  storedResults.push(result); // Add the current result to the array

  // Save the updated array back to localStorage
  localStorage.setItem("testResults", JSON.stringify(storedResults));

  // Show the "See Results" button
  document.getElementById("see-results-btn").style.display = "inline-block";
  window.location.href = "results.html";
}





// Show an alert with the test information and start the quiz
window.onload = function () {
  const modal = document.getElementById("start-modal");
  const startButton = document.getElementById("start-btn");

  // Show the modal
  modal.style.display = "flex";

  // Start the quiz and close the modal when the button is clicked
  startButton.onclick = function () {
    modal.style.display = "none";
    startTimer(20 * 60); // Start a 20-minute timer
    displayQuestion(); // Start the quiz
  };
};


// Timer function
function startTimer(duration) {
  const timerDisplay = document.getElementById("timer");
  let timeRemaining = duration;

  timerInterval = setInterval(() => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    timerDisplay.innerText = `Уақыт: ${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert("Уақыт аяқталды!");
      calculateLevel();
    }

    timeRemaining--;
  }, 1000);
}
