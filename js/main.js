let menu = document.querySelector(".header__hamburger");
let navBar =document.querySelector(".header__list");
let dropdown = document.querySelector(".dropdown");
let dropdownList = document.querySelector(".dropdown__list");
let dropdownIcon = document.querySelector(".dropdown__icon");


dropdown.addEventListener("click", function () {
    dropdownList.classList.toggle
        ("show__dropdown__list");
    dropdownIcon.classList.toggle("show__dropdown__icon")
});
menu.addEventListener("click", function ()
{
    navBar.classList.toggle("header__show-list");
});