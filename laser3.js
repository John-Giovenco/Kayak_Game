function newNonPlayableCharacter(x, y) {
    let element = newImage('assets./laser.png')
    element.style.zIndex = 1;
    
    let direction = null;

    function shootLaser() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)
}