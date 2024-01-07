// const IS_DEV = process.env.DEV;
const IS_DEV = false;

export const HOST = IS_DEV
  ? `http://localhost/wp-json`
  : `https://sextou.quartemo.com.br/wp-api`;

export const PATH = {
  MAIN: 'MAIN',
  CATEGORY: 'CATEGORY',
  SINGLE: 'SINGLE',
};

export const PER_PAGE = 12;

export const TEXT = {
  BUY_TICKETS: 'Comprar ingresso',
  NO_TICKETS: 'Sem link ainda',
  FREE_TICKETS: 'Pegar ingresso',
  FREE_NO_TICKETS: 'Só brotar',
};

// export const ERROR = {
//   LOADING: 'Infelizmente, nada na pista',
// };
