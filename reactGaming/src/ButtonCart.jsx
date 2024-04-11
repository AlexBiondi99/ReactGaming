import React, { useEffect, useState } from "react";


export function ButtonCart({ gameData }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );


  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true")
  },[])

  function addToCart() {
    if(!isLoggedIn) {
      alert('Devi accedere prima di aggiungere al carrello.')
      return
    }

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
    <>
    
    <button className="addToCart" onClick={addToCart}>
      <h2 className="textButtonCart">Add to cart</h2>
    </button>
    </>
    
  );
}
