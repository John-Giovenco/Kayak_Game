let laserObject = {
    x:0, 
    y:0,
    element: null,
    moveInterval:null
}

function setUpLaser (){
    let laserElement = document.querySelector('#laser1')
    laserObject.element = laserElement
}

document.querySelector('#laser1').addEventListener('keydown', function(e){
    if(e.key === 'shift'){
        moveLaser();
    }
})

let laserSpeed = 1;

function moveLaser(laserObject){
    if(direction === 'south') {
        laserObject.y = laserObject.y - speed
    }
    laserObject.element.style.bottom = laserObject.y + 'px'
}

function shootLaser(x, y) {
    let element = newImage('#laser1');
    element.style.zIndex = 1;

    let direction = null;

    function moveLaser() {
        if (direction === 'south') {
            y-=1
        }
    }

    setInterval(moveLaser, 1)

}

document.addEventListener('DOMContentLoaded', function (){
    main ()
})