import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesViewComponent } from './courses-view/courses-view.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromCourseStore from './ngrx/reducers';
import { EffectsModule } from '@ngrx/effects';
import { CourseViewEffectEffects } from './ngrx/effects/course-view-effect.effects';

const route: Routes = [{path: '', component: CoursesViewComponent}];

@NgModule({
  declarations: [
    CoursesViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    StoreModule.forFeature(fromCourseStore.courseStoreFeatureKey, fromCourseStore.reducers, { metaReducers: fromCourseStore.metaReducers }),
    EffectsModule.forFeature([CourseViewEffectEffects])
  ]
})
export class CoursesModule { }
