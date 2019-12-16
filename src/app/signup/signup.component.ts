import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../common/models/user';
import { SignupService } from './signup.service';
import { StatusCode } from '../common/enums/statusCode';
import { TranslationManagerService } from '../common/translation/translation-manager.service';
import { LookupService } from '../common/services/lookup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService, LookupService]
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
    public trnsl: TranslationManagerService,
    public lookupService: LookupService) { }

  ngOnInit() {
    this.loadLookups();
  }

  signup(isFormValid) {
    if (!isFormValid) {
      return false;
    }

    this.signupService.create(this.signupForm)
      .subscribe(
        response => {
          this.errorMsg = null;
          this.route.navigate(['/thankyou']);
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
    this.loadArea(districtId);
  }

  selectArea(area) {
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
      const address = this.districts.filter(x => x.id == this.signupForm.districtId)[0].name + ' ' +
                      this.areas.filter(x => x.id == this.signupForm.areaId)[0].name  + ' ' +
                      this.signupForm.block + ' ' +
                      this.signupForm.houseNo;
      this.signupForm.address = address;
    }
  }

  loadLookups() {
    this.lookupService.getDistrictsByCityId('')
      .subscribe(resp => {
        this.districts = resp;
      }, error => {
      });
  }
  loadArea(districtId) {
    this.lookupService.getAreasByDistrictId(districtId)
      .subscribe(resp => {
        this.areas = resp;
      }, error => {
      });
  }
}
