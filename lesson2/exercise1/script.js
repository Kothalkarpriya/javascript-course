const randomNumber = Math.floor(Math.random()*100)+1;
const guess = document.querySelector('.guess');
const lastResult = document.querySelector(".lastResult");
const rangeShow = document.querySelector(".rangeShow");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guesscount = 1;
let resetButton;

function checkGuess(){
  const userGuess = Number(guessField);
  if(guessCount === 1){
    guess.textContent = "Previous Guesses: ";
  }
  guess.textContent += userGuess + " ";

  if(userGuess === randomNumber){
    lastResult.textContent = "Congratulations! You have got this!";
    lastResult.style.backgroundColor= "green";
    lowOrHi.textContent = "";
    setGameOver();
  }
  else if (userGuess === 10){
    lastResult.textContent = "Game Over!!!";
    lowOrHi.textContent = "";
    setGameOver();
  }
  else{
    lastResult.textContent = "Wrong";
    lastResult.style.backgroundColor = "red";
    if(userGuess < randomNumber){
      lowOrHi.textContent = "Last guess was too low";

    }
    else if(userGuess>randomNumber){
      lowOrHi.textContent = "Last guess was too high";
    }
  }

  guessCount ++;
  guessField.textContent = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

// The Game functionality
// Define setGameove 