const divWindows = document.querySelector('.div-windows') as HTMLDivElement;

function hoverWindows() {
    const iconWhite = document.querySelector('.icon-white') as HTMLImageElement;
    const iconBlue = document.querySelector('.icon-blue') as HTMLImageElement;
    
    divWindows.addEventListener('mouseenter', () => {
        iconWhite.style.display = 'none';
        iconBlue.style.display = 'unset';
    })

    divWindows.addEventListener('mouseleave', () => {
        iconWhite.style.display = 'unset';
        iconBlue.style.display = 'none';
    })
}
hoverWindows();

function displayPopUp() {
    const popupWindows = document.querySelector('.popup-windows') as HTMLDivElement;
    const sidebar = document.querySelector('.sidebar') as HTMLDivElement;
    
    divWindows.addEventListener('click', () => {
        divWindows.classList.toggle('active');
        popupWindows.classList.toggle('active');
        sidebar.classList.toggle('active');
    })
}
displayPopUp();