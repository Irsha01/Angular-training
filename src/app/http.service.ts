import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
userendpoint :any
postdatas:any
  constructor(private http:HttpClient) {
    this.userendpoint='https://jsonplaceholder.typicode.com/users';
    this.postdatas ='https://jsonplaceholder.typicode.com/posts'

   }

   getusers(){
    return this.http.get(this.userendpoint)
   }

   getallposts(){
    return this.http.get(this.postdatas)
   }
    
   
}
