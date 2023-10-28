"use strict";

var slideIndex = 1;
showDivs(slideIndex);
var timer;

function startAutoPlay() {
  stopAutoPlay();
  timer = setInterval(function () {
    plusDivs(1);
  }, 3000);
}

function stopAutoPlay() {
  clearInterval(timer);
}

startAutoPlay();

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");

  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";
} // slider servicesright


var slideIndex = 1;
showDivss(slideIndex);

function plusDivss(n) {
  showDivss(slideIndex += n);
}

function showDivss(n) {
  var i;
  var x = document.getElementsByClassName("services-slide");

  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";
} // slider servicesleft


var slideIndex = 1;
showDivssleft(slideIndex);

function plusDivssleft(n) {
  showDivssleft(slideIndex += n);
}

function showDivssleft(n) {
  var i;
  var x = document.getElementsByClassName("services-slideleft");

  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";
} // galleriescenter


var slideIndex = 0;
showDivsGalleries(slideIndex);

function plusDivsGalleries(n) {
  showDivsGalleries(slideIndex + n);
}

function showDivsGalleries(n) {
  var i;
  var x = document.getElementsByClassName("galleriesPic");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  for (i = n; i < n + 4; i++) {
    if (i >= 0 && i < x.length) {
      x[i].style.display = "block";
    }
  }

  slideIndex = n;

  if (slideIndex >= x.length) {
    slideIndex = 0;
  }

  if (slideIndex < 0) {
    slideIndex = x.length - 1;
  }
}
//# sourceMappingURL=script.dev.js.map
