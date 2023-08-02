import { AxiosResponse } from 'axios';
import { useRef } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Requests from '../services/Requests';
import Date from '../services/Date';
import CardGrid from '../components/templates/Card.Grid';
import Card, { CardProps, reducerProps } from '../components/molecules/Card';
// import LoadingCard from '../components/molecules/Card.Loading';
import ErrorCard from '../components/molecules/Card.Error';
import Title from '../components/atoms/Title';
import Pagination from '../components/atoms/Pagination';
import usePagination from '../hooks/usePagination';
import About from '../components/molecules/About';

import {
  ENDPOINT, PER_PAGE, ERROR,
} from '../services/enums';

export async function HomeLoader() {
  try {
    const result = await Requests.getEvents(ENDPOINT.MAIN, {
      after: Date.todayDate(),
      per_page: PER_PAGE,
      page: 1,
    });

    return result;
  } catch (error: any) {
    // console.log(error);
    // eslint-disable-next-line no-console
    console.log(`${error.code} - ${error.message}`);

    throw Error(ERROR.LOADING);
  }
}

function Home() {
  const eventsFetch = useLoaderData() as AxiosResponse;
  const navigate = useNavigate();

  // DEBUG - FETCH OK BUT NO EVENTS
  // const events = [];
  // const moreThanZero = false;

  const events = eventsFetch?.data;
  const moreThanZero = eventsFetch?.data.posts?.length > 0;

  // const {
  //   /* activePage, */ setActive, goPrevious, goNext,
  // } = usePagination();

  /**
   * PAGINATION LOGIC
  */
  // useEffect(() => {
  //   setQueryString((state) => ({
  //     ...state,
  //     page: activePage,
  //   }));
  // }, [activePage]);

  /**
   * UI LOGIC
  */
  const scollToRef = useRef<HTMLDivElement | null>(null);

  // const scrollPageUp = () => {
  //   if (!scollToRef.current) return;

  //   scollToRef.current.scrollIntoView({
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <>
      <div className="main-events my-24" ref={scollToRef}>
        <Title className="mb-8">
          Principais shows e festas no Rio de Janeiro
        </Title>

        {/* {
          (condition?) ? (
            <>
              <LoadingCard />
              <LoadingCard />
            </>
          ) : null
        } */}

        {!moreThanZero ? (
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
        ) : null}

        {moreThanZero ? (
          <>
            <CardGrid>
              {events.posts.map((event: CardProps) => (
                <Card
                  key={event.id}
                  {...event}
                  path={`/event/${event.id}`}
                />
              ))}
            </CardGrid>
            {/* <Link to={`/event/${event.id}`}>
                </Link> */}

            {/* <Pagination
              totalItems={events.totalEvents}
              page={1}
              perPage={PER_PAGE}
              onSelectPage={(page: number) => {
                setActive(page);

                scrollPageUp();
              }}
              onPrevious={() => {
                goPrevious();

                scrollPageUp();
              }}
              onNext={() => {
                goNext();

                scrollPageUp();
              }}
            /> */}
          </>
        ) : null}

      </div>

      <About />
    </>
  );
}

export default Home;
