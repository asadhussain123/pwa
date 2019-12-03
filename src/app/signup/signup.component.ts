import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../common/models/user';
import { SignupService } from './signup.service';
import { StatusCode } from '../common/statusCode';
import { TranslationManagerService } from '../common/translation-manager.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService]
})
export class SignupComponent implements OnInit {

  signupForm = new User();
  hide = true;
  pageName = "signupPage"
  errorMsg = '';

  // dropdowns
  countries = [];
  cities = [];
  districts = [];
  areas = [];

  show = false;
  constructor(
    private route: Router,
    private signupService: SignupService,
    public trnsl: TranslationManagerService) { }

  ngOnInit() {
  }

  signup(isFormValid) {
    if (!isFormValid) {
      return false;
    }

    this.signupService.create(this.signupForm)
      .subscribe(
        response => {
          this.errorMsg = null;
          this.route.navigate(['/dashboard']);
        },
        error => {
          const msg = error.error || error.message;
          this.errorMsg = msg.split('Parameter').length > 1 ?
            msg.split('Parameter')[1].replace(')', '') :
            msg.split('Parameter')[0];
        });
  }

  routeToLogin() {
    this.route.navigate(['/login']);
  }

  selectDistrict(districtId) {
    this.updateAddress();
  }

  selectArea() {
    this.updateAddress();
  }

  blockEvent() {
    this.updateAddress();
  }

  houseNoEvent() {
    this.updateAddress();
  }

  updateAddress() {
    if (this.signupForm.districtId && this.signupForm.areaId &&
      this.signupForm.block && this.signupForm.houseNo) {
      const address = this.districts.filter(x => x.id == this.signupForm.districtId)[0].name +
        this.areas.filter(x => x.id == this.signupForm.areaId)[0].name +
        this.signupForm.block +
        this.signupForm.houseNo;
        this.signupForm.address = address;
      }
  }
}
