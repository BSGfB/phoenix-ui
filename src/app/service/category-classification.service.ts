import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HOST_CLASSIFICATION, HOST } from '../constants/ServerConstants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryClassificationService {

  private tryMethod = 'try';

  private headers = new HttpHeaders({
    'Accept': '*/*', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': HOST
  });

  constructor(private http: HttpClient) {
  }

  public try(url: string): Observable<any> {
    return this.http
      .post(`${HOST_CLASSIFICATION}/${this.tryMethod}`, JSON.stringify({url: url}), {responseType: 'json', headers: this.headers});
  }
}
