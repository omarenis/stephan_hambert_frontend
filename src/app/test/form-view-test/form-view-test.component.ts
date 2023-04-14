import {Component, Inject} from '@angular/core';
import {FormView} from "../../services/FormView";
import {AbstractRestService} from "../../services/genericservice";
import {ActivatedRoute, Router} from "@angular/router";
import {Object} from "../../models/generic";

interface Example {
  name: string;
  file: File | string;
  id?: number;
}

@Component({
  selector: 'app-form-view-test',
  templateUrl: './form-view-test.component.html',
  styleUrls: ['./form-view-test.component.css']
})
export class FormViewTestComponent extends FormView<Example> {
  constructor(protected override service: AbstractRestService<Example>, protected override router: Router, protected override activatedRoute: ActivatedRoute) {
    super(service, router, activatedRoute, {
      name: {type: 'string', required: true},
    })
  }
}
