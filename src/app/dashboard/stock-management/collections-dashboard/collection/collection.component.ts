import {Component} from '@angular/core';
import {AbstractRestService} from "../../../../services/genericservice";
import {Collection, collectionObject, OtherInformationCollection} from "../../models/Collection";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";
import {FormView} from "../../../../services/FormView";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import transformJavaScript from "@angular-devkit/build-angular/src/tools/esbuild/javascript-transformer-worker";


interface OtherInformationFormGroup {
  title: FormControl,
  description: FormControl,
  image: FormControl
  collection?: FormControl
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent extends FormView<Collection> {
  imagePath: any;
  otherInformations !: FormGroup<OtherInformationFormGroup>[];

  constructor(protected override service: AbstractRestService<Collection>,
              protected override router: Router, protected override activatedRoute: ActivatedRoute, private otherInformationService: AbstractRestService<OtherInformationCollection>) {
    super(service, router, activatedRoute, collectionObject, `${environment.url}/collections`, 'multipart/form-data');
    this.steps = ['collection', 'essential information', 'quote'];
    this.currentStep = 0;
    this.otherInformations = [];
  }

  readImage($event: Event) {
    $event.preventDefault();

  }



  protected readonly window = window;
  steps !: string[];
  currentStep !: number;


  addOtherInformationToCollection() {
    this.otherInformations.push(new FormGroup<OtherInformationFormGroup>({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    }));
  }

  removeOtherInformation(i: number) {
    if (typeof this.otherInformations[i].controls.collection !== "undefined") {
      this.otherInformationService.delete(`${environment.url}/stock-management/other_information_for_collection`, Number(this.otherInformations[i].controls?.collection?.value)).then(() => {
        this.otherInformations.splice(i, 1);
      })
    } else {
      this.otherInformations.splice(i, 1);
    }
  }
}
