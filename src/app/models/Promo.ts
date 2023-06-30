import {Statistics} from "./Statistics";

export interface Promo extends Statistics
{
    label: string;
    datetime_start: Date | string;
    datetime_end: Date | string;
    percentage: number;
}

export const promoObject = {
  label: {type: 'string', required: true},
  datetime_start: {type: 'date', required: true},
  datetime_end: {type: 'date', required: true},
  percentage: {type: 'float', required: true}
}
