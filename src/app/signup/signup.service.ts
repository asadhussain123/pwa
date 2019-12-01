import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient  } from '@angular/common/http';
import { Signup } from '../common/apiEndpoint';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  baseUrl = environment.baseUrl + Signup.base;;
  constructor(private http: HttpClient) {
  }

  get() {
    this.http.get(this.baseUrl + Signup.get);
  }

  create(model) {
    return this.http.post(this.baseUrl + Signup.create, model);
  }

  update() {

  }

  delete() {

  }

}
