import ErrorCard from '../components/molecules/Card.Error';
import {
  ERROR,
} from '../services/enums';
import Title from '../components/atoms/Title';

function Error() {
  return (
    <>
      <Title>404 - Nada por Aqui</Title>

      <ErrorCard>
        <p className="text-2xl">{ERROR.LOADING}</p>
        <br />
        <p className="font-normal">
          Que tal,
          {' '}
          <a
            className="font-bold underline hover:no-underline"
            href="/"
            target="_self"
            rel="noopener noreferrer"
          >
            voltar para a Home?
          </a>
        </p>
      </ErrorCard>

    </>
  );
}

export default Error;
