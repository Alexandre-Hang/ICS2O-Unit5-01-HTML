// JavaScript File
var randomNum;
var guessNum;
function genRandomNum()  {
    randomNum = Math.floor(Math.random() * 6) + 1;
}

function checkGuess() {
    guessNum = document.getElementById("guess").value;
    if (isNaN(guessNum))
    {
        alert("NaN choose a number");
    }
    else if (guessNum < 1 || guessNum > 6)
    {
        alert("Pick a number between 1-6");
    }
    else if (randomNum == guessNum)
    {
        alert("You are correct "+ guessNum);
    }
    else
    {
        alert("Incorrect, guess again");
    }
}