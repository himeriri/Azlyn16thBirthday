// ==============================
// 💘 SCENARIO 6
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
        "🌟 You and Mikee stare at the assignment together. Neither of you understands it. Progress is questionable.";


    setTimeout(function () {

        window.location.href = "scenario7.html";

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
        "📚 Miss Tanaka helps you break the assignment into smaller steps. Suddenly, it looks much less terrifying.";


    setTimeout(function () {

        window.location.href = "scenario7.html";

    }, 1500);

});