let inp = document.querySelector('#inp');
let btnNumber = document.querySelector('.btn-number');
let modalWindow = document.querySelector('.modal-window');
let overlay = document.querySelector('.overlay');
let textPresent = document.querySelector('.text-present');

btnNumber.addEventListener('click', function() {
    if(inp.value === '1' || inp.value === '1'){        
        overlay.classList.add('show');
         setTimeout(() => {
             modalWindow.style.display = 'block';
            modalWindow.style.backgroundColor = 'red';
            modalWindow.style.opacity = '1';
        }, 3000)
        setTimeout(() => {            
            textPresent.style.display = 'block';
        }, 4000)
       
    }else {
        alert('Ваш номер зарегестрирован');
    }
});
        
modalWindow.addEventListener('click', function() {
    overlay.classList.remove('show');
    modalWindow.style.display = 'none';
    textPresent.style.display = 'none';
})