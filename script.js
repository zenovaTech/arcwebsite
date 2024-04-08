const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
  yValue = 0;

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    let isInLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue =
      (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
    el.style.transform = `translateX(calc(-50% + ${
      xValue * speedx
    }px)) translateY(calc(-50% + ${
      yValue * speedy
    }px)) perspective(2300px) translateZ(${zValue}px)`;
  });
});

let timeline = gsap.timeline();

parallax_el.forEach((el) => {
  el,
    {
      top: `${el.offsetHeight / 2 + el.dataset.distance}px`,
      duration: 1,
    },
    "1";
});

// Get the logo element
const logo = document.getElementById('logo');
const header = document.getElementById('header');
const nav_items = document.getElementById('nav-items');

// Listen for scroll events
window.addEventListener('scroll', () => {
    // Check if the page has been scrolled down
    if (window.scrollY > 470) {
        // If scrolled down, show the logo
        logo.style.display = 'block';
        header.style.background = "#06437c"
      } else {
        // If at the top, hide the logo
        logo.style.display = 'none';
        header.style.background = ''
        nav_items.style.color = "#fff"
    }
});