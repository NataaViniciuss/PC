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
    var powerOf = document.querySelector('.power-off');
    sidebar.addEventListener('mouseenter', function () {
        powerOf.classList.add('active');
    });
    sidebar.addEventListener('mouseleave', function () {
        powerOf.classList.remove('active');
    });
}
exibirPowerOf();
