import { Post } from './../@shared/models/post';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
// @Author Kévin Ferreira
export class PostComponent implements OnInit, OnDestroy {

  collapsed: boolean;

  @Input() post: Post;
  @Output() newItemEvent = new EventEmitter<Post>();
  @Output() editEvent = new EventEmitter<Post>();
 // @Output() query = new EventEmitter<boolean>();

  constructor() {

   }

  onDeleteButton(){
   // this.query.emit(false);
    this.newItemEvent.emit(this.post);
  }
  onEditButton() {
   // this.query.emit(true);
    this.editEvent.emit(this.post);
  }
  ngOnInit(): void {

  }

  ngOnDestroy() {
    //TODO
  }

}
