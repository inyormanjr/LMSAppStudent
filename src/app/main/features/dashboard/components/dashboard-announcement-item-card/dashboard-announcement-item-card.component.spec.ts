import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAnnouncementItemCardComponent } from './dashboard-announcement-item-card.component';

describe('DashboardAnnouncementItemCardComponent', () => {
  let component: DashboardAnnouncementItemCardComponent;
  let fixture: ComponentFixture<DashboardAnnouncementItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAnnouncementItemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAnnouncementItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
