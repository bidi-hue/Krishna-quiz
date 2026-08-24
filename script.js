const questions = [
    {
        question: "Krishna, you wake up 20 minutes late for class. What's your first move?",
        options: [
            {
                text: "🏃 Get ready immediately",
                funny: "WOW. You actually chose responsibility. Suspicious.",
                score: 1
            },
            {
                text: "😴 Sleep 5 more minutes",
                funny: "Five minutes later... it's tomorrow.",
                score: 0
            },
            {
                text: "📱 Check Instagram first",
                funny: "Education can wait. Memes cannot.",
                score: 0
            },
            {
                text: "😭 Accept defeat and stay in bed",
                funny: "The blanket wins another battle.",
                score: 0
            }
        ]
    },

    {
        question: "Someone texts: 'We need to talk.'",
        options: [
            {
                text: "😰 Panic instantly",
                funny: "Nobody accused you yet!",
                score: 1
            },
            {
                text: "😎 Reply 'Okay?'",
                funny: "Too calm... suspicious behaviour.",
                score: 0
            },
            {
                text: "👻 Ignore the message",
                funny: "If I don't reply, the problem disappears. Right?",
                score: 0
            },
            {
                text: "📞 Call immediately",
                funny: "Bravery level: Unlocked.",
                score: 1
            }
        ]
    },

    {
        question: "Your friend says 'I'm outside.' What are you ACTUALLY doing?",
        options: [
            {
                text: "🚪 Already outside",
                funny: "Prepared? Are you even Krishna?",
                score: 1
            },
            {
                text: "👕 Still wearing a towel",
                funny: "COMINGGGG... in 27 minutes.",
                score: 0
            },
            {
                text: "🛏️ Still in bed",
                funny: "The lie '2 minutes' has entered the chat.",
                score: 0
            },
            {
                text: "📱 Typing 'Coming'",
                funny: "Oscar-worthy acting.",
                score: 0
            }
        ]
    },

    {
        question: "You have ₹500. You're told NOT to spend it.",
        options: [
            {
                text: "💰 Save it",
                funny: "CA energy detected.",
                score: 1
            },
            {
                text: "🍔 Buy food",
                funny: "A necessary investment in happiness.",
                score: 0
            },
            {
                text: "🛍️ Buy something random",
                funny: "Need? No. Want? Absolutely.",
                score: 0
            },
            {
                text: "💸 Somehow spend ₹700",
                funny: "Math has left the chat.",
                score: 0
            }
        ]
    },

    {
        question: "Alarm rings at 7:00 AM.",
        options: [
            {
                text: "⏰ Wake up immediately",
                funny: "This option is almost mythical.",
                score: 1
            },
            {
                text: "😴 Snooze once",
                funny: "One snooze becomes seventeen.",
                score: 0
            },
            {
                text: "🛌 Snooze forever",
                funny: "The alarm is crying now.",
                score: 0
            },
            {
                text: "💀 Turn it off completely",
                funny: "Good morning... at 11:48 AM.",
                score: 0
            }
        ]
    }
];


let currentQuestion = 0;
let score = 0;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const reactionEl = document.getElementById("reaction");
const nextBtn = document.getElementById("next-btn");

const scoreEl = document.getElementById("score");
const resultMessage = document.getElementById("result-message");
const finalRoast = document.getElementById("final-roast");

document.getElementById("total-questions").textContent =
    questions.length;


document.getElementById("start-btn").addEventListener("click", () => {

    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
});


function showQuestion() {

    reactionEl.textContent = "";
    nextBtn.classList.add("hidden");

    answersEl.innerHTML = "";
    answersEl.classList.remove("answered");

    document.getElementById("question-number").textContent =
        currentQuestion + 1;

    const question = questions[currentQuestion];

    questionEl.textContent = question.question;


    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = `answer-btn float-${index + 1}`;

        button.textContent = option.text;


        button.addEventListener("click", () => {

            selectAnswer(option, button);

        });


        answersEl.appendChild(button);

    });

}


function selectAnswer(option, button) {

    /* Stop ALL floating */

    answersEl.classList.add("answered");


    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach((btn) => {

        btn.disabled = true;
        btn.classList.add("disabled");

    });


    /* Highlight selected answer */

    button.classList.add("selected");


    /* Show funny reaction */

    reactionEl.textContent = option.funny;


    /* Score */

    if (option.score === 1) {

        score++;
        button.classList.add("correct");

    } else {

        button.classList.add("wrong");

    }


    nextBtn.classList.remove("hidden");

}


nextBtn.addEventListener("click", () => {

    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

});


function showResult() {

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");


    scoreEl.textContent = score;

    resultMessage.textContent =
        `Krishna scored ${score}/${questions.length}`;


    if (score <= 1) {

        finalRoast.textContent =
            "Diagnosis: Professional menace. Society will remember this.";

    }

    else if (score <= 3) {

        finalRoast.textContent =
            "Diagnosis: Slightly responsible... but we're still watching you. 👀";

    }

    else {

        finalRoast.textContent =
            "Diagnosis: Surprisingly responsible. Are you secretly an adult?";

    }

}


document.getElementById("restart-btn").addEventListener("click", () => {

    currentQuestion = 0;
    score = 0;

    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();

});
