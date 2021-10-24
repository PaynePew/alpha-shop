import { cartStore } from "../store/cartStore.mjs";

export const renderCart = (cartStore) =>{

  return cartStore.map(el => {
    return `
    <p class="cart__title">購物籃</p>
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
      <div class="cart__price">${el.price}</div>
    </div>
  </div>`
  }).join('');
}

export const addAmount = (id) => {
  cartStore.map((el) => (el.id === id ? el.amount++ : el));
  console.log(cartStore)
};

export const downAmount = (id) => {
  cartStore.map((el) =>
    el.id === id ? (el.amount > 0 ? el.amount-- : el) : el
  );
  console.log(cartStore)
};

