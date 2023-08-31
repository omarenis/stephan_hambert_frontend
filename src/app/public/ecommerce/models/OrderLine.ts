import {Order} from "./Order";
import {Product} from "../../models/Product";


export interface OrderLine
{
    product: Product;
    quantity: number;
    date_order ?: Date | string;
    totalHt: number;
    price: number;
    order ?: number | Order;
}
