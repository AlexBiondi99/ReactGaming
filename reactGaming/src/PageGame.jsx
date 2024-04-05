import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ButtonCart } from "./ButtonCart";
import { ButtonPrefer } from "./ButtonPrefer";
import { Navbar } from "./Navbar";

export function PageGame() {
  const [gameData, setGameData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/games/${id}`)
      .then(response => response.json())
      .then(data => setGameData(data))
      .catch(error => console.error('Error fetching game data:', error));
  }, [id]);

  if (!gameData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pageGame">
      <Navbar />
      <div className="imageGame">
        <img src={gameData.src_background} alt="Background" />
      </div>
      <div className="schedaGioco">
        <img src={gameData.src_copertina} alt="Cover" />
      </div>
      <div className="title">
        <h1>{gameData.titolo}</h1>
      </div>
      <div className="price">{`${gameData.prezzo}€`}</div>
      <div className="buttons">
        <ButtonPrefer />
        <ButtonCart gameData={gameData}/>
      </div>
      <div className="description">
        <h2>DESCRIPTION :</h2>
        <p>{gameData.descrizione}</p>
      </div>
    </div>
  );
}
