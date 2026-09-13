let menu = document.querySelector('.menu');
let openMenu = document.querySelector('.open-menu');
let btn = document.querySelector('.btn');

menu.addEventListener('click', function() {
    openMenu.style.display = "flex";   
});
btn.addEventListener('click', function() {
     openMenu.style.display = "none"
})