const textPowerOn = document.querySelector('.text-power-on');

function lightsEffects() {
    textPowerOn.style.animationPlayState = 'paused'
}

setInterval(lightsEffects, 2000);