import * as React from 'react';

import Pagination from '@/components/atoms/Pagination';
import Title from '@/components/atoms/Title';
import About from '@/components/molecules/About';
import Card from '@/components/molecules/Card';
import CardGrid from '@/components/templates/Card.Grid';
import { EventsAPIResponse, IEventProps } from '@/Content/types';
import { HOST } from '@/services/enums';

async function getEvents(page: number) {
  const res = await fetch(
    `${HOST}/sextou/v1/events/?page=${page}&after=2023-08-01&before=2023-08-31`,
    {
      cache: 'no-cache',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const { page: pageParam } = searchParams;

  const page = Number(pageParam);

  const data: EventsAPIResponse = await getEvents(page);

  return (
    <>
      <div className='home-wrapper'>
        <div className='mb-24'>
          <Title>Neste Fim de Semana</Title>

          <CardGrid>
            {data.posts.slice(1, 5).map((event: IEventProps) => (
              <Card key={event.id} {...event} />
            ))}
          </CardGrid>
        </div>

        <Title>Todos os Eventos</Title>

        <CardGrid>
          {data.posts.map((event: IEventProps) => (
            <Card key={event.id} {...event} />
          ))}
        </CardGrid>

        <Pagination page={page} totalItems={data.total_posts} />
      </div>

      <About />
    </>
  );
}

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
