import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from '../models/post';

const postsList = 'https://crudcrud.com/api/82d151e6e6014b69aded1ce626a5246f';

/*const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*'
  })
};*/

@Injectable({
  providedIn: 'root'
})

// @Author Kévin Ferreira
export class PostService implements OnInit {

  constructor(private http: HttpClient) {

  }
  // tslint:disable-next-line: contextual-lifecycle
  // tslint:disable-next-line: typedef-whitespace
// GET
getPosts(): Observable<any> {
  return this.http.get(postsList+"/posts");
}
  // POST
addPost(post: Post): Observable<Post> {
  return this.http.post<Post>(postsList+"/posts", post);
}
// DELETE
deletePost(id: string): Observable<{}> {
  const url = postsList + "/posts/" + id; // DELETE api/posts/42125452
  return this.http.delete(url);
}
// PUT
edit(postId: string, postEdited: Post): Observable<any> {
  //NOTE: postEdited ne doit pas avoir de propriété _id, l'api de crudcrud.com ne l'autorise pas avec le PUT
  //NOTE: si besoin de supprimer la propriété => delete postEdited._id
  return this.http.put<Post>(`${postsList}/posts/${postId}`, postEdited);
}

ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
}
