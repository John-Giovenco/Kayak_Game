const enemy = document.querySelectorAll('#enemy1');
const scoreBoard = document.querySelector('.score');
const laser = document.querySelectorAll('#laser');

function randomTime(min, max) {
    return Math.round(math.random() * (max - min) + min);
}

function randomEnemys(enemy) {
    const idx = Math.floor(math.random() * enemy.length);
    const enemy = enemy[idx];
    if (enemy === lastenemy) {
        return randomEnemys(enemy);
    }
    lastenemy = enemy;
    return enemy;
}

function shoot() {
    const time = randomTime(100, 400);
    const enemy = randomEnemys(enemy)
    enemy.classList.add('shoot');
    setTimeout(() => {
        enemy.classList.remove(shoot)
        if (!timeUp) move();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = time;
    shoot();
    setTimeout(() => timeUp = true, 10000)
}