import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {CategoryClassificationService, FileUploadService} from '../../../service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-photos',
  templateUrl: './submit-photos.component.html',
  styleUrls: ['./submit-photos.component.css']
})
export class SubmitPhotosComponent implements OnInit {
  @Output() public onChange = new EventEmitter<any>();
  @Output() public isValid = new EventEmitter();

  public photos = [];
  public photosWithCategories = [];
  public form: FormGroup;

  constructor(
    private fileUploadService: FileUploadService,
    private categoryClassificationService: CategoryClassificationService) {
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
      .subscribe(value => {
        this.photos.push(new FormControl(value, [Validators.required]));

        this.categoryClassificationService.try(value).subscribe(res => {
          this.photosWithCategories.push({url: value, categories: res});
          this.onChange.emit(this.photosWithCategories);
        });

        if (this.photos.length > 0) {
          this.isValid.emit({isValid: true, photos: this.photos.map(v => v.value)});
        } else {
          this.isValid.emit({isValid: true, photos: []});
        }
      });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched)
    );
  }

  onSubmit() {
    if (this.photos.length > 0) {
      this.isValid.emit({isValid: true, photos: this.photos.map(v => v.value)});
    } else {
      this.isValid.emit({isValid: true, photos: []});
    }
  }
}
