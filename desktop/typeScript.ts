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
    const powerOff = document.querySelector('.power-off') as HTMLDivElement;

    sidebar.addEventListener('mouseenter', () =>{
        powerOff.classList.add('active');
    })

    sidebar.addEventListener('mouseleave', () =>{
        powerOff.classList.remove('active');
    })
}
exibirPowerOf();

function clickInPower() {
    const powerOff = document.querySelector('.power-off') as HTMLDivElement;
    const teste = document.getElementById('teste') as HTMLDivElement;

    document.addEventListener('click', function(event) {
        if(powerOff.contains(event.target as Node)) {
                if(teste.classList.contains('active')) {
                        teste.classList.remove('active')
                } else {
                        teste.classList.add('active');
                    }   
        } else {
                        teste.classList.add('active');
        }
    });
}
clickInPower();