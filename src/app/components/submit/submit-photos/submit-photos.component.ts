import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileUploadService } from '../../../service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-photos',
  templateUrl: './submit-photos.component.html',
  styleUrls: ['./submit-photos.component.css']
})
export class SubmitPhotosComponent implements OnInit {

  @Output() public isValid = new EventEmitter<boolean>();

  public photos = [];
  public form: FormGroup;

  constructor(private fileUploadService: FileUploadService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      photos: new FormArray(this.photos)
    });
  }

  public onFileChange(event) {
    const files = event.srcElement.files;
    this.fileUploadService
      .uploadImage(files[0])
      .subscribe(value => this.photos.push(new FormControl(value, [Validators.required])));
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched)
    );
  }

  onSubmit() {
    if (this.photos.length > 0) {
      this.isValid.emit(true);
    } else {
      this.isValid.emit(false);
    }
  }
}
