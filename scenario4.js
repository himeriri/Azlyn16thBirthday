// ==============================
// 💘 SCENARIO 4
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
        "🌟 Mikee is cheering from the sidelines. Somehow, your confidence has increased by 37%.";


    setTimeout(function () {

        window.location.href = "scenario5.html";

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
        "📚 Miss Tanaka gives you the look that says: 'You know what you're doing.' Somehow, it works.";


    setTimeout(function () {

        window.location.href = "scenario5.html";

    }, 1500);

});
