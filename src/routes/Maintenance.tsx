function Home() {
  return (
    <div className="maintenance--wrapper">

      <p className="section-title text-center border-l-0">Estamos em Manutenção, Voltamos em breve.</p>

      <p className="text-center">
        Enquanto isso, nos encontre no
        {' '}
        <a
          className="underline hover:no-underline underline-offset-1 text-fuchsia-500"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/sextou.rio/"
        >
          Instagram
        </a>

      </p>
    </div>
  );
}

export default Home;
