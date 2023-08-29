import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

interface Response {

}
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(private indexHttpClient: HttpClient) {
  }
  ngOnInit() {
    this.indexHttpClient.get(`${environment.url}/public/index`).subscribe({
      next: (response) => {

      },
      error: () => {}
    })
  }

  protected readonly environment = environment;
}
