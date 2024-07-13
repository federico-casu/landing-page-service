const reviewsHTML = document.querySelectorAll('div.review');
const sliderButtonsHTML = document.querySelectorAll('#slider-buttons > div');
let activeReview = 0;

sliderButtonsHTML.forEach( (button, i) => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('slider-button-active')) {
            button.classList.remove('slider-button-inactive');
            button.classList.add('slider-button-active');
            reviewsHTML[i].classList.remove('d-none');
            // activeReview = i;
            sliderButtonsHTML.forEach( (element, j) => {
                if (element.classList.contains('slider-button-active') && i != j) {
                    element.classList.remove('slider-button-active');
                    element.classList.add('slider-button-inactive');
                    reviewsHTML[j].classList.add('d-none');
                }
            } )
        }
    })
} )