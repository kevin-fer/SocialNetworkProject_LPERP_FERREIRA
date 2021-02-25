import { PostService } from '../@shared/service/post.service';
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
  query2do: boolean;

  constructor(private postService: PostService) { }

  addItem(newItem: Post) {
    //this.posts.push(newItem);
    //this.posts.unshift(newItem);
    this.postService.addPost(newItem).subscribe(
      post => this.posts.unshift(post));
    //console.log(newItem.title);
  }

  getPosts () {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  setPosts () {
    for (let i = 0; i < POSTS.length; i++) {
      this.addItem(POSTS[i]);
    }
  }

  setQuery(query: boolean) {
    this.query2do = query;
  }

  removeItem (post: Post) {
    //this.posts.splice(newItem);
    //this.postService.deletePost(post._id).subscribe();
    //if(this.query2do === false) {
      this.postService.deletePost(post._id).subscribe();
      this.posts.splice(this.posts.indexOf(post, 0) , 1);
     /* for (let i = 0; i < this.posts.length; i++) {
        console.log("on passe le for");
        console.log(i);

        if(post._id === this.posts[i]._id) {
          console.log("Nous supprimons l'article : " + this.posts[i]._id);

          this.postService.deletePost(this.posts[i]._id).subscribe();
          this.posts.splice(i, 1);
        }
      }*/
    //}
  }

  edit(post: Post) {
     console.log("youpi");

  }

  ngOnInit(): void {
    this.setPosts(); // Pour générer des posts dans le serveurdès l'initalisation
    this.getPosts();
    console.log("posts > ", this.posts);
  }

}
