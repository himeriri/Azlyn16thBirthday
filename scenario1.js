// ==============================
// 💘 SCENARIO 1
// ==============================

// Get the buttons
const mikeeChoice = document.getElementById("mikeeChoice");
const tanakaChoice = document.getElementById("tanakaChoice");

const choiceMessage = document.getElementById("choiceMessage");


// ==============================
// 🌟 MIKEE
// ==============================

mikeeChoice.addEventListener("click", function () {

    // Give Mikee one point
    let mikeeScore =
        Number(localStorage.getItem("mikeeScore")) || 0;

    mikeeScore++;

    localStorage.setItem("mikeeScore", mikeeScore);


    // Save that Scenario 1 is complete
    localStorage.setItem("scenario1Complete", "true");


    choiceMessage.textContent =
        "🌟 You chose Mikee. Your afternoon is officially booked.";


    // Wait before continuing
    setTimeout(function () {

        window.location.href = "scenario2.html";

    }, 1500);

});


// ==============================
// 📚 MISS TANAKA
// ==============================

tanakaChoice.addEventListener("click", function () {

    // Give Miss Tanaka one point
    let tanakaScore =
        Number(localStorage.getItem("tanakaScore")) || 0;

    tanakaScore++;

    localStorage.setItem("tanakaScore", tanakaScore);


    // Save that Scenario 1 is complete
    localStorage.setItem("scenario1Complete", "true");


    choiceMessage.textContent =
        "📚 You chose Miss Tanaka. Productivity has entered the chat.";


    // Wait before continuing
    setTimeout(function () {

        window.location.href = "scenario2.html";

    }, 1500);

});