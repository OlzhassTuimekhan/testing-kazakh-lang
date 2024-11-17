const questions = [
{
      "question": "Сөйлемді толықтырыңыз: Менің атым ______.",
      "options": ["үй", "қала", "кітап", "Айша"],
      "answer": "Айша"
    },
    {
      "question": "Бұл не? деген сұраққа дұрыс жауапты табыңыз:",
      "options": ["Менің атым Айбек.", "Сен қайда тұрасың?", "Мен оқимын.", "Бұл – алма."],
      "answer": "Бұл – алма."
    },
    {
      "question": "Көптік жалғауы дұрыс жалғанған сөзді табыңыз:",
      "options": ["кітап-тер", "үй-лар", "дос-дер", "балалар"],
      "answer": "балалар"
    },
    {
      "question": "Диалогты толықтырыңыз: А: Сен қайда бара жатырсың? Б: Мен ______ бара жатырмын.",
      "options": ["жақсы", "кітап", "кеше", "мектепке"],
      "answer": "мектепке"
    },
    {
      "question": "Сөйлемдегі етістіктің шақтарын анықтаңыз: Мен кеше қалаға бардым.",
      "options": ["Осы шақ", "Бұйрық рай", "Келер шақ", "Өткен шақ"],
      "answer": "Өткен шақ"
    },
    {
      "question": "Төмендегі сөйлемнің мағынасын анықтаңыз: Болашақта қазақ тілін жетік меңгеремін.",
      "options": ["Өткен шақ", "Тілекті білдіру", "Осы шақ", "Арман немесе жоспар"],
      "answer": "Арман немесе жоспар"
    },
    {
      "question": "Синонимін таңдаңыз: Адамгершілік",
      "options": ["Жомарттық", "Мейірімділік", "Әдепсіздік", "Сабырлық"],
      "answer": "Мейірімділік"
    },
    {
      "question": "Дұрыс аудармасын таңдаңыз: Көз қорқақ, қол батыр.",
      "options": ["Глаза боятся, руки делают", "Видеть лучше, чем слышать", "Смелость — половина успеха", "Молчание — золото"],
      "answer": "Глаза боятся, руки делают"
    },
    {
      "question": "Қалай аударылады: 'жер'?",
      "options": ["Небо", "Земля", "Вода", "Воздух"],
      "answer": "Земля"
    },
    {
      "question": "Қазақтың көктемгі теңелу мейрамы қалай аталады?",
      "options": ["Наурыз", "Құрбан айт", "Конституция күні", "Жаңа жыл"],
      "answer": "Наурыз"
    },
    {
      "question": "Сөйлемдегі бастауышты табыңыз: Абай өлең жазды.",
      "options": ["Абай", "өлең", "жазды", "жоқ"],
      "answer": "Абай"
    },
    {
      "question": "Қазақ тіліндегі ең негізгі үш диалектті атаңыз:",
      "options": ["Батыс, Шығыс, Оңтүстік", "Солтүстік, Орталық, Батыс", "Оңтүстік, Солтүстік, Шығыс", "Батыс, Орталық, Шығыс"],
      "answer": "Батыс, Шығыс, Оңтүстік"
    },
    {
      "question": "Төмендегі сөйлемді толықтырыңыз: ______ әр адамның парызы.",
      "options": ["Оқу", "Азық", "Жұмыс", "Тамақ"],
      "answer": "Оқу"
    },
    {
      "question": "«Кітап» сөзінің аудармасын таңдаңыз:",
      "options": ["Book", "Notebook", "Library", "Pen"],
      "answer": "Book"
    },
    {
      "question": "«Сәлемдесу» дәстүрі нені білдіреді?",
      "options": ["Амандық сұрау", "Дұға оқу", "Тамақ беру", "Той жасау"],
      "answer": "Амандық сұрау"
    },
    {
      "question": "Сөйлемнің дұрыс аудармасын таңдаңыз: Мен қазақша сөйлеуді үйреніп жүрмін.",
      "options": ["I am learning to speak Kazakh.", "I learned Kazakh.", "I will speak Kazakh.", "I forgot Kazakh."],
      "answer": "I am learning to speak Kazakh."
    },
    {
      "question": "«Тілім» сөзінің синонимін табыңыз:",
      "options": ["Ана тілім", "Кітап", "Дос", "Оқу"],
      "answer": "Ана тілім"
    },
    {
      "question": "«Алма» қай сөз табына жатады?",
      "options": ["Зат есім", "Сан есім", "Етістік", "Сын есім"],
      "answer": "Зат есім"
    },
    {
      "question": "Мына сөйлемдегі етістікті көрсетіңіз: Мен далада ойнап жүрмін.",
      "options": ["Мен", "далада", "ойнап жүрмін", "жоқ"],
      "answer": "ойнап жүрмін"
    },
    {
      "question": "«Тау» сөзінің көпше түрін табыңыз:",
      "options": ["Тау", "Таулар", "Тауларды", "Тауға"],
      "answer": "Таулар"
    },
    {
      "question": "«Дала» сөзі қайда орналасқан?",
      "options": ["Табиғатта", "Ас үйде", "Мектепте", "Қалада"],
      "answer": "Табиғатта"
    },
    {
      "question": "Төмендегі сөйлемнің дұрыс аудармасын таңдаңыз: Біздің ауыл таудың жанында орналасқан.",
      "options": ["Our village is near the mountain.", "Our city is in the mountain.", "Our mountain is near the forest.", "The mountain is near our village."],
      "answer": "Our village is near the mountain."
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
      "question": "«Сәукеле» нені білдіреді?",
      "options": ["Ұлттық бас киім", "Сәнді аяқ киім", "Ағаш ыдыс", "Қазақ үй"],
      "answer": "Ұлттық бас киім"
    },
    {
      "question": "«Жаз» қай мезгілді білдіреді?",
      "options": ["Көктем", "Қыс", "Жаз", "Күз"],
      "answer": "Жаз"
    },
    {
      "question": "«Мектеп» қай ұғымға жатады?",
      "options": ["Оқу орны", "Мейрамхана", "Саябақ", "Дүкен"],
      "answer": "Оқу орны"
    },
    {
      "question": "Қазақ тілінде «сұрақ» сөзі нені білдіреді?",
      "options": ["Question", "Answer", "Statement", "Request"],
      "answer": "Question"
    },
    {
      "question": "Төмендегі сандарды дұрыс аударыңыз: 10.",
      "options": ["Он", "Бес", "Жеті", "Тоғыз"],
      "answer": "Он"
    },
    {
      "question": "«Туған жер» сөзі қандай мағынаны білдіреді?",
      "options": ["Ана", "Отан", "Су", "Дос"],
      "answer": "Отан"
    },
    {
      "question": "Қазақ халқының негізгі дәстүрін таңдаңыз:",
      "options": ["Бата беру", "Торт пісіру", "Кино көру", "Саяхаттау"],
      "answer": "Бата беру"
    },
    {
      "question": "«Дос» сөзі қандай ұғымды білдіреді?",
      "options": ["Сенімді адам", "Таныс", "Көрші", "Бәсекелес"],
      "answer": "Сенімді адам"
    },
    {
      "question": "«Күз» сөзінің синонимін табыңыз:",
      "options": ["Жапырақ түсі", "Қыстың басы", "Жаздың соңы", "Көктемнің басы"],
      "answer": "Жапырақ түсі"
    },
    {
      "question": "«Қазақ тілі» мемлекеттік тіл ретінде қашан бекітілді?",
      "options": ["1989 жыл", "1991 жыл", "2000 жыл", "1995 жыл"],
      "answer": "1989 жыл"
    },
    {
      "question": "«Қазақстан ______ бай ел.",
      "options": ["табиғаты", "ауасы", "байлығы", "адамдары"],
      "answer": "табиғаты"
    },
    {
      "question": "Қазақ халқының төл мерекесін таңдаңыз:",
      "options": ["Наурыз мейрамы", "Жаңа жыл", "Рождество", "Киелі күн"],
      "answer": "Наурыз мейрамы"
    },
    {
      "question": "Қазақ халқының төл мерекесін таңдаңыз:",
      "options": ["Наурыз мейрамы", "Жаңа жыл", "Рождество", "Киелі күн"],
      "answer": "Наурыз мейрамы"
    },
    {
      "question": "Төмендегі сөздердің ішінен антонимін таңдаңыз: Үлкен",
      "options": ["Кіші", "Жақсы", "Әдемі", "Биік"],
      "answer": "Кіші"
    },
    {
      "question": "Төмендегі сөйлемнің дұрыс жалғасын табыңыз: Менің досым ______.",
      "options": ["жақсы адам", "кітап", "қала", "үй"],
      "answer": "жақсы адам"
    },
    {
      "question": "«Қонақжайлылық» қандай дәстүрді білдіреді?",
      "options": ["Қонақты құрметтеу", "Тамақтан бас тарту", "Ұрыс-керіс", "Сыйлық беру"],
      "answer": "Қонақты құрметтеу"
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