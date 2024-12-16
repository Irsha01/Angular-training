import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `<div class="container mt-2">
    <div class="login">
      <h2>Login</h2>
      <form class="loginform">
        <div class="formGroup">
          <label for="username"><b>Username : </b></label>&nbsp;
          <input type="text" placeholder="Enter your name" name="username">
        </div>
        <div class="formGroup">
        <label for="password"><b>Password : </b></label>&nbsp;
        <input type="password" placeholder="Enter your name" name="password">
        </div>
        <button (click)="Loginn()" class="loginbtn">Login</button>
      </form>
    </div>
  </div>`,
   styles : [`
    .login{
      max-width : 400px;
      margin : auto;
      padding : 20px;
      border : 1px solid darkblue;
      border-radius : 8px;

    }

    .formGroup{
      margin-bottom : 15px;
    }


`],
 // styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Loginn(){
    alert('Loggin Successfull')
  }
}
