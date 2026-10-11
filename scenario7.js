// ==============================
// 💘 FINAL SCENARIO
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

    localStorage.setItem("finalChoice", "mikee");


    choiceMessage.textContent =
        "🌟 You chose Mikee. There's no turning back now...";


    setTimeout(function () {

        window.location.href = "ending.html";

    }, 1800);

});


// ==============================
// 📚 MISS TANAKA
// ==============================

tanakaChoice.addEventListener("click", function () {

    let tanakaScore =
        Number(localStorage.getItem("tanakaScore")) || 0;

    tanakaScore++;

    localStorage.setItem("tanakaScore", tanakaScore);

    localStorage.setItem("finalChoice", "tanaka");


    choiceMessage.textContent =
        "📚 You chose Miss Tanaka. The decision has been made...";


    setTimeout(function () {

        window.location.href = "ending.html";

    }, 1800);

});