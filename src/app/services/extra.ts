export const readFileFromInput = (element: HTMLInputElement, callback: Function) => {
  const reader = new FileReader();
  reader.addEventListener('load', (event: ProgressEvent<FileReader>) => {
    callback(reader.result, element.files);
  });
  if (element.files !== null) {
    reader.readAsDataURL(element.files[0]);
  }
}
