import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import CardGrid from '../components/templates/Card.Grid';
import ErrorCard from '../components/molecules/Card.Error';
import Card, { CardProps } from '../components/molecules/Card';
import { zuStore } from '../store';
import Pagination from '../components/atoms/Pagination';
import usePagination from '../hooks/usePagination';
import Requests from '../services/Requests';
import Title from '../components/atoms/Title';
import LoadingCard from '../components/molecules/Card.Loading';

import { ENDPOINT, ERROR } from '../services/enums';

function Category() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const openModal = zuStore((store: any) => store.openModal);

  const isNumber = !Number.isNaN(Number(slug));

  useEffect(() => {
    if (isNumber) return navigate('/');
  }, []);

  const scollToRef = useRef<HTMLDivElement | null>(null);

  // LOADING AND PAGINATION
  const {
    activePage, setActive, goPrevious, goNext,
  } = usePagination();

  const [events, setEvents] = useState([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [categoryName, setCategoryName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getEvents = async () => {
      try {
        const result = await Requests.getEvents(`${ENDPOINT.CATEGORY}${slug}`, {
          page: activePage,
        });

        if (!result) {
          return;
        }

        setCategoryName(() => result.data.name);
        setEvents(() => result.data.posts);
        setTotalEvents(() => result.data.total_posts);
      } catch (error: any) {
        // console.log(error);
        console.log(`${error.code} - ${error.message}`);

        if (error.code === 'ERR_NETWORK') setErrorMsg(() => ERROR.LOADING);
      }
    };

    getEvents();
  }, [slug, activePage]);
  // end

  const scrollPageUp = () => {
    if (!scollToRef.current) return;

    return scollToRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div ref={scollToRef} />

      <Title>
        Melhores shows e festas em
        {categoryName}
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
                href="http://"
                target="self"
                rel="noopener noreferrer"
              >
                voltar para a Home?
              </a>
            </p>
          </ErrorCard>
        ) : null}

        {events?.length
          ? events.map((event: CardProps) => <Card key={event.id} {...event} onClick={openModal} />)
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
  );
}

export default Category;
