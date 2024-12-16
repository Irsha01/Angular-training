import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttppageComponent } from './httppage.component';

describe('HttppageComponent', () => {
  let component: HttppageComponent;
  let fixture: ComponentFixture<HttppageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttppageComponent]
    });
    fixture = TestBed.createComponent(HttppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
