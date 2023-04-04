function laserTwo(x, y) {
    let element = newImage('assets/laser.png')
    element.style.zIndex = 1;
    
    let direction = null;

    function laserTwo() {
        
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(laserTwo, 1)

    function sleep(time){
        return new Promise(resolve, function (time) {
                setTimeout(resolve, time);
            })
        }
    
    async function shootSouth(time) {
        direction = 'south'
        element.src = `./assets/laser.png`
        await sleep(time)
        stop()
    }

    async function stop() {
        direction = null
        element.src = `./assets/laser.png`
        await sleep(time)
        stop()
    }

    return {
        element: element,
        shootSouth: shootSouth,
        stop: stop
    }
}
