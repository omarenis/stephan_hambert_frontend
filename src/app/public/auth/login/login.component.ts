import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginSignupService, Token} from "../../../services/login-signup.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup !: FormGroup;
  error !: string;


  constructor(private router: Router, private loginSignupService: LoginSignupService) {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  submit(event: Event) {
    event.preventDefault();
    this.loginSignupService.login(this.formGroup.value.username, this.formGroup.value.password).subscribe({
      next: (token: Token) => {
        localStorage.setItem('access', token.access);
        localStorage.setItem('refresh', token.refresh);
        localStorage.setItem("is_superuser", JSON.stringify(token.is_superuser));
        localStorage.setItem('username', token.username);
        localStorage.setItem('userId', token.userId.toString());
        if(token.is_superuser)
        {
          this.router.navigate(['/dashboard/stock-management/products']).then(() => {})
        }
        else {
          this.router.navigate(['/public']).then(() => {})
        }
      },
      error: (err) => {
        this.error = err.error.message;
      }
    });
  }

  loginWithFacebook() {

  }
}
