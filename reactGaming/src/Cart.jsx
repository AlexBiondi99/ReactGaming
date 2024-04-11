import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";



export function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const navigate = useNavigate()
  useEffect(() => {
    let total = 0;
    cartItems.forEach((element) => {
      total += element.prezzo * element.quantity;
    });
    setTotalPrice(total);
  }, [cartItems]);

  function removeFromCart(id) {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  }
  function increaseQuantity(id) {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  }

  function decreaseQuantity(id) {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  }
  

  async function handleCheckout() {
    const stripePromise = loadStripe('pk_test_51P2HLiRoi57u1ESVmfqZCtOsx6Ci7yLSwBFrxuYw7LNnNAeFazWSPClWJY3RbF7NIEILsZOxtGxLhKuy96DXlcEQ00e4IC84SW')
    const cleanCartItems = cartItems.map(item => ({
      title: item.titolo,
      price: item.prezzo,
      quantity: item.quantity
    }));
    
    const stripe = await stripePromise;
    try {
      const response = await fetch('http://localhost:3000/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItems: cleanCartItems, totalPrice }),
        mode: 'cors',
      });
      const session = await response.json();
      navigate(stripe.redirectToCheckout({
        sessionId: session.id,
      })) 
      if (response.error) {
        console.error(response.error);
      }
      console.log(response)
    } catch (error) {
      console.error('Errore durante la gestione del checkout:', error);
    }
  }
  return (
    <div className="cartPage">
      <Link to="/">
        <div className="boxLogo">
          <svg
            className="logoNavbar"
            id="Livello_1"
            data-name="Livello 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1216.59 143.3"
          >
            <g>
              <path
                className="cls-1NoNav"
                d="M.65,140.25V.86h103.36v23.58H28.79v30.9h69.98v23.49H28.79v37.94h77.87v23.49H.65Z"
              />
              <path
                className="cls-1NoNav"
                d="M256.23,140.25h-30.62l-12.17-31.66h-55.72l-11.51,31.66h-29.86L170.66.86h29.76l55.81,139.39ZM204.41,85.1l-19.21-51.73-18.83,51.73h38.03Z"
              />
              <path
                className="cls-1NoNav"
                d="M264.03,94.9l27.38-2.66c1.65,9.19,4.99,15.94,10.03,20.25,5.04,4.31,11.84,6.47,20.4,6.47,9.06,0,15.89-1.92,20.49-5.75,4.59-3.84,6.89-8.32,6.89-13.46,0-3.29-.97-6.1-2.9-8.42-1.94-2.31-5.31-4.33-10.13-6.04-3.3-1.14-10.81-3.17-22.53-6.09-15.09-3.74-25.67-8.33-31.76-13.79-8.56-7.67-12.84-17.02-12.84-28.05,0-7.1,2.01-13.74,6.04-19.92,4.02-6.18,9.83-10.89,17.4-14.12s16.72-4.85,27.43-4.85c17.5,0,30.67,3.84,39.51,11.51,8.84,7.67,13.49,17.91,13.93,30.71l-28.14,1.24c-1.2-7.16-3.79-12.31-7.75-15.45-3.96-3.14-9.9-4.71-17.83-4.71s-14.58,1.68-19.21,5.04c-2.98,2.16-4.47,5.04-4.47,8.65,0,3.3,1.39,6.12,4.18,8.46,3.55,2.98,12.17,6.09,25.86,9.32,13.69,3.23,23.82,6.58,30.38,10.03,6.56,3.46,11.7,8.18,15.4,14.17,3.71,5.99,5.56,13.39,5.56,22.2,0,7.99-2.22,15.47-6.66,22.44-4.44,6.97-10.71,12.16-18.83,15.55-8.11,3.39-18.22,5.09-30.33,5.09-17.62,0-31.16-4.07-40.6-12.22-9.45-8.14-15.09-20.02-16.93-35.61Z"
              />
              <path
                className="cls-1NoNav"
                d="M437.65,140.25v-58.67L386.59.86h32.99l32.8,55.15L484.53.86h32.42l-51.25,80.92v58.48h-28.05Z"
              />
            </g>
            <path
              className="cls-1NoNav"
              d="M648.02,67.26h-1.84c-4.96,0-7.46,2.5-7.46,7.42v36.12c0,6.56-1.76,10.74-5.31,12.53-3.51,1.84-10.74,2.73-21.59,2.73-30.81-.04-46.23-18.27-46.23-54.66,0-22.41,5.97-38.03,17.96-46.77,11.95-8.78,31.08-10.19,57.36-4.18,2.69.55,4.76.27,6.25-.86,1.48-1.09,2.23-2.93,2.23-5.54v-.55c-.08-4.45-2.26-7.22-6.52-8.36-20.34-5-37.48-5.62-51.38-1.8-13.9,3.83-24.44,11.6-31.7,23.27-7.26,11.71-10.89,26.63-10.89,44.78,0,22.14,5.39,39.43,16.16,51.89,10.74,12.45,26.67,18.66,47.71,18.66,16.09,0,27.21-2.07,33.42-6.17,6.17-4.14,9.29-11.67,9.29-22.61v-38.5c0-4.92-2.5-7.42-7.46-7.42Z"
            />
            <path
              className="cls-1NoNav"
              d="M802.99,131.76l-31.86-101.12c-3.12-10.78-7.03-18.47-11.79-23-4.72-4.53-11.17-6.79-19.29-6.79s-14.37,2.26-18.98,6.79c-4.61,4.53-8.63,12.22-12.06,23l-31.9,101.12c-.82,2.54-.66,4.57.43,6.09,1.09,1.48,3.01,2.26,5.66,2.26h1.99c4.37,0,7.18-2.03,8.36-6.09l10.27-32.8,1.05-3.32,4.96-15.58,5.78-18.31,9.8-31.12c1.91-6.25,3.98-10.58,6.21-13.04,2.19-2.42,5-3.67,8.43-3.67s6.25,1.25,8.43,3.67c2.15,2.46,4.22,6.79,6.21,13.04l10.81,34.32,4.76,15.11,4.96,15.58,1.56,4.96,9.68,31.16c1.25,4.06,4.02,6.09,8.36,6.09h2.07c2.69,0,4.57-.78,5.62-2.26,1.05-1.52,1.21-3.55.47-6.09Z"
            />
            <path
              className="cls-1NoNav"
              d="M980.13,132.15l-15.7-109.67c-1.02-7.77-3.08-13.31-6.25-16.63-3.12-3.36-7.69-5-13.74-5s-10.46,1.6-13.63,4.88c-3.16,3.28-5.58,8.75-7.22,16.44l-20.22,96.59c-.7,3.55-2.07,5.35-4.14,5.35s-3.32-1.8-4.02-5.35l-20.11-96.59c-1.64-7.61-4.06-13.08-7.22-16.4-3.16-3.28-7.73-4.92-13.7-4.92s-10.66,1.64-13.74,4.92c-3.08,3.32-5.15,8.9-6.17,16.71l-15.81,109.67c-.31,2.54.12,4.53,1.29,5.9,1.21,1.37,3.08,2.07,5.62,2.07h2.19c4.61,0,7.22-2.3,7.85-6.91l15.46-110.18c.55-2.77,1.83-4.14,3.83-4.14s3.12,1.25,3.59,3.71l21.28,101.51c1.09,5.58,3.24,9.64,6.48,12.18,3.24,2.54,7.65,3.83,13.2,3.83s10.07-1.25,13.31-3.79c3.24-2.5,5.39-6.56,6.52-12.22l21.36-101.51c.39-2.46,1.56-3.71,3.47-3.71,2.03,0,3.24,1.37,3.75,4.14l15.66,110.18c.62,4.61,3.24,6.91,7.85,6.91h2.07c2.54,0,4.41-.7,5.62-2.07,1.21-1.37,1.64-3.36,1.29-5.9Z"
            />
            <path
              className="cls-1NoNav"
              d="M1096.29,124.11h-55.09c-6.4,0-10.66-1.13-12.85-3.44-2.15-2.3-3.24-5.9-3.24-10.7v-31.16h56.22c4.96,0,7.42-2.46,7.42-7.42v-1.13c0-4.96-2.46-7.42-7.42-7.42h-56.22v-29.95c0-4.8,1.09-8.39,3.24-10.74,2.19-2.3,6.44-3.47,12.85-3.47h50.76c4.96.04,7.42-2.38,7.42-7.34v-1.25c0-4.88-2.46-7.3-7.42-7.3h-52.2c-11.4,0-19.48,2.3-24.25,6.91-4.72,4.61-7.11,11.95-7.11,22.06v79.22c0,10.19,2.38,17.61,7.11,22.22,4.76,4.61,12.85,6.91,24.25,6.91h56.54c4.96,0,7.42-2.5,7.42-7.46v-1.13c0-4.96-2.46-7.42-7.42-7.42Z"
            />
            <path
              className="cls-1NoNav"
              d="M1206.27,80.15c-6.05-6.25-15.54-11.87-28.46-16.91l-10.97-4.22c-8.86-3.4-15.15-6.87-18.82-10.46-3.67-3.63-5.51-7.93-5.51-12.85s1.52-8.63,4.65-11.64c3.08-2.97,7.3-5,12.61-6.01,5.35-1.05,11.28-1.37,17.8-1.05,6.56.35,13.51,1.37,20.97,3.01,2.62.55,4.65.27,6.13-.82,1.48-1.09,2.23-2.97,2.23-5.58v-.39c0-4.49-2.07-7.26-6.21-8.36-9.64-2.62-18.9-3.94-27.8-3.98-8.9-.04-16.87,1.13-23.89,3.51-6.99,2.34-12.61,6.25-16.79,11.71-4.22,5.43-6.33,12.1-6.33,19.99,0,8.32,2.62,15.5,7.81,21.47,5.19,5.97,13.86,11.32,26.04,16.09l12.06,4.76c9.72,3.75,16.59,7.61,20.65,11.52,4.06,3.94,6.09,8.59,6.09,13.94,0,5.66-1.91,10.23-5.74,13.78-3.83,3.55-8.86,5.9-15.15,7.07-6.33,1.17-13.24,1.56-20.81,1.17-7.57-.35-15.38-1.52-23.5-3.44-2.62-.62-4.69-.39-6.17.7-1.44,1.09-2.19,2.97-2.19,5.58.04,4.49,2.11,7.26,6.17,8.36,6.68,1.91,13.35,3.28,20.07,4.06,6.72.82,13.2,1.02,19.44.62,6.25-.35,12.1-1.44,17.53-3.2,5.47-1.76,10.15-4.1,14.13-7.11,4.02-3.01,7.18-6.83,9.49-11.56,2.34-4.72,3.51-10.07,3.51-16.05,0-9.57-3.01-17.45-9.06-23.74Z"
            />
            <path
              className="cls-1NoNav"
              d="M611.23,74.72v1.8c0,4.12,3.34,7.46,7.46,7.46h28.58v-14.61c0-1.16-.94-2.1-2.1-2.1h-26.48c-4.12,0-7.46,3.34-7.46,7.46Z"
            />
            <circle className="cls-2" cx="740.02" cy="101.94" r="15.83" />
          </svg>
        </div>
      </Link>
      {cartItems.map((item) => (
        <div className="boxItemCart" key={item.id}>
          <img className="imageCartgame" src={item.src_copertina} alt="" />
          <div className="infoItemCart">
            <p className="titleGameCart">{item.titolo}</p>
            <p className="priceCart">{`${item.prezzo} €`}</p>
            <div className="quantity">
              <button className="dec" onClick={() => decreaseQuantity(item.id)}>
                -
              </button>
              <p className="quantityBox">{item.quantity}</p>
              <button className="inc" onClick={() => increaseQuantity(item.id)}>
                +
              </button>
            </div>
            <button
              className="removeToCart"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="totalPrice">
        {`${totalPrice.toFixed(2)} €`}
        <button className="ceckoutButton">Go to checkout</button>

      </div>
    </div>
  );
}
