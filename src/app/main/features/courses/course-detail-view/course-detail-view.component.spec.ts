import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailViewComponent } from './course-detail-view.component';

describe('CourseDetailViewComponent', () => {
  let component: CourseDetailViewComponent;
  let fixture: ComponentFixture<CourseDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
