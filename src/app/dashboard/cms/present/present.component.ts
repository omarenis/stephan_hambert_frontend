import { Component } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {readFileFromInput} from "../../../services/extra";
import {FormView} from "../../../services/FormView";
import {AbstractRestService} from "../../../services/genericservice";
import {CmsInformation, presentObject} from "../../../models/CmsInformation";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent extends FormView<CmsInformation>{
  imagePath !: string;
  protected readonly environment = environment;
  constructor(protected override service: AbstractRestService<CmsInformation>, protected override router: Router, protected override activatedRoute: ActivatedRoute) {
    super(service, router, activatedRoute, presentObject, `${environment.url}/cms/presents`, 'multipart/form-data');
  }
  uploadImage(result: string, files: Blob[]) {
      this.imagePath = result;
      this.formGroup.controls['image'].setValue(files[0]);
  }

  readImage(event: any) {
    readFileFromInput(<HTMLInputElement>event.target, (result: string, files: Blob[]) => {
      this.uploadImage(result, files);
    });
  }
}
