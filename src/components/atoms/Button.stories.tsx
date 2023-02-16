import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

function Template(args: ButtonProps) {
  return <Button {...args} />;
}

export const Link = Template.bind({});
Link.args = {
  children: 'Tem Link',
};

export const NoLink = Template.bind({});
NoLink.args = {
  disabled: true,
  className: 'no-tickets',
  children: 'Sem Link',
};

export const FreeLink = Template.bind({});
FreeLink.args = {
  free: true,
  children: '0800 com Link',
};

export const FreeNoLink = Template.bind({});
FreeNoLink.args = {
  free: true,
  disabled: true,
  className: 'no-tickets',
  children: '0800 sem Link',
};
