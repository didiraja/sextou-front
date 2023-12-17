// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import Button, { LinkProps } from './Button';
import './Button.pcss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

function Template(args: LinkProps) {
  return <Button {...args} />;
}

export const Link = Template.bind({});
Link.args = {
  children: 'Tem Link',
  tickets: 'dfsdfsdafsdfsd',
};

export const NoLink = Template.bind({});
NoLink.args = {
  disabled: true,
  tickets: undefined,
  // className: '',
  children: 'Sem Link',
};

export const FreeLink = Template.bind({});
FreeLink.args = {
  free: true,
  children: '0800 com Link',
  tickets: 'dfsdfsdafsdfsd',
};

export const FreeNoLink = Template.bind({});
FreeNoLink.args = {
  free: true,
  disabled: true,
  // className: 'no-tickets',
  children: '0800 sem Link',
  tickets: undefined,
};

function ButtonPill() {
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

export const Pill = ButtonPill.bind({});
