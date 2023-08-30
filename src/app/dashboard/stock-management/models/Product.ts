import {Promo} from "./Promo";
import {Object} from "../../../models/generic";
import {Collection} from "../../../models/Collection";

export interface Product {
  title: string;
  code: string;
  slug: string;
  description: string;
  price: number;
  current_quantity: number;
  tva: number;
  image: string | File;
  promo: Promo | number | string;
  collection: Collection | number | string;
  history?: number | History;
  olfaction?: number | Olfaction;
  number_purchases?: number;
  id?: number;
}


export interface ProductEssentialInformation {
  title: string;
  code: string;
  slug: string;
  description: string;
  price: number;
  current_quantity: number;
  tva: number;
  image: string | File;
  promo: Promo | number | string;
  collection: Collection | number | string;
  id?: number;
}

export interface Olfaction {
  product: number | Product | string;
  title: string;
  content: string;
  image: string | File;
}

export interface History {
  product: number | Product | string;
  title: string;
  content: string;
  image: string | File;
}

export const productObject: { [key: string]: Object } = {
  title: {type: 'string', required: true},
  code: {type: 'string', required: true},
  description: {type: 'string', required: true},
  price_20_ml: {type: 'float', required: true},
  price_50_ml: {type: 'float', required: true},
  price_100_ml: {type: 'float', required: true},
  current_quantity: {type: 'number', required: true},
  image: {type: 'file', required: true},
  collection: {type: 'foreign_key', required: true},
  promo: {type: 'foreign_key', required: false},
}


export const historyObject: { [key: string]: Object } = {
  title: {type: 'string', required: true},
  image: {type: 'file', required: true},
  content: {type: 'string', required: true},
  product: {type: 'number', required: true}
}


export const olfactionObject: { [key: string]: Object } = {
  title: {type: 'string', required: true},
  image: {type: 'file', required: true},
  content: {type: 'string', required: true},
  product: {type: 'number', required: true}
}


export const additional_files_object  = {
    image_or_video_1: {type: 'file', required: false},
    image_or_video_2: {type: 'file', required: false},
    image_or_video_3: {type: 'file', required: false},
    image_or_video_4: {type: 'file', required: false},
    product: {type: 'number', required: false}
}
