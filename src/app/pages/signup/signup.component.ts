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
    checkbox: string;
    checkboxChecked: string;
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
      arrow: './assets/icons/default/arrow_left_default.svg',
      arrowHover: './assets/icons/default/arrow_left_default_hover.svg',
      checkbox: './assets/icons/default/checkbox_default.svg',
      checkboxChecked: './assets/icons/active/checkbox_checked.svg',
    },
    inputTypes: {
      text: 'text',
      password: 'password',
      email: 'email'
    }
  }

  signupForm: FormGroup;
  privacyPolicyCheckboxImgSrc: string = this.formConfig.icons.checkbox;
  privacyPolicyCheckboxClicked: boolean = false;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      checkbox: [false, [Validators.requiredTrue]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      //! Hier erstmal checken die Daten auszulesen und dann in die console loggen
    }
  }

  changePasswordVisibility() {
    const passwordField = this.signupForm.get('password');

    if(passwordField) {
      if (passwordField.value) {
        // Hier muss noch das bild geändert werden etc.
      } else {
        
      }
    }
  }

  toggleCheckbox() {
    this.privacyPolicyCheckboxClicked = !this.privacyPolicyCheckboxClicked;
    if (this.privacyPolicyCheckboxClicked) {
      this.privacyPolicyCheckboxImgSrc = this.formConfig.icons.checkboxChecked;
    } else {
      this.privacyPolicyCheckboxImgSrc = this.formConfig.icons.checkbox;
    }
  }


}
