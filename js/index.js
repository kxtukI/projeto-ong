// let parallax = document.getElementById("parallax");
// window.addEventListener("scroll", function(){
//     let y = this.window.scrollY;
//     parallax.style.marginTop = y * 0.7 + "px";
//     // parallax.style.top = y * 0.7 + "px";
// })

const parallax = document.getElementById("parallax");

function setTranslate(xPos, yPos, el) {
 el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";

}
window.addEventListener("DOMContentLoaded", scrollLoop, false);

let xScrollPosition;
let yScrollPosition;

function scrollLoop() {
  xScrollPosition = window.pageXOffset;
  yScrollPosition = window.pageYOffset;
  console.log(window.pageYOffset);
    do {
        setTranslate(0, yScrollPosition * 0.7, parallax);
        requestAnimationFrame(scrollLoop);
    }   while (yScrollPosition );
    


}