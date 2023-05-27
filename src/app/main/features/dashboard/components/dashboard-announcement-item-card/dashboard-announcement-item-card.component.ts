import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-announcement-item-card',
  templateUrl: './dashboard-announcement-item-card.component.html',
  styleUrls: ['./dashboard-announcement-item-card.component.css'],
})
export class DashboardAnnouncementItemCardComponent {
  @Input() title: string ='';
  @Input() description: string = '';
  @Input() dateTimeCreated: string = '';
}
