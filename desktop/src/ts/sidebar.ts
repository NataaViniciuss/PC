function displaySidebar() {
    const sidebar = document.querySelector('.sidebar') as HTMLDivElement;
    const powerOff = document.querySelector('.power-off') as HTMLDivElement;

    sidebar.addEventListener('mouseenter', () =>{
        powerOff.classList.add('active');
    })

    sidebar.addEventListener('mouseleave', () =>{
        powerOff.classList.remove('active');
    })
}
displaySidebar();

function displayPopUpRestart() {
    const powerOff = document.querySelector('.power-off') as HTMLDivElement;
    const teste = document.getElementById('teste') as HTMLDivElement;

    document.addEventListener('click', function(event) {
        if(powerOff.contains(event.target as Node)) {
        if(teste.classList.contains('active')) {
            teste.classList.remove('active');
        } else {
            teste.classList.add('active');
        }   
        } else {
            teste.classList.add('active');
        }
    });
}
displayPopUpRestart();
