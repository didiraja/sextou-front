import Link from 'next/link';
import * as React from 'react';

import Title from '@/components/atoms/Title';
import About from '@/components/molecules/About';
import Card from '@/components/molecules/Card';
import CardGrid from '@/components/templates/Card.Grid';
import { EventsAPIResponse, IEventProps } from '@/Content/types';

async function getEvents() {
  const res = await fetch(
    // https://sextou.quartemo.com.br/wp-api/sextou/v1/events/?after=2023-08-05
    'http://localhost/wp-json/sextou/v1/__events/?after=2023-08-01',
    { cache: 'no-cache' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function HomePage() {
  const data: EventsAPIResponse = await getEvents();

  return (
    <>
      <div className='home-wrapper'>
        <div className='mb-24'>
          <Title>Neste Fim de Semana</Title>

          <CardGrid>
            {data.posts.slice(1, 5).map((event: IEventProps) => (
              <Link key={event.id} href={`/event/${event.slug}`}>
                <Card {...event} />
              </Link>
            ))}
          </CardGrid>
        </div>

        <Title>Todos os Eventos</Title>

        <CardGrid>
          {data.posts.map((event: IEventProps) => (
            <Link key={event.id} href={`/event/${event.slug}`}>
              <Card {...event} />
            </Link>
          ))}
        </CardGrid>

        {/* <Pagination
            totalItems={loaderData.total_posts}
            perPage={PER_PAGE}
          /> */}
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
