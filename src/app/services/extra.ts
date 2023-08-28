import {FormGroup} from "@angular/forms";

export const readFileFromInput = (element: HTMLInputElement, callback: Function): void => {
  const reader = new FileReader();
  reader.addEventListener('load', (event: ProgressEvent<FileReader>): void => {
    callback(reader.result, element.files);
  });
  if (element.files !== null) {
    console.log(element.files);
    reader.readAsDataURL(element.files[0]);
  }
}

export  const setFormGroupValue = <T extends {[key: string]: any }>(formGroup: FormGroup, fieldMap: {[key: string]: {type: string, required: boolean}}, data: T): void => {
  Object.keys(fieldMap).forEach((key) => {
    if(fieldMap[key].type === 'image' || fieldMap[key].type === 'file')
    {
      formGroup.controls[key].setValidators([]);
    } else {
      formGroup.controls[key].setValue(data[key]);
    }
  })
}
