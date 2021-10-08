// // Hamburger Menu
// const body = document.querySelector("body");
// const navbar = document.querySelector(".navbar");
// const menuBtn = document.querySelector(".menu-btn");
// const cancelBtn = document.querySelector(".cancel-btn");
// const move_menu = document.querySelector(".container");
// const move_nav = document.querySelector("nav.navbar");
// const on_Click = document.querySelector(".container");
// menuBtn.onclick = () => {
//     navbar.classList.add("show");
//     body.classList.add("disabled");
//     move_menu.classList.add("move-menu")
// }
// cancelBtn.onclick = () => {
//     body.classList.remove("disabled");
//     navbar.classList.remove("show");
//     move_menu.classList.remove("move-menu")
// }
// on_Click.onclick = () => {
//     navbar.classList.remove("show");
//     move_menu.classList.remove("move-menu")
// }
//
// // Sticky navbar
// window.addEventListener("scroll", function () {
//     let navbar = document.querySelector(".navbar");
//     navbar.classList.toggle("sticky", window.scrollY > 100);
// })

function openMenu() {
    let menoBox = document.getElementById("hamburger-content");


    menoBox.classList.add("open-menu");
    menoBox.classList.remove("close-menu");

    let bodyBox = document.getElementById("container");

    bodyBox.classList.add("moveOn-container");
    bodyBox.classList.remove("moveBack-container");


    let menunav = document.getElementById('hamburger-menu')

    menunav.classList.add("moveOn-container");
    menunav.classList.remove("moveBack-container");
}
function closeMenu() {
    let menoBox = document.getElementById("hamburger-content");
    menoBox.classList.remove("open-menu");
    menoBox.classList.add("close-menu");

    let bodyBox = document.getElementById("container");
    bodyBox.classList.remove("moveOn-container");
    bodyBox.classList.add("moveBack-container");

    let menunav = document.getElementById('hamburger-menu')

    menunav.classList.remove("moveOn-container");
    menunav.classList.add("moveBack-container");

}
function closeMenuBody() {
    let menoBox = document.getElementById("hamburger-content");
    let bodyBox = document.getElementById("container");
    let menunav = document.getElementById('hamburger-menu')


    if (menoBox.classList.contains("open-menu")){
        menoBox.classList.remove("open-menu");
        menoBox.classList.add("close-menu");
        bodyBox.classList.remove("moveOn-container");
        bodyBox.classList.add("moveBack-container");
        menunav.classList.remove("moveOn-container");
        menunav.classList.add("moveBack-container");
    }
}

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
})


window.addEventListener("scroll", function () {
    let scrollmenu = document.querySelector("#hamburger-menu");
    scrollmenu.classList.toggle("sticky", window.scrollY > 110);
})