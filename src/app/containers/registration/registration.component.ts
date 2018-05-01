import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../service/common.service';
import { FileUploadService } from '../../service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public activeRegionId: number;
  public regions;
  public form: FormGroup;
  private formSubmitAttempt: boolean;


  constructor(
    private commonService: CommonService,
    private fileUploadService: FileUploadService
  ) {
  }

  ngOnInit() {
    this.commonService.findAllRegions().subscribe(value => this.regions = value);

    this.form = new FormGroup({
      photo: new FormControl('', [
        Validators.required
      ]),
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ]),
      birthday: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      cityId: new FormControl('', [
        Validators.required
      ]),
      gender: new FormControl('', [
        Validators.required
      ]),
      phones: new FormArray([
        new FormControl('', [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(7),
          Validators.pattern('[0-9]+')
        ])
      ])
    });
  }

  get phones(): FormArray {
    return this.form.get('phones') as FormArray;
  }


  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {

  }

  public onFileChange(event) {
    const files = event.srcElement.files;
    console.log(files);
    this.fileUploadService.uploadImage(files[0]).subscribe(value => this.form.get('photo').setValue(value));
  }

  // getActiveRegionCities() {
  //   return this.regions.find(region => region.id === this.form.value.regions).cities;
  // }

  get cities() {
    return this.regions.find(region => region.id === this.activeRegionId).cities;
  }
}
