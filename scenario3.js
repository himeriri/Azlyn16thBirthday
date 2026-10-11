// ==============================
// 💘 SCENARIO 3
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
        "🌟 Mikee has chosen the lunch destination. Your fate is now in the hands of the menu.";


    setTimeout(function () {

        window.location.href = "scenario4.html";

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
        "📚 Miss Tanaka has approved your lunch. Nutritional value: probably acceptable.";


    setTimeout(function () {

        window.location.href = "scenario4.html";

    }, 1500);

});