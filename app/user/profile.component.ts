import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { TOAST_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  templateUrl: '/app/user/profile.component.html',
  styles: [`
    em { float: right; color: #e05c65; padding-left: 10px; }
    .error input { background-color: #e3c3c5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
       
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private auth: AuthService, 
      private router: Router, 
      @Inject(TOAST_TOKEN) private toastr: Toastr) {

  }

  ngOnInit() {

    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  cancel(): void {
    this.router.navigate(['events']);
  }

  saveProfile(formValues): void {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.toastr.success('Profile Saved');
    }
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

}