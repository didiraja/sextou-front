export const DOMAIN = {
  DEV: "sextou.local",
  PROD: "sextou.quartemo.com.br",
};

export const HOST: string = import.meta.env.DEV
  ? `http://${DOMAIN.DEV}`
  : `//${DOMAIN.PROD}`;

export const ENDPOINT = {
  MAIN: "/wp-api/sextou/v1",
  CATEGORY: "category/",
};

export const TEXT = {
  BUY_TICKETS: "Comprar Ingressos",
  NO_TICKETS_AVAILABLE: "Nenhum link disponível",
};
