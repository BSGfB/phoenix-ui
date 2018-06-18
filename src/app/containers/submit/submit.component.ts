import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../service/common.service';
import {AuthService} from '../../service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  public isValidPhotos = false;
  public isValidDescription = false;
  public isValidLocation = false;
  public isValidAbout = false;
  public product = new Product();

  public possibleCategories = [];

  public categories;
  public regions;

  constructor(
    private commonService: CommonService,
    private authService: AuthService) {
    this.commonService.findAllCategories().subscribe(value => this.categories = value);
    this.commonService.findAllRegions().subscribe(value => this.regions = value);
  }

  ngOnInit() {
  }

  public onPhotosChange(photosEvent) {
    this.possibleCategories = photosEvent.map(v => v.categories);
  }

  get cityId() {
    return this.authService.userCityId;
  }

  get email() {
    return this.authService.userEmail;
  }

  get firstName() {
    return this.authService.userFirstName;
  }

  get phone() {
    return this.authService.userPhone;
  }

  public onValidPhotos(event) {
    console.log(event);
    this.isValidPhotos = event.isValid;
    this.product.photos = event.photos;
  }

  public onValidDescription(event) {
    console.log(event);
    this.isValidDescription = event.isValid;
    this.product = {...event.body, ...this.product};
  }

  public onValidLocation(event) {
    console.log(event);
    this.isValidLocation = event.isValid;
    this.product = {...event.body, ...this.product};
  }
}
