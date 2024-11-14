function displaySidebar() {
    const sidebar = document.querySelector('.sidebar');
    const powerOff = document.querySelector('.power-off');
    sidebar.addEventListener('mouseenter', () => {
        powerOff.classList.add('active');
    });
    sidebar.addEventListener('mouseleave', () => {
        powerOff.classList.remove('active');
    });
}
displaySidebar();
function displayPopUpRestart() {
    const powerOff = document.querySelector('.power-off');
    const teste = document.getElementById('teste');
    document.addEventListener('click', function (event) {
        if (powerOff.contains(event.target)) {
            if (teste.classList.contains('active')) {
                teste.classList.remove('active');
            }
            else {
                teste.classList.add('active');
            }
        }
        else {
            teste.classList.add('active');
        }
    });
}
displayPopUpRestart();
