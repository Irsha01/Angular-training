import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivefrom',
  templateUrl: './reactivefrom.component.html',
  styleUrls: ['./reactivefrom.component.css']
})
export class ReactivefromComponent {

  Loginform : FormGroup;

  constructor(){
    this.Loginform= new FormGroup({
username: new FormControl('',[Validators.required,Validators.maxLength(20)]),
password : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
security : new FormGroup({
  captcha :new FormControl('',[Validators.required]),
  otp :new FormControl('',[Validators.required])
})

    })
  }

  Login(){
console.log('Reactive formdata',this.Loginform.value);

  }
}
