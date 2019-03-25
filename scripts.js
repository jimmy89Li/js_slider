//Get elements
const slider = document.querySelector("[data-target='slider']");
const slide = document.querySelector("[data-target='slide']");
const buttonLeft = document.querySelector("[data-action='slideLeft']");
const buttonRight = document.querySelector("[data-action='slideRight']");

//Get dimensions
const sliderSize = slider.offsetWidth;
const slideStyle = window.getComputedStyle(slide);
const slideMarginRight = Number(slideStyle.marginRight.match(/\d+/g)[0]);

//Define slides count
const slidesCount = slider.querySelectorAll("[data-target='slide']").length;

//Define offset
let offset = 0;

//Define maximum sliding
const maxSlide = -(slidesCount * sliderSize - (slidesCount * sliderSize) / 3);


//Add buttons events
buttonLeft.addEventListener("click", function() {
  if(offset!==0) {
    offset += sliderSize + slideMarginRight;
    slider.style.transform = `translateX(${offset/3}px)`;
  }
});

buttonRight.addEventListener("click",function(){
  if(offset >= maxSlide) {
    offset -= sliderSize + slideMarginRight;
  slider.style.transform = `translateX(${offset/3}px)`;
  }
});