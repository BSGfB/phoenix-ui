import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { AuthUser } from '../model/auth-user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST_SHOP } from '../constants/ServerConstants';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private pathLogin = '/login';

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  login(user: AuthUser) {
    if (user.username !== '' && user.password !== '') {
      this.tryToLogin(user).subscribe(value => {
        this.loggedIn.next(true);
        this.router.navigate(['/']);

        console.log(this.loggedIn.getValue(), 'kek');
      });

    }
  }

  logout() {
    console.log('logout')
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  private tryToLogin(user: AuthUser): Observable<any> {
    const body = `username=${user.username}&password=${user.password}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': '*/*'
    });

    return this.http.post(HOST_SHOP + this.pathLogin, body, {responseType: 'text', headers: headers});
  }
}
