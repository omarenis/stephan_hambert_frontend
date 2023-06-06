import {Statistics} from "./Statistics";

export interface Collection extends Statistics {
    image: string | File;
    label: string;
    description: string;
}
