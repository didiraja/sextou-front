import './Header.pcss';

function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-menu">
        <ul className="header-menu--common">
          <li>
            <a className="menu-item" href="/">
              Home
            </a>
          </li>
          <li className="hiddeable">
            {/* <a className="menu-item" href="#"> */}
            Blog
            {/* </a> */}
          </li>
          <li className="hiddeable">
            {/* <a className="menu-item" href="#"> */}
            Troca de Ingressos
            {/* </a> */}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
