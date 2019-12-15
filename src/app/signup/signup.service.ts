import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Signup } from '../common/enums/apiEndpoint';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  baseUrl = environment.baseUrl + Signup.base;;
  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get(this.baseUrl + Signup.get);
  }

  create(model) {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.post(this.baseUrl + Signup.create, model, { headers: headers } );
  }

  update() {

  }

  delete() {

  }

}
