'use strict';

/*
const messageEl = document.querySelector('.messageEl').textContent;
const number = document.querySelector('.number').textContent;
const score = document.querySelector('.score').textContent;

const guess = document.querySelector('.guess').value = 10);
console.log(guess);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const bodyEl = document.querySelector('body');
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const guessEl = document.querySelector('.guess');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const resetBtn = document.querySelector('.again');

// const handleReset = () => {
//   location.reload();
// };

const handleReset = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  messageEl.textContent = 'Start guessing...';
  scoreEl.textContent = score;
  numberEl.textContent = '?';
  guessEl.value = '';

  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
};

const handleCheck = () => {
  const guess = Number(guessEl.value);
  scoreEl.textContent = score;

  // When there is no input
  if (!guess) {
    messageEl.textContent = '⛔ No number';

    // When player wins
  } else if (guess === secretNumber) {
    messageEl.textContent = '🎉 Correct Number';
    numberEl.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }

    bodyEl.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';

    // When gues is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      messageEl.textContent = '📈 Too high!';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = '☹️ You lost the game!';
      scoreEl.textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      messageEl.textContent = '📉 Too low!';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = '☹️ You lost the game!';
      scoreEl.textContent = 0;
    }
  }
};

checkBtn.addEventListener('click', handleCheck);

resetBtn.addEventListener('click', handleReset);
