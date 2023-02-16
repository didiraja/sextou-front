// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Pill',
  component: Button,
} as ComponentMeta<typeof Button>;

function Template() {
  const data = [{
    slug: 'centro',
    label: 'Centro',
  },
  {
    slug: 'lapa',
    label: 'Lapa',
  },
  {
    slug: 'funk',
    label: 'Funk',
  },
  ];

  return data.map((item) => <Button pill href={`https://sextou.rio/category/${item.slug}`}>{item.label}</Button>);
}

export const Example = Template.bind({});
