import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-group',
  templateUrl: './form-control-group.component.html',
  styleUrls: ['./form-control-group.component.css']
})
export class FormControlGroupComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.compose([
      Validators.maxLength(25),
      Validators.minLength(5),
      Validators.required,
      Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$'), // <-- Allow letters and numbers only
    ])),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl(''),
      state: new FormControl('')
    })
  });

  profileFormBuillder = this.fbuilder.group({
    fname: [''],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']')]],
    address: this.fbuilder.group({
      street: [''],
      city: [''],
      zip: [''],
      state: ['']
    }),
  });

  constructor(private fbuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.profileFormBuillder.status);

  }

  updateProfile() {
    this.profileForm.value.lastName = 'Azmi Kashif';
    console.log('update last name', this.profileForm.value);

    this.profileForm.patchValue({
      firstName: 'kashif',
      address: {
        zip: '276288'
      }
    });
    console.log('update button', this.profileForm.value);
  }

  onSubmit() {
    console.log('submit button', this.profileForm.status);

    console.warn(this.profileForm.value);
  }

  onFBSubmit() {
    console.log(this.profileFormBuillder.status);
 
    console.log(this.profileFormBuillder.value);

  }

}
