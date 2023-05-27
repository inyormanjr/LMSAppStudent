import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAnnouncementCardComponent } from './dashboard-announcement-card.component';

describe('DashboardAnnouncementCardComponent', () => {
  let component: DashboardAnnouncementCardComponent;
  let fixture: ComponentFixture<DashboardAnnouncementCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAnnouncementCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAnnouncementCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
