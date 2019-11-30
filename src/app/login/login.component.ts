import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = new Login();

  hide = true;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  login(isFormValid) {
    this.route.navigate(['/dashboard']);
  }

  routeToSignup(){
    this.route.navigate(['/signup']);
  }

}
