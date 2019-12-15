import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  localStorageKey = 'token';

  constructor() { }
  isLoggedIn = false;
  userSessionToken = '';

  isAuthenticUser() {
    const token = this.getToken();
    if (token) {
      const tokenObject = JSON.parse(token);
      this.userSessionToken = tokenObject.token;
      this.isLoggedIn = true;
      return true;
    }
    this.isLoggedIn = false;
    return false;
  }

  getToken() {
    return localStorage.getItem(this.localStorageKey);
  }

  setToken(payload) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(payload));
  }

  clearToken() {
    localStorage.removeItem(this.localStorageKey);
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn = false;
  }
}
