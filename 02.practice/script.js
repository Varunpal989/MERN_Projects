let a = Math.floor(Math.random() * 100);
let chances = 0;

function checkGuess() {
    let b = document.getElementById("guess").value;
    let message = document.getElementById("message");
    let result = document.getElementById("result");

    chances += 1;

    if (b == a) {
        result.textContent = "You guessed it right! It took you " + chances + " chances.";
        result.style.color = "green";
        message.textContent = "Congratulations!";
    } else {
        if (a < b) {
            message.textContent = "The number is less than " + b + ". Try again:";
        } else {
            message.textContent = "The number is greater than " + b + ". Try again:";
        }
        result.textContent = "";
    }
}
