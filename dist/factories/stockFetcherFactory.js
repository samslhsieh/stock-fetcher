"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockFetcherFactory = void 0;
var stock_1 = require("../enums/stock");
var trunover_1 = require("../instances/yahoo/trunover");
var StockFetcherFactory = /** @class */ (function () {
    function StockFetcherFactory() {
    }
    // add type if you add new source.
    StockFetcherFactory.create = function (source) {
        switch (source) {
            case stock_1.StockSource.YAHOO_TURNOVER:
                return new trunover_1.Turnover();
            default:
                throw new Error("source: " + source + " is invalid");
        }
    };
    return StockFetcherFactory;
}());
exports.StockFetcherFactory = StockFetcherFactory;
