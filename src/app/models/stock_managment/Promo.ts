import {Statistics} from "../Statistics";

export interface Promo extends Statistics
{
    label: string;
    datetime_start: Date | string;
    datetime_end: Date | string;
    percentage: number;
}
