import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
// PRoperties

username:string;
favcolor : string;
Myalign :string;

//Constructor
constructor(){
  this.username='Irshath';
  this.favcolor='Blue';
  this.Myalign ='Right'
}


//Method

ClickMe(){
  alert('You have clicked on the click!!')
}
}
