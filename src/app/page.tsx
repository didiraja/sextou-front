import Link from 'next/link';
import * as React from 'react';

import Title from '@/components/atoms/Title';
import About from '@/components/molecules/About';
import Card from '@/components/molecules/Card';
import CardGrid from '@/components/templates/Card.Grid';
import { IEventProps } from '@/Content/types';
import { EVENTS_LIST } from '@/services/mock';

export default function HomePage() {
  return (
    <>
      <div className='home-wrapper'>
        <div className='mb-24'>
          <Title>Neste Fim de Semana</Title>

          <CardGrid>
            {EVENTS_LIST.slice(1, 5).map((event: IEventProps) => (
              <Link key={event.id} href={`/event/${event.slug}`}>
                <Card {...event} />
              </Link>
            ))}
          </CardGrid>
        </div>

        <Title>Todos os Eventos</Title>

        <CardGrid>
          {EVENTS_LIST.map((event: IEventProps) => (
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
