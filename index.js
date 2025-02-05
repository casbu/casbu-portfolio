//TODO copywright  
// var d = new Date(); page.currentYear = d.getFullYear();
// document.textContent("")

//! ANIMATIONS
//blinking cursor effect
const blink = document.querySelector('#blink');
const cursorAnimation = () => {
  $('#blink').animate({
      opacity: 0
  }, 'fast', 'swing').animate({
      opacity: 1
  }, 'fast', 'swing');
};

//shifting nav arrow
const shift = document.querySelector('#shift');
const arrowAnimation = () => {
  $('#shift').animate({
      //TODO: add shifting arrow animation

  })
};

//about text cycling
const aboutList = [ "a Full-Stack Engineer", "a Product Designer", "a Project Manager", "an IT Administrator", "a Photographer", "a Creator"];
const  cycle = document.querySelector("#about-cycle");
let i = 0;
const cycleAbout = () => {
  cycle.textContent = aboutList[i];
  i = ++i % aboutList.length;
};

//! FUNCTIONS 
//blinking cursor effect
cursorAnimation();
setInterval(cursorAnimation, 700);

//text cycling
cycleAbout();
setInterval(cycleAbout, 1500);
 
