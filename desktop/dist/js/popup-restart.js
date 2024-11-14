function hoverPopUpRestart() {
    const DivRestart = document.querySelector('.restart');
    const DivSuspend = document.querySelector('.suspend');
    const DivDesligar = document.querySelector('.desligar');
    const iconRestart = document.getElementById('icon-restart');
    const iconSuspend = document.getElementById('icon-suspend');
    const iconDesligar = document.getElementById('icon-desligar');
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
hoverPopUpRestart();
