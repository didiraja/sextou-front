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

      <div className='home-wrapper'>
        <Title>Principais shows e festas no Rio de Janeiro</Title>

        {/* <Card
          slug="string"
          highlight={false}
          id={52}
          title="Lorem Ipsum"
          event_date="18/12/2023"
          categories={[{
            term_id: 1234,
            name: "Rock",
            slug: "sdhusadhi",
            term_group: 5,
            term_taxonomy_id: 8,
            taxonomy: "djsaodjasio",
            description: "dsjfiosdafosd",
            parent: 95,
            count: 132,
            filter: "poiqopdsdo"
          }]}
          cover="https://picsum.photos/800/600"
          tickets="sahdiusahduiad"
          free={false}
          content="hdfisuhuoisdhusdiofs"
          description="dsffoidsjfisjdpfiojsdiofjsdiofjoifjipoweipoap´sdp´fojksdpfiojdsifogsjgpsdo"
          path='/abc/def'
        // onClick={() => setGoBack('/')}
        /> */}

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
