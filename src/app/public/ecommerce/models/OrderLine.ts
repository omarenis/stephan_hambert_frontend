import {Order} from "./Order";
import {Product} from "../../../dashboard/stock-management/models/Product";

export interface OrderLine
{

    order: number | Order;
    product: number | Product;
    quantity: number;
    date_order: Date | string;
    totalHt: number;
}
