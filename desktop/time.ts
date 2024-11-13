function time() {
    const spanHours = document.querySelector('.hours') as HTMLSpanElement;
    const spanMinutes = document.querySelector('.minutes') as HTMLSpanElement;

    const tempo :Date = new Date();
    const hrs :number = tempo.getHours();
    const min :number = tempo.getMinutes();
    const mes :number = tempo.getMonth();
    const ano :number = tempo.getFullYear();

    spanHours.textContent = `${hrs}`.padStart(2, "0");
    spanMinutes.textContent = `${min}`.padStart(2, "0");


    const spanMouth = document.querySelector('.mouth') as HTMLSpanElement;

    const numberDay = tempo.getDate();

    spanMouth.textContent = `${numberDay}/${mes}/${ano}`

}

setInterval(time);

function effectHover() {
    const DivRestart = document.querySelector('.restart') as HTMLDivElement;
    const DivSuspend = document.querySelector('.suspend') as HTMLDivElement;
    const DivDesligar = document.querySelector('.desligar') as HTMLDivElement;
    const iconRestart = document.getElementById('icon-restart') as HTMLImageElement;
    const iconSuspend = document.getElementById('icon-suspend') as HTMLImageElement;
    const iconDesligar = document.getElementById('icon-desligar') as HTMLImageElement;

    DivRestart.addEventListener('mouseenter', () => {
        iconRestart.src = 'icons/popup-restart/reiniciar-hover.png';
    });
    
    DivRestart.addEventListener('mouseleave', () => {
        iconRestart.src = 'icons/popup-restart/reiniciar.png';
    });

    DivSuspend.addEventListener('mouseenter', () => {
        iconSuspend.src = 'icons/popup-restart/suspender-hover.png';
    });
    
    DivSuspend.addEventListener('mouseleave', () => {
        iconSuspend.src = 'icons/popup-restart/suspender.png';
    });

    DivDesligar.addEventListener('mouseenter', () => {
        iconDesligar.src = 'icons/popup-restart/desligar-hover.png';
    });
    
    DivDesligar.addEventListener('mouseleave', () => {
        iconDesligar.src = 'icons/popup-restart/desligar.png';
    });
}
effectHover();