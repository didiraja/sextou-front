import axios from 'axios';
import * as React from 'react';
import { Thing, WithContext } from 'schema-dts';

import Content from '@/Content/Content.Single';
import { IEventProps } from '@/Content/types';
import CloseButton from './components/CloseButton';

import styles from './event.module.scss';

interface EventRouteParams {
  id: string;
}

async function getSingleEvent(id: string) {
  const res = await axios.get<IEventProps>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/event/${id}`
  );

  return res;
}

export async function generateMetadata({
  params,
}: {
  params: EventRouteParams;
}) {
  const { id } = params;

  const { data } = await getSingleEvent(id);

  return {
    // title: `${data.title} em ${data.categories[1].name} no Rio de Janeiro`,
    title: `${data.title} no Rio de Janeiro`,
    description: data.description.substring(0, 300),
    openGraph: {
      images: [data.cover],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_API_URL}/event/${data._id}`,
    },
  };
}

export default async function Event({ params }: { params: EventRouteParams }) {
  const { id } = params;

  const { data } = await getSingleEvent(id);

  const jsonLd: WithContext<Thing> = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: data.title,
    startDate: data.date,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        // addressLocality: data.categories[1].name,
        addressRegion: 'RJ',
      },
    },
    image: data.cover,
    description: data.description,
    offers: {
      '@type': 'Offer',
      url: `${process.env.NEXT_PUBLIC_API_URL}/event/${data._id}`,
      priceCurrency: 'BRL',
    },
  };

  return (
    <>
      <div className={styles['backdrop']}>
        <div className={styles['single--wrapper']}>
          <div className={styles['single--event']}>
            <div className={styles['nav-wrapper']}>
              <CloseButton />
            </div>
            <Content {...data} />
          </div>
        </div>
      </div>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
