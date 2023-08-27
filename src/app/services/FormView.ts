import {Component, Inject, inject, OnInit} from "@angular/core";
import {AbstractRestService} from "./genericservice";
import {ActivatedRoute, Router} from "@angular/router";
import {Object as GenericObject} from '../models/generic';
import {FormGroup} from "@angular/forms";
import {createFormCreationEditGroup, serializeDataByType, setFormGroupValues} from "../models/forms";
import {environment} from "../../environments/environment";

@Component({
    template: ""
})
export abstract class FormView<T> implements OnInit {
    public formGroup !: FormGroup;
    protected actionUrl: string;
    protected serverUrl = environment.url;
    protected object: { [key: string]: GenericObject };
    protected foreignKeyInstanceList  !: { [key: string]: object[] };
    protected foreignKeyServices !: { [key: string]: AbstractRestService<object> };
    protected method: string;
    protected enctype !: string;
    protected item !: T;

    protected constructor(protected service: AbstractRestService<T>, protected router: Router,
                          protected activatedRoute: ActivatedRoute,
                          @Inject({}) object: { [key: string]: GenericObject },
                          @Inject('') actionUrl: string, @Inject('') enctype: string) {
        this.actionUrl = actionUrl;
        this.object = object;
        this.enctype = enctype;
        this.method = 'create';
    }

    ngOnInit(): void {
        this.foreignKeyInstanceList = {};
        Object.keys(this.object).forEach(key => {
            if (this.object[key].type === 'foreign_key' || this.object[key].type == 'one_to_one') {
                if (this.object[key].objectToMap !== undefined) {
                    const Type = this.object[key].objectToMap;
                    this.foreignKeyServices[key] = inject(AbstractRestService<typeof Type>);
                    if (this.object[key].urlGetMapper !== undefined) {
                        this.foreignKeyServices[key].list((this.object[key].urlGetMapper as string)).subscribe((instances: object[]) => {
                            this.foreignKeyInstanceList[key] = instances;
                        })
                    }
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
                        this.item = instance;
                        },
                    error: () => {

                    }
                });
            }
        });
    }

    submit(event: Event) {
        const data = serializeDataByType(this.formGroup.value, 'multipart/form-data');
        console.log(data);
    }
}
