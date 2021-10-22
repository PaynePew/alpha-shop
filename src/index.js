const nextBtn = document.getElementById("nextBtn");
const pageOne = document.querySelectorAll(".pageOne");
const pageTwo = document.querySelectorAll(".pageTwo");
const pageThree = document.querySelectorAll(".pageThree");

let pageId = 1;

const removeClass = (cssName) => {
  pageOne.forEach((el) => el.classList.remove(cssName));
  pageTwo.forEach((el) => el.classList.remove(cssName));
  pageThree.forEach((el) => el.classList.remove(cssName));
};

const displaySwitch = () => {
  removeClass("isOpen");
  switch (pageId) {
    case 1:
      pageOne.forEach((el) => el.classList.add("isOpen"));
      break;
    case 2:
      pageTwo.forEach((el) => el.classList.add("isOpen"));
      break;
    case 3:
      pageThree.forEach((el) => el.classList.add("isOpen"));
      break;
  }
};

const nextPage = () => {
  if (pageId >= 1 && pageId < 3) {
    pageId++;
    displaySwitch(pageId);
    console.log(pageId);
  }
  return;
};

const prePage = () => {
  if (pageId > 1 && pageId <= 3) {
    pageId--;
    displaySwitch(pageId);
  }
  return;
};




function toggleTheme() {
  // Default to light theme, since that is starting theme
  window.theme =
    typeof window.theme === "string" ? window.theme : "theme-light";
  const switchToTheme =
    window.theme === "theme-light" ? "theme-dark" : "theme-light";
  window.theme = switchToTheme;
  document.querySelector("body").setAttribute("class", switchToTheme);
}


// const pageRoute = [
//   {
//     pageId: 1,
//     isOpen: true,
//   },
//   {
//     pageId: 2,
//     isOpen: false,
//   },
//   {
//     pageId: 3,
//     isOpen: false,
//   },
// ];

// let pageState = null;

// const pageCheck = () => {
//   return (pageState = pageRoute.filter((page) => page.isOpen === true)[0]
//     .pageId);
// };

// console.log(pageCheck());

// const switchRoute = () => {
//   pageRoute[pageState - 1].isOpen = false;
//   pageRoute[pageState].isOpen = true;
//   console.log("now", pageCheck());
// };

// const handleOnClick = () => {
//   switchRoute();
// e.preventDefault();

// pageRoute.map((pre) => {
//   pre.isOpen === true ? (pre.isOpen = false) : pre;
// });
// console.log("test", pageRoute);

//   pageCheck();
//   if (pageState === 1) {
//     pageOne.forEach((el) => el.classList.add("isOpen"));
//     console.log("HI!");
//   }
// };