import {Statistics} from "./Statistics";

export interface Category extends Statistics
{
    title: string;
}

export const categoryObject = {
  title: {type: 'string', required: true}
}
