import { StockSource } from '../enums/stock';
import { Turnover as YahooTurnover } from '../instances/yahoo/trunover';
export declare class StockFetcherFactory {
    static create(source: StockSource): YahooTurnover;
}
