import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExercisesListCardComponent } from './dashboard-exercises-list-card.component';

describe('DashboardExercisesListCardComponent', () => {
  let component: DashboardExercisesListCardComponent;
  let fixture: ComponentFixture<DashboardExercisesListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardExercisesListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardExercisesListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
