const pageOne = document.querySelectorAll(".pageOne");
const pageTwo = document.querySelectorAll(".pageTwo");
const pageThree = document.querySelectorAll(".pageThree");
const modal = document.querySelector(".modal");

let pageId = 1;

export const removeClass = (cssName) => {
  pageOne.forEach((el) => el.classList.remove(cssName));
  pageTwo.forEach((el) => el.classList.remove(cssName));
  pageThree.forEach((el) => el.classList.remove(cssName));

};

export const displaySwitch = () => {
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

export const nextPage = () => {
  if (pageId >= 1 && pageId < 3) {
    pageId++;
    displaySwitch(pageId);
  }
  return;
};

export const prePage = () => {
  if (pageId > 1 && pageId <= 3) {
    pageId--;
    displaySwitch(pageId);
  }
  return;
};

export const modalToggle = () => {
  modal.classList.contains('isOpen') 
  ? modal.classList.remove('isOpen') 
  : modal.classList.add('isOpen');
}
