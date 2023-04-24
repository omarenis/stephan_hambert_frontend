import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend-bootstrap-5';
  constructor(private router: Router) {
  }
  async ngOnInit(): Promise<void> {
/*    let user = localStorage.getItem('user');
    if(user === null) {
      await this.router.navigate(['/public']);
    }*/
  }
}
