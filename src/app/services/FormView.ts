import {Component, Inject, inject, OnInit} from "@angular/core";
import {AbstractRestService} from "./genericservice";
import {ActivatedRoute, Router} from "@angular/router";
import {Object as GenericObject} from '../models/generic';
import {FormGroup} from "@angular/forms";
import {createFormCreationEditGroup, setFormGroupValues} from "../models/forms";

@Component({
  template: ""
})
export abstract class FormView<T> implements OnInit {
  public formGroup !: FormGroup;
  protected actionUrl: string;
  protected object: { [key: string]: GenericObject };
  protected foreignKeyInstanceList  !: { [key: string]: object[] };
  protected foreignKeyServices !: { [key: string]: AbstractRestService<object> };
  protected method!: string;

  protected constructor(protected service: AbstractRestService<T>, protected router: Router,
                        protected activatedRoute: ActivatedRoute,
                        @Inject({}) object: { [key: string]: GenericObject },
                        @Inject('') actionUrl: string, @Inject('') enctype: string) {
    this.actionUrl = actionUrl;
    this.object = object;
  }

  ngOnInit(): void {
    this.foreignKeyInstanceList = {};
    let getUrlMapper;
    Object.keys(this.object).forEach(key => {
      if (this.object[key].type === 'foreign_key' || this.object[key].type == 'one_to_one') {
        if (this.object[key].objectToMap !== undefined) {
          const Type = this.object[key].objectToMap;
          this.foreignKeyServices[key] = inject(AbstractRestService<typeof Type>);
          getUrlMapper = this.object[key].urlGetMapper;
          if (getUrlMapper) {
            this.foreignKeyServices[key].list(getUrlMapper).subscribe((instances: object[]) => {
              this.foreignKeyInstanceList[key] = instances;
            })
          }
        }
      }
    });
    this.formGroup = createFormCreationEditGroup(this.object);
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] !== null && !isNaN(Number(params['id']))) {
        this.service.get(this.actionUrl, Number(params['id'])).subscribe({
          next: (instance: T): void => {
            setFormGroupValues((instance as { [key: string]: string | number | boolean }), this.formGroup);
          },
          error: () => {

          }
        });
      }
    });
  }
}
