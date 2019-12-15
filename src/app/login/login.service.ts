import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { login } from '../common/enums/apiEndpoint';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.baseUrl + login.base;
  constructor(private http: HttpClient) {
  }

  singin(model) {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.post(this.baseUrl + login.login, model, { headers: headers } );
  }
}
