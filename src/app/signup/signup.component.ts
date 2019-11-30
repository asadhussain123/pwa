import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../common/models/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new User();
  hide = true;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  signup(isFormValid) {
    this.route.navigate(['/site/dashboard']);
  }

}
