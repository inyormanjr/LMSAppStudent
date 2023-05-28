import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-exercises-list-card',
  templateUrl: './dashboard-exercises-list-card.component.html',
  styleUrls: ['./dashboard-exercises-list-card.component.css'],
})
export class DashboardExercisesListCardComponent {
  exercises = [
    { exerciseName: 'Exercise 1', points: 10, exerciseId: 1 },
    { exerciseName: 'Exercise 2', points: 20, exerciseId: 2 },
    { exerciseName: 'Exercise 3', points: 15, exerciseId: 3 },
    // Add more exercises as needed
  ];

  viewDetails(exerciseId: number) {
    // Implement the logic to view exercise details
    console.log('View details of exercise with ID:', exerciseId);
  }
}
