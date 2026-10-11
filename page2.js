// ==============================
// 💌 PAGE 2 — INTERACTIVE ENVELOPE
// ==============================

const envelope = document.getElementById("envelope");

const nextButton = document.getElementById("nextButton");


// Click the envelope

envelope.addEventListener("click", function() {

    // Open the envelope
    envelope.classList.toggle("open");


    // If the envelope is open...
    if (envelope.classList.contains("open")) {

        // Show the next button
        setTimeout(function() {

            nextButton.classList.add("show");

        }, 1000);

    }

});


// ==============================
// 🎂 NEXT PAGE
// ==============================

nextButton.addEventListener("click", function() {

    window.location.href = "page3.html";

});
