import {Product} from "../../stock-management/models/Product";

export interface OrderLine
{
  product: Product | number;
  quantity: number;
  totalHt: number;
  tva: number;
  totalTTC: number;
  id ?: number;
}

export const orderLineObject = {
  product: {type: 'foreign_key', requuired: true},
  quantity: {type: 'int', requireed: true},
  totalHt: {type: 'float', requireed: true},
  totalTTC: {type: 'float', required: true}
}
