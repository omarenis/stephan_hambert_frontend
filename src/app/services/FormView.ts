import {Component, Inject, inject, OnInit} from "@angular/core";
import {AbstractRestService} from "./genericservice";
import {ActivatedRoute, Router} from "@angular/router";
import {Object as GenericObject} from '../models/generic';
import {FormGroup} from "@angular/forms";
import {createFormCreationEditGroup, setFormGroupValues} from "../models/forms";
import {ec} from "@fullcalendar/core/internal-common";

@Component({
  template: ""
})
export abstract class FormView<T> implements OnInit {
  public formGroup !: FormGroup;
  protected actionUrl: string;
  protected object: { [key: string]: GenericObject };
  protected foreignKeyInstanceList  !: { [key: string]: object[] };
  protected foreignKeyServices !: { [key: string]: AbstractRestService<object> };
  protected method !: string;
  protected enctype !: string;
  protected constructor(protected service: AbstractRestService<T>, protected router: Router,
                        protected activatedRoute: ActivatedRoute,
                        @Inject({}) object: { [key: string]: GenericObject },
                        @Inject('') actionUrl: string, @Inject('') enctype: string) {
    this.actionUrl = actionUrl;
    this.object = object;
    this.enctype = enctype;
  }

  ngOnInit(): void {
    this.foreignKeyInstanceList = {};
    Object.keys(this.object).forEach(key => {
      if (this.object[key].type === 'foreign_key' || this.object[key].type == 'one_to_one') {
        if (this.object[key].objectToMap !== undefined) {
          const Type = this.object[key].objectToMap;
          console.log(Type);
          this.foreignKeyServices[key] = inject(AbstractRestService<typeof Type>)
        }
      }
    });
    this.formGroup = createFormCreationEditGroup(this.object);
    console.log(this.formGroup);
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] !== "create") {
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

  submit(event: Event)
  {
    let dataToSend: any = {};
    Object.keys(this.object).forEach((key) => {
      dataToSend[key] = this.formGroup.controls[key].value;
    });

    if(this.enctype === 'multipart/form-data')
    {
      const data = new FormData();
      Object.keys(dataToSend).forEach((key) => {
        data.append(key, dataToSend[key] instanceof File ? dataToSend[key] : dataToSend[key].toString());
      });
      dataToSend = data;
    }
    console.log(dataToSend);
  }
}
