let menu = document.querySelector(".header__hamburger");
let navBar =document.querySelector(".header__list");
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
menu.addEventListener("click", function ()
{
    navBar.classList.toggle("header__show-list");
});