// ==============================
// AZLYN'S BIRTHDAY COUNTDOWN
// ==============================

// Birthday date and time
const birthday = new Date("2026-08-30T00:00:00+08:00");


// This function updates the countdown
function updateTimer() {

    // Get the current date and time
    const now = new Date();

    // Calculate the difference between
    // the birthday and the current time
    const difference = birthday - now;


    // ==============================
    // IF IT IS ALREADY HER BIRTHDAY
    // ==============================

    if (difference <= 0) {

        // Change the message
        document.getElementById("message").textContent =
            "🎉 IT'S YOUR BIRTHDAY! 🎉";

        // Hide the countdown
        document.getElementById("timer").style.display = "none";

        // Show the button
        document.getElementById("startButton").style.display =
            "inline-block";

        // Stop the function
        return;
    }


    // ==============================
    // CALCULATE TIME
    // ==============================

    // Calculate days
    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    // Calculate hours
    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    // Calculate minutes
    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    // Calculate seconds
    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    // ==============================
    // PUT THE NUMBERS ON THE WEBSITE
    // ==============================

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;
}


// Run the timer once immediately
updateTimer();


// Update the timer every 1 second
setInterval(updateTimer, 1000);


// ==============================
// 🌻 BEGIN BUTTON
// ==============================

document.getElementById("startButton").addEventListener("click", function() {

    window.location.href = "page2.html";

});
// ==============================
// 🌻 SUNFLOWER ANIMATION
// ==============================

const plants = document.querySelectorAll(".plant");

plants.forEach(function(plant) {

    plant.addEventListener("mouseenter", function() {

        plant.style.scale = "1.1";
        plant.style.rotate = "10deg";

    });

    plant.addEventListener("mouseleave", function() {

        plant.style.scale = "1";
        plant.style.rotate = "0deg";

    });
    
});
// ==============================
// 🌻 SECRET WORD UNLOCK
// ==============================

const secretWord = "WITCH";

const secretInput = document.getElementById("secretWord");
const unlockButton = document.getElementById("unlockButton");
const secretMessage = document.getElementById("secretMessage");

unlockButton.addEventListener("click", function () {

    const enteredWord = secretInput.value.trim().toUpperCase();

    if (enteredWord === secretWord) {

        secretMessage.textContent =
            "✨ Secret unlocked! 🌻";

        document.getElementById("timer").style.display = "none";

        document.getElementById("secretArea").style.display = "none";

        document.getElementById("startButton").style.display =
            "inline-block";

    } else {

        secretMessage.textContent =
            "❌ Hmm... that's not the secret word!";

        secretInput.value = "";

    }

});
