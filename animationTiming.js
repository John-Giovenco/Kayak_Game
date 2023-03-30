var laser1 = document.querySelector('#laser1');

laser1.addEventListener()

function setProperty(duration) {
  laser1.style.setProperty('--animation-time', animationDuration +'s');
}

function changeAnimationTime() {
  var animationDuration = Math.random();
  setProperty(animationDuration);
}

setInterval(changeAnimationTime, 1000);
