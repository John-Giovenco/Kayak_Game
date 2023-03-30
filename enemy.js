const enemys = document.querySelectorAll('.enemy');
const scoreBoard = document.querySelector('.score');
const laser = document.querySelectorAll('.laser');
let lastEnemy;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomEnemy(enemys) {
    const idx = Math.floor(Math.random() * enemys.length);
    const enemy = enemys[idx];
    if (enemy === lastEnemy) {
        return randomEnemy(enemys);
    }
    lastEnemy = enemy;
    return enemy;
}

function shoot() {
    const time = randomTime(1000, 4000);
    const enemy = randomEnemy(enemys);
    enemy.classList.add('shoot');
    setTimeout(() => {
        enemy.classList.add('down');
        if (!timeUp) move();
    }, time);
}

function startGame() {
    timeUp = false;
    score = 0;
    shoot();
    setTimeout(() => timeUp = true, 10000)
  }