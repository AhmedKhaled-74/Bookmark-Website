const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("nav-menu");
const headerMenu = document.getElementById("main-header");
const BM = document.getElementById("BM-menu");
let clickCount = 0;

btnMenu.addEventListener("click", MobNavMenu);

function MobNavMenu() {
  clickCount++;
  btnMenu.classList.toggle("open");
  menu.classList.toggle("translate-x-full");
  menu.classList.toggle("translate-x-0");
  headerMenu.classList.toggle("bg-veryDarkBlue");
  headerMenu.classList.toggle("bg-opacity-95");
  headerMenu.classList.toggle("backdrop-blur-sm");
  BM.classList.toggle("fill-[#242A45]");

  // Toggle the overflow-hidden class with a delay of 0 seconds on the first click
  // and a delay of 0.5 seconds on the second click
  // const delayTime = clickCount === 1 ? 0 : 500;
  // setTimeout(function () {
  //   headerMenu.classList.toggle("overflow-hidden");
  // }, delayTime);

  // // Reset the click count to loop the behavior
  // if (clickCount >= 2) {
  //   clickCount = 0;
  // }
}

// apply the function to all nav links when click

const menuLinks = document.querySelectorAll(".section-btn");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    MobNavMenu();
  });
});
/*The minWidth constant is calculated by multiplying the equivalent pixel width of 48em by the font size of the html element. The browser window width is then compared to minWidth, and if it is greater than minWidth
, and if it is greater than minWidth, the MobNavMenu() function is called.

Note that this code will only be executed once when the page is loaded. If you want the MobNavMenu() function to be called whenever the browser window is resized, you will need to use the window.addEventListener() method to attach an event listener to the resize event, and call the function accordingly
 */
// add event listener for window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768 && menu.classList.contains("translate-x-0")) {
    MobNavMenu();
  }
});
