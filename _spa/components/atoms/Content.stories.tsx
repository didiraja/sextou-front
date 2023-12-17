// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import Content, { IEventProps } from './Content';
import '../molecules/Card.pcss';
import '../molecules/Modal.pcss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Content',
  component: Content,
} as ComponentMeta<typeof Content>;

function Template(args: IEventProps) {
  return (
    <div className='card'>
      <Content {...args} />
    </div>
  );
}

function Template2(args: IEventProps) {
  return (
    <div className='modal'>
      <Content {...args} />
    </div>
  );
}

const mockEvent = {
  id: 114,
  permalink: '/2023-02-attitude-metal-fest',
  title: 'Attitude Metal Fest',
  event_date: '2023-02-24T20:00:00+00:00',
  categories: [
    {
      term_id: 38,
      name: 'Centro',
      slug: 'centro',
      term_group: 0,
      term_taxonomy_id: 38,
      taxonomy: 'category',
      description: '',
      parent: 30,
      count: 14,
      filter: 'raw',
    },
    {
      term_id: 37,
      name: 'Lapa',
      slug: 'lapa',
      term_group: 0,
      term_taxonomy_id: 37,
      taxonomy: 'category',
      description: '',
      parent: 31,
      count: 11,
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
      count: 5,
      filter: 'raw',
    },
  ],
  cover:
    'http://sextou.local/wp-content/uploads/2023/01/attitudemetalfest-circovoador-eventim-artwork-768x297.png',
  free: false,
  tickets: '',
  description:
    '<div class="moretext js-moretext theme-text-color expanded" data-qa="readMoreText" aria-expanded="true">\r\n<div class="moretext-teaser">\r\n<p align="center"><img class="alignnone size-full wp-image-115" src="http://sextou.local/wp-content/uploads/2023/01/324876088_907233793961149_6438623247744008862_n.jpg" alt="" width="1440" height="1440" /></p>\r\n<p align="center"><b>Attitude Metal Fest no Circo Voador\r\nKrisiun\u00a0+ Gangrena Gasosa\u00a0+ Sangue de Bode\u00a0+ Clava\r\n</b>\r\nAttitude Metal Fest, evento que tem o intuito de fomentar o cen\u00e1rio do metal nacional\u00a0 unindo bandas consagradas com as novas bandas que est\u00e3o fazendo barulho pelas ruas do Brasil, chega ao Circo Voador na sexta-feira, dia 24 de fevereiro.\r\nEsta primeira edi\u00e7\u00e3o conta com a lenda do metal nacional: Krisiun, um dos grandes nomes do death metal mundial; A J\u00e1 consagrada no Brasil: Gangrena Gasosa; E as revela\u00e7\u00f5es da cena: Sangue de Bode, uma das bandas da cena que mais cresce no pa\u00eds; e Clava, que em 2022 com seu novo trabalho ganhou reconhecimento do p\u00fablico especializado at\u00e9\u00a0fora\u00a0do\u00a0Brasil.</p>\r\n<b>SERVI\u00c7O</b>\r\nData \ud83d\udcc5: 24/02/2023\r\nAbertura dos port\u00f5es: 20h\r\nLocal: Circo Voador\r\nEndere\u00e7o \ud83d\udccd: R. dos Arcos, s/n - Lapa, Rio de Janeiro/RJ\r\nClassifica\u00e7\u00e3o et\u00e1ria: 18 anos. Maiores de 14 anos entram acompanhados de pais/respons\u00e1veis.\r\n\r\nhttps://www.eventim.com.br/event/attitude-metal-fest-krisiun-gangrena-gasosa-sangue-de-bode-clava-circo-voador-16500006/\r\n\r\n</div>\r\n</div>',
};

export const Card = Template.bind({});
Card.args = {
  ...mockEvent,
};

export const Modal = Template2.bind({});
Modal.args = {
  component: 'Modal',
  ...mockEvent,
};
