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
