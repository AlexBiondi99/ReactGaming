import { useEffect, useState } from 'react';
import { Navbar } from "./Navbar";
import { Card } from "./Card";
import { Link } from 'react-router-dom';
import React from 'react';
import { Footer } from './Footer';

export function HomePage() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/games');
            if (response.ok) {
                const data = await response.json();
                setGames(data);
            } else {
                throw new Error('Errore durante il recupero dei giochi');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
      <>
              <div className="homePage">
          <Navbar />
          <div className="cardContainer">
            {games.map(game => (
              <Link key={game.id} to={`/pageGame/${game.id}`}>
                <Card
                  title={game.titolo}
                  coverSrc={game.src_copertina}
                  discount={game.discount}
                  />
              </Link>
            ))}
          </div>
        </div>
        <Footer/>
      </>
    )}
