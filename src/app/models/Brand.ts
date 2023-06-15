import {Statistics} from "./Statistics";

export interface Brand extends Statistics
{
    label: string;
}

export const brandObject = {
  label: {type: 'string', required: true}
}
