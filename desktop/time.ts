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