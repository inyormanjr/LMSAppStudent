import { createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/main/models/course';
import { dashboardCoursesActions } from '../../actions/dashboard-actions.actions';


export const courseReducer = createReducer<Course[]>(
  [],
  on(dashboardCoursesActions['loadDashboardCourses'], () => []),
  on(
    dashboardCoursesActions['loadDashboardCoursesSuccess'],
    (_, { courses }) => courses
  ),
  on(dashboardCoursesActions['loadDashboardCoursesFailure'], () => [])
);

