import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({	@Component({
    selector: 'app-contact',	  selector: 'app-contact',
    @@ -7,9 +8,22 @@ import { Component, OnInit } from '@angular/core';
})	})
export class ContactComponent implements OnInit {	export class ContactComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    gender: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    marital: new FormControl(''),
    description: new FormControl('',Validators.required)
  });
  constructor() { }	  constructor() { }
  ngOnInit() {	  ngOnInit() {
  }
  }
  onSubmit(){
    console.log(this.profileForm.value);
  }
}	}
