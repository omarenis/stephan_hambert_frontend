import {Component, ElementRef, ViewChild} from '@angular/core';
import {AbstractRestService} from "../../../../services/genericservice";
import {Category, categoryObject} from "../../../../models/stock_managment/Category";
import {environment} from "../../../../../environments/environment";
import {CrudConsumer} from "../../../../services/CrudConsumer";
import {Operation} from "../../../../models/forms";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent extends CrudConsumer<Category>{

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
        this.modelForm.nativeElement.click();
      },
      error: (err) => {
        console.log(err);
        this.err = err.err.message;
      }
    });
  }

  action($event: Operation) {
    console.log($event.operation);
  }
}
