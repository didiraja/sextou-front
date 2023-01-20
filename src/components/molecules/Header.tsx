import "./Header.pcss";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-menu">
        <ul className="header-menu--common">
          <li>
            <a className="menu-item" href="/">
              Home
            </a>
          </li>
          <li className="opacity-50">
            {/* <a className="menu-item" href="#"> */}
            Blog
            {/* </a> */}
          </li>
          <li className="opacity-50">
            {/* <a className="menu-item" href="#"> */}
            Troca de Ingressos
            {/* </a> */}
          </li>
          <li>
            <a className="menu-item" href="/about">
              Sobre
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
