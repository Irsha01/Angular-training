import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
Courses:any;
coursedata:any;
  constructor() {
    this.Courses =[
      {
          "id": "C01",
          "name": "Angular Training",
          "duration": "1 hr",
          "status": "Completed"
      },
      {
          "id": "C02",
          "name": "Java Script",
          "duration": "1 hr",
          "status": "Completed"
      },
      {
          "id": "C03",
          "name": "Typescript",
          "duration": "2 hr",
          "status": "Inprogress"
      },
      {
          "id": "C04",
          "name": "Java",
          "duration": "3 hr",
          "status": "Completed"
      },
      {
          "id": "C05",
          "name": "Springboot",
          "duration": "2 hr",
          "status": "Yet to Start"
      },
      {
          "id": "C06",
          "name": "Web development",
          "duration": "1 hr",
          "status": "Completed"
      }
  ]
   }


///method to fetch the course details by courseid
   getcoursebyId(courseid:string){  ///C01
for(let i=0;i<this.Courses.length;i++){
  if(this.Courses[i].id ==courseid ){
    this.coursedata =this.Courses[i];
    return this.coursedata;
  }
}
   }
}
