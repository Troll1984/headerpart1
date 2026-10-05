let inp = document.querySelector('#inp');
let btnNumber = document.querySelector('.btn-number');
let modalWindow = document.querySelector('.modal-window');
let overlay = document.querySelector('.overlay');
let textPresent = document.querySelector('.text-present');
let winSound = document.querySelector('#win-sound');
let winSound1 = document.querySelector('#win-sound-1');
let blockContact = document.querySelector('.block-contact');
let music = document.querySelector('.music');
let day = document.querySelector('.day');

music.addEventListener('click', function() {
    if (winSound1.paused) {
        winSound1.play();
    } else {
        winSound1.pause();
    }
});

btnNumber.addEventListener('click', function() {
     if (
        !/^\d+$/.test(inp.value) && 
        !/^\+\d+$/.test(inp.value)
    ) {
        alert('Incorrect format, please enter a phone number');
        return;
    }

    if (
        inp.value.length !== 10 && 
        inp.value.length !== 13
    ) {
        alert('Incorrect number length');
        return;
    }
    if(inp.value === '0956479817' || inp.value === '+380956479817'){        
        overlay.classList.add('show');
        blockContact.style.display = 'none';
        winSound.play();
         setTimeout(() => {
            modalWindow.style.display = 'block';
            textPresent.classList.add('animates');                  
        }, 3000)
        setTimeout(() => {
            modalWindow.classList.add('animate');  
            textPresent.classList.add('animates');               
        }, 4000)       
         setTimeout(() => {
            modalWindow.classList.add('active');  
                          
        }, 7000)
        setTimeout(() => {
            modalWindow.classList.remove('active');                
        }, 5000)
        setTimeout(() => {            
            textPresent.style.display = 'block';
        }, 4000)      
       
    }else {
        alert('Your number is registerred now, good luck ');
    }
});
        
modalWindow.addEventListener('click', function() {
    overlay.classList.remove('show');
    modalWindow.style.display = 'none';
    textPresent.style.display = 'none';
    blockContact.style.display = 'none';
    winSound.pause();
    winSound.currentTime = 0;
     day.style.display = 'block'
});
day.addEventListener('click', function() {    
     day.style.display = 'none'
});