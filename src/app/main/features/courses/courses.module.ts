import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesViewComponent } from './courses-view/courses-view.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromCourseStore from './ngrx/reducers';
import { EffectsModule } from '@ngrx/effects';
import { CourseViewEffectEffects } from './ngrx/effects/course-view-effect.effects';
import { CourseDetailViewComponent } from './course-detail-view/course-detail-view.component';

const route: Routes = [
  { path: '', component: CoursesViewComponent },
  { path: ':courseId/course', component: CourseDetailViewComponent },
];

@NgModule({
  declarations: [
    CoursesViewComponent,
    CourseDetailViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    StoreModule.forFeature(fromCourseStore.courseStoreFeatureKey, fromCourseStore.reducers, { metaReducers: fromCourseStore.metaReducers }),
    EffectsModule.forFeature([CourseViewEffectEffects])
  ]
})
export class CoursesModule { }
