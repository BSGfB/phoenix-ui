import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../model/product';
import {ProductService} from '../../../service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-submit-submit',
  templateUrl: './submit-submit.component.html',
  styleUrls: ['./submit-submit.component.css']
})
export class SubmitSubmitComponent implements OnInit {

  @Input() public product = new Product();

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit() {
  }

  public onClick() {
    this.productService.save(this.product).subscribe(value => this.router.navigate(['/']));
  }

}
