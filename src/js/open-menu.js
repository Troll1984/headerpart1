let menu = document.querySelector('#menu');
let openMenu = document.querySelector('.open-menu');
let btn = document.querySelector('.btn');

menu.addEventListener('click', function() {
    openMenu.style.display = "flex";   
});
btn.addEventListener('click', function() {
     openMenu.style.display = "none"
})


/*Появленя блока контакт */
let blockСontact = document.querySelector('.block-contact');
let btnClose = document.querySelector('#btnclose'); 
document.addEventListener('click', function() {
   
    setTimeout(() => {
        blockСontact.style.display = 'flex';
    }, 5000);
   
}, { once: true });
btnClose.addEventListener('click', function() {
     blockСontact.style.display = 'none';
     setTimeout(() => {
        blockСontact.style.display = 'flex';
     },60000)
});

