import Dropdown from "./DropdownLingue";

export function Footer() {
  return (
    <div className="footer">
      <ul className="footerContent">
        <li>
          <a href="#">Su di noi</a>
        </li>
        <li>
          <a href="#">Lavori</a>
        </li>
        <li>
          <a href="#">Genitori</a>
        </li>
        <li>
          <a href="#">Carte Regalo</a>
        </li>
        <li>
          <a href="#">Guida</a>
        </li>
        <li>
          <a href="#">Termini</a>
        </li>
        <li>
          <a href="#">Accessibilità</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Opzioni Cookie</a>
        </li>
      </ul>

      <hr className="hrFooter"></hr>
      <div className="subFooter">
        <Dropdown />
        <p className="subFooterParagraph">
          ©2024 Easy game. il logo Easy game Imagination sono alcuni dei nostri
          marchi registrati
          <br /> e marchi di fatto negli Stati Uniti e in altri Paesi.
        </p>
      </div>
    </div>
  );
}
