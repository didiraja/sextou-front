import { ReactElement } from 'react';

export interface IEventProps {
  _id: string;
  title: string;
  date: string;
  cover: string;
  link: string;
  highlight?: boolean;
  description: string;
  free?: boolean;
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
  cat_ID?: number;
  category_count?: number;
  category_description?: string;
  cat_name?: string;
  category_nicename?: string;
  category_parent?: number;
};

export interface EventsAPIResponse {
  items: IEventProps[];
}

export interface WPCoverObject {
  width: number;
  height: number;
  file: string;
  filesize: number;
  sizes: Sizes;
  image_meta: ImageMeta;
  original_image: string;
}

interface Sizes {
  medium: Medium;
  large: Large;
  thumbnail: Thumbnail;
  medium_large: MediumLarge;
  '1536x1536': N1536x1536;
  '2048x2048': N2048x2048;
}

interface Medium {
  file: string;
  width: string;
  height: string;
  'mime-type': string;
  filesize: string;
}

interface Large {
  file: string;
  width: string;
  height: string;
  'mime-type': string;
  filesize: string;
}

interface Thumbnail {
  file: string;
  width: string;
  height: string;
  'mime-type': string;
  filesize: string;
}

interface MediumLarge {
  file: string;
  width: string;
  height: string;
  'mime-type': string;
  filesize: string;
}

interface N1536x1536 {
  file: string;
  width: string;
  height: string;
  'mime-type': string;
  filesize: string;
}

interface N2048x2048 {
  file: string;
  width: string;
  height: string;
  'mime-type': string;
  filesize: string;
}

interface ImageMeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: unknown[];
}
