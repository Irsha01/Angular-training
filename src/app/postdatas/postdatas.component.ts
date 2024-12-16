import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-postdatas',
  templateUrl: './postdatas.component.html',
  styleUrls: ['./postdatas.component.css']
})
export class PostdatasComponent {
Postdata:any;

constructor(private httpservice:HttpService){
this.getallpost()
}


getallpost(){
this.httpservice.getallposts().subscribe((values)=>this.Postdata=values)
}
}
