import { StockTurnOver } from '../../contracts/stock';
export declare class Turnover {
    private originalData?;
    constructor();
    fetchData(): Promise<string>;
    fetch(): Promise<{
        rankAt: string;
        stocks: StockTurnOver[];
    }>;
}
