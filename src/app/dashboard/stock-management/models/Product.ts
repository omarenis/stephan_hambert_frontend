import {Category} from "./Category";
import {Promo} from "./Promo";
import {Object} from "../../../models/generic";

export interface Product {
  title: string;
  code: string;
  slug: string;
  description: string;
  price: number;
  current_quantity: number;
  tva: number;
  image: string | File;
  ingredients: string;
  category: Category | number;
  promo: Promo | number;
  number_purchases?: number;
  id?: number;
}


export const productObject: {[key: string]: Object<Product>} = {
  title: { type: 'string', required: true },
  code: { type: 'string', required: true },
  description: {type: 'string', required: true},
  price: {type: 'float', required: true},
  current_quantity: {type: 'number', required: true},
  tva: { type: 'float', required: true },
  image: {type: 'file', required: true},
  ingredients: {type: 'string', required: true},
  category: {type: 'foreign_key', required: true}
}
