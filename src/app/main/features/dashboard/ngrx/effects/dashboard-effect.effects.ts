import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { CourseService } from 'src/app/main/services/course.service';
import { dashboardCoursesActions } from '../actions/dashboard-actions.actions';



@Injectable()
export class DashboardEffectEffects {
  loadDashboardCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dashboardCoursesActions['loadDashboardCourses']),
      mergeMap(({ studentId }) =>
        this.courseService.getCoursesByStudentId().pipe(
          map((courses) =>
            dashboardCoursesActions['loadDashboardCoursesSuccess']({
              courses,
            })
          ),
          catchError((error) =>
            of(
              dashboardCoursesActions['loadDashboardCoursesFailure']({
                error,
              })
            )
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
