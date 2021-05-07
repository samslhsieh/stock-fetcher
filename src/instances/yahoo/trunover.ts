import axios from 'axios'
import * as R from 'ramda'
import { StockTurnOver } from '../../contracts/stock'

export class Turnover {
    private originalData?: any
    constructor() {}

    async fetchData(): Promise<string> {
        this.originalData = (
            await axios.get('https://tw.stock.yahoo.com/rank/turnover')
        ).data

        return this.originalData
    }

    async fetch(): Promise<{ rankAt: string; stocks: StockTurnOver[] }> {
        const tag = 'src/instances/sources/yahoo/turnover@getData'

        try {
            if (!this.originalData) {
                await this.fetchData()
            }

            const pattern = /root\.App\.main\s?=\s?(?<jsonData>.+);/

            const matches = this.originalData.match(pattern) as any

            // notice: code injection
            const json = eval('(' + matches['groups'].jsonData + ')')

            const stocks =
                json.context.dispatcher.stores.TableStore['main-0-StockRanking']
                    .list

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

            return {
                rankAt:
                    json.context.dispatcher.stores.TableStore[
                        'main-0-StockRanking'
                    ].listMeta.rankTime,
                stocks: stocks.map((stock: any[]) =>
                    R.pick(
                        [
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
                        ],
                        stock
                    )
                ),
            }
        } catch (error) {
            console.log({ tag, error })
            throw error
        }
    }
}
