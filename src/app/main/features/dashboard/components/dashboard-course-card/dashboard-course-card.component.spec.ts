import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCourseCardComponent } from './dashboard-course-card.component';

describe('DashboardCourseCardComponent', () => {
  let component: DashboardCourseCardComponent;
  let fixture: ComponentFixture<DashboardCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCourseCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
