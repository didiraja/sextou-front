import Title from '../atoms/Title';

import styles from './About.module.scss';

function About() {
  return (
    <div className={styles['about-wrapper']}>
      <Title tag='p'>Sobre</Title>

      <p>
        <strong className={styles['capitular']}>Sextou!</strong> é a plataforma
        definitiva para potencializar sua experiência de entretenimento no Rio
        de Janeiro. Descubra novas opções, filtre eventos que combinem com seu
        gosto e localização, tudo em um só lugar.
      </p>

      <p>
        Criamos essa plataforma para simplificar a divulgação e descoberta de
        eventos, especialmente fora do centro cultural do estado do Rio de
        Janeiro. Preenchendo o vazio deixado pela migração de usuários da área
        de Eventos do Facebook, nos tornamos a referência essencial.
      </p>

      <p>
        Sinta-se empoderado ao explorar eventos exclusivos e diversificados.
        Aproveite ao máximo o seu tempo de lazer com Sextou! - A Plataforma
        idealizada e criada por mim,{' '}
        <a
          href='https://linkedin.com/in/didiraja'
          target='_blank'
          rel='noreferrer'
        >
          Dico Didiraja
        </a>
        .
      </p>
    </div>
  );
}

export default About;
