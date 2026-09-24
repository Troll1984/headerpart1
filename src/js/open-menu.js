
/*Появленя блока контакт */

let blockContact = document.querySelector('.block-contact');
let btnClose = document.querySelector('#btnclose'); 
let arrow1 = document.querySelector('.arrow-1');
let arrow2 = document.querySelector('.arrow-2');
let listOpen = document.querySelector('.list-open');
let listOpen2 = document.querySelector('.list-open-2');

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


/*Бургер меню*/ 
let menu = document.querySelector('#menu');
let openMenu = document.querySelector('.open-menu');
let btn = document.querySelector('.btn');

menu.addEventListener('click', function() {
    openMenu.style.display = "flex";   
});
btn.addEventListener('click', function() {
     openMenu.style.display = "none"
});

/*Анимация в бургер меню*/

arrow1.addEventListener('click',function() {
    listOpen.classList.toggle('actives');
    
})
arrow2.addEventListener('click',function() {
    
    listOpen2.classList.toggle('actives1');
})











