function time() {
    var spanHours = document.querySelector('.hours');
    var spanMinutes = document.querySelector('.minutes');
    var tempo = new Date();
    var hrs = tempo.getHours();
    var min = tempo.getMinutes();
    spanHours.textContent = "".concat(hrs).padStart(2, "0");
    spanMinutes.textContent = "".concat(min).padStart(2, "0");
    var spanMouth = document.querySelector('.mouth');
    var dayInPort = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(tempo);
    var monthInPort = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(tempo);
    var numberDay = tempo.getDate();
    spanMouth.textContent = "".concat(dayInPort, " ,").concat(numberDay, " de ").concat(monthInPort, " ");
}
setInterval(time);
