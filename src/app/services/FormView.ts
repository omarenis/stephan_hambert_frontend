import {Component, Inject, inject, OnDestroy, OnInit} from "@angular/core";
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
  protected foreignKeyServices !: {[key: string]: AbstractRestService<T>};
  protected constructor(protected  service: AbstractRestService<T>, protected router: Router,
                        protected activatedRoute: ActivatedRoute,
                        @Inject({}) protected object: {[key: string]: GenericObject},
                        @Inject('') protected actionUrl: string) {}

  ngOnInit(): void {
    Object.keys(this.object).forEach(key => {
      const classType = this.object[key].classType;
      if(this.object[key].type === 'foreignkey' && classType !== undefined)
      {
        this.foreignKeyServices[key] = inject(AbstractRestService<object>);
      }
    });
    this.formGroup  = createFormCreationEditGroup(this.object);
    this.activatedRoute.params.subscribe(params => {
      if(params['id'] !== null) {
        this.service.get(this.actionUrl, Number(params['id'])).subscribe((instance) => {
          setFormGroupValues((instance as { [key: string]: string | number | boolean }), this.formGroup);
        });
      }
    })
  }
}
