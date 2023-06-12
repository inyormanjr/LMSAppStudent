import { Component, Input } from '@angular/core';
import { Exercise } from 'src/app/main/models/course.details';
import { Module } from 'src/app/main/models/module';

@Component({
  selector: 'app-discussion-viewer',
  templateUrl: './discussion-viewer.component.html',
  styleUrls: ['./discussion-viewer.component.css'],
})
export class DiscussionViewerComponent {
  @Input() module?: Module;

  _module: Module = {
    _id: '',
    module: 'Chapter One',
    discussions: [
      {
        _id: '',
        discussion: '',
        moduleId: '',
        title: 'Discussion 1',
        page: 0,
        exercise: {
          _id: '',
          discussionId: '',
          exerciseDetails: 'Exercise details',
          exerciseName: 'Exercise 1',
          exercise_status: '',
          instructions: 'Exercise instructions',
          points: '10',
        },
      },
      {
        _id: '',
        discussion: '',
        moduleId: '',
        title: 'Discussion 2',
        page: 0,
        exercise: {
          _id: '',
          discussionId: '',
          exerciseDetails: 'Exercise details',
          exerciseName: 'Exercise 2',
          exercise_status: '',
          instructions: 'Exercise instructions',
          points: '5',
        },
      },
      // Add more discussions if needed
    ],
    assessments: [],
  };

  flipped = false;

  currentDiscussionIndex: number = 0;
  showExercise: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showNextDiscussion(): void {
    if (this.showExercise == true) {
      this.showExercise = false;
    }
    if (this.currentDiscussionIndex < this._module.discussions.length - 1) {
      this.currentDiscussionIndex++;
    }
  }

  showPreviousDiscussion(): void {
    if (this.currentDiscussionIndex > 0) {
      this.currentDiscussionIndex--;
      this.showExercise = false;
    }
  }

  toggleExerciseContent(): void {
    this.showExercise = !this.showExercise;
  }
}
