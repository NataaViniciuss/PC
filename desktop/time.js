function time() {
    var spanHours = document.querySelector('.hours');
    var spanMinutes = document.querySelector('.minutes');
    var tempo = new Date();
    var hrs = tempo.getHours();
    var min = tempo.getMinutes();
    var mes = tempo.getMonth();
    var ano = tempo.getFullYear();
    spanHours.textContent = "".concat(hrs).padStart(2, "0");
    spanMinutes.textContent = "".concat(min).padStart(2, "0");
    var spanMouth = document.querySelector('.mouth');
    var numberDay = tempo.getDate();
    spanMouth.textContent = "".concat(numberDay, "/").concat(mes, "/").concat(ano);
}
setInterval(time);
function effectHover() {
    var DivRestart = document.querySelector('.restart');
    var DivSuspend = document.querySelector('.suspend');
    var DivDesligar = document.querySelector('.desligar');
    var iconRestart = document.getElementById('icon-restart');
    var iconSuspend = document.getElementById('icon-suspend');
    var iconDesligar = document.getElementById('icon-desligar');
    DivRestart.addEventListener('mouseenter', function () {
        iconRestart.src = 'icons/popup-restart/reiniciar-hover.png';
    });
    DivRestart.addEventListener('mouseleave', function () {
        iconRestart.src = 'icons/popup-restart/reiniciar.png';
    });
    DivSuspend.addEventListener('mouseenter', function () {
        iconSuspend.src = 'icons/popup-restart/suspender-hover.png';
    });
    DivSuspend.addEventListener('mouseleave', function () {
        iconSuspend.src = 'icons/popup-restart/suspender.png';
    });
    DivDesligar.addEventListener('mouseenter', function () {
        iconDesligar.src = 'icons/popup-restart/desligar-hover.png';
    });
    DivDesligar.addEventListener('mouseleave', function () {
        iconDesligar.src = 'icons/popup-restart/desligar.png';
    });
}
effectHover();
