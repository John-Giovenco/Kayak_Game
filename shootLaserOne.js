function laserOne(x, y) {
    let element = newImage('./asset/laser.png')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveLaserOne() {
        
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveLaserOne, 1)

    async function walkSouth(time) {
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
        walkSouth: walkSouth,
        stop: stop
    }
}

function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    }) 
}