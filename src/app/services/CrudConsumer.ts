import {AbstractRestService} from "./genericservice";
import {Observable, Subscription} from "rxjs";
import {FormControl, FormGroup, FormRecord, Validators} from "@angular/forms";


interface Option {
  headers: object;
  params: object;
}

interface Object {
  type: string;
  required: boolean;
}

export class CrudConsumer<T> {
  public formGroupSearch !: FormGroup;
  protected data !: T[];
  protected numberElements !: number;
  protected options !: Option;
  protected getObjectsSubscriber !: (url: string, options?: object | undefined) => Observable<T[]>;
  protected subscription !: Subscription;
  protected actionUrl !: string;
  protected object !: { [key: string]: Object };
  protected hasFormIntegrated: boolean;
  protected formCreationEditGroup !: FormGroup;

  constructor(private service: AbstractRestService<T>, actionUrl: string, options: Option, object: {
    [key: string]: Object
  }, hasFormIntegrated: boolean) {
    this.actionUrl = actionUrl;
    this.options = options;
    this.object = object;
    this.hasFormIntegrated = hasFormIntegrated !== undefined ? hasFormIntegrated : false;
  }

  getData(params ?: object): void {
    if (params !== undefined) {
      this.options.params = params;
    }
    this.subscription = this.getObjectsSubscriber(this.actionUrl, this.options).subscribe((results: T[]) => {
      this.data = results;
      this.numberElements = results.length;
    });
  }

  ngOnInit() {
    this.formGroupSearch = this.createFilterFormGroup();
    if (this.hasFormIntegrated) {
      this.formCreationEditGroup = this.createFormCreationEditGroup();
    }

    Object.keys(this.object).forEach((key: string) => {
      if (this.formGroupSearch.contains(key)) {
        this.formGroupSearch.controls[key].valueChanges.subscribe((value) => {
          console.log(value);
        });
      }
    });
    this.getObjectsSubscriber = this.service.list;
    this.getData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  protected createFilterFormGroup(): FormRecord {
    const formGroup: FormGroup = new FormGroup({});
    Object.keys(this.object).forEach((key) => {
      formGroup.addControl(key, new FormControl());
    });
    return formGroup;
  }

  protected createFormCreationEditGroup(): FormGroup {
    const formGroup: FormGroup = new FormGroup<any>({});
    Object.keys(this.object).forEach(key => {
      formGroup.addControl(key, new FormControl(this.getDefaultValue(this.object[key].type), this.object[key].required ? [Validators.required] : []))
    });
    return formGroup;
  }

  private getDefaultValue(type: string): false | 0 | '' {
    if (type === 'number') {
      return 0;
    } else if (type === 'boolean') {
      return false;
    }
    return "";
  }
}
