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
let count = 31; 
let countdown;
var pos = 0;
//Questions and Options array
const quizArray = [ 
    { 
        id: "0",
        question: "A Western European country is slowly transforming into a destert. The United Nations estimates that 74% of this country is currently undergoing desertification. A severe water deficit coupled with long-lasting droughts has resulted in food being more expensive. Which country is this?",
        options: ["Spain", "Andorra", "Portugal", "France"],
        correct: "Spain",
        img: "epg5.png", 
    },
    
    {
        id: "1",
        question: "The Planet is warming up at an alarming rate, soon reaching a point to a catastrophic bleaching event for coral reefs located in the Great Barrier Reef. However, in a particular ocean, there is hope for marine ecosystems as a coral superhighway is forming due to ocean currents carrying larvae which are forming new coral reefs in an area spread over a million square kilometres. Which ocean is this?",
        options: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"],
        correct: "Indian Ocean",
        img: "epg7.png",
    },

    {
        id: "2",
        question: "Since 1880, the average global temperature has increased by about 1 degrees Celsius. What is the projected rise in average global temperature since 1880 for 2050 (in degrees Celsius)?",
        options: ["2.5", "3", "2", "1.5"],
        correct: "1.5",
        img: "epg8.png",
    },

    {
        id: "3",
        question: "As human activities keep devastating the environment, the IUCN Red List established in 1964 helps us to understand on how large a scale are human activities impacting our ecosystems. What does the IUCN Red List represent?",
        options: ["A measure of Air Pollution in cities around the World", "A list of Threatened Forests around the World", "A list of major Natural disasters as a result of Human activities", "A list of Threatened, Endangered and Extinct Species"],
        correct: "A list of Threatened, Endangered and Extinct Species",
        img: "epg4.png",
    },

    {
        id: "4",
        question: "The 6th Annual World Air Quality Report of the world's most polluted regions in 2023, published by IQAir, an organization in Switzerland reported that the most polluted metropolitan area of 2023 was in India. Which city was this?",
        options: ["New Delhi", "Begusarai", "Bangalore", "Dispur"],
        correct: "Begusarai",
        img: "epg6.png",
    },

    {
        id: "5",
        question: "In California, many scientists are debating over the existence of a potential river in the atmosphere which could be a scientifically plausible explanation for the massive floods in California. What is the name given to this major atmospheric body of water?",
        options: ["The Californian MegaStorm", "Californian MegaRiver", "The Californian Flood", "ARkStorm"],
        correct: "ARkStorm",
        img: "epg3.png",
    },

    {
        id: "6",
        question: "Sand Batteries are amongst the many technological innovations created to help the environment and the balance of ecosystems. These are a type of Thermal Batteries used to store thermal energy at high temperatures which is generated from Solar Energy when sunlight is present during the Summer Months and used to heat homes during the Winter Months. In which country firstly has this been successfully implemented?",
        options: ["Russia", "Finland", "Canada", "Denmark"],
        correct: "Finland",
        img: "epg9.png",
    },

    {
        id: "7",
        question: "Lithium-ion batteries, which are rechargeable might appear to be a sustainable replacement for Lead-acid batteries at first, however they require large amounts of water, mining and extraction which damages the environment. These batteries also require Cobalt and other metals, which have to be mined for in forest habitats. Which continent contains the highest reserves of Lithium and produces the most Lithium?",
        options: ["Asia", "North America", "South America", "Oceania"],
        correct: "South America",
        img: "epg2.png",
    },

    {
        id: "8",
        question: "A new method of reducing Carbon dioxide emissions in the Atmosphere is Carbon Capture. This method aims to capture Carbon Dioxide from the atmosphere and store it, but where does this method aim to store Carbon Dioxide?",
        options: ["Outer Space", "Below Ice Sheets", "Rock Formations Underground", "Deep Trenches in Oceans"],
        correct: "Rock Formations Underground",
        img: "epg10.png",
    },

    {
        id: "9",
        question: "A collaboration between two organizations, WWF and Intel, in 2018 has deployed Artificial Intelligence to protect wild tigers and their habitats, by monitoring tigers. In which country has this been implemented in?",
        options: ["India", "China", "Vietnam", "Cambodia"],
        correct: "China",
        img: "epg1.png",
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
            count = 31;
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
    count = 31;
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
