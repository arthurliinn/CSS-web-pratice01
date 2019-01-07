//Slider
/*var slider = document.getElementsByClassName("steppedCarousel_slides");
var sliderImg = [0, 1, 2];
function sliderSlide() {
  if ((sliderImg = sliderImg[0])) {
    slider.style.transform = "translate3d(-100%,0,0)";
    sliderImg = sliderImg[1];
  } else if ((sliderImg = sliderImg[1])) {
    slider.style.transform = "translate3d(-200%,0,0)";
    sliderImg = sliderImg[2];
  } else if ((sliderImg = sliderImg[2])) {
    slider.style.transfornm = "translate3d(0,0,0)";
    sliderImg = sliderImg[0];
  }
}

setTimeout(sliderSlide(), 5000);
*/

var slider = document.getElementById("steppedCarousel_slides");
var sliderImg = 0;

setInterval("sliderSlide()", 1000);
/*function sliderSlide() {
  if (sliderImg = 0) {
    slider.style.transform = "translate3d(-100%,0,0)";
    setTimeout()
    sliderImg ++;
  } else if (sliderImg = 1) {
    slider.style.transform = "translate3d(-200%,0,0)";
    sliderImg ++;
  } else if ((sliderImg = sliderImg[2])) {
    slider.style.transfornm = "translate3d(0,0,0)";
    sliderImg = sliderImg[0];
  };
};*/
