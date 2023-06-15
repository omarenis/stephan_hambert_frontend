import {Statistics} from "./Statistics";

export interface Category extends Statistics
{
    label: string;
}

export const categoryObject = {
  label: {type: 'string', required: true}
}
