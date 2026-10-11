// ==============================
// 🏆 FINAL ENDING
// ==============================


// Get the scores

const mikeeScore =
    Number(localStorage.getItem("mikeeScore")) || 0;

const tanakaScore =
    Number(localStorage.getItem("tanakaScore")) || 0;


// Get the final choice

const finalChoice =
    localStorage.getItem("finalChoice");


// Get HTML elements

const endingTitle =
    document.getElementById("endingTitle");

const endingText =
    document.getElementById("endingText");

const scoreText =
    document.getElementById("scoreText");

const finalMessage =
    document.getElementById("finalMessage");


// ==============================
// 🧮 DISPLAY SCORE
// ==============================

scoreText.textContent =
    `🌟 Mikee: ${mikeeScore} points
     | 📚 Miss Tanaka: ${tanakaScore} points`;


// ==============================
// 🏆 DETERMINE WINNER
// ==============================

if (mikeeScore > tanakaScore) {

    endingTitle.textContent =
        "🌟 Mikee Wins!";

    endingText.textContent =
        "After seven questionable decisions, the numbers have spoken.";

    finalMessage.textContent =
        "Your choices leaned toward Mikee! 🌻";

}


else if (tanakaScore > mikeeScore) {

    endingTitle.textContent =
        "📚 Miss Tanaka Wins!";

    endingText.textContent =
        "After seven questionable decisions, the numbers have spoken.";

    finalMessage.textContent =
        "Your choices leaned toward Miss Tanaka! 🌻";

}


else {

    endingTitle.textContent =
        "⚖️ It's a Tie!";

    endingText.textContent =
        "After seven scenarios, somehow you managed to avoid choosing a clear winner.";

    finalMessage.textContent =
        "The Impossible Choice remains... impossible. 😭🌻";

}


// ==============================
// 💘 FINAL CHOICE MESSAGE
// ==============================

if (finalChoice === "mikee") {

    endingText.textContent +=
        " And your final choice was Mikee.";

}


else if (finalChoice === "tanaka") {

    endingText.textContent +=
        " And your final choice was Miss Tanaka.";

}


// ==============================
// 🔄 PLAY AGAIN
// ==============================

document
    .getElementById("restartButton")
    .addEventListener("click", function () {

        // Delete the old scores

        localStorage.removeItem("mikeeScore");

        localStorage.removeItem("tanakaScore");

        localStorage.removeItem("finalChoice");

        localStorage.removeItem("scenario1Complete");


        // Go back to Scenario 1

        window.location.href = "scenario1.html";

    });