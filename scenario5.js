// ==============================
// 💘 SCENARIO 5
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
        "🌟 You and Mikee are officially trapped by the rain. At least you have someone to talk to.";


    setTimeout(function () {

        window.location.href = "scenario6.html";

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
        "📚 The rain isn't stopping anytime soon. Fortunately, the wait isn't as boring as expected.";


    setTimeout(function () {

        window.location.href = "scenario6.html";

    }, 1500);

});