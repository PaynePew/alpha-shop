import toggleTheme from "./components/toggleTheme.mjs";
import { nextPage, prePage } from "./components/displaySwitch.mjs";
import { renderCart, addAmount, downAmount } from "./components/renderCart.mjs";
import { cartStore } from "./store/cartStore.mjs";
import { modalToggle } from "./components/displaySwitch.mjs";

const nextBtn = document.querySelectorAll(".btn--next");
const preBtn = document.querySelectorAll(".btn--pre");
const themeButton = document.querySelectorAll(".themeButton");
const cart = document.querySelector(".cart");
const radioButton = document.querySelectorAll(".radioForm__input");
const hamburger = document.querySelector(".navbar__hamburger");

nextBtn.forEach((el) => el.addEventListener("click", nextPage));
preBtn.forEach((el) => el.addEventListener("click", prePage));
themeButton.forEach((el) => el.addEventListener("click", toggleTheme));

cart.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("cart__up")) {
    addAmount(Number(e.target.parentElement.id));
  }
  if (e.target.classList.contains("cart__down")) {
    downAmount(Number(e.target.parentElement.id));
  }
  renderCart(cartStore);
});

radioButton.forEach((el) =>
  el.addEventListener("click", () => {
    renderCart(cartStore);
  })
);

hamburger.addEventListener("click", modalToggle);

renderCart(cartStore);
