import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
myfavcol:string;
flag:boolean;
smapledata:any;


constructor(){
  this.myfavcol='blue';
  this.flag=true
  this.smapledata=[
    {id:1,name:'Admin1',age:24},
    {id:2,name:'Admin2',age:25},
    {id:3,name:'Admin3',age:24},
    {id:4,name:'Admin4',age:24},
    {id:5,name:'Admin5',age:24},
    {id:6,name:'Admin6',age:24}
  ]
}

Toggleme(){
  this.flag =! this.flag
  
}
}
