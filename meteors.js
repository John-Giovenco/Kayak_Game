function setUpMeteor () {
    let meteorElement = document.querySelector('#meteor1')
    meteorObject.element = meteorElement
}

document.addEventListener('keydown', function(e){
    if(e.key === 'Shift'){
        startMove(meteorObject)
    }
})

function moveMeteor(meteorObject) {
    direction = 'south'
    element.src = './assets/meteor1'
}