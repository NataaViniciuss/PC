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
        iconRestart.src = 'img/icon/resestart.png';
    });

    DivRestart.addEventListener('mouseleave', () => {
        iconRestart.src = 'img/icon/restart-icon.png';
    });

    DivSuspend.addEventListener('mouseenter', () => {
        iconSuspend.src = 'img/icon/suspend.png';
    });

    DivSuspend.addEventListener('mouseleave', () => {
        iconSuspend.src = 'img/icon/suspend-origin.png';
    });

    DivDesligar.addEventListener('mouseenter', () => {
        iconDesligar.src = 'img/icon/desligar.png';
    });

    DivDesligar.addEventListener('mouseleave', () => {
        iconDesligar.src = 'img/icon/powerof-origin.png';
    });
}
effectHover();