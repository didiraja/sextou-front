import { useRef } from 'react';
import {
  defer, redirect, LoaderFunctionArgs, useLoaderData,
} from 'react-router-dom';
import Requests from '../services/Requests';
import Date from '../services/Date';
import CardGrid from '../components/templates/Card.Grid';
import Card, { CardProps } from '../components/molecules/Card';
import Title from '../components/atoms/Title';
import Pagination from '../components/atoms/Pagination';
import usePagination from '../hooks/usePagination';
import About from '../components/molecules/About';
import GracefulLoad from '../components/hocs/GracefulLoadCards';
import { ENDPOINT, PER_PAGE } from '../services/enums';

export async function CategoryLoader({ params: { entry, page } }: LoaderFunctionArgs) {
  // const isSlugANumber = Number.isInteger(Number(entry));

  // if (!entry || isSlugANumber) {
  //   return redirect('/');
  // }

  const result = Requests.getEvents((ENDPOINT.CATEGORY + entry), {
    after: Date.todayDate(),
    per_page: PER_PAGE,
    page: page || 1,
  });

  return defer({
    result,
  });
}

function Category() {
  const categoryLoader = useLoaderData();

  // const {
  //   activePage, setActive, goPrevious, goNext,
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
  // const scollToRef = useRef<HTMLDivElement | null>(null);

  // const scrollPageUp = () => {
  //   if (!scollToRef.current) return;

  //   scollToRef.current.scrollIntoView({
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <>
      <div className="category--wrapper">

        <GracefulLoad loaderData={categoryLoader.result}>
          {({ loaderData }) => (
            <>
              <Title>{`Melhores shows e festas em ${loaderData.name}`}</Title>

              <CardGrid>
                {loaderData.posts?.map((event: CardProps) => (
                  <Card
                    key={event.id}
                    {...event}
                    path={event.id}
                  />
                ))}
              </CardGrid>
            </>
          )}
        </GracefulLoad>

      </div>

      <About />
    </>
  );
}

export default Category;
