import Dropdown from "./DropdownLingue";

export function Footer() {
  return (
    <div className="footer">
      <ul className="footerContent">
        <li>
          <a href="#">Su di noi</a>
        </li>
        <li>Lavori</li>
        <li>Blog</li>
        <li>Genitori</li>
        <li>Carte regalo</li>
        <li>Guida</li>
        <li>Termini</li>
        <li>Accessibilità</li>
        <li>Privacy</li>
        <li>Opzioni cookie</li>
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
