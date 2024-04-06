let animating = false;
const box = document.getElementById('box');
const animatebutton = document.getElementById('animatebutton');
animatebutton.addEventListener('click', function() {
    if (!animating) {
        box.style.transform = 'translate(1440px, -30%)';
        animating = true
    } else {
        box.style.transform = 'translate(0, -30%)';
        animating = false;
    }
});



