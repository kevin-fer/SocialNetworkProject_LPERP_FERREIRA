import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from '../models/post';

const postsList = "https://crudcrud.com/api/85525fd4cc22441e864145153d8a2fba"

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
