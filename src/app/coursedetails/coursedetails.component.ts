import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent {
  courseid:any
  course:any
  
  constructor(private courseservice:CourseService, private route:ActivatedRoute){
  
  }
  ngOnInit(){
    this.route.paramMap.subscribe((params)=>{
      this.courseid =params.get('cno');
    this.course = this.courseservice.getcoursebyId(this.courseid);
  })
  console.log('coursedetails',this.course);
  
  }
}
