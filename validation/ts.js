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
function animationScreen() {
    var container = document.querySelector('.container');
    var tempo = document.querySelector('.tempo');
    var blocoLogin = document.querySelector('.bloco-login');
    var body = document.body;
    container.addEventListener('click', function () {
        tempo.classList.add('active');
        blocoLogin.classList.toggle('active');
        blocoLogin.style.opacity = 'initial';
        body.style.backdropFilter = 'blur(6px)';
        setTimeout(function () {
            blocoLogin.classList.remove('active');
        }, 500);
    });
}
animationScreen();
function validationUser() {
    var iconConfirm = document.querySelector('.icon-confirm ');
    var inputPassword = document.querySelector('.input-password');
    var senhaCorreta = 'Autotech123';
    console.log(senhaCorreta);
    iconConfirm.addEventListener('click', function () {
        var senhaDigitada = inputPassword.value;
        if (senhaDigitada === senhaCorreta) {
            window.location.href = '/desktop/desktop.html';
        }
        else {
            alert('senha errada vacilão');
        }
    });
}
validationUser();
