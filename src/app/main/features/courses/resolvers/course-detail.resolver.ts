import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Course } from 'src/app/main/models/course';
import { catchError, map } from 'rxjs/operators';
import { CourseService } from 'src/app/main/services/course.service';

@Injectable({
  providedIn: 'root',
})
export class CourseDetailResolver implements Resolve<Course> {
  constructor(private courseService: CourseService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Course> {
    const courseId = route.params['courseId'];
    return this.courseService.getCourseById(courseId).pipe(
      map((course) => course),
      catchError(() => of())
    );
  }
}
