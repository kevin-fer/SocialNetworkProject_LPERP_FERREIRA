import { Post } from './../@shared/models/post';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  collapsed: boolean;

  @Input() post: Post;
  @Output() newItemEvent = new EventEmitter<Post>();

  constructor() { }

  onDeleteButton(){
    this.newItemEvent.emit(this.post);
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    //TODO
  }

  toggle() {

  }

}
