import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {
courses:any;
  constructor() {
    this.courses =[
  {id:'C01',name:'Angular Training',duration:'1 hr',status:'Completed'},
  {id:'C02',name:'Java Script',duration:'1 hr',status:'Completed'},
  {id:'C03',name:'Typescript',duration:'2 hr',status:'Inprogress'},
  {id:'C04',name:'Java',duration:'3 hr',status:'Completed'},
  {id:'C05',name:'Springboot',duration:'2 hr',status:'Yet to Start'},
  {id:'C06',name:'Web development',duration:'1 hr',status:'Completed'},
    ]
   }
}
