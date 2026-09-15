let wrap = document.querySelector('.wrap-icon-slide');
let slide = document.querySelector('.i-slide');
let arrows = document.querySelector('.icon-arrows');
let iconLeft = document.querySelector('#icon-left');
let iconRight = document.querySelector('#icon-right');
let moveArrow = 0;
let step = 260;
function checkArrows() {
    // Левая стрелка
   
    if (moveArrow === 0) {
        iconLeft.style.visibility = 'hidden';
    } else {
        iconLeft.style.visibility = 'visible';
    }

    if (Math.abs(moveArrow) + wrap.clientWidth >= slide.scrollWidth) {
        iconRight.style.visibility = 'hidden';
    } else {
        iconRight.style.visibility = 'visible';
    }
}
if (slide.scrollWidth > wrap.clientWidth) {
    arrows.style.display = 'flex';
        checkArrows();
}

iconLeft.addEventListener('click', function() {
    if(moveArrow === 0){
        return;
    }else {
         moveArrow += step;
    slide.style.transform = `translateX(${moveArrow}px)`;
    checkArrows();
    }   
});
iconRight.addEventListener('click', function() {
     if (Math.abs(moveArrow) + wrap.clientWidth >= slide.scrollWidth) return;     
         moveArrow -= step;
    slide.style.transform = `translateX(${moveArrow}px)`;
    checkArrows();
});

window.addEventListener('resize', checkArrows);