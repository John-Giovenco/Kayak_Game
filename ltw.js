const ltw = laserTwo(750, 440);

async function moveLtw(){
    await ltw.shootSouth()
}
moveLtw()