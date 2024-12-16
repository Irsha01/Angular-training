import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-httppage',
  templateUrl: './httppage.component.html',
  styleUrls: ['./httppage.component.css']
})
export class HttppageComponent {
users :any;
constructor (private httpservice:HttpService){
 
}

getusersdetails (){
  this.httpservice.getusers().subscribe((data)=>this.users=data)
  console.log(this.users);
  
}
}
