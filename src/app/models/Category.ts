import {Statistics} from "./Statistics";

export interface Category extends Statistics
{
    image: string | File;
    label: string;
    description: string;
}
