import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Object as GenericObject} from "./generic";

export interface Operation {
  operation: string;
  data: {[key: string]: object | number | string}
}
export function getDefaultValue(type: string): false | '' | 0 {
  if (type === 'number') {
    return 0;
  } else if (type === 'boolean') {
    return false;
  }
  return "";
}

export function createFormCreationEditGroup(object: { [key: string]: GenericObject }): FormGroup {
  const formGroup: FormGroup = new FormGroup({});
  Object.keys(object).forEach(key => {
    formGroup.addControl(key, new FormControl(getDefaultValue(object[key].type), object[key].required ? [Validators.required] : []))
  });
  return formGroup;
}

export function createFilterFormGroup(object: { [key: string]: GenericObject }): FormGroup {
  let formControls: { [key: string]: FormControl } = {};
  Object.keys(object).forEach((key) => {
    formControls[key] = new FormControl(getDefaultValue(object[key].type));
  });
  return new FormGroup(formControls);
}

export function  setFormGroupValues(instance: { [key: string]: string | number | boolean }, formGroup: FormGroup) {
  Object.keys(instance).forEach((key) => {
    if (formGroup.contains(key)) {
      formGroup.get(key)?.setValue(instance[key])
    }
  })
}


export function serializeDataByType<T>(_object: T, typeForm: string): T | FormData
{
  let result: FormData | T = _object;
  if(typeForm !== 'application/json')
  {
    result = new FormData();
    const data = (_object as {[key: string]: Blob  | string });
    Object.keys(data).forEach(key => {
      (<FormData> result).append(key,  data[key]);
    });
  }
  return result;
}
