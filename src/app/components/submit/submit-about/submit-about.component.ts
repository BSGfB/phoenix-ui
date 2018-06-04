import {Component, Input, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submit-about',
  templateUrl: './submit-about.component.html',
  styleUrls: ['./submit-about.component.css']
})
export class SubmitAboutComponent implements OnInit {

  @Input() public firstName;
  @Input() public email;
  @Input() public phone;

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
