import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category, categoryObject} from "../../../../models/stock_managment/Category";
import {AbstractRestService} from "../../../../services/genericservice";
import {Router} from "@angular/router";
import {Operation} from "../../../../models/forms";

@Component({
  selector: '[app-categories]',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input() categories !: Category[];
  @Input() editable !: boolean;
  @Output() action: EventEmitter<Operation> = new EventEmitter<Operation>();

  constructor(private service: AbstractRestService<Category>, private router: Router) {
  }

  ngOnInit() {
  }

  orderBy(key: string) {
    this.action.emit({
      operation: 'orderBy',
      data: {
        attribute: key
      }
    })
  }

  delete(id: number | undefined) {
    if (id !== undefined) {
      this.action.emit({
        operation: 'delete',
        data: {"id": id}
      })
    }
  }
}
