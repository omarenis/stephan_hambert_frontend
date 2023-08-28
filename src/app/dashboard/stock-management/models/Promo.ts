import {Statistics} from "../../../models/Statistics";

export interface Promo extends Statistics
{
    title: string;
    code: string;
    datetime_start: Date | string;
    datetime_end: Date | string;
    percentage: number;
}

export const promoObject = {
  title: {type: 'string', required: true},
  code: {type: 'string', required: true},
  datetime_start: {type: 'date', required: true},
  datetime_end: {type: 'date', required: true},
  percentage: {type: 'float', required: true}
}
