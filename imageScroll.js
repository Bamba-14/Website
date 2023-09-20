var slideIndex1 = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;
var slideIndex4 = 0;
var slideIndex5 = 0;
var slideIndex6 = 0;
var slideIndex7 = 0;
var slideIndex8 = 0;
var slideIndex9 = 0;
var slideIndex10 = 0;
var slideIndex11 = 0;
carousel1();
carousel2();
carousel3();
carousel4();
carousel5();
carousel6();
carousel7();
carousel8();
carousel9();
carousel10();
carousel11();

function carousel1() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > x.length) {slideIndex1 = 1}
  x[slideIndex1-1].style.display = "block";
  setTimeout(carousel1, 2000); // Change image every 2 seconds
}
function carousel2() {
  var i;
  var x = document.getElementsByClassName("slidesJ");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > x.length) {slideIndex2 = 1}
  x[slideIndex2-1].style.display = "block";
  setTimeout(carousel2, 2000); // Change image every 2 seconds
}
function carousel3() {
  var i;
  var x = document.getElementsByClassName("slidesSA");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > x.length) {slideIndex3 = 1}
  x[slideIndex3-1].style.display = "block";
  setTimeout(carousel3, 2000); // Change image every 2 seconds
}
function carousel4() {
  var i;
  var x = document.getElementsByClassName("slidesLP");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex4++;
  if (slideIndex4 > x.length) {slideIndex4 = 1}
  x[slideIndex4-1].style.display = "block";
  setTimeout(carousel4, 2000); // Change image every 2 seconds
}
function carousel5() {
  var i;
  var x = document.getElementsByClassName("slidesJG");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex5++;
  if (slideIndex5 > x.length) {slideIndex5 = 1}
  x[slideIndex5-1].style.display = "block";
  setTimeout(carousel5, 2000); // Change image every 2 seconds
}
function carousel6() {
  var i;
  var x = document.getElementsByClassName("slidesPG");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex6++;
  if (slideIndex6 > x.length) {slideIndex6 = 1}
  x[slideIndex6-1].style.display = "block";
  setTimeout(carousel6, 2000); // Change image every 2 seconds
}
function carousel7() {
  var i;
  var x = document.getElementsByClassName("slidesPB");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex7++;
  if (slideIndex7 > x.length) {slideIndex7 = 1}
  x[slideIndex7-1].style.display = "block";
  setTimeout(carousel7, 2000); // Change image every 2 seconds
}
function carousel8() {
  var i;
  var x = document.getElementsByClassName("slidesLP3D");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex8++;
  if (slideIndex8 > x.length) {slideIndex8 = 1}
  x[slideIndex8-1].style.display = "block";
  setTimeout(carousel8, 2000); // Change image every 2 seconds
}
function carousel9() {
  var i;
  var x = document.getElementsByClassName("slidesTF");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex9++;
  if (slideIndex9 > x.length) {slideIndex9 = 1}
  x[slideIndex9-1].style.display = "block";
  setTimeout(carousel9, 2000); // Change image every 2 seconds
}
function carousel10() {
  var i;
  var x = document.getElementsByClassName("slidesFP");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex10++;
  if (slideIndex10 > x.length) {slideIndex10 = 1}
  x[slideIndex10-1].style.display = "block";
  setTimeout(carousel10, 2000); // Change image every 2 seconds
}
function carousel11() {
  var i;
  var x = document.getElementsByClassName("slidesSOF");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex11++;
  if (slideIndex11 > x.length) {slideIndex11 = 1}
  x[slideIndex11-1].style.display = "block";
  setTimeout(carousel11, 2000); // Change image every 2 seconds
}
