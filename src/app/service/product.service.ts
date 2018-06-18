import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HOST, HOST_SHOP} from '../constants/ServerConstants';
import {Product} from '../model/product';

@Injectable()
export class ProductService {

  private pathProducts = '/products';

  constructor(private http: HttpClient) {
  }

  public findAllMy(): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': '*/*'
    });

    return this.http.get(
      HOST_SHOP + this.pathProducts + '/findAllMy',
      {responseType: 'json', headers: headers, withCredentials: true});
  }

  public save(product: Product): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json'
    });

    return this.http.post(
      HOST_SHOP + this.pathProducts + '/save',
      JSON.stringify(product),
      {responseType: 'text', headers: headers, withCredentials: true});
  }
}
