import { AxiosResponse } from 'axios';
import { defer, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import Requests from '../services/Requests';
import Date from '../services/Date';
import CardGrid from '../components/templates/Card.Grid';
import Card, { CardProps, reducerProps } from '../components/molecules/Card';
import ErrorCard from '../components/molecules/Card.Error';
import CardLoading from '../components/molecules/Card.Loading';
import Title from '../components/atoms/Title';
import Pagination from '../components/atoms/Pagination';
import usePagination from '../hooks/usePagination';
import About from '../components/molecules/About';
import GracefulLoad from '../components/hocs/GracefulLoadCards';
import { ENDPOINT, PER_PAGE } from '../services/enums';
import zuStore from '../store';

export async function HomeLoader({ params: { page } }: LoaderFunctionArgs) {
  const result = Requests.getEvents(ENDPOINT.MAIN, {
    after: Date.todayDate(),
    per_page: PER_PAGE,
    page: page || 1,
  });

  return defer({
    result,
  });
}

function Home() {
  const homeLoader = useLoaderData() as AxiosResponse;
  const { setGoBack } = zuStore();

  return (
    <>
      <div className="home--wrapper">
        <Title>
          Principais shows e festas no Rio de Janeiro
        </Title>

        <GracefulLoad loaderData={homeLoader.result}>
          {({ loaderData }) => (
            <>
              <Pagination
                totalItems={loaderData.total_posts}
                perPage={PER_PAGE}
              />
              <CardGrid>
                {loaderData.posts?.map((event: CardProps) => (
                  <Card
                    key={event.id}
                    {...event}
                    path={event.id}
                    onClick={() => setGoBack('/')}
                  />
                ))}
              </CardGrid>
            </>
          )}
        </GracefulLoad>
      </div>

      <About />

      {/* <Outlet /> */}
    </>
  );
}

export default Home;
