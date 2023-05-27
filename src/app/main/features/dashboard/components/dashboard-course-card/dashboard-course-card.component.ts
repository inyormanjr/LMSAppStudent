import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-course-card',
  templateUrl: './dashboard-course-card.component.html',
  styleUrls: ['./dashboard-course-card.component.css'],
})
export class DashboardCourseCardComponent {
  @Input() courseTitle: string = '';
  @Input() subTitle: string = '';
  @Input() instructor: string = '';
  @Input() progress: number = 0;
}
