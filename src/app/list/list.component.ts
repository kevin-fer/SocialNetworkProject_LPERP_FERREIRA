import { PostServiceService } from './../@shared/service/post-service.service';
import { Component, OnInit } from '@angular/core';

import { POSTS } from '../@shared/mock';
import { Post } from '../@shared/models/post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts: Post[]; //= POSTS;

  constructor(private postService: PostServiceService) { }

  addItem(newItem: Post) {
    //this.posts.push(newItem);
    //this.posts.unshift(newItem);
    this.postService.addPost(newItem).subscribe(
      post => this.posts.unshift(post));
    console.log(newItem.title);
  }

  getPosts () {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  removeItem (newItem: Post) {
    //this.posts.splice(newItem);
    for (let i = 0; i < this.posts.length; i++) {
      console.log("on passe le for");
      console.log(i);
      if(newItem._id === this.posts[i]._id) {
        console.log("Nous supprimons l'article : " + this.posts[i]._id);
        this.postService.deletePost(this.posts[i]._id).subscribe();
        this.posts.splice(i, 1);
      }
    }
  }

  ngOnInit(): void {
    this.getPosts();
    console.log("posts > ", this.posts);
  }

}
