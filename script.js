const containerEl = document.querySelector(".container");
const btnPlayEl = document.querySelector(".btn_again");
const btnCheckEl = document.querySelector(".Btn_check");
const hideNumEl = document.querySelector(".Hide-num");
const MsgEl = document.querySelector(".massage");
const InputNumEl = document.querySelector(".Input_number");
const HighScoreEl = document.querySelector(".High-Score");
const ScoresEl = document.querySelector(".Score");

// genertor random number 1 to 20
let scretNum = Math.floor(Math.random() * 20 + 1);
let Score = 20;
let highScore = 0;

console.log(scretNum);
// event to check the hide num

btnCheckEl.addEventListener("click", () => {
    const guess = Number(InputNumEl.value);
    console.log(guess);

    //  check empty input
    if (guess) {
        // not match hide Number
        if (guess != scretNum) {
            if (Score > 1) {
                Score--;
                ScoresEl.textContent = Score;

                MsgEl.textContent =
                    guess > scretNum ? "You Number High ☝️☝️" : "You Number Low 👇👇";

                ScoresEl.textContent = Score;
            } else {
                displayMassage("🤦‍♂️😔You lossed the game 🤦‍♂️😔");
                containerEl.style.backgroundColor = "#fff";
                ScoresEl.textContent = 0;
            }
        } else {
            // Success
            hideNumEl.textContent = scretNum;
            hideNumEl.style.width = "50%";
            hideNumEl.style.transition = "all 0.5s ease-in";
            containerEl.style.backgroundColor = "#e0d8d3";
            displayMassage("🏆🏆Congratulation You are Won the Game 🏆🏆");
        }
    } else {
        displayMassage("Please Enter the Number :(");
    }
});

// display Massage
const displayMassage = function (massage) {
    MsgEl.textContent = massage;
};

// Reset the Game 
btnPlayEl.addEventListener("click", () => {
    Score = 20;
    scretNum = Math.floor(Math.random() * 20 + 1);
    ScoresEl.textContent = Score;
    hideNumEl.textContent = "?";
    hideNumEl.style.width = "50%";
    hideNumEl.style.transition = "all 0.5s ease-in";
    InputNumEl.value = "";
    containerEl.style.backgroundColor = "#ddd";

    displayMassage("Start Guesing ............");
});