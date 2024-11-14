function animationPowerOn() {
    const myLink = document.querySelector('.teste') as HTMLElement;
    const powerOn = document.querySelector('.power-on') as HTMLImageElement;
    const span1 = document.querySelector('.a') as HTMLSpanElement;
    const span2 = document.querySelector('.b') as HTMLSpanElement;
    const span3= document.querySelector('.c') as HTMLSpanElement;
    const span4 = document.querySelector('.d') as HTMLSpanElement;

    myLink.addEventListener('click', function(e){
        e.preventDefault();

        span1.style.animation = 'shine 3s ease-in 0.7s';
        span2.style.animation = 'shine 2.5s ease-in 1.2s';
        powerOn.style.transform = 'rotate(90deg)';
        span3.style.animation = 'shine 2s ease-in 2.2s';
        span4.style.animation = 'shine 1.5s ease-in 2.7s';

        const hrefLink = this.getAttribute('data-target') as string;
        
        setTimeout(() => {
            window.location.href = hrefLink;
        }, 3000);
    });
}
animationPowerOn();
