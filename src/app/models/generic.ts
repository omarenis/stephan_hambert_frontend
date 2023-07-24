export interface Option {
  headers: object;
  params: object;
}
export type ObjectType<T> = {new (): T } | Function;
export interface Object<T> {
  type: string;
  required: boolean;
  urlGetMapper ?: string;
}
