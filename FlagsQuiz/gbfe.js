//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let prevBtn = document.getElementById("prev-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
var pos = 0;
//Questions and Options array
const quizArray = [ 
    { 
        id: "0",
        question: "Which country does this flag belong to?",
        options: ["Russia", "Iran", "Iraq", "Netherlands"],
        correct: "Russia",
        img: "rusf.png",
    },

    {
        id: "1",
        question: "Which country does this flag belong to?",
        options: ["United States of America", "Malaysia", "United Kingdom", "Liberia"],
        correct: "United States of America",
        img: "usaf.png",
    },

    {
        id: "2",
        question: "Which country does this flag belong to?",
        options: ["Ivory Coast", "Niger", "Ireland", "India"],
        correct: "India",
        img: "indf.png",
    },

    {
        id: "3",
        question: "Which country does this flag belong to?",
        options: ["Armenia", "Germany", "Belgium", "Uganda"],
        correct: "Germany",
        img: "grmf.png",
    },

    {
        id: "4",
        question: "Which country does this flag belong to?",
        options: ["New Zealand", "United Kingdom", "Australia", "Fiji"],
        correct: "United Kingdom",
        img: "ukbf.png",
    },

    {
        id: "5",
        question: "Which country does this flag belong to?",
        options: ["Jamaica", "Turkmenistan", "Zambia", "Brazil"],
        correct: "Brazil",
        img: "brzf.png",
    },

    {
        id: "6",
        question: "Which country does this flag belong to?",
        options: ["South Korea", "Vietnam", "Bangladesh", "Japan"],
        correct: "Japan",
        img: "jpnf.png",
    },

    {
        id: "7",
        question: "Which country does this flag belong to?",
        options: ["Sudan", "Kenya", "South Africa", "South Sudan"],
        correct: "South Africa",
        img: "saff.png",
    },

    {
        id: "8",
        question: "Which country does this flag belong to?",
        options: ["Morocco", "China", "Russia", "Vietnam"],
        correct: "China",
        img: "chnf.png",
    },

    {
        id: "9",
        question: "Which country does this flag belong to?",
        options: ["Panama", "France", "Luxembourg", "Serbia"],
        correct: "France",
        img: "frcf.png",
    },

    {
        id: "10",
        question: "Which country does this flag belong to?",
        options: ["Turkey", "Poland", "Canada", "Lebanon"],
        correct: "Canada",
        img: "cndf.png",
    },

    {
        id: "11",
        question: "Which country does this flag belong to?",
        options: ["Peru", "Montenegro", "Mexico", "Spain"],
        correct: "Spain",
        img: "spnf.png",
    },

    {
        id: "12",
        question: "Which country does this flag belong to?",
        options: ["Australia", "New Zealand", "Fiji", "Tuvalu"],
        correct: "Australia",
        img: "ausf.png",
    },

];
//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});
//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score 
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);
//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};
//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};
//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        //img = quizArray[0].img;
        div.innerHTML += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<img class='img1' src=" + i.img + "><br>"; // Changed from quizArray[i].img to i.img
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}
//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }
    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}
//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0; 
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}
//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});
//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};
