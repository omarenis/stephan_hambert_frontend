import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginSignupService, Token} from "../../../services/login-signup.service";

@Component({
  selector: 'app-signing',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.css']
})
export class SigningComponent implements OnInit {
  formGroup !: FormGroup;
  error !: string;


  constructor(private router: Router, private loginSingupService: LoginSignupService) {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  submit(event: Event) {
    event.preventDefault();
    const source = this.loginSingupService.login(this.formGroup.value.username, this.formGroup.value.password).subscribe({
      next: (token: Token) => {
        localStorage.setItem('access', token.access);
        localStorage.setItem('refresh', token.refresh);
        localStorage.setItem("is_superuser", JSON.stringify(token.is_superuser));
        localStorage.setItem('username', token.username);
      },
      error: (err) => {
        this.error = err.error.message;
      }
    });
  }

  loginWithFacebook() {

  }

/*  loginWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((response) => {
      console.log(response);
    });
  }*/
}
