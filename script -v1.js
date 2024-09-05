'use strict';

/*
const document.querySelector('.message') = document.querySelector('.document.querySelector('.message')').textContent;
const number = document.querySelector('.number').textContent;
const score = document.querySelector('.score').textContent;

const guess = document.querySelector('.guess').value = 10);
console.log(guess);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.score').textContent = score;

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct NUmber';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // When gues is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☹️ You lost the game!';

      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☹️ You lost the game!';

      document.querySelector('.score').textContent = 0;
    }
  }
});
