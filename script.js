const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");
const links = document.querySelectorAll("#sidebar ul li a");

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    over.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    over.classList.remove("active");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.remove("active");
        over.classList.remove("active");
    });
});

// -- Initialize Swiper --
var swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3, // Default for large screens
  spaceBetween: 20,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 992px (desktop)
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 768px (tablet)
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is < 768px (mobile)
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});


// Expereience Swiper
var swiper=new Swiper(".mySwiperex", {
  effect: "cards",
  grabCursor: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
});