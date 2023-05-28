import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAnnouncementBoardCardComponent } from './dashboard-announcement-board-card.component';

describe('DashboardAnnouncementBoardCardComponent', () => {
  let component: DashboardAnnouncementBoardCardComponent;
  let fixture: ComponentFixture<DashboardAnnouncementBoardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAnnouncementBoardCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAnnouncementBoardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
