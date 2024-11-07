function reloadScreen(event) {
    (event).preventDefault();
    var delay = 3000;
    var url = event.target.href;
    alert("Você será redirecionado em " + delay / 1000 + " segundos");
    setTimeout(function () {
        window.location.href = url;
    }, delay);
}
window.onload = function () {
    var links = document.querySelectorAll('.power-on');
    links.forEach(function (link) {
        link.addEventListener('click', reloadScreen);
    });
};
function animationClick() {
    var span1 = document.querySelector('.a');
    var span2 = document.querySelector('.b');
    var span3 = document.querySelector('.c');
    var span4 = document.querySelector('.d');
    span1.style.animation = 'shine 3s ease-in 0.5s';
    span2.style.animation = 'shine 2.5s ease-in 1s';
    span3.style.animation = 'shine 2s ease-in 1.5s';
    span4.style.animation = 'shine 1.5s ease-in 2s';
}
animationClick();
