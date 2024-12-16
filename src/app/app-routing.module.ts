import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { CoursecomponentComponent } from './coursecomponent/coursecomponent.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { HttppageComponent } from './httppage/httppage.component';
import { LearnobservableComponent } from './learnobservable/learnobservable.component';
import { ObservableoperatorComponent } from './observableoperator/observableoperator.component';
import { PipeComponent } from './pipe/pipe.component';
import { PostdatasComponent } from './postdatas/postdatas.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactivefromComponent } from './reactivefrom/reactivefrom.component';

const routes: Routes = [
  {path:'course' ,component:CoursesComponent, children :[{path: ':cno', component :CoursedetailsComponent}]},
  {path:'coursecomp' ,component:CoursecomponentComponent},
  {path:'databinding' ,component:DatabindingComponent},
  {path:'directive' ,component:DirectiveComponent},
  {path:'httppage' ,component:HttppageComponent},
  {path:'observable' ,component:LearnobservableComponent},
  {path:'postdata' ,component:PostdatasComponent},
  {path:'observableoperator' ,component:ObservableoperatorComponent},
  {path:'pipe' ,component:PipeComponent},
  {path:'template' ,component:TemplateformComponent},
  {path:'reactive' ,component:ReactivefromComponent},
  {path:'' ,component:LoginComponent},
  {path:'**' ,component:CoursesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
