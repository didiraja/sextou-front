import Title from "../atoms/Title";
import "./About.pcss";

// TODO: Write text with Markdown, loading package on Suspense

const About = () => {
  return (
    <div className="about-wrapper">
      <Title>Sobre</Title>

      <p>
        <strong className="capitular">Sextou!</strong> é uma plataforma criada
        para empoderar o usuário na escolha de seu entretenimento, encontrando
        novas opções e filtrando a que melhor se encaixa em seu gosto e
        localização.
      </p>

      <p>
        O motivo de criação da plataforma é facilitar a divulgação e encontro de
        eventos que acontecem, principalmente fora do centro cultural do estado
        do Rio de Janeiro. E, também, preencher o espaço deixado pela área de
        Eventos do Facebook, após a migração de usuários para fora da
        plataforma.
      </p>

      <p>
        Plataforma idealizada e criada por mim,{" "}
        <a href="https://linkedin.com/in/didiraja" target="_blank">
          Dico Didiraja
        </a>
        .
      </p>
    </div>
  );
};

export default About;
