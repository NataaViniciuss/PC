const windows = document.querySelector('.windows') as HTMLDivElement;

function colorWindows() {
    const iconWhite = document.querySelector('.icon-white') as HTMLImageElement;
    const iconBlue = document.querySelector('.icon-blue') as HTMLImageElement;
    
    windows.addEventListener('mouseenter', () => {
        iconWhite.style.display = 'none';
        iconBlue.style.display = 'unset';
    })

    windows.addEventListener('mouseleave', () => {
        iconWhite.style.display = 'unset';
        iconBlue.style.display = 'none';
    })
}
colorWindows();

function exibirPopUp() {
    const popupWindows = document.querySelector('.popup-windows') as HTMLDivElement;
    const sidebar = document.querySelector('.sidebar') as HTMLDivElement;
    
    windows.addEventListener('click', () => {
        windows.classList.toggle('active');
        popupWindows.classList.toggle('active');
        sidebar.classList.toggle('active');
    })
}
exibirPopUp();

function exibirPowerOf() {
    const sidebar = document.querySelector('.sidebar') as HTMLDivElement;
    const powerOf = document.querySelector('.power-off') as HTMLDivElement;

    sidebar.addEventListener('mouseenter', () =>{
        powerOf.classList.add('active');
    })

    sidebar.addEventListener('mouseleave', () =>{
        powerOf.classList.remove('active');
    })
}
exibirPowerOf();