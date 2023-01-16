import "./Footer.pcss";

const Footer = () => {
  return (
    <footer>
      <p className="layout">
        Design e Código por{" "}
        <a href="https://twitter.com/didiraja" target="_blank">
          Dico Didiraja
        </a>{" "}
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
