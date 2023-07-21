export interface Order
{
  customer: number | CustomerProfile
}

export const order = {
  customer: { type: 'foreign_key', required: true },
  paid_at: {type: "datetime", required: false},
  tva: {type: 'float', required: true},
  shipping_method:  {type: 'string', required: true},
  created_at: {type: "datetime", required: false}
}
