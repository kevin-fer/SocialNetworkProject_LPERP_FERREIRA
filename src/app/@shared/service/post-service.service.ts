import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from '../models/post';

const postsList = "https://crudcrud.com/api/fd0d1440c98c49bc8c5e02f08f3d8f83"

@Injectable({
  providedIn: 'root'
})
export class PostServiceService implements OnInit {

  constructor(private http: HttpClient) {

  }
  // tslint:disable-next-line: contextual-lifecycle
  // tslint:disable-next-line: typedef-whitespace
getPosts(): Observable<any> {
  return this.http.get(postsList+"/posts");
}
  /** POST: add a new hero to the database */
addPost(post: Post): Observable<Post> {
  return this.http.post<Post>(postsList+"/posts", post);
}
/** DELETE: delete the hero from the server */
deletePost(id: string): Observable<{}> {
  const url = postsList + "/posts/" + id; // DELETE api/heroes/42
  return this.http.delete(url);
}

ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
}
