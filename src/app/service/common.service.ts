import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST_SHOP } from '../constants/ServerConstants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonService {

  private pathRegions = '/regions';

  constructor(private http: HttpClient) { }

  findAllRegions(): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': '*/*'
    });


    return this.http.get(HOST_SHOP + this.pathRegions, {responseType: 'json', headers: headers});
  }
}
