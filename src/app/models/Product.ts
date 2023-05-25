import {Category} from "./Category";
import {Promo} from "./Promo";

export interface Product {
  title: string;
  code: string;
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
