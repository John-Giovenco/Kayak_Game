let direction = 'null'
let shipObject = {
    x:0, 
    y:0,
    element: null,
    moveInterval:null
}

let speed = 1;

function moveShip(shipObject){ 
    if(direction === 'west'){
        shipObject.x = shipObject.x - speed
    }
    if(direction === 'north'){
        shipObject.y = shipObject.y + speed
    }
    if(direction === 'east'){
        shipObject.x = shipObject.x + speed
    }
    if(direction === 'south'){
        shipObject.y = shipObject.y - speed
    }
    shipObject.element.style.left = shipObject.x + 'px'
    shipObject.element.style.bottom = shipObject.y + 'px'
}

document.addEventListener('keydown', function(e){                
    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
    if(e.key === 'Shift'){
        handleMove(shipObject)
    }
})

document.addEventListener('keyup', function(e){
    if(e.key === 'Shift'){
        stopMove(shipObject)
    }
})

function setUpShip (){
    let shipElement = document.querySelector('#ship')
    shipObject.element = shipElement
}

function handleMove (shipObject){
    let intervalId = setInterval(function(){
        moveShip(shipObject)
    }, 1)
    shipObject.moveInterval = intervalId
}

function stopMove (shipObject){
    clearInterval(shipObject.moveInterval)
}

function main (){
    setUpShip()
}
document.addEventListener('DOMContentLoaded', function (){
    main ()
})
