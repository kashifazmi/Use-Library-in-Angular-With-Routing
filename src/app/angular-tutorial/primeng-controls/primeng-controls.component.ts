import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-primeng-controls',
  templateUrl: './primeng-controls.component.html',
  styleUrls: ['./primeng-controls.component.css']
})
export class PrimengControlsComponent implements OnInit {

  primaryContactForm: FormGroup;

  constructor(private fbuilder: FormBuilder) { }

  ngOnInit() {
    this.primaryContactForm = this.fbuilder.group({
      preferred: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  SubmitRequest() {
    console.log(this.primaryContactForm.value);
    const value = JSON.stringify(this.primaryContactForm.value);
    console.warn(value, 'value');

  }

}
