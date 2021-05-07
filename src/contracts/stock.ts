export interface StockTurnOver {
    rank: string            // 排名
    symbol: string          // symbol 股票代號 2330.TW
    name: string            // 名稱
    price: string           // price 成交價
    change: string          // change 漲跌
    changePercent: string   // 漲跌幅(%)
    dayHigh: string         // 當日最高
    dayLow: string          // 當日最低
    dayHighLowDiff: string  // 價差
    volume: string          // 成交量??股?? 509408000
    volK: number            // 509408 成交量(張)
    turnoverK: string       //成交值(億) 310.4648 3104682
    previousClose: string   // 昨天收盤
}
