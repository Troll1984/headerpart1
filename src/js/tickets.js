let inp = document.querySelector('#inp');
let btnNumber = document.querySelector('.btn-number');
let modalWindow = document.querySelector('.modal-window');
let overlay = document.querySelector('.overlay');
let closeWindow = document.querySelector('#close-window');
let textPresent = document.querySelector('.text-present');

btnNumber.addEventListener('click', function() {
    if(inp.value === '1' || inp.value === '1'){
        
        overlay.classList.add('show');
         setTimeout(() => {
            modalWindow.style.display = 'block';
        }, 3000)
        setTimeout(() => {
            closeWindow.style.display = 'block';
            textPresent.style.display = 'block';
        }, 4000)
       
    }else {
        alert('Ваш номер зарегестрирован');
    }
});
        closeWindow.addEventListener('click',function() {
        modalWindow.style.display = 'none';
        overlay.classList.remove('show');
        closeWindow.style.display = 'none';
        textPresent.style.display = 'none';
})
