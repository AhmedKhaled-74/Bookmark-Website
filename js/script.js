const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("nav-menu");
const headerMenu = document.getElementById("main-header");
const BM = document.getElementById("BM-menu");
let clickCount = 0;

/******************/

// stiky nav bar.
const ngr = document.querySelectorAll(".ng");
const dash = document.querySelectorAll(".dsh");
const sectionHeroEl = document.querySelector(".hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);
//     if (ent.isIntersecting === false) {
// const delayTime = clickCount === 1 ? 0 : 200;
// setTimeout(function () {
// sectionHeroEl.classList.add("mt-28");
// headerMenu.classList.add("fixed");

// headerMenu.classList.add("backdrop-blur-sm");
// headerMenu.classList.add("bg-veryDarkBlue");
// headerMenu.classList.add("bg-opacity-95");
// BM.classList.remove("fill-[#242A45]");
// dash.forEach((element) => {
//   // do something with each element
//   element.classList.remove("bg-black");
//   element.classList.add("bg-white");
// });
// ngr.forEach((element) => {
//   // do something with each element
//   element.classList.remove("text-grayishBlue");
//   element.classList.add("text-gray-200");
// });
// }, delayTime);
// }
// if (ent.isIntersecting === true) {
// Check if the menu is closed (i.e., doesn't have the translate-x-0 class)
//   if (!menu.classList.contains("translate-x-0")) {
//     headerMenu.classList.remove("fixed");
//     sectionHeroEl.classList.remove("mt-28");

//     headerMenu.classList.remove("backdrop-blur-sm");
//     headerMenu.classList.remove("bg-veryDarkBlue");
//     headerMenu.classList.remove("bg-opacity-95");
//     BM.classList.add("fill-[#242A45]");
//     dash.forEach((element) => {
//       // do something with each element
//       element.classList.add("bg-black");
//       element.classList.remove("bg-white");
//     });
//     ngr.forEach((element) => {
//       // do something with each element
//       element.classList.add("text-grayishBlue");
//       element.classList.remove("text-gray-200");
//     });
//   }
// }
//   },
//   {
//     // in the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);
let prevScrollPos = window.pageYOffset;
window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;
  const scrollDirection = prevScrollPos > currentScrollPos ? "up" : "down";
  prevScrollPos = currentScrollPos;

  if (
    window.scrollY > sectionHeroEl.offsetHeight - 80 &&
    scrollDirection === "up"
  ) {
    sectionHeroEl.classList.add("mt-20");
    headerMenu.classList.add("fixed");

    headerMenu.classList.add("backdrop-blur-sm");
    headerMenu.classList.add("bg-veryDarkBlue");
    headerMenu.classList.add("bg-opacity-95");
    BM.classList.remove("fill-[#242A45]");
    dash.forEach((element) => {
      // do something with each element
      element.classList.remove("bg-black");
      element.classList.add("bg-white");
    });
    ngr.forEach((element) => {
      // do something with each element
      element.classList.remove("text-grayishBlue");
      element.classList.add("text-gray-200");
    });
  } else {
    if (!menu.classList.contains("translate-x-0")) {
      headerMenu.classList.remove("fixed");
      sectionHeroEl.classList.remove("mt-20");

      headerMenu.classList.remove("backdrop-blur-sm");
      headerMenu.classList.remove("bg-veryDarkBlue");
      headerMenu.classList.remove("bg-opacity-95");
      BM.classList.add("fill-[#242A45]");
      dash.forEach((element) => {
        // do something with each element
        element.classList.add("bg-black");
        element.classList.remove("bg-white");
      });
      ngr.forEach((element) => {
        // do something with each element
        element.classList.add("text-grayishBlue");
        element.classList.remove("text-gray-200");
      });
    }
  }
});
/***************** */
function MobNavMenu() {
  clickCount++;
  btnMenu.classList.toggle("open");
  headerMenu.classList.toggle("fixed");

  headerMenu.classList.toggle("backdrop-blur-sm");
  headerMenu.classList.toggle("bg-veryDarkBlue");
  headerMenu.classList.toggle("bg-opacity-95");
  menu.classList.toggle("translate-x-full");
  menu.classList.toggle("translate-x-0");
  sectionHeroEl.classList.toggle("mt-20");

  BM.classList.toggle("fill-[#242A45]");
  BM.classList.toggle("fill-white");

  // Toggle the overflow-hidden class with a delay of 0 seconds on the first click
  // and a delay of 0.5 seconds on the second click
  // const delayTime = clickCount === 1 ? 0 : 500;
  // setTimeout(function () {
  //   headerMenu.classList.toggle("overflow-hidden");
  // }, delayTime);

  // const delayTime = clickCount === 1 ? 0 : 500;
  // setTimeout(function () {
  //   headerMenu.classList.toggle("container");
  //   headerMenu.classList.toggle("mx-auto");
  // }, delayTime);

  // // Reset the click count to loop the behavior
  // if (clickCount >= 2) {
  //   clickCount = 0;
  // }
}

btnMenu.addEventListener("click", () => {
  let hasBgWhite = false;
  dash.forEach((element) => {
    if (element.classList.contains("bg-white")) {
      hasBgWhite = true;
    }
  });

  if (hasBgWhite) {
    // At least one dash element has the bg-white class, so don't change the headerMenu background
    btnMenu.classList.toggle("open");
    menu.classList.toggle("translate-x-full");
    menu.classList.toggle("translate-x-0");
  } else {
    // All dash elements don't have the bg-white class, so apply the full MobNavMenu() function
    MobNavMenu();
  }
});
// apply the function to all nav links when click

const menuLinks = document.querySelectorAll(".section-btn");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    let hasBgWhite = false;
    dash.forEach((element) => {
      if (element.classList.contains("bg-white")) {
        hasBgWhite = true;
      }
    });

    if (hasBgWhite) {
      // At least one dash element has the bg-white class, so don't change the headerMenu background
      btnMenu.classList.toggle("open");
      menu.classList.toggle("translate-x-full");
      menu.classList.toggle("translate-x-0");
    } else {
      // All dash elements don't have the bg-white class, so apply the full MobNavMenu() function
      MobNavMenu();
    }
  });
});
/*The minWidth constant is calculated by multiplying the equivalent pixel width of 48em by the font size of the html element. The browser window width is then compared to minWidth, and if it is greater than minWidth
, and if it is greater than minWidth, the MobNavMenu() function is called.

Note that this code will only be executed once when the page is loaded. If you want the MobNavMenu() function to be called whenever the browser window is resized, you will need to use the window.addEventListener() method to attach an event listener to the resize event, and call the function accordingly
 */
// add event listener for window resize

window.addEventListener("resize", () => {
  if (
    window.innerWidth >=
      48 * parseFloat(getComputedStyle(document.documentElement).fontSize) &&
    menu.classList.contains("translate-x-0") &&
    BM.classList.contains("fill-white")
  ) {
    MobNavMenu();
  }
});

/************ */

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
// tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));
function onTabClick(e) {
  // deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-b-4",
      "border-softRed",
      "md:border-b-0"
    );
  });
  // hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));
  // activate a new tab and panel based on the target
  e.target.classList.add("border-b-4", "border-softRed");
  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

/******************************************************************* */
