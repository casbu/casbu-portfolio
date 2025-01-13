
const navSlide = () => {
    const arrow = document.querySelector('.arrow');
    const nav = document.querySelector('.navbar-nav');
    const navLinks = document.querySelectorAll('.navbar-nav li');
    
    arrow.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(nav.classList.contains('nav-active')){
                link.style.animation = `navLinkRise 0.5s ease forwards ${index / 7 + 0.3}s`;
            } else {
                link.style.animation = `navLinkFall 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //Animate Arrow
        arrow.classList.toggle('toggle');

    });
}

navSlide(); 