import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Object as GenericObject} from "./generic";


export function getDefaultValue(type: string): false | '' | 0 {
  if (type === 'number') {
    return 0;
  } else if (type === 'boolean') {
    return false;
  }
  return "";
}

export function createFormCreationEditGroup(object: { [key: string]: GenericObject<any> }): FormGroup {
  const formGroup: FormGroup = new FormGroup({});
  Object.keys(object).forEach(key => {
    formGroup.addControl(key, new FormControl(getDefaultValue(object[key].type), object[key].required ? [Validators.required] : []))
  });
  return formGroup;
}

export function createFilterFormGroup(object: { [key: string]: GenericObject<any>}): FormGroup {
  let formControls: { [key: string]: FormControl } = {};
  Object.keys(object).forEach((key) => {
    formControls[key] = new FormControl(getDefaultValue(object[key].type));
  });
  return new FormGroup(formControls);
}

export function setFormGroupValues(instance: { [key: string]: string | number | boolean }, formGroup: FormGroup) {
  Object.keys(instance).forEach((key) => {
    if (formGroup.contains(key)) {
      formGroup.get(key)?.setValue(instance[key])
    }
  })
}
