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
    var popupRestart = document.querySelector('.popup-restart');
    powerOff.addEventListener('click', function () {
        popupRestart.classList.toggle('active');
    });
}
clickInPower();
