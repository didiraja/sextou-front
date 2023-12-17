import './Footer.pcss';

function Footer() {
  return (
    <footer>
      <p className="legal">
        Sextou! não tem qualquer responsabilidade ou vínculo com os eventos e
        plataformas de vendas linkadas aqui, sendo estas, publicadas apenas para
        fins de divulgação.
      </p>
      <div className="spacing" />
      <p className="layout">
        Design e Código por
        {' '}
        <a href="https://twitter.com/didiraja" target="_blank" rel="noreferrer">
          Dico Didiraja
        </a>
        {' '}
        &copy;
        {' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
