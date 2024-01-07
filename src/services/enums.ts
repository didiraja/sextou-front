// const IS_DEV = process.env.DEV;
const IS_DEV = false;

export const HOST = IS_DEV
  ? `http://localhost`
  : `https://sextou.quartemo.com.br`;

export const API_URL = IS_DEV ? `${HOST}/wp-json` : `${HOST}/wp-api`;

export const TEXT = {
  BUY_TICKETS: 'Comprar ingresso',
  NO_TICKETS: 'Sem link ainda',
  FREE_TICKETS: 'Pegar ingresso',
  FREE_NO_TICKETS: 'Só brotar',
};

// export const ERROR = {
//   LOADING: 'Infelizmente, nada na pista',
// };
