import {History, Olfaction} from "../../dashboard/stock-management/models/Product";

export interface Product {
    title: string;
    description: string;
    slug: string;
    collection: string;
    image: string;
    price: number;
    history ?: History;
    olfaction ?: Olfaction;
    id?: number;
}
