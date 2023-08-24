import {Component, ElementRef, ViewChild} from '@angular/core';
import {AbstractRestService} from "../../../../services/genericservice";
import {Collection, collectionObject, OtherInformationCollection} from "../../models/Collection";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";
import {FormView} from "../../../../services/FormView";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {serializeDataByType} from "../../../../models/forms";
import {readFileFromInput} from "../../../../services/extra";


interface OtherInformationFormGroup {
  title: FormControl,
  content: FormControl,
  image: FormControl
  collection: FormControl,
  id?: FormControl
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent extends FormView<Collection> {
  imagePath !: string;
  @ViewChild('fileInput') fileInput !: ElementRef;
  otherInformation !: FormGroup<OtherInformationFormGroup>[];
  steps !: string[];
  currentStep !: number;
  private readonly path = `${environment.url}/stock-management/collections`;
  private readonly pathOtherInformationCollection = `${environment.url}/stock-management/other_information_for_collection`;
  private collectionId !: number;
  otherInformationImages !: string[];
  private error !: string;

  constructor(protected override service: AbstractRestService<Collection>,
              protected override router: Router, protected override activatedRoute: ActivatedRoute, private otherInformationService: AbstractRestService<OtherInformationCollection>) {
    super(service, router, activatedRoute, collectionObject, `${environment.url}/collections`, 'multipart/form-data');
    this.steps = ['collection', 'essential information', 'quote'];
    this.currentStep = 0;
    this.otherInformation = [];
    this.otherInformationImages = [];
  }

  uploadImage(result: string, files: Blob[], i: number) {
    console.log(i);
    if (i === -1) {
      this.imagePath = result;
      this.formGroup.controls['image'].setValue(files[0]);
    } else {
      this.otherInformationImages[i] = result;
      this.otherInformation[i].controls.image.setValue(files[0]);
    }
  }

  readImage(event: any, i: number) {
    readFileFromInput(<HTMLInputElement>event.target, (result: string, files: Blob[]) => {
      this.uploadImage(result, files, i);
    });
  }

  getAllOtherInformationForCollection() {
    this.currentStep = 1;
    if (this.otherInformation.length > 0) {
      return;
    }
    this.otherInformationService.list(this.pathOtherInformationCollection, {
      'collection': this.itemId
    }).subscribe({
      next: (otherInformationForCollection_set: OtherInformationCollection[]) => {
        otherInformationForCollection_set.forEach(otherInformationForCollection => {
          this.otherInformation.push(new FormGroup<OtherInformationFormGroup>(
            {
              title: new FormControl(otherInformationForCollection.title, [Validators.required]),
              content: new FormControl<any>(otherInformationForCollection.content, [Validators.required]),
              image: new FormControl('', [Validators.required]),
              collection: new FormControl(otherInformationForCollection.collection),
              id: new FormControl(otherInformationForCollection.id, [Validators.required])
            }
          ));
        });
      }
    });
  }

  addOtherInformationSectionToCollection() {
    this.otherInformation.push(new FormGroup<OtherInformationFormGroup>({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      collection: new FormControl(this.itemId, [Validators.required])
    }));
    this.otherInformationImages.push('');
  }

  addOtherInformationToCollection($event: Event, i: number, id: number): void {
    const data = serializeDataByType({
      title: this.otherInformation[i].controls.title.value,
      collection: this.collectionId,
      content: "",
      id: 0,
      image: this.otherInformation[i].controls.image.value,
    }, 'multipart/form-data');
    const subscriber = this.otherInformation[i].controls.collection !== undefined ? this.otherInformationService.put(this.pathOtherInformationCollection, Number(this.otherInformation[i].controls.collection?.value), data) : this.otherInformationService.create(this.pathOtherInformationCollection, data);
    subscriber.subscribe({
      next: async () => {
        await this.router.navigate(['/stock-management/collections'])
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  removeOtherInformation(i: number) {
    if (typeof this.otherInformation[i].controls.collection !== "undefined") {
      this.otherInformationService.delete(this.pathOtherInformationCollection, Number(this.otherInformation[i].controls?.collection?.value)).then(() => {
        this.otherInformation.splice(i, 1);
      })
    } else {
      this.otherInformation.splice(i, 1);
    }
  }

  override submit(event: Event) {
    event.preventDefault();
    if(this.itemId !== null)
    {
      console.log(this.itemId);
      return;
    }
    throw this.service.create(`${environment.url}/collections`, serializeDataByType(this.formGroup.value, 'multipart/form-data')).subscribe({
      next: (collection: Collection) => {
        if (collection.id !== undefined) {
          this.itemId = collection.id;
          console.log(collection.id);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getQuoteForCollection() {

  }

  protected readonly environment = environment;
}
