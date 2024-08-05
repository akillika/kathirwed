document.addEventListener("DOMContentLoaded", function() {
    // Set the date we're counting down to
    const countdownDate = new Date("Sep 15, 2024 00:00:00").getTime();

    // Update the countdown every 1 second
    const interval = setInterval(function() {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = countdownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.querySelector("#days .countdown-front").innerText = days;
        document.querySelector("#hours .countdown-front").innerText = hours;
        document.querySelector("#minutes .countdown-front").innerText = minutes;
        document.querySelector("#seconds .countdown-front").innerText = seconds;

        // If the countdown is finished
        if (distance < 0) {
            clearInterval(interval);
            document.querySelector("#days .countdown-front").innerText = "0";
            document.querySelector("#hours .countdown-front").innerText = "0";
            document.querySelector("#minutes .countdown-front").innerText = "0";
            document.querySelector("#seconds .countdown-front").innerText = "0";
        }
    }, 1000);
});
