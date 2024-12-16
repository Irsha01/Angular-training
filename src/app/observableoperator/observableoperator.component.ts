import { Component } from '@angular/core';
import { filter, map, Observable, reduce } from 'rxjs';

@Component({
  selector: 'app-observableoperator',
  templateUrl: './observableoperator.component.html',
  styleUrls: ['./observableoperator.component.css']
})
export class ObservableoperatorComponent {
obs$ : Observable<number> =new Observable<number>();
output:any
ngOnInit(){
  this.obs$=new Observable((observer)=>{
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);
    observer.next(6);
    observer.next(7);
    observer.complete();
  }).pipe(filter((x:any)=>x%2!=0),map(y=>y**2),reduce((acc,z)=>acc+z,0));


  //subscribe
  this.obs$.subscribe({next:(val)=>
    this.output= val
   // console.log(`the output is ${val}`)
  })
}
}
