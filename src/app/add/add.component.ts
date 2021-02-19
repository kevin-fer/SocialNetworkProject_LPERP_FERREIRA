import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from './../@shared/models/post';
import { IdGeneratorUtils } from './../@shared/utils/id-generator.utils';
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

    const post: Post = {
      id: IdGeneratorUtils.uuidv4(),
      link: this.postForm.get('link').value,
      title: this.postForm.get('title').value,
      description: this.postForm.get('description').value
    }

    //this.newItemEvent.emit(this.postForm.value);
    this.newItemEvent.emit(post);
    this.postForm.reset({
      title: {value: '', disabled: false},
      description: {value: '', disabled: false},
      link: {value: '', disabled: false}
    });
  }

  addPost() {
    //const post: Post

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

