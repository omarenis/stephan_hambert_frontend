import { CustomerProfile } from "../../crm/models/User"

export interface Order
{
  customer: number | CustomerProfile;
  total: number;
  totalHT: number;
  tva: number;
  shipping_method: string;
  created_at: Date;
}

export const order = {
  customer: { type: 'foreign_key', required: true },
  paid_at: {type: "datetime", required: false},
  tva: {type: 'float', required: true},
  shipping_method:  {type: 'string', required: true},
  created_at: {type: "datetime", required: false}
}
