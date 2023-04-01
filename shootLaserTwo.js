function laserTwo(x, y) {
    let element = newImage('assets/laser.png')
    element.style.zIndex = 1;
    time = (Math.random)
    
    let direction = null;

    function shootLaser() {
        
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(shootLaser, 1)
    
    function shootSouth(time) {
        direction = 'south'
        element.src = `./assets/laser.png`
        s
    }

    return {
        element: element,
        shootSouth: shootSouth,
        stop: stop
    }
}