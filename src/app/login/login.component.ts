import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './model/login';
import { TranslationManagerService } from '../common/translation/translation-manager.service';
import { LoginService } from './login.service';
import { StatusCode } from '../common/enums/statusCode';
import { AuthService } from '../common/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = new Login();

  hide = true;
  pageName = "loginPage"
  errorMsg = '';
  constructor(private route: Router,
    public trnsl: TranslationManagerService,
    public loginService: LoginService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  login(isFormValid) {
    this.errorMsg = '';
    this.loginService.singin(this.loginForm)
      .subscribe(resp => {
        this.authService.setToken(resp);
        this.route.navigate(['/dashboard']);
      }, error => {
        if (error.status == StatusCode.UnAuthorized) {
          this.errorMsg = 'Invalid User Name or Password';
        }
      });
  }

  routeToSignup() {
    this.route.navigate(['/signup']);
  }

}
