import { cartStore } from "../store/cartStore.mjs";
import { numbersWithCommas } from "./helpers.mjs";

const cart = document.querySelector(".cart");
const radio = document.getElementById("customRadio-DHL");

export const renderCart = (cartStore) => {
  let totalPrice = cartStore.reduce((a, b) => {
    return a.amount * a.price + b.amount * b.price;
  });
  let shippingFee = radio.checked ? "$500" : "免運";
  radio.checked ? (totalPrice += 500) : 0;

  const cartFooter = `
    <div class="cart__footer">
      <span class="cart__footerName">運費</span>
      <span class="cart__price">${shippingFee}</span>
    </div>
    <div class="cart__footer">
      <span class="cart__footerName">小計</span>
      <span class="cart__price">$${numbersWithCommas(totalPrice)}</span>
    </div>`;

  return (cart.innerHTML =
    `<p class="cart__title">購物籃</p>` +
    cartStore
      .map((el) => {
        return `
    <div class="cart__item" >
    <div class="cart__imgFrame">
      <img src="${el.picture}" alt="" class="cart__img" />
    </div>
    <div class="cart__content">
      <div class="cart__des">
        <p class="cart__name">${el.product}</p>
        <div class="cart__count" id="${el.id}">
          <span  class="cart__down" >&#8722;</span>
          <span class="cart__number">${el.amount}</span>
          <span class="cart__up" >&#43;</span>
        </div>
      </div>
      <div class="cart__price">$${numbersWithCommas(el.price)}</div>
    </div>
  </div>`;
      })
      .join("") +
    cartFooter);
};

export const addAmount = (id) => {
  cartStore.map((el) => (el.id === id ? el.amount++ : el));
};

export const downAmount = (id) => {
  cartStore.map((el) =>
    el.id === id ? (el.amount > 0 ? el.amount-- : el) : el
  );
};
