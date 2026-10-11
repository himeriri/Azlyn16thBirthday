// ==============================
// 💘 SCENARIO 2
// ==============================

const mikeeChoice = document.getElementById("mikeeChoice");
const tanakaChoice = document.getElementById("tanakaChoice");

const choiceMessage = document.getElementById("choiceMessage");


// ==============================
// 🌟 MIKEE
// ==============================

mikeeChoice.addEventListener("click", function () {

    let mikeeScore =
        Number(localStorage.getItem("mikeeScore")) || 0;

    mikeeScore++;

    localStorage.setItem("mikeeScore", mikeeScore);


    choiceMessage.textContent =
        "🌟 Mikee has entered the situation. The problem may or may not survive.";


    setTimeout(function () {

        window.location.href = "scenario3.html";

    }, 1500);

});


// ==============================
// 📚 MISS TANAKA
// ==============================

tanakaChoice.addEventListener("click", function () {

    let tanakaScore =
        Number(localStorage.getItem("tanakaScore")) || 0;

    tanakaScore++;

    localStorage.setItem("tanakaScore", tanakaScore);


    choiceMessage.textContent =
        "📚 Miss Tanaka has entered the situation. Academic assistance activated.";


    setTimeout(function () {

        window.location.href = "scenario3.html";

    }, 1500);

});
