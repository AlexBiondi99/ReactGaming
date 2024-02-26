import { ButtonCart } from "./ButtonCart";
import { ButtonPrefer } from "./ButtonPrefer";


export function PageGame() {
  return (
    <div className="pageGame">
      <div className="imageGame">
        <img
          src="https://media.gqitalia.it/photos/5ebe65be37e00fb8bbea13b0/master/pass/grand-theft-auto-v.jpg"
          alt=""
        />
      </div>
      <div className="title">
        <h1>Grand theft auto V</h1>
      </div>
      <ButtonPrefer />
      <ButtonCart />
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          nobis delectus sit neque culpa consequatur praesentium modi quisquam.
          Perspiciatis blanditiis maxime, nemo sint laboriosam necessitatibus
          nam explicabo enim commodi incidunt!50
        </p>
      </div>
    </div>
  );
}
