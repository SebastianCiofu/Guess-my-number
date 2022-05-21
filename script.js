'use strict';

const check = document.querySelector('.check');
const again = document.querySelector('.again');
let message = document.querySelector('.message');

let number = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'No number';
  } else if (guess === number) {
    message.textContent = 'Correct Number';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      message.textContent = guess > number ? 'Too high' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

again.addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  number = Math.floor(Math.random() * 20 + 1);
});
