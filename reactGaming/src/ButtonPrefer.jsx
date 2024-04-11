import React, { useEffect, useState } from "react";
import {ToastContainer, toast} from 'react-toastify'

export function ButtonPrefer({ gameData }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  function addToFavorites() {

    if(!isLoggedIn) {
      alert('Devi accedere prima di aggiungere ai preferiti.')
      return
    }

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const existingItemIndex = favorites.findIndex(
      (item) => item.id === gameData.id
    );
    if (existingItemIndex !== -1) {
      favorites[existingItemIndex].quantity += 1;
    } else {
      favorites.push({ ...gameData, quantity: 1 });
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));

    // toast.success("Gioco aggiunto correttamente ai favoriti",{
    //   position: 'top-center',
    // })
    alert('gioco aggiunto ai favoriti');
  }
  return (
    <button className="addToPrefer" onClick={addToFavorites}>
      <h2 className="textButtonCart">Add to favorites</h2>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" className="svgPrefer">   <path fill="black" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/> </svg>
    </button>
  );
}
