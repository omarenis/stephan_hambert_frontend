import {Statistics} from "../Statistics";

export interface Collection extends Statistics {
    image: string | File;
    label: string;
    description: string;
}

export const collectionObject = {
  image: {type: 'file', required: true},
  label: {type: 'string', required: true},
  description: {type: 'string', required: true}
}
