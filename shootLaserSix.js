function setUpLaser () {
    let laserElement = document.querySelector('#laser6')
    laserObject.element = laserElement
}

function shootLaserSix(x, y) {
    let element = document.selectElementById('#laser6');
    element.style.zIndex = 1;
    
    let direction = null;

    function shootLaser(laserObject) {
        
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(shootLaser, 1)
    
    function sleep(){
    return new Promise(resolve, function (time) {
            setTimeout(resolve, time);
        })
    }

    async function shootSouth(time) {   
        direction = 'south'
        element.src = `./assets/laser6.png`
        await sleep(time)
        stop()
    }

    async function stop() {
        direction = null
        element.src = `./assets/laser6.png`
        await sleep(time)
        stop()
    }

    return {
        element: element,
        shootSouth: shootSouth,
        stop: stop,
    }
}