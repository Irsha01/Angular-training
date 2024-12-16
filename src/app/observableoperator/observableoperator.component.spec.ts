import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableoperatorComponent } from './observableoperator.component';

describe('ObservableoperatorComponent', () => {
  let component: ObservableoperatorComponent;
  let fixture: ComponentFixture<ObservableoperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableoperatorComponent]
    });
    fixture = TestBed.createComponent(ObservableoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
