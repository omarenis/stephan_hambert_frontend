export interface Option {
  headers: object;
  params: object;
}
export type ObjectType<T> = {new (): T } | Function;
export interface Object {
  type: string;
  required: boolean;
  urlGetMapper ?: string;
  objectToMap ?: object | Function
}
