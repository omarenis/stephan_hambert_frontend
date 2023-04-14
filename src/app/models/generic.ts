import {AbstractRestService} from "../services/genericservice";

export interface Option {
  headers: object;
  params: object;
}

export interface Object {
  classType ?: object;
  service:  (type: object)=> AbstractRestService<typeof type>;
  type: string;
  required: boolean;
}
