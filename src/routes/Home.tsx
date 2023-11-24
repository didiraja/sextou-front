import {
  defer, LoaderFunctionArgs, useLoaderData, Link,
} from 'react-router-dom';
import { isBefore, parseISO, startOfToday } from 'date-fns';
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
import './Home.pcss';

export interface ILoaderResponse {
  result: Record<any, any>;
}

export async function HomeLoader({ params: { page } }: LoaderFunctionArgs) {
  // const result = await Requests.getEvents(ENDPOINT.MAIN, {
  //   after: Date.todayDate(),
  //   per_page: PER_PAGE,
  //   page: page || 1,
  // });

  // return defer({
  //   result,
  // });

  return null
}

function Home() {
  const homeLoader = useLoaderData() as ILoaderResponse;
  const { setGoBack } = zuStore();

  const showCarousel = isBefore(startOfToday(), parseISO('2023-10-21'));

  return (
    <>
      {/* {
        showCarousel
          ? (
            <div className="carousel--wrapper">
              <Link to="/event/999-sextemos">
                <img
                  className="card-surface carousel--event"
                  src="https://sextou.quartemo.com.br/wp-content/uploads/2023/08/8b62ea6f-5b23-40f0-9da3-a18986ab5805-768x406.png"
                  alt="Sextemos!"
                />
              </Link>
            </div>
          )
          : null
      } */}
      <div className="home--wrapper">

        <p className='section-title text-center border-l-0'>Estamos em Manutenção, Voltamos em breve.</p>

        <p className="text-center">Enquanto isso, nos encontre no <a
          className="underline hover:no-underline underline-offset-1 text-fuchsia-500"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/sextou.rio/"
        >Instagram</a></p>

        {/* <Title>
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
                    path={event.slug}
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
        </GracefulLoad> */}
      </div>

      {/* <About /> */}
    </>
  );
}

export default Home;
