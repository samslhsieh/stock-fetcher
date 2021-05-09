"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turnover = void 0;
var axios_1 = __importDefault(require("axios"));
var R = __importStar(require("ramda"));
var Turnover = /** @class */ (function () {
    function Turnover() {
    }
    Turnover.prototype.fetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, axios_1.default.get('https://tw.stock.yahoo.com/rank/turnover')];
                    case 1:
                        _a.originalData = (_b.sent()).data;
                        return [2 /*return*/, this.originalData];
                }
            });
        });
    };
    Turnover.prototype.fetch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tag, pattern, matches, json, stocks, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tag = 'src/instances/sources/yahoo/turnover@getData';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        if (!!this.originalData) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.fetchData()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        pattern = /root\.App\.main\s?=\s?(?<jsonData>.+);/;
                        matches = this.originalData.match(pattern);
                        json = eval('(' + matches['groups'].jsonData + ')');
                        stocks = json.context.dispatcher.stores.TableStore['main-0-StockRanking']
                            .list;
                        // name 名稱
                        // symbol 股票代號 2330.TW
                        // price 成交價
                        // change 漲跌
                        // changePercent 漲跌幅(%)
                        // dayHigh 當日最高
                        // dayLow 當日最高
                        // dayHighLowDiff 價差
                        // volume 成交量??股?? 509408000
                        // volK 509408 成交量(張)
                        // turnoverK 成交值(億) 310.4648 3104682
                        // previousClose 昨天收盤
                        // for (let stock of stocks) {
                        //     console.log(stock.name)
                        // }
                        // console.log(stocks[0])
                        return [2 /*return*/, {
                                rankAt: json.context.dispatcher.stores.TableStore['main-0-StockRanking'].listMeta.rankTime,
                                stocks: stocks.map(function (stock) {
                                    return R.pick([
                                        'rank',
                                        'name',
                                        'symbol',
                                        'price',
                                        'change',
                                        'changePercent',
                                        'dayHigh',
                                        'dayLow',
                                        'dayHighLowDiff',
                                        'volume',
                                        'volK',
                                        'turnoverK',
                                        'previousClose',
                                    ], stock);
                                }),
                            }];
                    case 4:
                        error_1 = _a.sent();
                        console.log({ tag: tag, error: error_1 });
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return Turnover;
}());
exports.Turnover = Turnover;
