import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivefromComponent } from './reactivefrom.component';

describe('ReactivefromComponent', () => {
  let component: ReactivefromComponent;
  let fixture: ComponentFixture<ReactivefromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactivefromComponent]
    });
    fixture = TestBed.createComponent(ReactivefromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
