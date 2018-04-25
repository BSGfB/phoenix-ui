import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../../service/file-upload.service';

@Component({
  selector: 'app-submit-photos',
  templateUrl: './submit-photos.component.html',
  styleUrls: ['./submit-photos.component.css']
})
export class SubmitPhotosComponent implements OnInit {

  public photos = [];

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit() {
  }

  public onFileChange(event) {
    const files = event.srcElement.files;
    console.log(files);
    this.fileUploadService.uploadImage(files[0]).subscribe(value => this.photos.push(value));
  }
}
