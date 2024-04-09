import React from "react";
export function ButtonCart({ gameData }) {
  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex((item) => item.id === gameData.id);
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...gameData, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  return (
    <button className="addToCart" onClick={addToCart}>
      <h2 className="textButtonCart">Add to cart</h2>
    </button>
  );
}
