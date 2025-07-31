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
    slidesPerView: 3,
    spaceBetween: 20,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});