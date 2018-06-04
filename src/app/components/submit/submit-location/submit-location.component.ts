import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './submit-location.component.html',
  styleUrls: ['./submit-location.component.css']
})
export class SubmitLocationComponent implements OnInit, OnChanges {

  @Input() public regions;
  @Input() public activeCityId;

  public activeRegionId: number;
  public form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor() {

  }

  ngOnInit() {
    this.form = new FormGroup({
      cityId: new FormControl('', [
        Validators.required
      ])
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  get cities() {
    return this.regions.find(region => region.id === this.activeRegionId).cities;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.regions !== undefined) {
      console.log(this.activeCityId, this.activeRegionId, this.regions);
      this.activeRegionId = this.regions.find(r => r.cities.find(c => c.id === this.activeCityId) !== undefined).id;
      this.form.get('cityId').setValue(this.activeCityId);
    }
  }
}
