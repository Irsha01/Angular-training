import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdatasComponent } from './postdatas.component';

describe('PostdatasComponent', () => {
  let component: PostdatasComponent;
  let fixture: ComponentFixture<PostdatasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostdatasComponent]
    });
    fixture = TestBed.createComponent(PostdatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
