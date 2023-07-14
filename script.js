/* -----------------------------------
IPHONE HEIGHT
// -------------------------------------- */
window.onload = mobileWindow();

function mobileWindow() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  console.log("VH on mobiles", vh);
}

window.addEventListener("resize", mobileWindow, false);
window.addEventListener("orientationchange", mobileWindow, false);

/* -----------------------------------
MORE
// -------------------------------------- */

var dot = document.querySelectorAll('.dot')

function out() {
  for(let i = 0, max = dot.length; i < max; i++)
  if (dot[i].classList.contains("off")){
    dot[i].innerHTML = out;
    console.log(dot[i])
  }

}

out()

