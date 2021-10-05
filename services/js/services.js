const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const move_menu = document.querySelector(".container");
const on_Click = document.querySelector(".container");
menuBtn.onclick = () => {
    navbar.classList.add("show");
    body.classList.add("disabled");
    move_menu.classList.add("move-menu")
}
cancelBtn.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    move_menu.classList.remove("move-menu")
}
on_Click.onclick = () => {
    navbar.classList.remove("show");
    move_menu.classList.remove("move-menu")
}
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
})
