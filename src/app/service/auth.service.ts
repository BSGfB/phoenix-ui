import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { AuthUser } from '../model/auth-user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST_SHOP } from '../constants/ServerConstants';
import { Observable } from 'rxjs/Observable';
import {UserService} from './user.service';

@Injectable()
export class AuthService {
  private USER_CITY_ID = 'USER_CITY_ID';
  private USER_EMAIL = 'USER_EMAIL';
  private USER_FIRST_NAME = 'USER_FIRST_NAME';
  private USER_LAST_NAME = 'USER_LAST_NAME';
  private USER_PHONE = 'USER_PHONE';
  private USER_PHOTO = 'USER_PHOTO';

  private loggedIn = new BehaviorSubject<boolean>(localStorage.getItem('isAuth') === 'true');
  private pathLogin = '/login';
  private pathLogout = '/logout';

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService
  ) {
  }

  login(user: AuthUser) {
    if (user.username !== '' && user.password !== '') {
      this.tryToLogin(user).subscribe(value => {
        this.userService.getByEmail(user.username).subscribe(v => {
          this.loggedIn.next(true);
          this.router.navigate(['/']);

          localStorage.setItem('isAuth', 'true');
          localStorage.setItem(this.USER_EMAIL, v.email);
          localStorage.setItem(this.USER_CITY_ID, v.cityId);
          localStorage.setItem(this.USER_FIRST_NAME, v.firstName);
          localStorage.setItem(this.USER_LAST_NAME, v.lastName);
          localStorage.setItem(this.USER_PHONE, v.phones[0].phoneNumber);
          localStorage.setItem(this.USER_PHOTO, v.photo);
        });
      });

    }
  }

  logout() {
    const headers = new HttpHeaders({
      'Accept': '*/*'
    });

    this.http.get(HOST_SHOP + this.pathLogout, {responseType: 'text', headers: headers}).subscribe(v => {
      this.loggedIn.next(false);
      localStorage.clear();
      localStorage.setItem('isAuth', 'false');
      this.router.navigate(['/login']);
    });

  }

  private tryToLogin(user: AuthUser): Observable<any> {
    const body = `username=${user.username}&password=${user.password}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': '*/*'
    });

    return this.http.post(HOST_SHOP + this.pathLogin, body, {withCredentials: true, responseType: 'text', headers: headers});
  }

  get userCityId() {
    return parseInt(localStorage.getItem(this.USER_CITY_ID), 10);
  }

  get userEmail() {
    return localStorage.getItem(this.USER_EMAIL);
  }

  get userFirstName() {
    return localStorage.getItem(this.USER_FIRST_NAME);
  }

  get userLastName() {
    return localStorage.getItem(this.USER_LAST_NAME);
  }

  get userPhone() {
    return localStorage.getItem(this.USER_PHONE);
  }

  get userPhoto() {
    return localStorage.getItem(this.USER_PHOTO);
  }
}
