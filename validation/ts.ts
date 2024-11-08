function time() {
    const spanHours = document.querySelector('.hours') as HTMLSpanElement;
    const spanMinutes = document.querySelector('.minutes') as HTMLSpanElement;

    const tempo :Date = new Date();
    const hrs :number = tempo.getHours();
    const min :number = tempo.getMinutes();

    spanHours.textContent = `${hrs}`.padStart(2, "0");
    spanMinutes.textContent = `${min}`.padStart(2, "0");


    const spanMouth = document.querySelector('.mouth') as HTMLSpanElement;

    const dayInPort :string = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(tempo);
    const monthInPort :string = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(tempo);
    const numberDay = tempo.getDate();

    spanMouth.textContent = `${dayInPort} ,${numberDay} de ${monthInPort} `

}

setInterval(time);

function animationScreen() {
    const container = document.querySelector('.container') as HTMLDivElement;
    const tempo = document.querySelector('.tempo') as HTMLDivElement;
    const displaylogin = document.querySelector('.bloco-login') as HTMLDivElement;
    const body = document.body;

    container.addEventListener('click', () => {
        tempo.classList.add('active');
        displaylogin.style.opacity = 'initial';
        body.style.backdropFilter = 'blur(6px)';
    })
}

animationScreen();