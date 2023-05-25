export const DOMAIN = {
  DEV: 'sextou.quartemo.com.br',
  // DEV: 'sextou.local',
  PROD: 'sextou.quartemo.com.br',
};

export const HOST = import.meta.env.DEV
  ? `https://${DOMAIN.DEV}`
  : `//${DOMAIN.PROD}`;

export const ENDPOINT = {
  MAIN: '/wp-api/sextou/v1',
  CATEGORY: 'category/',
  SINGLE: 'event/',
};

export const PATH = {
  MAIN: 'MAIN',
  CATEGORY: 'CATEGORY',
  SINGLE: 'SINGLE',
};

export const PER_PAGE = 12;

export const TEXT = {
  BUY_TICKETS: 'Comprar Ingresso',
  NO_TICKETS: 'Sem link ainda',
  FREE_TICKETS: 'Pegar Ingresso',
  FREE_NO_TICKETS: 'Só brotar',
};

export const ERROR = {
  LOADING: 'Infelizmente, nada na pista',
};
