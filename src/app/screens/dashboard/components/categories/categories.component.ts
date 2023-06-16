import {Component, Input} from '@angular/core';
import {Category, categoryObject} from "../../../../models/Category";
import {AbstractRestService} from "../../../../services/genericservice";
import {Router} from "@angular/router";

@Component({
  selector: '[app-categories]',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  @Input() categories !: Category[];
  @Input() editable !: string;
  constructor(private service: AbstractRestService<Category>, private router: Router, ) {
  }
}
