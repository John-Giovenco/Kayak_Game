const lsi = laserSix();

async function moveLsi(){
    await lsi.shootSouth()
}
moveLsi()