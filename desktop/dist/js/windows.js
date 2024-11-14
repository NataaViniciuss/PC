const divWindows = document.querySelector('.div-windows');
function hoverWindows() {
    const iconWhite = document.querySelector('.icon-white');
    const iconBlue = document.querySelector('.icon-blue');
    divWindows.addEventListener('mouseenter', () => {
        iconWhite.style.display = 'none';
        iconBlue.style.display = 'unset';
    });
    divWindows.addEventListener('mouseleave', () => {
        iconWhite.style.display = 'unset';
        iconBlue.style.display = 'none';
    });
}
hoverWindows();
function displayPopUp() {
    const popupWindows = document.querySelector('.popup-windows');
    const sidebar = document.querySelector('.sidebar');
    divWindows.addEventListener('click', () => {
        divWindows.classList.toggle('active');
        popupWindows.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
}
displayPopUp();
