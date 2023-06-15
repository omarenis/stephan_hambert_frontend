import {Component, Inject, OnInit} from '@angular/core';
import {FacebookLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginSignupService} from "../../../../services/login-signup.service";
import {Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";
interface SignupFormGroup {
  first_name: FormControl;
  last_name: FormControl;
  email: FormControl;
  password: FormControl;
  repeatedPassword: FormControl;
  username: FormControl;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  formGroup !: FormGroup;
  constructor(private socialAuthService: SocialAuthService, private loginSignupService: LoginSignupService,
              private router: Router, @Inject(DOCUMENT) private document: Document) {
  }

  signupWithFacebook() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user: SocialUser) => {
      this.formGroup.get('first_name')?.setValue(user.firstName);
      this.formGroup.get('last_name')?.setValue(user.lastName);
      this.formGroup.get('email')?.setValue(user.email);
    }).catch(() => {

    });
  }

  ngOnInit(): void {
    this.document.body.innerHTML += `<script src="https://accounts.google.com/gsi/client" async defer></script>`;
    this.formGroup = new FormGroup<SignupFormGroup>({
      email: new FormControl('', [Validators.required, Validators.email]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatedPassword: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required])
    });

  }

  submit(event: Event)
  {
    if(this.formGroup.get('password')?.value === this.formGroup.get('repeatedPassword')?.value)
    {
      this.loginSignupService.signup({
        email: this.formGroup.get('email')?.value,
        password: this.formGroup.get('password')?.value,
        first_name: this.formGroup.get('first_name')?.value,
        last_name: this.formGroup.get('last_name')?.value,
        username: this.formGroup.get('username')?.value
      }).subscribe({
        next: () => {

        },
        error: () => {}
      });
    }
  }
}
