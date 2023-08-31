import {History, Olfaction} from "../../dashboard/stock-management/models/Product";

export interface Product {
  price_20_ml: number;
  price_50_ml: number;
  price_100_ml: number;
  title: string;
  description: string;
  slug: string;
  collection: string;
  image: string;
  history?: History;
  olfaction?: Olfaction;
  id?: number;
}
