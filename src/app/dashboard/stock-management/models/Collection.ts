import {Statistics} from "../../../models/Statistics";

export interface OtherInformationCollection {
    image: string | File;
    title: string;
    content: string;
    collection: number | Collection;
    id?: number;
}

export interface Collection extends Statistics {
    image: string | File;
    label: string;
    description: string;
    citation: string;
    otherinformationcollection_set?: OtherInformationCollection[];
    id ?: number;
}

export const collectionObject = {
    image: {type: 'file', required: true},
    title: {type: 'string', required: true},
    content: {type: 'string', required: true}
}


export const otherInformationCollectionObject = {
    image: {type: 'file', required: true},
    title: {type: 'string', required: true},
    content: {type: 'string', required: true},
    collection: {type: 'foreign_key', required: true}
}
