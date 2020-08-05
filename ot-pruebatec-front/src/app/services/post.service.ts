import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileItem } from '../models/fileimg';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private ImagesFolder = 'img';

  constructor(private http: HttpClient) { }

  url_api = 'http://localhost:8000/api/post';

  uploadImages(images:FileItem[]) {
    console.log(images);  
  }

  getData() {
    return this.http.get(this.url_api + '/all');
  }
  addPost(body) {
    return this.http.post(this.url_api + '/add', body);
 
  }
  deletePost(id) {
    return this.http.delete(this.url_api + '/delete/' + id);
  }
  getById(id) {
    return this.http.get(this.url_api + '/id/' + id);
  }
  updatePost(id, body) {
    return this.http.put(this.url_api + '/update/' + id, body);
  }


}
