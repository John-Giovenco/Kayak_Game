function shootLaserDown(x, y) {
    let element = newImage('./asset/laser.png')
    element.style.zIndex = 1;
    
    let direction = null;

    function shootLaser() {
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(shootLaser, 1)

    async function shootAgain(time) {
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
        element: element
        shootSouth: shootSouth,
        stop: stop
    }
}

function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    }) 
}
