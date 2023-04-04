const lth = laserThree(950, 440);

async function moveLth(){
    await lth.shootSouth()
}
moveLth()