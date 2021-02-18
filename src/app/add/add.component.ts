import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  title = new FormControl('');

  addPost (): void {

    
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
