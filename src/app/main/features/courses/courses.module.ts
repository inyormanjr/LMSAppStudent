import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesViewComponent } from './courses-view/courses-view.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromCourseStore from './ngrx/reducers';
import { EffectsModule } from '@ngrx/effects';
import { CourseViewEffectEffects } from './ngrx/effects/course-view-effect.effects';
import { CourseDetailViewComponent } from './course-detail-view/course-detail-view.component';
import { CourseDetailResolver } from './resolvers/course-detail.resolver';
import { DiscussionViewerComponent } from './discussion-viewer/discussion-viewer.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { DiscussionViewerSingleComponent } from './discussion-viewer-single/discussion-viewer-single.component';

const route: Routes = [
  { path: '', component: CoursesViewComponent },
  {
    path: ':courseId/course',
    component: CourseDetailViewComponent,
    resolve: { course: CourseDetailResolver },
  },
  { path: ':moduleId/discussion', component: DiscussionViewerSingleComponent },
  {path: 'module/:moduleId/discussion/:page', component: DiscussionViewerSingleComponent }
];

@NgModule({
  declarations: [
    CoursesViewComponent,
    CourseDetailViewComponent,
    DiscussionViewerComponent,
    DiscussionsComponent,
    DiscussionViewerSingleComponent
  ],
  providers: [CourseDetailResolver],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    StoreModule.forFeature(fromCourseStore.courseStoreFeatureKey, fromCourseStore.reducers, { metaReducers: fromCourseStore.metaReducers }),
    EffectsModule.forFeature([CourseViewEffectEffects])
  ],
})
export class CoursesModule { }
