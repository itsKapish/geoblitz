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
        question: "On 7th October 2023, Palestinian militant group Hamas, attacked Israel from the Gaza Strip, in the process breaching Israel's presumably impenetrable defenses. The attack sprang an all-out war between Hamas and Israel, sparking a regional conflict in the Middle East. This conflict dates back to the End of World War I, when a major superpower promised both Arab tribes and Jews their own homeland in the same geographical region in order to gain their support. Which superpower was this?",
        options: ["British Empire", "Ottoman Empire", "United States of America", "Imperial Germany"],
        correct: "British Empire",
        img: "epg5.jpg", 
    },
    
    {
        id: "1",
        question: "On February 24 2022, Russia led its troops into Ukranian territory, sparking a long and brutal conflict enduring till this date. This conflict also led to massive inflation in Oil prices across the world. However, this conflict began in 2014 when a smaller territory (province) of Ukraine was invaded. What was this region?",
        options: ["Crimea", "Donbas", "Odessa", "Donetsk"],
        correct: "Crimea",
        img: "epg7.png",
    },

    {
        id: "2",
        question: "Russia has used aerial warfare throughout the war to sabotage Ukraine's critical infrastructure such as electricity and communication through the deployment of missiles in airstrikes. These missiles navigate and function using microchips, manufactured by corporations. From which geographical region did Russia import $1.7 Billion worth of microchips in 2023?",
        options: ["Eastern Europe", "Germany", "China", "United States and Western Europe"],
        correct: "United States and Western Europe",
        img: "epg8.jpg",
    },

    {
        id: "3",
        question: "China has recently been agressively claiming disputed territories in a particular marine body, which is also claimed by many other Asian countries. China has constructed artificial islands enabling it to claim areas of this marine body to access a plethora of natural resources. Which marine body is this?",
        options: ["Yellow Sea", "Sea of Japan", "Bay of Bengal", "South China Sea"],
        correct: "South China Sea",
        img: "epg4.jpg",
    },

    {
        id: "4",
        question: "In the late 1990s, a conflict sprang up between two nations where ethnic Albanians opposed ethnic Serb and Yugoslavian rule. While the conflict was majorly resolved by the North Atlantic Treaty Organization (NATO), the conflict still continues today between Serbia and one other nation, which Serbia does not recognize as an independent country. Which country is this?",
        options: ["Albania", "Kosovo", "Bosnia and Herzegovina", "Croatia"],
        correct: "Kosovo",
        img: "epg6.jpg",
    },

    {
        id: "5",
        question: "Argentina is a South American nation stuck in a major debt crisis, with its debt exceeding $400 Billion. Approximately $110 Billion is owed to the International Monetary Fund (IMF). The citizens desperately hope that Argentina's newly elected president can bring an economic transformation. What is the president's name?",
        options: ["Bernardino Rivadavia", "Alberto Fernández", "Sergio Massa", "Javier Milei"],
        correct: "Javier Milei",
        img: "epg3.png",
    },

    {
        id: "6",
        question: "The recent Israel-Hamas war has sparked a regional conflict. In response to the Israel counterattack, Houthi Rebels from Yemen have started attacking commercial vessels such as cargo ships which pass through a strait acting as a 'choke point', threatening to halt 30% of all global container traffic impacting maritime trade and the global economy. Which strait is this?",
        options: ["Suez Canal", "Baba-al Mandeb Strait", "Strait of Hormuz", "Malacca Strait"],
        correct: "Baba-al Mandeb Strait",
        img: "epg9.png",
    },

    {
        id: "7",
        question: "Two neighbouring countries in the European Union are polar opposites in terms of their stance on Nuclear energy generation. One country generates 68% of its Electricity through Nuclear power plants while the other country generates 0% of its Electricty through Nuclear power plants. This country used to have nuclear power plants but through anti-nuclear protests and governmental policies, shut their nuclear power plants down. Which two countries are these?",
        options: ["United Kingdom and the Ireland", "Russia and Finland", "France and Germany", "Russia and Lithuania"],
        correct: "France and Germany",
        img: "epg2.jpg",
    },

    {
        id: "8",
        question: "In January 2024, a change of governance of a country bought in a online trolling campaign and war on the social media platform X amongst two Asian countries. Which are these two countries?",
        options: ["India and Pakistan", "China and Taiwan", "India and Maldives", "Japan and South Korea"],
        correct: "India and Maldives",
        img: "epg10.png",
    },

    {
        id: "9",
        question: "What is the name of the famous Russian opposition leader to Vladimir Putin whom citizens hoped could bring positive impact to Russia, who also recently died?",
        options: ["Yevgeny Prigozhin", "Alexey Navalny", "Igor Shuvalov", "Alexander Zukhov"],
        correct: "Alexey Navalny",
        img: "epg1.jpg",
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
