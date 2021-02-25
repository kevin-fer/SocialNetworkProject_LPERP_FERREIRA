import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from '../models/post';

const postsList = "https://crudcrud.com/api/18a70ff6ae704a818716fbb8c77afbb2"

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit {

  constructor(private http: HttpClient) {

  }
  // tslint:disable-next-line: contextual-lifecycle
  // tslint:disable-next-line: typedef-whitespace
getPosts(): Observable<any> {
  return this.http.get(postsList+"/posts");
}
  /** POST: add a new post to the database */
addPost(post: Post): Observable<Post> {
  return this.http.post<Post>(postsList+"/posts", post);
}
/** DELETE: delete the post from the server */
deletePost(id: string): Observable<{}> {
  const url = postsList + "/posts/" + id; // DELETE api/posts/42125452
  return this.http.delete(url);
}

edit(postId: string, postEdited: Post) {
  //NOTE: postEdited ne doit pas avoir de propriété _id, l'api de crudcrud.com ne l'autorise pas avec le PUT
  //NOTE: si besoin de supprimer la propriété => delete postEdited._id
  return this.http.put(`${postsList}/posts/${postId}`, postEdited);
}

ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
}
