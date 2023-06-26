import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category, categoryObject} from "../../../../models/Category";
import {AbstractRestService} from "../../../../services/genericservice";
import {Router} from "@angular/router";
interface Operation {
  operation: string;
  data: {[key: string]: object | number | string}
}
@Component({
  selector: '[app-categories]',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  @Input() categories !: Category[];
  @Input() editable !: boolean;
  @Output() action !: EventEmitter<Operation>;
  constructor(private service: AbstractRestService<Category>, private router: Router) {
  }
  ngOnInit() {
    this.action = new EventEmitter<Operation>();
  }
  orderBy(key: string) {
    this.action.emit({
      operation: 'orderBy',
      data: {
        attribute: key
      }
    })
  }

  delete(id: number) {
    this.action.emit({
      operation: 'delete',
      data: {"id": id}
    })
  }

  protected readonly Number = Number;
}
