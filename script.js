const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");
const links = document.querySelectorAll("#sidebar ul li a");

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

// Close sidebar when any menu link is clicked
links.forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
});