import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import zuStore from '../store';
import Requests from '../services/Requests';
import Date from '../services/Date';
import CardGrid from '../components/templates/Card.Grid';
import Card, { CardProps } from '../components/molecules/Card';
import { IEventProps } from '../components/atoms/Content';
import LoadingCard from '../components/molecules/Card.Loading';
import ErrorCard from '../components/molecules/Card.Error';
import Title from '../components/atoms/Title';
import Pagination from '../components/atoms/Pagination';
import usePagination from '../hooks/usePagination';
import About from '../components/molecules/About';

import { PATH, ENDPOINT, ERROR } from '../services/enums';

function Home() {
  const openModal = zuStore((store: any) => store.openModal);

  /**
   * COMMON DATA
   */
  const { id: eventID, slug, page: paginationNumber } = useParams();

  const isSingleEventPage = Boolean(eventID);
  const isCategoryPage = Boolean(slug);
  // const isGeneralPage = Boolean(eventID) && Boolean(slug);

  const [events, setEvents] = useState([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [categoryName, setCategoryName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [queryString, setQueryString] = useState({
    after: Date.todayDate(),
    per_page: 12,
    page: 1,
  });

  const getEvents = async (path = PATH.MAIN) => {
    try {
      let result: AxiosResponse | undefined;

      if (path === PATH.SINGLE) {
        // params
        const numbersFromURL = eventID.match(/^\d+(?=-)/);
        const actualID = numbersFromURL[0];

        // fetch
        if (eventID && actualID) {
          result = await Requests.getSingleEvent('events', Number(actualID));
        }

        // handling
        if (!result) {
          return;
        }

        // action
        openModal(result.data);
      }

      if (path !== PATH.SINGLE) {
        // fetch
        result = await Requests.getEvents(isCategoryPage ? `${ENDPOINT.CATEGORY}${slug}` : 'events', queryString);

        // handling
        if (!result) {
          return;
        }

        // action
        setCategoryName(() => result.data.name);

        const resultIsEmpty = result.data.posts.length === 0;
        if (resultIsEmpty) {
          setErrorMsg(() => ERROR.LOADING);
        }

        setEvents(() => result.data.posts);
        setTotalEvents(() => result.data.total_posts);
      }
    } catch (error: any) {
      // console.log(error);
      // eslint-disable-next-line no-console
      console.log(`${error.code} - ${error.message}`);

      if (error.code === 'ERR_NETWORK') setErrorMsg(() => ERROR.LOADING);
    }
  };

  const navigate = useNavigate();

  /**
   * CONTENT ACTION
   */
  if (isSingleEventPage) {
    useEffect(() => {
      getEvents(PATH.SINGLE);
    }, []);
  }

  if (isCategoryPage) {
    useEffect(() => {
      // const isSlugANumber = !Number.isNaN(Number(slug));
      const isSlugANumber = Number(slug);
      if (isSlugANumber) navigate('/');

      getEvents(PATH.CATEGORY);
    }, []);
  }

  const {
    activePage, setActive, goPrevious, goNext,
  } = usePagination();

  useEffect(() => {
    setQueryString((state) => ({
      ...state,
      page: activePage,
    }));

    getEvents();
  }, [activePage]);

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

  if (!isSingleEventPage) {
    return (
      <>
        <div className="main-events my-24" ref={scollToRef}>
          <Title>
            {
              isCategoryPage
                ? `Melhores shows e festas em ${categoryName}`
                : 'Principais shows e festas no Rio de Janeiro'
            }

          </Title>

          <CardGrid>
            {errorMsg ? (
              <ErrorCard>
                <p className="text-2xl">{errorMsg}</p>
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

            {events?.length
              ? events.map((event: CardProps) => (
                <Card
                  key={event.id}
                  {...event}
                  onClick={(evt) => openModal(evt)}
                />
              ))
              : !errorMsg && (
                <>
                  <LoadingCard />
                  <LoadingCard />
                </>
              )}
          </CardGrid>

          <Pagination
            totalItems={totalEvents}
            page={activePage}
            // REFACTOR SCROLL AFTER CLICK
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
        </div>

        <About />
      </>
    );
  }
}

export default Home;
