import { ButtonCart } from "./ButtonCart";
import { ButtonPrefer } from "./ButtonPrefer";
import { Navbar } from "./Navbar";

export function PageGame({gameData}) {

  return (
    <div className="pageGame">
      <Navbar />
      <div className="imageGame">
        <img
          src={gameData.backgroundImage}
        />
      </div>
      <div className="schedaGioco">
        <img
          src={gameData.image}
          alt=""
        />
      </div>
      <div className="title">
        <h1>{gameData.title}</h1>
      </div>
      <div className="price">{`${gameData.price}€`}</div>
      <div className="buttons">
        <ButtonPrefer />
        <ButtonCart gameData={gameData}/>
      </div>
      <div className="description">
        <h2>DESCRIPTION :</h2>
        <p>{gameData.description}</p>
      </div>
    </div>
  );
}
