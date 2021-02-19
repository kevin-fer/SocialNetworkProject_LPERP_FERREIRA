import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from './../@shared/models/post';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<Post>();

 // value2transfert: Post;

  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    link: new FormControl('')
  });

  // tslint:disable-next-line: typedef
  addNewItem(/*title: string, description: string, link: string*/) {
    /*this.value2transfert.title = title;
    this.value2transfert.description = description;
    this.value2transfert.link = link;
    console.log('Test 1' + title);
    console.log('Test 2' + this.value2transfert.title);
    */this.newItemEvent.emit(this.postForm.value);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.postForm.value);

  }

  constructor() {

  }

  ngOnInit(): void {

  }

}
function value(value: any) {
  throw new Error('Function not implemented.');
}

