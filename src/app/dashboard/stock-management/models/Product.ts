import {Category} from "./Category";
import {Promo} from "./Promo";
import {Object} from "../../../models/generic";
import {Collection} from "./Collection";

export interface Product {
  title: string;
  code: string;
  slug: string;
  content: string;
  price: number;
  current_quantity: number;
  tva: number;
  image: string | File;
  promo: Promo | number | string;
  collection: Collection | number | string;
  category_set ?: Category[];
  number_purchases?: number;
  id?: number;
}


export interface ProductEssentialInformation
{
  title: string;
  code: string;
  slug: string;
  content: string;
  price: number;
  current_quantity: number;
  tva: number;
  image: string | File;
  promo: Promo | number | string;
  collection: Collection | number | string;
  id ?: number;
}

export interface Olfaction
{
  product: number | Product | string;
  title: string;
  content: string;
  image: string | File;
}

export interface History
{

}

export const productObject: {[key: string]: Object} = {
  title: { type: 'string', required: true },
  code: { type: 'string', required: true },
  content: {type: 'string', required: true},
  price: {type: 'float', required: true},
  current_quantity: {type: 'number', required: true},
  tva: { type: 'float', required: true },
  image: {type: 'file', required: true},
  category_set: {type: 'many_to_many', required: true},
  collection: {type: 'foreign_key', required: true},
  promo: {type: 'foreign_key', required: true}
}
