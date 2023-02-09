export const DOMAIN = {
  // DEV: "sextou.local",
  DEV: "sextou.quartemo.com.br",
  PROD: "sextou.quartemo.com.br",
};

export const HOST: string = import.meta.env.DEV
  ? `https://${DOMAIN.DEV}`
  : `//${DOMAIN.PROD}`;

export const ENDPOINT = {
  MAIN: "/wp-api/sextou/v1",
  CATEGORY: "category/",
};

export const TEXT = {
  BUY_TICKETS: "Comprar Ingresso",
  NO_TICKETS: "Nenhum link disponível",
  FREE_TICKETS: "Pegar Ingresso",
  FREE_NO_TICKETS: "Só brotar",
};
