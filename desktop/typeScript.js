var windows = document.querySelector('.windows');
function colorWindows() {
    var iconWhite = document.querySelector('.icon-white');
    var iconBlue = document.querySelector('.icon-blue');
    windows.addEventListener('mouseenter', function () {
        iconWhite.style.display = 'none';
        iconBlue.style.display = 'unset';
    });
    windows.addEventListener('mouseleave', function () {
        iconWhite.style.display = 'unset';
        iconBlue.style.display = 'none';
    });
}
colorWindows();
function exibirPopUp() {
    var popupWindows = document.querySelector('.popup-windows');
    var sidebar = document.querySelector('.sidebar');
    windows.addEventListener('click', function () {
        windows.classList.toggle('active');
        popupWindows.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
}
exibirPopUp();
function exibirPowerOf() {
    var sidebar = document.querySelector('.sidebar');
    var powerOff = document.querySelector('.power-off');
    sidebar.addEventListener('mouseenter', function () {
        powerOff.classList.add('active');
    });
    sidebar.addEventListener('mouseleave', function () {
        powerOff.classList.remove('active');
    });
}
exibirPowerOf();
function clickInPower() {
    var powerOff = document.querySelector('.power-off');
    var teste = document.getElementById('teste');
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
clickInPower();
