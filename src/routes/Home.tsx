import { defer, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { ENDPOINT, PER_PAGE } from '../services/enums';
import Date from '../services/Date';
import Requests from '../services/Requests';
import GracefulLoad from '../components/hocs/GracefulLoadCards';
import CardGrid from '../components/templates/Card.Grid';
import About from '../components/molecules/About';
import Card from '../components/molecules/Card';
import { IEventProps } from '../components/atoms/Content';
import Title from '../components/atoms/Title';
import Pagination from '../components/atoms/Pagination';
import zuStore from '../store';

export interface ILoaderResponse {
  result: Record<any, any>;
}

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
  const homeLoader = useLoaderData() as ILoaderResponse;
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
              <CardGrid>
                {loaderData.posts?.map((event: IEventProps) => (
                  <Card
                    key={event.id}
                    {...event}
                    path={event.id}
                    onClick={() => setGoBack('/')}
                  />
                ))}
              </CardGrid>

              <Pagination
                totalItems={loaderData.total_posts}
                perPage={PER_PAGE}
              />
            </>
          )}
        </GracefulLoad>
      </div>

      <About />
    </>
  );
}

export default Home;
