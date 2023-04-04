let direction = 'null'
let laserObject = {
    x:0, 
    y:0,
    element: null,
    moveInterval:null
}

let speed = 1;

function moveLaser(laserObject){ 
    if(direction === 'west'){
        laserObject.x = laserObject.x - speed
    }
    if(direction === 'north'){
        laserObject.y = laserObject.y + speed
    }
    if(direction === 'east'){
        laserObject.x = laserObject.x + speed
    }
    if(direction === 'south'){
        laserObject.y = laserObject.y - speed
    }
    laserObject.element.style.left = laserObject.x + 'px'
    laserObject.element.style.bottom = laserObject.y + 'px'
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
        handleMove(laserObject)
    }
})

document.addEventListener('keyup', function(e){
    if(e.key === 'Shift'){
        stopMove(laserObject)
    }
})

function setUpLaser (){
    let laserElement = document.querySelector('#laser6')
    laserObject.element = laserElement
}

function handleMove (laserObject){
    let intervalId = setInterval(function(){
        moveLaser(laserObject)
    }, 1)
    laserObject.moveInterval = intervalId
}

function stopMove (laserObject){
    clearInterval(laserObject.moveInterval)
}

function main (){
    setUpLaser()
}
document.addEventListener('DOMContentLoaded', function (){
    main ()
})