import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Lookup } from './apiEndpoint';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  baseUrl = environment.baseUrl + Lookup.base;;
  constructor(private http: HttpClient) {
  }

  getDistrictsByCityId(cityId): any {
    return this.http.get(this.baseUrl + Lookup.getDistrictsByCityId);
  }

  getAreasByDistrictId(districtId): any {
    return this.http.get(this.baseUrl + Lookup.getAreasByDistrictId + `?id=${districtId}`);
  }
}
