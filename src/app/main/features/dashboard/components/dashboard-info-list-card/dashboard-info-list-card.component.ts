import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-info-list-card',
  templateUrl: './dashboard-info-list-card.component.html',
  styleUrls: ['./dashboard-info-list-card.component.css'],
})
export class DashboardInfoListCardComponent {
  @Input() title: string ='';
  @Input() subtitle: string ='';
  @Input() items: any[] = [];
  @Input() buttonLabel: string = '';
}
