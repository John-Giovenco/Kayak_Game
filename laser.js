function setUpLaser () {
    let laserElement = document.querySelector('.laser')
    laserObject.element = laserElement
}

document.addEventListener('keydown', function(e){
    if(e.key === 'Shift'){
        delayAnimation(laserObject)
    }
})
