import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  getCourses() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}
  private baseUrl = environment.api_uri; // Replace with your API base URL

  getCoursesByStudentId(studentId: string): Observable<Course[]> {
    const url = `${this.baseUrl}/students/${studentId}/courses`;
    return this.http.get<Course[]>(url);
  }

}
