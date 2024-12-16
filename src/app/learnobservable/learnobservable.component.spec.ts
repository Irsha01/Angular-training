import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnobservableComponent } from './learnobservable.component';

describe('LearnobservableComponent', () => {
  let component: LearnobservableComponent;
  let fixture: ComponentFixture<LearnobservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnobservableComponent]
    });
    fixture = TestBed.createComponent(LearnobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
