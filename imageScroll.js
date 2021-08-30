var slideIndex1 = 0;
var slideIndex2 = 0;
carousel1();
carousel2();

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
