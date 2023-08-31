import { Component } from '@angular/core';
import {CrudConsumer} from "../../../services/CrudConsumer";
import {CmsInformation, presentObject} from "../../../models/CmsInformation";
import {AbstractRestService} from "../../../services/genericservice";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-presents',
  templateUrl: './presents.component.html',
  styleUrls: ['./presents.component.css']
})
export class PresentsComponent extends CrudConsumer<CmsInformation>{
  constructor(protected override service: AbstractRestService<CmsInformation>, private router: Router) {
    super(service, `${environment.url}/cms/presents`, {params: {}, headers: {}}, presentObject);
  }

  protected readonly environment = environment;

  edit(id: number | undefined) {
    // TODO document why this method 'edit' is empty
    this.router.navigate(['/dashboard/cms/presents/' + JSON.stringify(id)])
  }
}
