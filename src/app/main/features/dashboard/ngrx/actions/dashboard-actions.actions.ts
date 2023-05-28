import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Course } from 'src/app/main/models/course';


export const dashboardCoursesActions = createActionGroup({
  source: 'DashboardCourseActions',
  events: {
    'Load Dashboard Courses': props < {studentId: string}>(),
    'Load Dashboard Courses Success': props<{ courses: Course[] }>(),
    'Load Dashboard Courses Failure': props<{ error: any }>(),
  },
});
