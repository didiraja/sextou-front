import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import zuStore from '../store';
import Requests from '../services/Requests';
import Date from '../services/Date';
import CardGrid from '../components/templates/Card.Grid';
import Card, { CardProps } from '../components/molecules/Card';
import LoadingCard from '../components/molecules/Card.Loading';
import ErrorCard from '../components/molecules/Card.Error';
import Title from '../components/atoms/Title';
import Pagination from '../components/atoms/Pagination';
import usePagination from '../hooks/usePagination';
import About from '../components/molecules/About';

import { ENDPOINT, ERROR } from '../services/enums';

function Home() {
  const openModal = zuStore((store: any) => store.openModal);

  /**
   * ROUTE LOGIC
  */
  const { slug, page: paginationNumber } = useParams();
  const navigate = useNavigate();

  const isCategoryPage = Boolean(slug);
  const isNumber = !Number.isNaN(Number(slug));

  // wrong params and redirects
  useEffect(() => {
    if (isNumber) navigate('/');
  }, []);

  /**
   * STATE LOGIC
  */
  const [queryString, setQueryString] = useState({
    after: Date.todayDate(),
    per_page: 12,
    page: 1,
  });

  const [events, setEvents] = useState([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [categoryName, setCategoryName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  /**
   * PAGINATION LOGIC
  */
  const {
    activePage, setActive, goPrevious, goNext,
  } = usePagination();

  useEffect(() => {
    setQueryString((state) => ({
      ...state,
      page: activePage,
    }));
  }, [activePage]);

  /**
   * DATA EVENTS LOGIC
  */
  useEffect(() => {
    const getEvents = async () => {
      try {
        const result = await Requests.getEvents(isCategoryPage ? `${ENDPOINT.CATEGORY}${slug}` : 'events', queryString);

        if (!result) {
          return;
        }

        setCategoryName(() => result.data.name);

        const resultIsEmpty = result.data.posts.length === 0;

        if (resultIsEmpty) {
          setErrorMsg(() => ERROR.LOADING);
        }

        setEvents(() => result.data.posts);
        setTotalEvents(() => result.data.total_posts);
      } catch (error: any) {
        // console.log(error);
        // eslint-disable-next-line no-console
        console.log(`${error.code} - ${error.message}`);

        if (error.code === 'ERR_NETWORK') setErrorMsg(() => ERROR.LOADING);
      }
    };

    getEvents();
  }, [queryString, activePage]);

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
          {
            isCategoryPage
              ? `Melhores shows e festas em ${categoryName}` : 'Principais shows e festas no Rio de Janeiro'
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

export default Home;
