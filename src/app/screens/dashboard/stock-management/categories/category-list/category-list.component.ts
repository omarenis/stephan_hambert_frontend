import {Component, ElementRef, ViewChild} from '@angular/core';
import {AbstractRestService} from "../../../../../services/genericservice";
import {environment} from "../../../../../../environments/environment";
import {CrudConsumer} from "../../../../../services/CrudConsumer";
import {Category, categoryObject} from "../../../../../models/Category";
import {er} from "@fullcalendar/core/internal-common";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent extends CrudConsumer<Category>{

  @ViewChild('model') modelForm !: ElementRef;
  err !:  string;
  constructor(protected override service: AbstractRestService<Category>) {
    super(service, `${environment.url}/categories`, {
      headers: {},
      params: {}
    }, categoryObject,
    true);
  }

  submit(event: Event) {
    this.service.create(this.actionUrl, this.formCreationEditGroup.value).subscribe({
      next: (response: Category) => {
        this.data.push(response);
      },
      error: (err) => {
        console.log(err);
        this.err = err.err.message;
      }
    });
  }
}
