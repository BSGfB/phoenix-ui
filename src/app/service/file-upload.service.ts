import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST_IMAGE_HOSTING } from '../constants/ServerConstants';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class FileUploadService {

  private uploadMethod = 'upload';
  private getMethod = 'images';

  constructor(private http: HttpClient) {
  }

  public uploadImage(image: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('image', image, image.name);

    return this.http
      .post(`${HOST_IMAGE_HOSTING}/${this.uploadMethod}`, formData, {responseType: 'text'})
      .pipe(map(value => `${HOST_IMAGE_HOSTING}/${this.getMethod}/${value}`));
  }
}
