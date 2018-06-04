import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(value => this.isLoggedIn = value);
  }

  onLogout() {
    this.authService.logout();
  }

  get userPhoto() {
    return this.authService.userPhoto;
  }

  get userEmail() {
    return this.authService.userEmail;
  }
}
