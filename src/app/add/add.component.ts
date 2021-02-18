import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  postForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    link: new FormControl('')
  });

  addPost(): void {


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
