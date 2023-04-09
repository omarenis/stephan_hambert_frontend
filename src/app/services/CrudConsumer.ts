import {AbstractRestService} from "./genericservice";
import {Observable, Subscription} from "rxjs";
import {AbstractControl, FormControl, FormRecord} from "@angular/forms";


interface Option {
  headers: object;
  params: object;
}

class TableCrudConsumer<T> {
  public formGroupSearch !: FormRecord;
  protected data !: T[];
  protected numberElements !: number;
  protected options !: Option;
  protected getObjectsSubscriber !: (url: string, options?: object | undefined) => Observable<T[]>;
  protected subscription !: Subscription;
  protected actionUrl !: string;
  protected filterObject !: { [key: string]: [type: string] };

  constructor(private service: AbstractRestService<T>, actionUrl: string, options: Option, filterObject: { [key: string]: [type: string]}) {
    this.actionUrl = actionUrl;
    this.options = options;
    this.filterObject = filterObject;
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
    let formControl: FormControl;

    Object.keys(this.filterObject).forEach((key: string) => {
      if(!this.formGroupSearch.contains(key))
      {
        this.formGroupSearch.registerControl(key, new FormControl(''))
      }
      this.formGroupSearch.controls[key].valueChanges.subscribe((value) => {
        console.log(value);
      })
    })
    this.getObjectsSubscriber = this.service.list;
    this.getData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  protected createFormRecord(): FormRecord {
    const formRecord = new FormRecord<AbstractControl<any, any>>({});
    Object.keys(this.filterObject).forEach((key) => {
      formRecord.registerControl(key, new FormControl());
    });
    console.log(formRecord);
    return formRecord;
  }
}
