import { StockSource } from '../enums/stock'
import { Turnover as YahooTurnover } from '../instances/yahoo/trunover'

export class StockFetcherFactory {
    // add type if you add new source.
    static create(source: StockSource): YahooTurnover {
        switch (source) {
            case StockSource.YAHOO_TURNOVER:
                return new YahooTurnover()

            default:
                throw new Error(`source: ${source} is invalid`)
        }
    }
}
