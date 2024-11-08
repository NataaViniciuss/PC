function reloadScreen() {
    var myLink = document.querySelector('.teste');
    var powerOn = document.querySelector('.power-on');
    var span1 = document.querySelector('.a');
    var span2 = document.querySelector('.b');
    var span3 = document.querySelector('.c');
    var span4 = document.querySelector('.d');
    myLink.addEventListener('click', function (e) {
        e.preventDefault();
        span1.style.animation = 'shine 3s ease-in 0.7s';
        span2.style.animation = 'shine 2.5s ease-in 1.2s';
        powerOn.style.transform = 'rotate(90deg)';
        span3.style.animation = 'shine 2s ease-in 2.2s';
        span4.style.animation = 'shine 1.5s ease-in 2.7s';
        var hrefLink = this.getAttribute('data-target');
        setTimeout(function () {
            window.location.href = hrefLink;
        }, 3000);
    });
}
reloadScreen();
