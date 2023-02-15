"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var enums_1 = require("./enums");
var Request = /** @class */ (function () {
    function Request() {
        this.url = "".concat(enums_1.HOST).concat(enums_1.ENDPOINT.MAIN);
        /**
         * @DEPRECATED after custom WP API
         */
        // // http://sextou.local/wp-api/wp/v2/categories/1
        // async getCatName(id: number) {
        //   return axios.get(`${this.url}/categories/${id}`);
        // }
        // // http://sextou.local/wp-api/wp/v2/media/33
        // async getMedia(id: number) {
        //   try {
        //     return axios.get(`${this.url}/media/${id}`);
        //   } catch (e: AxiosError<any>) {
        //     console.log(`[getMedia Error] ${e.code} - ${e.message}`);
        //     return [];
        //   }
        // }
    }
    // constructor() {
    //   // this.url = ;
    // }
    Request.prototype.getEvents = function (basename, query) {
        if (basename === void 0) { basename = "events"; }
        if (query === void 0) { query = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var queryString;
            return __generator(this, function (_a) {
                queryString = new URLSearchParams(query).toString();
                try {
                    return [2 /*return*/, axios_1["default"].get("".concat(this.url, "/").concat(basename, "/?").concat(queryString))];
                }
                catch (e) {
                    console.log("[getEvents Error] ".concat(e.code, " - ").concat(e.message));
                    return [2 /*return*/, []];
                }
                return [2 /*return*/];
            });
        });
    };
    Request.prototype.highlightEvents = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    Request.prototype.regularEvents = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return Request;
}());
exports["default"] = new Request();
