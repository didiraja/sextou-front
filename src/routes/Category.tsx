import {
  defer, LoaderFunctionArgs, useLoaderData,
} from 'react-router-dom';
import Date from '../services/Date';
import { ENDPOINT, PER_PAGE } from '../services/enums';
import Requests from '../services/Requests';
import GracefulLoad from '../components/hocs/GracefulLoadCards';
import CardGrid from '../components/templates/Card.Grid';
import Card from '../components/molecules/Card';
import { IEventProps } from '../components/atoms/Content';
import Title from '../components/atoms/Title';
import Pagination from '../components/atoms/Pagination';
import useTitle from '../hooks/useTitle';
import zuStore from '../store';
import { ILoaderResponse } from './Home';

export async function CategoryLoader({ params: { entry, page } }: LoaderFunctionArgs) {
  const result = await Requests.getEvents((ENDPOINT.CATEGORY + entry), {
    after: Date.todayDate(),
    per_page: PER_PAGE,
    page: page || 1,
  });

  return defer({
    result,
  });
}

function Category() {
  const categoryLoader = useLoaderData() as ILoaderResponse;
  const { setGoBack } = zuStore();

  const { data: { name } } = categoryLoader.result;

  useTitle(`${name} - Sextou!`);

  return (
    <div className="category--wrapper">
      <GracefulLoad loaderData={categoryLoader.result}>
        {({ loaderData }) => (
          <>
            <Title>{`Melhores shows e festas em ${loaderData.name}`}</Title>

            <CardGrid>
              {loaderData.posts?.map((event: IEventProps) => (
                <Card
                  key={event.id}
                  {...event}
                  path={event.id}
                  onClick={() => setGoBack(`category/${loaderData.slug}`)}
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
  );
}

export default Category;
