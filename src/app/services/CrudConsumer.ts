import {AbstractRestService} from "./genericservice";
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Component, Inject, OnInit} from "@angular/core";
import {Option, Object} from "../models/generic";



@Component({
  template: ""
})
export abstract class CrudConsumer<T> implements OnInit{
  public formGroupSearch !: FormGroup;
  protected data !: T[];
  protected numberElements !: number;
  protected options !: Option;
  protected getObjectsSubscriber !: () => Subscription;
  protected actionUrl !: string;
  protected object !: { [key: string]: Object };
  protected hasFormIntegrated: boolean;
  protected formCreationEditGroup !: FormGroup;
  constructor(protected service: AbstractRestService<T>,@Inject('') actionUrl: string,@Inject({}) options: Option,
              @Inject({}) object: {
    [key: string]: Object
  }, @Inject(undefined) hasFormIntegrated ?: boolean) {
    this.actionUrl = actionUrl;
    this.options = options;
    this.object = object;
    this.hasFormIntegrated = hasFormIntegrated !== undefined ? hasFormIntegrated : false;
  }

  getData(params ?: object): void {
    if (params !== undefined) {
      this.options.params = params;
    }
  }

  ngOnInit() {
    this.formGroupSearch = this.createFilterFormGroup();
    if (this.hasFormIntegrated) {
      this.formCreationEditGroup = this.createFormCreationEditGroup();
    }
    Object.keys(this.object).forEach((key: string) => {
      if (this.formGroupSearch.contains(key)) {
        this.formGroupSearch.controls[key].valueChanges.subscribe((value) => {
          this.getData({
            [key]: value
          });
        });
      }
    });
    this.getData();
  }

  protected createFilterFormGroup(): FormGroup {
    let formControls: {[key: string]: FormControl} = {};
    Object.keys(this.object).forEach((key) => {
      formControls[key] = new FormControl(this.getDefaultValue(this.object[key].type));
    });
    console.log(formControls);
    return new FormGroup(formControls);
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
