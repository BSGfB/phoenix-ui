import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST_SHOP } from '../constants/ServerConstants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonService {

  private pathRegions = '/regions';
  private pathCategories = '/categories';

  private headers = new HttpHeaders({
    'Accept': '*/*'
  });

  constructor(private http: HttpClient) { }

  findAllRegions(): Observable<any> {
    return this.http.get(HOST_SHOP + this.pathRegions, {responseType: 'json', headers: this.headers});
  }

  findAllCategories(): Observable<any> {
    return this.http.get(HOST_SHOP + this.pathCategories, {responseType: 'json', headers: this.headers});
  }
}
