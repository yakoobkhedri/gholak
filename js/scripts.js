// mobile menu

let openMenu= document.getElementById('open-menu');
let closeMenu= document.getElementById('close-menu');
let menu= document.getElementById('menu');

openMenu.addEventListener('click',function () {
  menu.classList.add('active');
})
closeMenu.addEventListener('click',function () {
  menu.classList.remove('active');
})

// swiper

var banner = new Swiper(".banner", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

var educate = new Swiper(".educate", {
  slidesPerView: 2,
  spaceBetween: 26,
  autoplay: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 56,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

new SmoothScroll('a[href*="#"]', {
  easing: 'linear',
  speed: 1000
});


// accordion

let accordionBtn = Array.from(document.getElementsByClassName('accordionBtn'));

accordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.parentElement.classList.toggle('active');
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})
