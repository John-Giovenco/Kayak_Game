const firstLaser = ('')

function setUpLaser () {
    let laserElement = document.querySelector('.laser')
    laserObject.element = laserElement
}

document.addEventListener('keydown', function(e){
    if(e.key === 'Shift'){
        startShooting(laserObject)
    }
})

function shootLaser() {
    direction = 'south';
    setTimeout = randomTime;
    
}