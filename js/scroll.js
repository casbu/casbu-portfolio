//smooth scroll
function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.offsetTop;
    var startPosition = window.scrollY;
    var distance = targetPosition - startPosition;

    var startTime = null;
  
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    function ease(t, b, c, d) {
        console.log('ease loaded');
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
}
var homeIcon = document.querySelector('#home-icon');
var aboutIcon = document.querySelector('#about-icon');
// var contactIcon = document.querySelector('#contact-icon');
var workIcon = document.querySelector('#work-icon');

homeIcon.addEventListener('click', function () {
    smoothScroll('.navbar', 2000);
});
aboutIcon.addEventListener('click', function () {
    smoothScroll('.about', 2000);
});
// contactIcon.addEventListener('click', function (event) {
//     // event.preventDefault();
//     console.log('Button clicked!');
//     smoothScroll(contactSection, 2000);
// });
workIcon.addEventListener('click', function () {
    smoothScroll('.work', 2000);
});