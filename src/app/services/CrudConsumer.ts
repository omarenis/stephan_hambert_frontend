import {AbstractRestService} from "./genericservice";
import {Subscription} from "rxjs";
import {Component, Inject, OnInit} from "@angular/core";
import {Option, Object} from "../models/generic";
import {createFilterFormGroup, createFormCreationEditGroup} from "../models/forms";
import {FormGroup} from "@angular/forms";



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
  protected constructor(protected service: AbstractRestService<T>, @Inject('') actionUrl: string, @Inject({}) options: Option,
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
    this.formGroupSearch = createFilterFormGroup(this.object);
    if (this.hasFormIntegrated) {
      this.formCreationEditGroup = createFormCreationEditGroup(this.object);
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
}
