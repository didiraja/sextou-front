import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Button, { LinkProps } from './Button';

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
  tickets: '',
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
  tickets: '',
};
