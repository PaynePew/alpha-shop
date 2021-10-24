import toggleTheme from "./components/toggleTheme.mjs";
import { nextPage, prePage } from "./components/displaySwitch.mjs";

const nextBtn = document.querySelectorAll(".btn--next");
const preBtn = document.querySelectorAll(".btn--pre");
const themeButton = document.getElementById("themeButton");

nextBtn.forEach((el) => el.addEventListener("click", nextPage));
preBtn.forEach((el) => el.addEventListener("click", prePage));
themeButton.addEventListener("click", toggleTheme);
