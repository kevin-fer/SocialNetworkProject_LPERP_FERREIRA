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

  ngOnInit(): void {
    console.log("posts > ", this.posts);
  }

}
