import {Statistics} from "./Statistics";

export class Collection extends Statistics {


  constructor(
    public image: string | File,
    public label: string,
    public description: string,
    public override number_products: number,
    public override number_purchases: number,
    public override total_gain: number,
    public override id ?: number,
  ) {
    super(number_products, number_purchases, total_gain, id)
  }
}
