import '../styles/style.scss';

const slidesContainer = document.querySelector('#slides-container');
const slides =  slidesContainer.querySelectorAll('.slide');
const prevButton = document.querySelector('#arrow-prev');
const nextButton = document.querySelector('#arrow-next');

let currentSlideIndex = 0;

nextButton.addEventListener('click',()=>{
    const slideWidth = slides[0].clientWidth;
    if(currentSlideIndex >=slides.length-1){
        slidesContainer.scrollLeft = 0;
        currentSlideIndex = 0;
    } else {
        currentSlideIndex++;
        slidesContainer.scrollLeft +=slideWidth;
    }
});

prevButton.addEventListener('click',()=>{
    const slideWidth = slides[1].clientWidth;
    if(currentSlideIndex<=0){
        slidesContainer.scrollLeft += slides[0].clientWidth * slides.length;
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex--;
        slidesContainer.scrollLeft -=slideWidth;
    }
});