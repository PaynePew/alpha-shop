import toggleTheme from "./components/toggleTheme.mjs";
import { nextPage, prePage } from "./components/displaySwitch.mjs";
import { renderCart ,addAmount, downAmount } from "./components/renderCart.mjs";
import { cartStore } from "./store/cartStore.mjs";

const nextBtn = document.querySelectorAll(".btn--next");
const preBtn = document.querySelectorAll(".btn--pre");
const themeButton = document.getElementById("themeButton");
const cart = document.querySelector(".cart")

nextBtn.forEach((el) => el.addEventListener("click", nextPage));
preBtn.forEach((el) => el.addEventListener("click", prePage));
themeButton.addEventListener("click", toggleTheme);

cart.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target.classList.contains('cart__up')){
    addAmount(Number(e.target.parentElement.id));
  }
  if(e.target.classList.contains('cart__down')){
    downAmount(Number(e.target.parentElement.id));
  }
  cart.innerHTML = renderCart(cartStore);
})

cart.innerHTML = renderCart(cartStore);
