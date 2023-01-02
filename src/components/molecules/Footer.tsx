const Footer = () => {
  return (
    <footer className="w-full p-4 text-center text-white bg-black/70">
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
