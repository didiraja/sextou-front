import { Suspense } from 'react';
import { Await } from 'react-router-dom';
import Card, { CardProps } from '../molecules/Card';
import CardLoading from '../molecules/Card.Loading';
import CardGrid from '../templates/Card.Grid';

function LoadingFlow() {
  return (
    <CardGrid>
      <CardLoading />
      <CardLoading />
      <CardLoading />
      <CardLoading />
    </CardGrid>
  );
}

function EmptyLoad() {
  return (
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
  );
}

function GracefulLoad(props) {
  const { loaderData } = props;

  return (
    <Suspense fallback={<LoadingFlow />}>
      <Await
        resolve={loaderData.result}
        errorElement={<p>Deu ruim no carregamento</p>}
      >
        {({ data }) => <props.children loaderData={data} />}
      </Await>
    </Suspense>
  );
}
