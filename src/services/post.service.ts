import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  pathApi = "posts"

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.baseUrlBe + "posts");
  }

  getSinglePost(idPost: number): Observable<Post> {
    return this.http.get<Post>(environment.baseUrlBe + "posts/" + "/" + idPost);
  }
}
