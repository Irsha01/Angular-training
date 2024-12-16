import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {
Login(formdata:any){
alert(`welcome ${formdata.username}!!`)
alert(`You OTP is ${formdata.security.otp}`)
}
}
