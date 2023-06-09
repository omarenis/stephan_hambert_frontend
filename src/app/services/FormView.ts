import {Component, Inject, inject, OnDestroy, OnInit} from "@angular/core";
import {AbstractRestService} from "./genericservice";
import {ActivatedRoute, Router} from "@angular/router";
import {Object as GenericObject, ObjectType} from '../models/generic';
import {FormGroup} from "@angular/forms";
import {createFormCreationEditGroup, setFormGroupValues} from "../models/forms";

@Component({
  template: ""
})
export abstract class FormView<T> implements OnInit {
  public formGroup !: FormGroup;
  protected actionUrl: string;
  protected object: { [key: string]: GenericObject<T> };
  protected foreignKeyInstanceList  !: { [key: string]: object[] };
  protected foreignKeyServices !: { [key: string]: AbstractRestService<object> };

  protected constructor(protected service: AbstractRestService<T>, protected router: Router,
                        protected activatedRoute: ActivatedRoute,
                        @Inject({}) object: { [key: string]: GenericObject<T> },
                        @Inject('') actionUrl: string) {
    this.actionUrl = actionUrl;
    this.object = object;
  }

  ngOnInit(): void {
    this.foreignKeyInstanceList = {};
    Object.keys(this.object).forEach(key => {
      if (this.object[key].type === 'foreign_key' && this.object[key].ClassType !== undefined) {
        this.foreignKeyServices[key] = inject(AbstractRestService<Function>);
      }
    });
    this.formGroup = createFormCreationEditGroup(this.object);
    console.log(this.formGroup);
    this.activatedRoute.params.subscribe(params => {
      console.log(Number(params['id']));
      if (params['id'] !== null) {
        this.service.get(this.actionUrl, Number(params['id'])).subscribe({
          next: (instance: T): void => {
            setFormGroupValues((instance as { [key: string]: string | number | boolean }), this.formGroup);
          },
          error: () => {

          }
        });
      }
    });
    let getUrlMapper;
    Object.keys(this.foreignKeyServices).forEach((key: string): void => {
      getUrlMapper = this.object[key].urlGetMapper;
      if (getUrlMapper) {
        this.foreignKeyServices[key].list(getUrlMapper).subscribe((instances: object[]) => {
          this.foreignKeyInstanceList[key] = instances;
        })
      }
    })
  }
}
