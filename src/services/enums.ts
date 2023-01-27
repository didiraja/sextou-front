export const DOMAIN = {
  DEV: "sextou.local",
  PROD: "sextou.quartemo.com.br",
};

export const HOST: string = import.meta.env.DEV
  ? `http://${DOMAIN.DEV}`
  : `http://${DOMAIN.PROD}`;

export const ENDPOINT = {
  MAIN: "/wp-api/sextou/v1",
  CATEGORY: "category/",
};
