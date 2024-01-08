import * as React from 'react';

import CloseButton from '@/app/event/[slug]/components/CloseButton';
import Content from '@/Content/Content.Single';
import { API_URL, HOST } from '@/services/enums';

import styles from './event.module.scss';

interface EventRouteParams {
  slug: string;
}

async function getSingleEvent(slug: string) {
  const query = `${API_URL}/sextou/v1/event/${slug}`;

  const res = await fetch(query);

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

  const data = await getSingleEvent(slug);

  return {
    title: `${data.title} em ${data.categories[1].name} no Rio de Janeiro`,
    description: data.description,
    openGraph: {
      images: [`${HOST}/wp-content/uploads/${data.cover.file}`],
    },
    alternates: {
      canonical: `https://sextou.rio/event/${slug}`,
    },
  };
}

export default async function Event({ params }: { params: EventRouteParams }) {
  const { slug } = params;

  const data = await getSingleEvent(slug);

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
    </>
  );
}
