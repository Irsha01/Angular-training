import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learnobservable',
  templateUrl: './learnobservable.component.html',
  styleUrls: ['./learnobservable.component.css']
})
export class LearnobservableComponent {
data:any[]=[];
 

//Observable
obs$ =new Observable((observer)=>{
  console.log('Observable Starts from here...');
  setTimeout(()=>observer.next('Data1 Fetched'),1000)
  setTimeout(()=>observer.next('Data2 Fetched'),2000)
  setTimeout(()=>observer.next('Data3 Fetched'),3000)
  //setTimeout(()=>observer.error('Data3 Fetched'),4000) // Error accured
  setTimeout(()=>observer.next('Data4 Fetched'),4000)
  setTimeout(()=>observer.next('Data5 Fetched'),5000)
  //setTimeout(()=>observer.complete(),5000)// here i call complete for stop the process
  setTimeout(()=>observer.next('Data6 Fetched'),6000)
  
})

  Getobserverdata(){
    this.obs$.subscribe(
      (val)=>this.data.push(val), 
      (err)=>console.log('An error accured'), 
      ()=>alert('Observale Completed')
    )
  }
}
