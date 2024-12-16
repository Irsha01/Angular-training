import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
username:string;
address:string;
facility:string;
hobbies:any;
dateofjoing:Date;
salary:number;
gender:string;


constructor(){
  this.username='irshath';
  this.address='BANGALORE';
  this.facility='BDC7A';
  this.hobbies=['Football', 'Volleyball', 'Cricket', 'Travel'];
  this.dateofjoing=new Date('11-04-2024');
  this.salary=90000.234;
  this.gender='M';
}
}
