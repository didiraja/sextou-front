import "./About.pcss";

// TODO: Write text with Markdown, loading package on Suspense

const About = () => {
  return (
    <div className="about-wrapper">
      <p>
        <strong className="text-3xl">Sextou!</strong> é uma plataforma criada
        para empoderar o usuário na escolha de seu entretenimento, encontrando
        novas opções e filtrando a que melhor se encaixa a seu gosto ou
        localização.
      </p>
      <p>
        O motivo de criação da plataforma é preencher o espaço deixado pela área
        de Eventos do Facebook, após a migração de usuários para fora da
        plataforma.
      </p>
      <p>
        Plataforma idealizada e criada por mim,{" "}
        <a href="https://linkedin.com/in/didiraja" target="_blank">
          Dico Didiraja
        </a>
      </p>
    </div>
  );
};

export default About;
