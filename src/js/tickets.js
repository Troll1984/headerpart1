let inp = document.querySelector('#inp');
let btnNumber = document.querySelector('.btn-number');
let modalWindow = document.querySelector('.modal-window');
let overlay = document.querySelector('.overlay');
let textPresent = document.querySelector('.text-present');
let winSound = document.querySelector('#win-sound');


btnNumber.addEventListener('click', function() {
    if(inp.value === '1' || inp.value === '1'){        
        overlay.classList.add('show');
        winSound.play();
         setTimeout(() => {
            modalWindow.style.display = 'block';    
                  
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
    winSound.pause();
     winSound.currentTime = 0;
})