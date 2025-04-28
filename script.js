let navLinks = document.querySelectorAll('.nav-menu .nav-link')
let menuOpen = document.querySelector('#menu-open-button')
let menuClose = document.querySelector('#menu-close-button')
menuOpen.addEventListener("click",()=>{
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
})

// Close menu when the close button is clicked
menuClose.addEventListener("click",()=>menuOpen.click())

// Close menu when the nav link is clicked
navLinks.forEach(link =>{
    link.addEventListener("click",()=> menuOpen.click())
})

//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    
    loop: true,
    grabCursor: true,
    spaceBetween : 25,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints:{
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });