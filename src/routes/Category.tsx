import {
  defer, LoaderFunctionArgs, useLoaderData,
} from 'react-router-dom';
import zuStore from '../store';
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
import useTitle from '../hooks/useTitle';

export async function CategoryLoader({ params: { entry, page } }: LoaderFunctionArgs) {
  const result = await Requests.getEvents((ENDPOINT.CATEGORY + entry), {
    after: Date.todayDate(),
    per_page: 4,
    page: page || 1,
  });

  return defer({
    result,
  });
}

function Category() {
  const categoryLoader = useLoaderData();
  const { setGoBack } = zuStore();

  const { data: { name } } = categoryLoader.result;

  useTitle(`${name} - Sextou!`);

  return (
    <div className="category--wrapper">
      <GracefulLoad loaderData={categoryLoader.result}>
        {({ loaderData }) => (
          <>
            <Title>{`Melhores shows e festas em ${loaderData.name}`}</Title>

            <Pagination
              totalItems={loaderData.total_posts}
              perPage={4}
            />

            <CardGrid>
              {loaderData.posts?.map((event: CardProps) => (
                <Card
                  key={event.id}
                  {...event}
                  path={event.id}
                  onClick={() => setGoBack(`category/${loaderData.slug}`)}
                />
              ))}
            </CardGrid>
          </>
        )}
      </GracefulLoad>
    </div>
  );
}

export default Category;
