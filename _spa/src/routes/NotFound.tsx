import { Link } from 'react-router-dom';
import ErrorCard from '../components/molecules/Card.Error';
import { ERROR } from '../services/enums';
import Title from '../components/atoms/Title';

function Error() {
  return (
    <>
      <Title>404 - Nada por Aqui</Title>

      <ErrorCard className="mt-3">
        <p className="text-2xl">{ERROR.LOADING}</p>
        <br />
        <p className="font-normal">
          Que tal,
          {' '}
          <Link
            className="font-bold underline hover:no-underline"
            to="/"
            target="_self"
            rel="noopener noreferrer"
          >
            voltar para a Home?
          </Link>
        </p>
      </ErrorCard>

    </>
  );
}

export default Error;
