import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursecomponentComponent } from './coursecomponent/coursecomponent.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DirectiveComponent } from './directive/directive.component';
import { CustomDirective } from './custom.directive';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipe } from './custom.pipe';
import { SharedataService } from './sharedata.service';
import { CoursesComponent } from './courses/courses.component';
import { HttppageComponent } from './httppage/httppage.component';
import {HttpClientModule} from '@angular/common/http';
import { LearnobservableComponent } from './learnobservable/learnobservable.component';
import { ObservableoperatorComponent } from './observableoperator/observableoperator.component';
import { PostdatasComponent } from './postdatas/postdatas.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactivefromComponent } from './reactivefrom/reactivefrom.component'

@NgModule({
  declarations: [
    AppComponent,
    CoursecomponentComponent,
    DatabindingComponent,
    LoginComponent,
    DirectiveComponent,
    CustomDirective,
    PipeComponent,
    CustomPipe,
    CoursesComponent,
    HttppageComponent,
    LearnobservableComponent,
    ObservableoperatorComponent,
    PostdatasComponent,
    CoursedetailsComponent,
    TemplateformComponent,
    ReactivefromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SharedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
