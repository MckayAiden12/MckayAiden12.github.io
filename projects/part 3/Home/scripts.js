document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("active");
        navList.classList.toggle("active");
    });
});