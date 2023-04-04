const lon = laserOne(590, 440);
const ltw = laserTwo(775, 440);
const lth = laserThree(950, 440);
const lfo = laserFour(1130, 440);
const lfi = laserFive(1300, 440);
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;

document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "a" ||      
        e.keyCode == 65     
        ) {
        async function moveLon(){
            await lon.shootSouth()
        }
         moveLon();
        }
        async function moveLtw(){
            await ltw.shootSouth()
        }
        moveLtw();
        async function moveLth(){
            await lth.shootSouth()
        }
        moveLth();
        function moveLfo(){
            lfo.shootSouth()
        }
        moveLfo();
        async function moveLfi(){
            await lfi.shootSouth()
        }
        moveLfi();
        
        setInterval(setTime, 1000);

        function setTime()
        {
            ++totalSeconds;
            secondsLabel.innerHTML = pad(totalSeconds%60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
        }
        function pad(val)
        {
            var valString = val + "";
            if(valString.length < 2)
            {
                return "0" + valString;
            }
            else
            {
                return valString;
            }
        }
}
