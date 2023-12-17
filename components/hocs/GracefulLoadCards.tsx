import { ComponentType, Suspense } from 'react';
import { Await } from 'react-router-dom';
import CardLoading from '../molecules/Card.Loading';
import CardGrid from '../templates/Card.Grid';
import CardError from '../molecules/Card.Error';

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

export interface IGracefulLoadProps {
  loaderData: Record<string, unknown>;
  children: ComponentType<any>;
}

function GracefulLoad(props: IGracefulLoadProps) {
  const { loaderData } = props;

  return (
    <Suspense fallback={<LoadingFlow />}>
      <Await
        resolve={loaderData}
        errorElement={<CardError>Deu ruim no carregamento</CardError>}
      >
        {({ data }) => <props.children loaderData={data} />}
      </Await>
    </Suspense>
  );
}

export default GracefulLoad;
