import {Product} from "../../stock-management/models/Product";
import {User} from "./User";

export interface Comment
{
dateComment: Date;
    product: number;
    rating: number;
    client: User;
    id: number;
    content: string
}
