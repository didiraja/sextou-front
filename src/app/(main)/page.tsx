import axios from 'axios';
import clsx from 'clsx';
import * as React from 'react';

import Title from '@/components/atoms/Title';
import About from '@/components/molecules/About';
import Card from '@/components/molecules/Card';
import CardGrid from '@/components/templates/Card.Grid';
import { EventsAPIResponse, IEventProps } from '@/Content/types';

import styles from './Home.module.scss';

async function getEvents(page = 1) {
  const res = await axios.post<EventsAPIResponse>(
    'https://sa-east-1.aws.data.mongodb-api.com/app/data-vjuqevb/endpoint/data/v1/action/find',
    {
      dataSource: 'Cluster0',
      database: 'eventim',
      collection: 'raw_events',
      limit: 12,
      sort: {
        _id: -1,
      },
    },
    {
      headers: {
        'api-key':
          'XtnOYSuUbmOvyVCZ9SG2mYl2An0hoAIjEmjtBjB0UozE4aSZ1HV4SgzAzuLVdtgk',
        cache: 'no-cache',
      },
    }
  );

  return res;
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const { page: pageParam } = searchParams;

  const page = Number(pageParam) || 1;

  const data = await getEvents(page);

  return (
    <>
      <div className={clsx(styles['home-wrapper'], styles['bottom-spacing'])}>
        {/* <div
          className={clsx(styles['weekend-wrapper'], styles['bottom-spacing'])}
        >
          <Title tag='h2' className={styles['weekend-title']}>
            Neste Fim de Semana
          </Title>

          <CardGrid>
            {data.posts?.slice(1, 5).map((event: IEventProps) => (
              <Card key={event.id} {...event} />
            ))}
          </CardGrid>
        </div> */}

        <Title>Todos os Eventos</Title>

        <CardGrid>
          {data.data.documents?.map((event: IEventProps) => (
            <Card key={event._id} {...event} />
          ))}
        </CardGrid>

        {/* <Pagination page={page} totalItems={data.total_posts} /> */}
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
