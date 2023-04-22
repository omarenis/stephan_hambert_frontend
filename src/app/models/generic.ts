export interface Option {
  headers: object;
  params: object;
}

export interface Object {
  type: string;
  required: boolean;
  ClassType ?: Function;
  urlGetMapper ?: string;
}
export type ObjectType<T> = {new (): T } | Function;
