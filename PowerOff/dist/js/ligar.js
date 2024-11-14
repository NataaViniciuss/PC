function animationPowerOn() {
    const myLink = document.querySelector('.teste');
    const powerOn = document.querySelector('.power-on');
    const span1 = document.querySelector('.a');
    const span2 = document.querySelector('.b');
    const span3 = document.querySelector('.c');
    const span4 = document.querySelector('.d');
    myLink.addEventListener('click', function (e) {
        e.preventDefault();
        span1.style.animation = 'shine 3s ease-in 0.7s';
        span2.style.animation = 'shine 2.5s ease-in 1.2s';
        powerOn.style.transform = 'rotate(90deg)';
        span3.style.animation = 'shine 2s ease-in 2.2s';
        span4.style.animation = 'shine 1.5s ease-in 2.7s';
        const hrefLink = this.getAttribute('data-target');
        setTimeout(() => {
            window.location.href = hrefLink;
        }, 3000);
    });
}
animationPowerOn();
