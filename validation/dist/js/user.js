function animationScreen() {
    const container = document.querySelector('.container');
    const tempo = document.querySelector('.tempo');
    const blocoLogin = document.querySelector('.bloco-login');
    const body = document.body;
    container.addEventListener('click', () => {
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
    const iconConfirm = document.querySelector('.icon-confirm ');
    const inputPassword = document.querySelector('.input-password');
    const senhaCorreta = 'Autotech123';
    console.log(senhaCorreta);
    iconConfirm.addEventListener('click', () => {
        const senhaDigitada = inputPassword.value;
        if (senhaDigitada === senhaCorreta) {
            window.location.href = '/desktop/desktop.html';
        }
        else {
            alert('senha errada vacilão');
        }
    });
}
validationUser();