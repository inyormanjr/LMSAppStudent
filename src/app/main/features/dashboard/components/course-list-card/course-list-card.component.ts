import { Component, Input } from '@angular/core';
import { Course } from 'src/app/main/models/course';

@Component({
  selector: 'app-course-list-card',
  templateUrl: './course-list-card.component.html',
  styleUrls: ['./course-list-card.component.css'],
})
export class CourseListCardComponent {

  @Input() courses: Course[];

  constructor() {
    this.courses = [];
  }

  viewDetails(course: any) {
    // Implement the logic to view course details
    console.log('View details of:', course);
  }
}
