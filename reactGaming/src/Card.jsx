import { Link } from "react-router-dom";

export function Card({ title, coverSrc, discount, price }) {
    return (
        <div className="boxCard">
            <Link to='/pageGame' className="linkContainer">
                <img className="imgCard" src={coverSrc} alt={title} /> 
                {discount && (
                    <div className="sconto">
                        <p className="h2-scontogioco">{discount}</p>    
                    </div>
                )}
            </Link>
            <div className="dati_gioco">
            <h2 className="titolo_gioco_card">{title}</h2>
            <h2 className="prezzo_gioco">{`${price}€`}</h2>
            </div>
        </div>
    )}
