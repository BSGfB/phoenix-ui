import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST_IMAGE_UPLOAD } from '../constants/ServerConstants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FileUploadService {

  private methodUrl = '/upload';

  constructor(private http: HttpClient) {
  }

  public uploadImage(image: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('image', image, image.name);

    return this.http.post(HOST_IMAGE_UPLOAD + this.methodUrl, formData, {responseType: 'text'});
  }
}
