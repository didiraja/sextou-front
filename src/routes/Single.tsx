import { useRef } from 'react';
import {
  LoaderFunctionArgs, redirect, navigate, useLoaderData,
} from 'react-router-dom';
import Requests from '../services/Requests';
import Date from '../services/Date';
import CardGrid from '../components/templates/Card.Grid';
import Card, { CardProps } from '../components/molecules/Card';
import ErrorCard from '../components/molecules/Card.Error';
import Title from '../components/atoms/Title';
import Pagination from '../components/atoms/Pagination';
import usePagination from '../hooks/usePagination';
import About from '../components/molecules/About';

import {
  ENDPOINT, PER_PAGE, ERROR,
} from '../services/enums';

export async function SingleEventLoader({ params: { id } }: LoaderFunctionArgs) {
  /**
   * validate number on id string
   * if not number, redirect
   * do fetch()
  */

  // if (!id || !isIdANumber) {
  //   return redirect('/');
  // }

  try {
    const result = await Requests.getSingleEvent((ENDPOINT.MAIN, idValue), {
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

function SingleEvent() {
  const singleEventFetch = useLoaderData();

  console.log(singleEventFetch);

  // DEBUG - FETCH OK BUT NO EVENTS
  // const events = [];
  // const moreThanZero = false;

  const events = singleEventFetch?.data;
  const moreThanZero = singleEventFetch?.data.posts?.length > 0;

  const {
    /* activePage, */ setActive, goPrevious, goNext,
  } = usePagination();

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

  const scrollPageUp = () => {
    if (!scollToRef.current) return;

    scollToRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="main-events my-24" ref={scollToRef}>
        <Title>
          Melhores shows e festas em
          {' '}
          {events.name}
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
                // onClick={(evt) => openModal(evt)}
                />
              ))}
            </CardGrid>

            <Pagination
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

      </div>

      <About />
    </>
  );
}

export default SingleEvent;
