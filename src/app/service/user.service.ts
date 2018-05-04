import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HOST_SHOP } from '../constants/ServerConstants';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class UserService {

  private pathUsers = '/users';

  constructor(private http: HttpClient) { }

  save(user): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json'
    });

    return this.http.post(
      HOST_SHOP + this.pathUsers + '/save',
      JSON.stringify(user),
      {responseType: 'json', headers: headers});
  }

  byId(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': '*/*'
    });

    const params = new HttpParams().set('id', id.toString());

    return this.http.get(
      HOST_SHOP + this.pathUsers + '/byId',
      {responseType: 'json', headers: headers, params: params
      });
  }
}
