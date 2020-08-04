import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  url_api = 'http://localhost:8000/api/post';

  getData() {
    return this.http.get(this.url_api + '/all');
  }
  addData(body) {
    return this.http.post(this.url_api + '/add', body);
  }
  deleteData(id) {
    return this.http.delete(this.url_api + '/delete/' + id);
  }
  getById(id) {
    return this.http.get(this.url_api + '/detail/' + id);
  }
  updateData(id, body) {
    return this.http.put(this.url_api + '/update/' + id, body);
  }

}
