import Link from 'next/link';

import Title from '@/components/atoms/Title';
import Card from '@/components/molecules/Card';
import CardGrid from '@/components/templates/Card.Grid';
import { IEventProps } from '@/Content/types';
import { EVENTS_LIST } from '@/services/mock';

interface EventRouteParams {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: EventRouteParams;
}) {
  const { slug } = params;

  // fetch data
  // (*)

  return {
    title: `Eventos em ${slug} no Rio de Janeiro`,
    // description: EVENT_SINGLE.description,
    // const previousImages = (await parent).openGraph?.images || []
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

const Category = ({ params }: { params: EventRouteParams }) => {
  const { slug } = params;

  return (
    <>
      <Title>Eventos em {slug} no Rio de Janeiro</Title>

      <CardGrid>
        {EVENTS_LIST.slice(1, 5).map((event: IEventProps) => (
          <Link key={event.id} href={`/event/${event.slug}`}>
            <Card {...event} />
          </Link>
        ))}
      </CardGrid>
    </>
  );
};

export default Category;
