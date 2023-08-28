import { Statistics } from "./Statistics";

export interface OtherInformationCollection {
    image: string | File;
    title: string;
    content: string;
    collection: number | Collection;
    id?: number;
}

export interface Collection extends Statistics {
    image: string | File;
    title: string;
    content: string;
    citation: string;
    otherinformationcollection_set?: OtherInformationCollection[];
    id ?: number;
}
