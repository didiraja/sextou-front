import { ReactElement } from 'react';

export interface IEventProps {
  slug: string;
  highlight?: boolean;
  id: number;
  title: string;
  event_date: string;
  categories: Array<WPTermObject>;
  cover: string;
  tickets: string;
  free?: boolean;
  content?: string;
  description: string;
}

export type ContentProps = IEventProps & {
  children?: ReactElement;
  onClick?: () => void;
};

export type WPTermObject = {
  term_id: number;
  name: string;
  slug: string;
  term_group?: number;
  term_taxonomy_id?: number;
  taxonomy?: string;
  description?: string;
  parent?: number;
  count?: number;
  filter?: string;
};
