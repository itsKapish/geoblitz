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
        question: "Diversity and Inclusion aims to provide equal opportunities to all humans regarless of age, gender, race, ethnicity, religion, abilities and sexual orientation, especially in the workplace and education fields. Which is one major pivotal moment that contributed to the rise of diversity and inclusion in the workplace?",
        options: ["Civil Rights Movement", "World War 2", "French Revolution", "The First Indian War of Independence"],
        correct: "Civil Rights Movement",
        img: "epd5.png",
    },
    
    {
        id: "1",
        question: "On January 1 1863, a famous proclamation was declared by the then president of the United States, President Abraham Lincoln. This act aimed towards the abolishment of slavery, a landmark event in the struggle for civil rights for African Americans and Black ethnic groups. Which act was this?",
        options: ["The Emancipation Proclamation", "Jim Crow Laws", "Proclamation of Neutrality", "The 13th Amendment"],
        correct: "The Emancipation Proclamation",
        img: "epd7.png",
    },

    {
        id: "2",
        question: "The Universal Declaration of Human Rights is an international document published by the United Nations which grants all Humans (without discrimination) a set of equal 'Human Rights'. Article 23 of this grants equal pay, free choice of employment, and to just and favourable conditions of work. Which right does Article 23 mainly talk about?",
        options: ["Right to Adequate Standard of Living", "Right to Equal Pay", "Right to Freedom of Speech and Expression", "Right to Work"],
        correct: "Right to Work",
        img: "epd8.png",
    },

    {
        id: "3",
        question: "There are two key socio-economic concepts, Equality and Equity, in the workplace. Equality aims to treat each individual the same an grants each individual equal resources and opportunities. What does Equity aim to do?",
        options: ["Provide opportunities based on individal needs", "Not provide opportunities to anyone", "Provide Opportunities based on income generated", "Provide Opportunities based on race or gender"],
        correct: "Provide opportunities based on individal needs",
        img: "epd4.png",
    },

    {
        id: "4",
        question: "A prominent Black Muslim leader, he is known for his tough values of reciprocation and self-defense as he leaded Black ethnic groups for gaining Civil rights during the 1950s-60s. In one of his famous speeches, he said that the civil rights would be attained either 'by the ballot or the bullet'. Who is this person? ",
        options: ["Martin Luther King Jr.", "Thurgood Marshall", "Malcolm X", "Nelson Mandela"],
        correct: "Malcolm X",
        img: "epd6.png",
    },

    {
        id: "5",
        question: "Diversity and Inclusion aims for equal representation for ages, gender, ethnicity, physical ability and neurodiversity in the workplace and in institutions. Why do we require diversity of humans in the workplace?",
        options: ["Corporations can increase profit by supporting diversity", "Perspectives from all sides can be considered in order to tackle challenges", "To promote Segregation", "To avoid Discrimination of individuals"],
        correct: "Perspectives from all sides can be considered in order to tackle challenges",
        img: "epd3.png",
    },

    {
        id: "6",
        question: "Diversity and Inclusion also talks about inclusion of people regardless of sexual orientation. Which community does this aim to incorporate?",
        options: ["African-Americans", "Neurodivergent Communities", "Latinos", "LGBTQ+"],
        correct: "LGBTQ+",
        img: "epd9.png",
    },

    {
        id: "7",
        question: "Freedom of Speech and Expression was one of the major rights that Black ethnic groups and communities fought for in the United States. Which major musical and cultural art forms did Black ethnic groups use to express themselves throughout the 20th Century?",
        options: ["Folk Music", "Classical Music", "Jazz and Hip Hop", "Pop Music"],
        correct: "Jazz and Hip Hop",
        img: "epd2.png",
    },

    {
        id: "8",
        question: "Which process has majorly helped to fuel diversity and inclusion amongst international institutions and corporations in the 21st Century?",
        options: ["Glocalization", "Decolonization", "Globalization", "Industrialization"],
        correct: "Globalization",
        img: "epd10.png",
    },

    {
        id: "9",
        question: "The Montgomery Bus Boycott was a mass 13-month long boycott of the public bus system in response to segregation of bus seating according to race in Montgomery, Alabama, United States. Which female leaders helped to propagate the Montgomery Bus Boycott?",
        options: ["Jo Ann Robinson and Dorothy Height", "Rosa Parks and Jo Ann Robinson", "Ella Baker and Rosa Parks", "Mother Teresa and Florence Nightingale"],
        correct: "Rosa Parks and Jo Ann Robinson",
        img: "epd1.png",
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
