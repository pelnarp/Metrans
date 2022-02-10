import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.baseUrl);
  }

  getSingle(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.baseUrl + id);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + id);
  }  

  create(post: Post): Observable<any> {
    return this.httpClient.post(this.baseUrl, post);
  }    

  update(post: Post): Observable<any> {
    return this.httpClient.put(this.baseUrl + post.id, post);
  }    

}
