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

let blockContact = document.querySelector('.block-contact');
let btnClose = document.querySelector('#btnclose'); 

document.addEventListener('click', function() {      
    setTimeout(() => {
        blockContact.style.display = 'flex';
        btnClose.style.display = 'block';
    }, 5000);   
}, { once: true });

btnClose.addEventListener('click', function() {
     blockContact.style.display = 'none';
     setTimeout(() => {
        blockContact.style.display = 'flex';
     },60000)
});


