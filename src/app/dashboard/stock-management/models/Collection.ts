import {Statistics} from "../../../models/Statistics";



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
