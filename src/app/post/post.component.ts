import { Post } from './../@shared/models/post';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  collapsed: boolean;

  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    //TODO
  }

  toggle() {

  }

}
