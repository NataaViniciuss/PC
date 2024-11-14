function time() {
    const spanHours = document.querySelector('.hours');
    const spanMinutes = document.querySelector('.minutes');
    const tempo = new Date();
    const hrs = tempo.getHours();
    const min = tempo.getMinutes();
    spanHours.textContent = `${hrs}`.padStart(2, "0");
    spanMinutes.textContent = `${min}`.padStart(2, "0");
    const spanMouth = document.querySelector('.mouth');
    const dayInPort = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(tempo);
    const monthInPort = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(tempo);
    const numberDay = tempo.getDate();
    spanMouth.textContent = `${dayInPort} ,${numberDay} de ${monthInPort} `;
}
setInterval(time);
