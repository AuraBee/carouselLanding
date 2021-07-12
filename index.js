const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

const radioSlides = document.getElementsByClassName('radio-buttons')
let radioPosition = 0;
const radioTotal = radioSlides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);


function moveToNextRadio() {
    for (let radio of radioSlides){
     
    }
    
//    if (radioPosition === radio - 1) {
//         radioPosition = 0;
//     } else {
//         radioPosition++;
//     }


}


function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
  
    if (slidePosition === totalSlides - 1 ) {
        slidePosition = 0;
    
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    moveToNextRadio()
}

function moveToPrevSlide() {
    hideAllSlides();
 
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    
}

