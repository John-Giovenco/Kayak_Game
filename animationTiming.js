function newNonPlayableCharacter(x, y) {
    let element = newImage('.laser')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    async function walkSouth(time) {
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        await sleep(time)
        stop()
    }

    async function stop() {
        direction = null
        element.src = ``
        await sleep(time)
        stop()
    }

    return {
        walkSouth: walkSouth,
        stop: stop
    }
}

function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    }) 
}

document.addEventListener('DOMContentLoaded', function (){
    main ()
})
