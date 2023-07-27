//Define needed variable
const sliderContainer = document.querySelector('.slider_container');

const sliderRight = document.querySelector('.rightSlide');
const sliderLeft = document.querySelector('.leftSlide');

const upButton = document.querySelector('.upButton');
const downButton = document.querySelector('.downButton');

const slidesLength = sliderLeft.querySelectorAll('div').length

let activeSlideIndex =0;

sliderLeft.style.top=`-${(slidesLength -1)*100}vh`

//add EventLisener to the buttons
upButton.addEventListener('click',()=> changeSlide('up'));
downButton.addEventListener('click',()=> changeSlide('down'));

//define the changeSlide function
const changeSlide=(direction)=>{
    const slideHeight = sliderContainer.clientHeight;
    if(direction==='up'){
        activeSlideIndex++;
        if(activeSlideIndex> slidesLength-1){
            activeSlideIndex = 0;
        }
    }


    if(direction==='down'){
        activeSlideIndex--;
        if(activeSlideIndex<0){
            activeSlideIndex= slidesLength-1;
        }
    }
    sliderRight.style.transform =`translateY(-${
        activeSlideIndex * slideHeight
    }px)`;
    sliderLeft.style.transform =`translateY(${
        activeSlideIndex * slideHeight
    }px)`;
}
