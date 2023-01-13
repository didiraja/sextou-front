export type ChildrenOnly = {
  children: React.ReactNode;
};

export type GenericObject = {
  [key: string]: any;
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
