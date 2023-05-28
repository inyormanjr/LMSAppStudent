import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInfoListCardComponent } from './dashboard-info-list-card.component';

describe('DashboardInfoListCardComponent', () => {
  let component: DashboardInfoListCardComponent;
  let fixture: ComponentFixture<DashboardInfoListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInfoListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInfoListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
