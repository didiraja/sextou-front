import IconInsta from '../icons/insta';
import './Header.pcss';

function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-menu">
        <ul className="header-menu--common">
          <li>
            <IconInsta />
            <a
              className="menu-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/sextou.rio/"
            >
              Siga-nos no Instagram! Agenda semanal de eventos.
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
