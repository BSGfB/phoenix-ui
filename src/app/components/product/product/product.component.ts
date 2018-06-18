import {Component, Input, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() public product;
  private categories;
  public photoIndex = 0;

  constructor(private commonService: CommonService) {
    this.commonService.findAllCategories().subscribe(v => this.categories = v);
  }

  ngOnInit() {
  }

  get title() {
    return this.product.title;
  }

  get description() {
    return this.product.description;
  }

  get category() {
    if (this.categories === undefined) { return ''; }

    const commonCategory = this.findCommonCategoryByCategoryId(this.product.categoryId);
    const category = this.findCategory(commonCategory, this.product.categoryId);

    return commonCategory.name + ' / ' + category.name;
  }

  get currentPhoto() {
    return this.product.photos[this.photoIndex];
  }

  private findCommonCategoryByCategoryId(categoryId) {
    return this.categories.find(v => v.categories.find(c => c.id === categoryId) !== undefined);
  }

  private findCategory(commonCategory, categoryId) {
    return commonCategory.categories.find(v => v.id === categoryId);
  }

  public onClick() {
    this.photoIndex = this.photoIndex + 1 < this.product.photos.length ? this.photoIndex + 1 : 0;
  }
}
