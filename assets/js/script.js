let totalSliders = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('.slider--width');
let sliderControls = document.querySelector('.slider--controls');
let slider = document.querySelector('.slider');

sliderWidth.style.width = `calc(100vw * ${totalSliders})`;
sliderControls.style.height = `${slider.clientHeight}px`;

function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSliders - 1;
    }
    updateMargin();
}

function goNext(){
    currentSlide++
    if(currentSlide > (totalSliders-1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let newMargin = (currentSlide * document.body.clientWidth)
    sliderWidth.style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext,2000);