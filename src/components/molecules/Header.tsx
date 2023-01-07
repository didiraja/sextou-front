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
          {/* <li>
            <a className="menu-item" href="#">
              Ingressos
            </a>
          </li> */}
          <li>
            <a className="menu-item" href="/about">
              Sobre
            </a>
          </li>
          <li>
            <a className="menu-item" href="/category">
              Sem Categoria
            </a>
          </li>
          <li>
            <a className="menu-item" href="/category/37">
              Categoria Real
            </a>
          </li>
          <li>
            <a className="menu-item" href="/category/99">
              Categoria Undefined
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
