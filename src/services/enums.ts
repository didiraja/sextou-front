export const HOST: string = import.meta.env.DEV
  ? "http://sextou.local"
  : "http://sextou.prod";

export const ENDPOINT = {
  MAIN: "/wp-api/sextou/v1",
  CATEGORY: "category/",
};
