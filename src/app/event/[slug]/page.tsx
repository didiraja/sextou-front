import * as React from 'react';

import CloseButton from '@/app/event/[slug]/components/CloseButton';
import Content from '@/Content/Content.Single';
import { EVENT_SINGLE } from '@/services/mock';

import styles from './event.module.scss';

interface EventRouteParams {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: EventRouteParams;
}) {
  // const { slug } = params;

  // fetch data
  // (*)

  return {
    title: `${EVENT_SINGLE.title} em ${EVENT_SINGLE.categories[1].name} no Rio de Janeiro`,
    description: EVENT_SINGLE.description,
    // const previousImages = (await parent).openGraph?.images || []
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export default function Event({ params }: { params: EventRouteParams }) {
  // const { slug } = params;

  return (
    <>
      <div className={styles['backdrop']}>
        <div className={styles['single--wrapper']}>
          <div className={styles['single--event']}>
            <div className={styles['nav-wrapper']}>
              <CloseButton />
            </div>
            <Content {...EVENT_SINGLE} />
          </div>
        </div>
      </div>
    </>
  );
}
