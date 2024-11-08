function reloadScreen(event) {
    (event).preventDefault(); 

    const delay :number = 3000; 
    const url :string = event.target.href; 

    alert("Você será redirecionado em " + delay / 1000 + " segundos");

    setTimeout(() => {
        window.location.href = url;
    }, delay);
}

window.onload = function() {

    const links = document.querySelectorAll('.power-on');
    links.forEach(link => {
        link.addEventListener('click', reloadScreen);
    });
};

    function animationClick() {
        const span1 = document.querySelector('.a') as HTMLSpanElement;
        const span2 = document.querySelector('.b') as HTMLSpanElement;
        const span3= document.querySelector('.c') as HTMLSpanElement;
        const span4 = document.querySelector('.d') as HTMLSpanElement;

        span1.style.animation = 'shine 3s ease-in 0.5s';
        span2.style.animation = 'shine 2.5s ease-in 1s';
        span3.style.animation = 'shine 2s ease-in 1.5s';
        span4.style.animation = 'shine 1.5s ease-in 2s';
    }
    animationClick();