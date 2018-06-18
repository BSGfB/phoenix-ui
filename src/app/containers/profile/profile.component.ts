import {Component, OnInit} from '@angular/core';
import {AuthService, ProductService} from '../../service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public products;

  public isGoods = false;

  constructor(private authService: AuthService, private productService: ProductService) {

  }

  ngOnInit() {
  }

  get fullName() {
    return this.authService.userFirstName + ' ' + this.authService.userLastName;
  }

  get email() {
    return this.authService.userEmail;
  }

  get photo() {
    return this.authService.userPhoto;
  }

  public onGoods() {
    this.isGoods = !this.isGoods;

    if (this.isGoods) {
      this.productService.findAllMy().subscribe(value => this.products = value);
    }
  }
}
