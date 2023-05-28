import { Component, Input } from '@angular/core';
import { Announcement } from 'src/app/main/models/anouncement';

@Component({
  selector: 'app-dashboard-announcement-board-card',
  templateUrl: './dashboard-announcement-board-card.component.html',
  styleUrls: ['./dashboard-announcement-board-card.component.css'],
})
export class DashboardAnnouncementBoardCardComponent {
  @Input() items:Announcement[] = [];
}
