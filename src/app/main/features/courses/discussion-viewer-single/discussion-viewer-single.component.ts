import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Exercise } from 'src/app/main/models/course.details';
import { ModuleDiscussionResult } from 'src/app/main/models/module.discussion.result';
import { CourseService } from 'src/app/main/services/course.service';

@Component({
  selector: 'app-discussion-viewer-single',
  templateUrl: './discussion-viewer-single.component.html',
  styleUrls: ['./discussion-viewer-single.component.css'],
})
export class DiscussionViewerSingleComponent {
  discussion: string = 'Discussion content goes here';
  exercise: Exercise = {
    _id: '',
    discussionId: '',
    exerciseDetails: 'Exercise details',
    exerciseName: 'Exercise name',
    exercise_status: '',
    instructions: 'Exercise instructions',
    points: '10',
  };
  showExercise: boolean = false;
  moduleDiscussionResult?: ModuleDiscussionResult;
  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {
    activatedRoute.params.subscribe(x => {
      const { moduleId, page } = x;
      this.courseService
        .getModuleDiscussionByPage(moduleId, page)
        .subscribe((x) => this.moduleDiscussionResult = x);
    });
  }

  toggleExerciseContent(): void {
    this.showExercise = !this.showExercise;
  }
}
