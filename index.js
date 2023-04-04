/* using wack-a-mole from github base as a guide for javascript code*/
let meteors = document.querySelectorAll('.meteor');
let scoreBoard = document.querySelector('.score');
let aliens = document.querySelectorAll('.alien');
let lastMeteor;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomMeteor(meteors) {
  let idx = Math.floor(Math.random() * meteors.length);
  let meteor = meteors[idx];
  if (meteor === lastMeteor) {
    console.log('Can not have 2 in a row');
    return randomMeteor(meteors);
  }
  lastMeteor = meteor;
  return meteor;
}

function suprise() {
  let time = randomTime(200, 1000);
  let meteor = randomMeteor(meteors);
  meteor.classList.add('up');
  setTimeout(() => {
    meteor.classList.remove('up');
    if (!timeUp) suprise();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  suprise();
  setTimeout(() => timeUp = true, 15000)
}

function destroy(e) {
  if(!e.isTrusted) return; // cheater!
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

aliens.forEach(alien => alien.addEventListener('click', destroy));
