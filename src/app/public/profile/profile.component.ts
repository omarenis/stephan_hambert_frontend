import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {User} from "../../dashboard/crm/models/User";
import {AbstractRestService} from "../../services/genericservice";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user !: User;
  constructor(private service: AbstractRestService<User>) {
  }

  ngOnInit(): void {
    this.service.get(`${environment.url}/customers`, Number(localStorage.getItem('userId'))).subscribe({
      next: (user: User) => {
        this.user = user;
        this.imagePath = environment.originBackend + user.customerprofile?.photo;
      }
    })
  }

  protected readonly environment = environment;
  imagePath !: string;


  readImage(event: any) {

  }
}
