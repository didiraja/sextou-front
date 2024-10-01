import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <p className={styles['legal']}>
        Sextou! não tem qualquer responsabilidade ou vínculo com os eventos e
        plataformas de vendas linkadas aqui, sendo estas, publicadas apenas para
        fins de divulgação.
      </p>
      <div className={styles['spacing']} />
      <p className={styles['layout']}>
        Design e Código por{' '}
        <a
          href='https://www.linkedin.com/in/didiraja/'
          target='_blank'
          rel='noreferrer'
        >
          Dico Didiraja
        </a>{' '}
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
