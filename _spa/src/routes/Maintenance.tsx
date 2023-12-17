function Home() {
  return (
    <div className='maintenance--wrapper'>
      <p className='section-title border-l-0 text-center'>
        Estamos em Manutenção, Voltamos em breve.
      </p>

      <p className='text-center'>
        Enquanto isso, nos encontre no{' '}
        <a
          className='text-fuchsia-500 underline underline-offset-1 hover:no-underline'
          target='_blank'
          rel='noreferrer'
          href='https://www.instagram.com/sextou.rio/'
        >
          Instagram
        </a>
      </p>
    </div>
  );
}

export default Home;
