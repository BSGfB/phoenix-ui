import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  public isValidPhotos = false;

  constructor() { }

  ngOnInit() {
  }

  test(event) {
    console.log(event);
  }

}
