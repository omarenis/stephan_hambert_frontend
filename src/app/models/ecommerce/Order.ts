import {User} from "../crm/User";

export interface Order {
  customer: number | User;
  paid_at: Date | string;
  tva: number;
  total: number;
  shipping_method: string;
  created_at: Date | string;
  id?: number;
}

export const orderObject = {
  customer: {type: 'foreign_key', required: true},
  paid_at: {type: 'date', required: true},
  tva: {type: 'number', required: true},
  shipping_method: {type: 'string', required: true},
  created_at: {type: 'date', required: true}
}
