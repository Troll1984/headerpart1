let sliderImage = document.querySelector('.slider-image');
let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');
let move = 0;
let maxMove = sliderImage.scrollWidth - sliderImage.parentElement.clientWidth;


leftArrow.addEventListener('click', function() {
    if(move === 0){
        return;
    } else {
         move += 365;
    sliderImage.style.transform = `translateX(${move}px)`;
    }
   
})
rightArrow.addEventListener('click', function() {
    if(move === -1460){
        return;
    } else {
    move -= 365    ;
    sliderImage.style.transform = `translateX(${move}px)`;
    }
})