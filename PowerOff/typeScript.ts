function reloadScreen() {
    const myLink = document.querySelector('.teste') as HTMLElement;
    const powerOn = document.querySelector('.power-on') as HTMLImageElement;
    const span1 = document.querySelector('.a') as HTMLSpanElement;
    const span2 = document.querySelector('.b') as HTMLSpanElement;
    const span3= document.querySelector('.c') as HTMLSpanElement;
    const span4 = document.querySelector('.d') as HTMLSpanElement;

    myLink.addEventListener('click', function(e){
        e.preventDefault();

        powerOn.style.transform = 'rotate(90deg)';
        span1.style.animation = 'shine 3s ease-in 0.5s';
        span2.style.animation = 'shine 2.5s ease-in 1s';
        span3.style.animation = 'shine 2s ease-in 1.5s';
        span4.style.animation = 'shine 1.5s ease-in 2s';

        const hrefLink = this.getAttribute('data-target') as string;
        
        setTimeout(() => {
            window.location.href = hrefLink;
        }, 3000);
    });
}
reloadScreen();