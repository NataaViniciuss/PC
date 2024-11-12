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
        iconRestart.src = 'img/icon/resestart.png';
    });
    DivRestart.addEventListener('mouseleave', function () {
        iconRestart.src = 'img/icon/restart-icon.png';
    });
    DivSuspend.addEventListener('mouseenter', function () {
        iconSuspend.src = 'img/icon/suspend.png';
    });
    DivSuspend.addEventListener('mouseleave', function () {
        iconSuspend.src = 'img/icon/suspend-origin.png';
    });
    DivDesligar.addEventListener('mouseenter', function () {
        iconDesligar.src = 'img/icon/desligar.png';
    });
    DivDesligar.addEventListener('mouseleave', function () {
        iconDesligar.src = 'img/icon/powerof-origin.png';
    });
}
effectHover();
