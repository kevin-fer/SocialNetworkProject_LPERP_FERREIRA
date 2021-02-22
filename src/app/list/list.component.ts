import { Component, OnInit } from '@angular/core';

import { POSTS } from '../@shared/mock';
import { Post } from '../@shared/models/post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts: Post[] = POSTS;

  constructor() { }

  addItem(newItem: Post) {
    //this.posts.push(newItem);
    this.posts.unshift(newItem);
    console.log(newItem.title);
  }

  removeItem (newItem: Post) {
    //this.posts.splice(newItem);
    for (let i = 0; i < this.posts.length; i++) {
      console.log("on passe le for");
      console.log(i);
      if(newItem.id === this.posts[i].id) {
        console.log("Nous supprimons l'article : " + this.posts[i].id)
        this.posts.splice(i, 1);
      }
    }
  }

  ngOnInit(): void {
    console.log("posts > ", this.posts);
  }

}
