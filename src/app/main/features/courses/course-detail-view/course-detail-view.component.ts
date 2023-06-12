import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoursesState } from '../ngrx/reducers';
import { Observable, map } from 'rxjs';
import { Course } from 'src/app/main/models/course';
import { MainStoreState } from 'src/app/main-feature/reducers';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { CourseSelectors } from '../ngrx/selectors/courses-selector.selectors';
import { Module } from 'src/app/main/models/module';
import { CourseService } from 'src/app/main/services/course.service';
import { ModalService } from 'src/app/services/modal.service';
import { DiscussionViewerSingleComponent } from '../discussion-viewer-single/discussion-viewer-single.component';

@Component({
  selector: 'app-course-detail-view',
  templateUrl: './course-detail-view.component.html',
  styleUrls: ['./course-detail-view.component.css'],
})
export class CourseDetailViewComponent implements OnInit {
  currentCourse?: Course;
  modules?: Module[];
  activeModuleIndex?: number;


  selectedCourse$: Observable<Course | null>;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private store: Store<CoursesState>,
    private mainStore: Store<MainStoreState>,
  ) {
    this.selectedCourse$ = this.store.select(CourseSelectors.selectedCourse);
    const res = route.data.subscribe((data) => {
      const { course } = data;
      this.currentCourse = course;
      this.courseService
        .getModulesByCourseId(course.courseId)
        .subscribe((x) => {
          this.modules = x;
        });
    });
  }
  ngOnInit(): void {
  }

  setActiveModule(index: number) {
    this.activeModuleIndex = index ?? null;
  }
}
