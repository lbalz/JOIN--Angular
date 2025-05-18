import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface FormConfig {
  icons: {
    headerLogo: string;
    passwordVisible: string;
    passwordVisibleOff: string;
    lock: string;
    mail: string;
    user: string;
    arrow: string;
    arrowHover: string;
  },
  inputTypes: {
    text: string;
    password: string;
    email: string;
  }
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent {
  formConfig: FormConfig = {
    icons: {
      headerLogo: './assets/icons/default/header_logo.svg',
      passwordVisible: './assets/icons/default/visibility.svg',
      passwordVisibleOff: './assets/icons/default/visibility_off,svg',
      lock: './assets/icons/default/lock.svg',
      mail: './assets/icons/default/mail.svg',
      user: './assets/icons/default/person.svg',
      arrow: './assets/icons/default/arrow.svg',
      arrowHover: './assets/icons/default/arrow_hover.svg'
    },
    inputTypes: {
      text: 'text',
      password: 'password',
      email: 'email'
    }
  }

  pwVisibilityIconSrc: string = './assets/icons/default/visibility.svg';
  pwVisibilityOffIconSrc: string = './assets/icons/default/visibility_off.svg';
  inputTypeText: string = 'text';
  inputTypePassword:string = 'password';
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    }
  }

  changePasswordVisibility() {
    const passwordField = this.signupForm.get('password');

    if(passwordField) {
      if (passwordField.value === this.inputTypePassword) {
        // Hier muss noch das bild geändert werden etc.
      } else {
        
      }
    }
  }
}
