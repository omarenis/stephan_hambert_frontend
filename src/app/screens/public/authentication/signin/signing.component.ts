import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginSignupService} from "../../../../services/login-signup.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signing',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.css']
})
export class SigningComponent implements OnInit{
  formGroup !: FormGroup;
  error !: string;
  constructor(private router: Router, private loginSingupService: LoginSignupService) {}

  loginWithFacebook() {

  }

  loginWithGoogle() {

  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  submit(event: Event){
    event.preventDefault();
     console.log(this.formGroup.value);
  }
}
