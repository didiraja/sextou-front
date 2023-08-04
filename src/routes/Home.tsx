import { AxiosResponse } from 'axios';
import { useRef, Suspense } from 'react';
import {
  Await, defer, useLoaderData,
} from 'react-router-dom';
import Requests from '../services/Requests';
import Date from '../services/Date';
import CardGrid from '../components/templates/Card.Grid';
import Card, { CardProps, reducerProps } from '../components/molecules/Card';
// import LoadingCard from '../components/molecules/Card.Loading';
import ErrorCard from '../components/molecules/Card.Error';
import CardLoading from '../components/molecules/Card.Loading';
import Title from '../components/atoms/Title';
import Pagination from '../components/atoms/Pagination';
import usePagination from '../hooks/usePagination';
import About from '../components/molecules/About';

import {
  ENDPOINT, PER_PAGE, ERROR,
} from '../services/enums';

export async function HomeLoader() {
  const result = Requests.getEvents(ENDPOINT.MAIN, {
    after: Date.todayDate(),
    per_page: PER_PAGE,
    page: 1,
  });

  return defer({
    result,
  });
}

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

function Home() {
  const loaderData = useLoaderData() as AxiosResponse;

  // DEBUG - FETCH OK BUT NO EVENTS
  // const events = [];
  // const moreThanZero = false;

  // const events = eventsFetch?.data;
  // const moreThanZero = eventsFetch?.data.posts?.length > 0;

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
        <Title>
          Principais shows e festas no Rio de Janeiro
        </Title>
        <Suspense fallback={<LoadingFlow />}>
          <Await
            resolve={loaderData.result}
            errorElement={<p>Deu ruim no carregamento</p>}
          >
            {({ data }) => (
              <CardGrid>
                {data?.posts.map((event: CardProps) => (
                  <Card
                    key={event.id}
                    {...event}
                    path={`/event/${event.id}`}
                  />
                ))}
              </CardGrid>
            )}
          </Await>
        </Suspense>
        {/*

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
            />
              </>
            ) : null}
            */}

      </div>

      <About />
    </>
  );
}

export default Home;
