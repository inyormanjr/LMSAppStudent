import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { environment } from 'src/environments/environment';
import { Module } from '../models/module';
import { Discussion, Exercise } from '../models/course.details';
import { ModuleDiscussionResult } from '../models/module.discussion.result';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}
  private baseUrl = environment.api_uri; // Replace with your API base URL

  getCoursesByStudentId(): Observable<Course[]> {
    const url = `${this.baseUrl}/students/courses`;
    return this.http.get<Course[]>(url);
  }

  getCoursesByStudentIdAndParams(courseCode: string): Observable<Course[]> {
    const url = `${this.baseUrl}/students/courses?courseCode=${courseCode}`;
    return this.http.get<Course[]>(url);
  }

  getCourseById(courseId: string): Observable<Course> {
    const url = `${this.baseUrl}/students/courses/${courseId}`;
    return this.http.get<Course>(url);
  }

  getModulesByCourseId(courseId: string): Observable<Module[]> {
    const url = `${this.baseUrl}/students/course/${courseId}/modules`;
    return this.http.get<Module[]>(url);
  }

  getExerciseByDiscussionId(
    discussionId: string
  ): Observable<Exercise> {
    const url = `${this.baseUrl}/students/course/discussion/${discussionId}/exercise`;
    return this.http.get<Exercise>(url);
  }

  getModuleDiscussionByPage(
    moduleId: string,
    page: number
  ): Observable<ModuleDiscussionResult> {
    const url = `${this.baseUrl}/students/course/module/${moduleId}/discussion/page/${page}`;
    return this.http.get<ModuleDiscussionResult>(url);
  }
}
