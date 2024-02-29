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
      <div className="schedaGioco">
        <img
          src="https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/7337.jpeg"
          alt=""
        />
      </div>
      <div className="title">
        <h1>Grand theft auto V</h1>
      </div>
      <div className="buttons">
        <ButtonPrefer />
        <ButtonCart />
      </div>
      <div className="description">
        <h2>DESCRIPTION :</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          aliquid delectus tempora corporis, aperiam deleniti accusantium,
          voluptates error hic voluptatum libero omnis esse nobis numquam earum
          aut illo, sapiente aspernatur culpa incidunt. Quia dolores, quidem
          nihil eligendi voluptas non distinctio sit corporis sapiente similique
          aperiam harum voluptatibus voluptatem hic recusandae officia sint at
          veniam perspiciatis iusto! Omnis atque quibusdam commodi iure
          aspernatur illum nisi, assumenda placeat neque quos ex odit deserunt
          nemo et laudantium? Magnam optio nobis beatae sapiente alias
          exercitationem et, dolor rem voluptate quos inventore consequuntur
          quasi eum reiciendis quis nihil laudantium dolorem? Distinctio illo
          odit eum possimus alias. Odio sed corrupti voluptates assumenda
          placeat reprehenderit quo atque minima odit fugit consequuntur,
          repudiandae quas reiciendis. Natus omnis minus corporis impedit ipsam
          voluptatum dignissimos repudiandae aliquid praesentium atque et
          eligendi voluptatem aliquam alias nobis, autem libero doloremque, non
          assumenda hic repellat! Alias aspernatur quas, officiis labore aliquid
          dolorum. Laboriosam aut accusamus, necessitatibus rerum fugiat ullam
          dicta veritatis dignissimos voluptates.
        </p>
      </div>
    </div>
  );
}
