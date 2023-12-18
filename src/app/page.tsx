'use client';
import * as React from 'react';

import Title from '@/components/atoms/Title';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  // const showCarousel = false;

  return (
    <>
      {/* {showCarousel ? <Carousel /> : null} */}

      <div className='home--wrapper'>
        <Title>Principais shows e festas no Rio de Janeiro</Title>

        {/* <GracefulLoad loaderData={homeLoader.result}>
          {({ loaderData }) => (
            <>
              <CardGrid>
                {loaderData.posts?.map((event: IEventProps) => (
                  <Card
                    key={event.id}
                    {...event}
                    path={event.slug}
                    onClick={() => setGoBack('/')}
                  />
                ))}
              </CardGrid>

              <Pagination
                totalItems={loaderData.total_posts}
                perPage={PER_PAGE}
              />
            </>
          )}
        </GracefulLoad> */}
      </div>

      {/* <About /> */}
    </>
  );
}
