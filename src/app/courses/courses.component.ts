import { Component } from '@angular/core';
import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  allcourse:any
  //Inject the service
constructor(private course:SharedataService){
  this.allcourse = this.course.courses;
  console.log(this.allcourse)
}
}
