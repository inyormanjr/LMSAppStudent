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

  showExercise: boolean = false;
  moduleDiscussionResult?: ModuleDiscussionResult;
  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {
    activatedRoute.params.subscribe(x => {
      const { moduleId, page } = x;
      this.courseService
        .getModuleDiscussionByPage(moduleId, page)
        .subscribe((x) => {
           if (this.showExercise == true) {
             this.showExercise = false;
           }
          this.moduleDiscussionResult = x;
        });
    });
  }

  replaceQBlank(input: string) {
        return input.replace('[q-blank]', '__');
  }

  toggleExerciseContent(discussionId?: string): void {
    this.showExercise = !this.showExercise;
    //if(discussionId)
    //this.courseService.getExerciseByDiscussionId(discussionId).subscribe(x => console.log(x));

  }
}
