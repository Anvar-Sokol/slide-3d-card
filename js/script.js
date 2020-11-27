const objectPrev = document.getElementById('ClipArt-btn-prev');
const objectNext = document.getElementById('ClipArt-btn-next');
const objectSlides = document.querySelectorAll('.ClipArt-slide');
const objectDots = document.querySelectorAll('.ClipArt-dot');
const objectSlidesWrapper = document.querySelectorAll('.ClipArt-slider-wrapper');

let index = 0;

const dynamicSlide = n => {
    for(slide of objectSlides){
        slide.classList.remove('trigger');
    }
    objectSlides[n].classList.add('trigger');
}


const dynamicDot = n => {
    for(dot of objectDots){
        dot.classList.remove('dotsTrigger');
    }
    objectDots[n].classList.add('dotsTrigger');
}



const rightSlide = () => {
    if(index == objectSlides.length - 1){
        index = 0;
        dynamicSlide(index);
        dynamicDot(index);
         index = indexDot;
    } else {
         index++;
        dynamicSlide(index);
        dynamicDot(index);
         index = indexDot;
    }
}

const leftSlide = () => {
    if(index == 0){
        index = objectSlides.length - 1;
        dynamicSlide(index);
        dynamicDot(index);
        index = indexDot;
    } else {
        index--;
        dynamicSlide(index);
        dynamicDot(index);
        index = indexDot;
    }
}

objectDots.forEach((item, indexDot) => {
    item.addEventListener('click', () =>{
        index = indexDot;
        dynamicSlide(index);
        dynamicDot(index);
        clearInterval(interval);
    })
})





objectNext.addEventListener('click', rightSlide);
objectPrev.addEventListener('click', leftSlide);

const interval = setInterval(rightSlide, 8000)
