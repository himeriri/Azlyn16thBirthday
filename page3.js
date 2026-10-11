// ==============================
// 🎂 PAGE 3 — BIRTHDAY CAKE
// ==============================

const candles = document.querySelectorAll(".candle");

const wishMessage = document.getElementById("wishMessage");

const nextButton = document.getElementById("nextButton");


let candlesOut = 0;


// ==============================
// 🕯️ CANDLE CLICK
// ==============================

candles.forEach(function(candle) {

    candle.addEventListener("click", function() {

        if (!candle.classList.contains("out")) {

            candle.classList.add("out");

            candlesOut++;

        }


        if (candlesOut === candles.length) {

            celebrate();

        }

    });

});


// ==============================
// 🎉 CELEBRATION
// ==============================

function celebrate() {

    wishMessage.classList.add("show");

    nextButton.classList.add("show");

}


// ==============================
// 💌 GO TO PAGE 4
// ==============================

nextButton.addEventListener("click", function() {

    window.location.href = "page4.html";

});