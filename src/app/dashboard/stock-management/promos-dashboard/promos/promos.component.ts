import {Component, ElementRef, ViewChild} from '@angular/core';
import {AbstractRestService} from "../../../../services/genericservice";
import {Promo, promoObject} from "../../models/Promo";
import {environment} from "../../../../../environments/environment";
import {CrudConsumer} from "../../../../services/CrudConsumer";

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent extends CrudConsumer<Promo> {
  err !: string;
  @ViewChild('model') modelForm !: ElementRef;

  constructor(protected override service: AbstractRestService<Promo>) {
    super(service, `${environment.url}/promos`, {
      headers: {},
      params: {}
    }, promoObject, true);
  }

  submit($event: Event) {
    this.service.create(`${environment.url}/promos`, <Promo>{
      title: this.formCreationEditGroup.value.title,
      datetime_end: this.formCreationEditGroup.value.datetime_end,
      datetime_start: this.formCreationEditGroup.value?.datetime_start,
      percentage: this.formCreationEditGroup.value?.percentage,
      code: this.formCreationEditGroup.value?.code
    }).subscribe({
      next: (promo: Promo) => {
        this.data.unshift(promo);
        this.modelForm.nativeElement.click();
      },
      error: () => {

      }
    });
  }
}
