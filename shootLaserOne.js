    
    function laserOne(x, y) {
        let element = newImage('assets/laser.png')
        element.style.zIndex = 1;
        
        let direction = null;
        moveSouthTimeDefault = 50;
        moveDownTimer = this.moveDownTimerDefault;

        function shootLaser(laserOne) {
            
            if (direction === 'south') {
                y -= 1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }

        setInterval(shootLaser, 1)
        
        function sleep(){
        return new Promise(resolve, function (time) {
                setTimeout(resolve, time);
            })
        }

        async function shootSouth(time) {   
            direction = 'south'
            element.src = `./assets/laser.png`
            await sleep(time)
            stop()
        }

        async function stop() {
            direction = null
            element.src = `./assets/laser.png`
            await sleep(time)
            stop()
        }

        return {
            element: element,
            shootSouth: shootSouth,
            stop: stop,
        }
    }
