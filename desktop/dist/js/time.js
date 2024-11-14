function time() {
    const spanHours = document.querySelector('.hours');
    const spanMinutes = document.querySelector('.minutes');
    const tempo = new Date();
    const hrs = tempo.getHours();
    const min = tempo.getMinutes();
    const mes = tempo.getMonth();
    const ano = tempo.getFullYear();
    spanHours.textContent = `${hrs}`.padStart(2, "0");
    spanMinutes.textContent = `${min}`.padStart(2, "0");
    const spanMouth = document.querySelector('.mouth');
    const numberDay = tempo.getDate();
    spanMouth.textContent = `${numberDay}/${mes}/${ano}`;
}
setInterval(time);
