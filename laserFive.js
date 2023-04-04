const lfi = laserFive(1300, 440);

    async function moveLfi(){
        await lfi.shootSouth()
    }
    moveLfi()
    
