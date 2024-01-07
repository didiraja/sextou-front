import Title from '@/components/atoms/Title';
import Card from '@/components/molecules/Card';
import CardGrid from '@/components/templates/Card.Grid';
import { EventsAPIResponse, IEventProps } from '@/Content/types';
import { HOST } from '@/services/enums';

interface EventRouteParams {
  slug: string;
}

async function getCategoryEvents(slug: string, page: number) {
  const res = await fetch(
    `${HOST}/sextou/v1/category/${slug}/?after=2023-08-01&page=${page}`,
    { cache: 'no-cache' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: EventRouteParams;
}) {
  const { slug } = params;

  return {
    title: `Eventos em ${slug} no Rio de Janeiro`,
    // description: EVENT_SINGLE.description,
    // const previousImages = (await parent).openGraph?.images || []
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export default async function Category(request: {
  params: { slug: string };
  searchParams: { page: string };
}) {
  const {
    params: { slug },
    searchParams: { page: pageParam },
  } = request;

  const page = Number(pageParam);

  const data: EventsAPIResponse = await getCategoryEvents(slug, page);

  return (
    <>
      <Title>Eventos em {slug} no Rio de Janeiro</Title>

      <CardGrid>
        {data.posts.map((event: IEventProps) => (
          <Card key={event.id} {...event} />
        ))}
      </CardGrid>
    </>
  );
}
