import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { CourseService } from 'src/app/main/services/course.service';
import { CourseActions } from '../actions/course-actions.actions';



@Injectable()
export class CourseViewEffectEffects {
  loadCourseActions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadCourseActions),
      mergeMap(({ studentId }) =>
        this.courseService.getCoursesByStudentId(studentId).pipe(
          map((courses) => CourseActions.loadCourseActionsSuccess({ courses })),
          catchError((error) =>
            of(CourseActions.loadCourseActionsFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}
}
