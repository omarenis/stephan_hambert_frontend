import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../../../models/stock_managment/Category";
import {Operation} from "../../../models/forms";
import {AbstractRestService} from "../../../services/genericservice";
import {Router} from "@angular/router";

@Component({
  selector: '[app-categories-table]',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.css']
})
export class CategoriesTableComponent {

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
