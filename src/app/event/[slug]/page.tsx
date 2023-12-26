import * as React from 'react';

import CloseButton from '@/app/event/[slug]/components/CloseButton';
import Content from '@/Content/Content.Single';

import styles from '../event.module.scss';

const mock = {
  id: 726,
  slug: '726-rio-metal-fest',
  title: 'Rio Metal Fest',
  event_date: '2023-08-05T18:00:00+00:00',
  categories: [
    {
      term_id: 57,
      name: 'Zona Norte',
      slug: 'zona-norte',
      term_group: 0,
      term_taxonomy_id: 57,
      taxonomy: 'category',
      description: '',
      parent: 30,
      count: 22,
      filter: 'raw',
    },
    {
      term_id: 83,
      name: 'Pra\u00e7a da Bandeira',
      slug: 'praca-da-bandeira',
      term_group: 0,
      term_taxonomy_id: 83,
      taxonomy: 'category',
      description: '',
      parent: 31,
      count: 10,
      filter: 'raw',
    },
    {
      term_id: 35,
      name: 'Rock',
      slug: 'rock',
      term_group: 0,
      term_taxonomy_id: 35,
      taxonomy: 'category',
      description: '',
      parent: 32,
      count: 103,
      filter: 'raw',
    },
  ],
  cover:
    'https://sextou.quartemo.com.br/wp-content/uploads/2023/06/361694797_189770127185848_7914942705485887160_n-768x960.jpg',
  free: false,
  tickets: 'https://www.sympla.com.br/evento/rio-metal-fest/2004702',
  description:
    'A Noise Stage apresenta para voc\u00eas o nosso t\u00e3o aguardado "Rio Metal Fest\u201d, com a banda de GRIND Desalmado,\u00a0substituindo\u00a0a banda de sarav\u00e1 metal\u00a0@gangrenagasosa\u00a0na Zona Oeste do Rio de janeiro na\u00a0@areninha_carioca_gilberto_gil\u00a0em Realengo. Para iniciar os trabalhos, teremos as bandas\u00a0@clivaoficial\u00a0@voxmortemband\u00a0@sanguedebode\u00a0e\u00a0@forkillofficial\u00a0. Os ingressos podem ser adquirido pelo sympla ou nos pontos de vendas. Os valores est\u00e3o a partir\u00a0de R$35,00, ent\u00e3o garanta j\u00e1 o seu antes que acabe. Anotem a\u00ed, dia 5 de agosto as 18h em Realengo RIO METAL FEST',
};

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
    title: `${mock.title} em ${mock.categories[1].name} no Rio de Janeiro`,
    description: mock.description,
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
            <Content {...mock} />
          </div>
        </div>
      </div>
    </>
  );
}
