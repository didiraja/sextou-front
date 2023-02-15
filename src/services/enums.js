"use strict";
exports.__esModule = true;
exports.ERROR = exports.TEXT = exports.ENDPOINT = exports.HOST = exports.DOMAIN = void 0;
exports.DOMAIN = {
    DEV: "sextou.local",
    // DEV: "sextou.quartemo.com.br",
    PROD: "sextou.quartemo.com.br"
};
exports.HOST = import.meta.env.DEV
    ? "https://".concat(exports.DOMAIN.DEV)
    : "//".concat(exports.DOMAIN.PROD);
exports.ENDPOINT = {
    MAIN: "/wp-api/sextou/v1",
    CATEGORY: "category/",
    SINGLE: "event/"
};
exports.TEXT = {
    BUY_TICKETS: "Comprar Ingresso",
    NO_TICKETS: "Nenhum link disponível",
    FREE_TICKETS: "Pegar Ingresso",
    FREE_NO_TICKETS: "Só brotar"
};
exports.ERROR = {
    LOADING: "Infelizmente, nada na pista"
};
