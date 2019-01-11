/*//Slider
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
}*/

//setTimeout(sliderSlide(), 5000);

//window.addEventListener("load", sliderSlide, false);

//sliderXCurrent.style.transform = "translate3d(0,0,0)";
console.log("t");
//setInterval("sliderSlide()", 5000);

/*function sliderSlide() {
  console.log("test");
  var sliderXCurrent = document.getElementById("steppedCarousel_slides");
  //var x = sliderXCurrent.style.transform.value;
  var per01 = "translateX(0%)";
  var per02 = "translateX(-100%)";
  var per03 = "translateX(-200%)";
  if (sliderXCurrent.style.transform == per01) {
    sliderXCurrent.style.transform = per02;
    console.log("test01");
  } else if (sliderXCurrent.style.transform == per02) {
    sliderXCurrent.style.transform = per03;
    console.log("test02");
  } else if (sliderXCurrent.style.transform == per03) {
    sliderXCurrent.style.transform = per01;
    console.log("test03");
  };
  //console.log(x);
};*/

var percent = [0, -100, -200];
var currentOffset = 0;

setInterval("sliderSlide()", 5000);

function sliderSlide() {
  currentOffset = (currentOffset + 1) % + percent.length;
  var sliderXCurrent = document.getElementById("steppedCarousel_slides");
  sliderXCurrent.style.transform = "translateX(" + percent[currentOffset] + "%)";

};



//Topnav bottomLine

var topNav = document.getElementsByName("topnavBtn");
var i = 0;

for (i = 0; i < topNav.length; i++) {
  topNav[i].addEventListener("mouseover", moveLine, false);

};

function moveLine() {
  console.log("hello");
  var topNav = document.getElementsByName("topnavBtn");
  var focusLine = document.getElementById("siteNav_focusLine");
  var i = 0;
  for (i = 0; i < topNav.length; i++) {
    var CurrentBtnStyle = topNav[i].style.transform;
    focusLine.style.transform = CurrentBtnStyle;

  };
  console.log(CurrentBtnStyle);
};

