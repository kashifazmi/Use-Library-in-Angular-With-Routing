import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  firstName = new FormControl('');
  lastName = new FormControl('');
  emailId = new FormControl('');
  password = new FormControl('');

  constructor() { }

  ngOnInit() {
    this.firstName.setValue('Kashif');
  }

  SubmitDetails() {
    this.firstName.setValue('Hi User');
  }

}
