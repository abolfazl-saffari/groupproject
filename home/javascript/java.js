
function openMenu() {
    let menoBox = document.getElementById("hambergure-content");


    menoBox.classList.add("open-menu");
    menoBox.classList.remove("close-menu");

    let bodyBox = document.getElementById("container");

    bodyBox.classList.add("moveOn-container");
    bodyBox.classList.remove("moveBack-container");


    let menunav = document.getElementById('hambergure-menu')

    menunav.classList.add("moveOn-container");
    menunav.classList.remove("moveBack-container");
}
function closeMenu() {
    let menoBox = document.getElementById("hambergure-content");
    menoBox.classList.remove("open-menu");
    menoBox.classList.add("close-menu");

    let bodyBox = document.getElementById("container");
    bodyBox.classList.remove("moveOn-container");
    bodyBox.classList.add("moveBack-container");

    let menunav = document.getElementById('hambergure-menu')

    menunav.classList.remove("moveOn-container");
    menunav.classList.add("moveBack-container");

}
function closeMenuBody() {
    let menoBox = document.getElementById("hambergure-content");
    let bodyBox = document.getElementById("container");
    let menunav = document.getElementById('hambergure-menu')


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
    let scrollmenu = document.querySelector("#hambergure-menu");
    scrollmenu.classList.toggle("sticky", window.scrollY > 110);
})