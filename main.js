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
var focusLine = document.getElementById("siteNav_focusLine");
focusLine.style.transform = "translateX(400px) scaleX(0.0620074)"

for (i = 0; i < topNav.length; i++) {
  topNav[i].addEventListener("mouseover", moveLine, false);
  topNav[i].addEventListener("mouseleave", moveLineToOrigin, false);

};

function moveLine(e) {
  console.log("hello");
  var focusLine = document.getElementById("siteNav_focusLine");
  var currentBtn = e.target;
  var r = currentBtn.offsetLeft, n = currentBtn.offsetWidth, i = n / currentBtn.offsetParent.offsetWidth;;
  focusLine.style.transform = "translateX(" + r + "px) scaleX(" + i + ")"

  console.log(currentBtn);
  console.log(focusLine.style.transform);
  console.log(r);
  console.log(n);
};

function moveLineToOrigin(e) {
  var focusLine = document.getElementById("siteNav_focusLine");
  focusLine.style.transform = "translateX(400px) scaleX(0.0620074)";
}


//secondNav hoverbackground


var secondNav = document.getElementsByName("secondNavBtn");
var j = 0;
var hoverBackgorund = document.getElementById("baseLayout_hoverBackground");
console.log(secondNav);

for (j = 0; j < secondNav.length; j++) {
  secondNav[j].addEventListener("mouseover", moveBg, false);
  console.log(j);
};


function moveBg() {
  hoverBackgorund.style.height = "434.391px";
  for (i = 0; i < topNav.length; i++) {
    topNav[i].style.color = "#fff";
  };
};

hoverBackgorund.addEventListener("mouseleave", bgDissappear, false);

function bgDissappear() {
  hoverBackgorund.style.height = "0px";
  for (i = 0; i < topNav.length; i++) {
    topNav[i].style.color = "#46c8fa";
  };

};