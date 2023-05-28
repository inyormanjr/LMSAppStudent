import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCourseCardComponent } from './components/dashboard-course-card/dashboard-course-card.component';
import { DashboardAnnouncementItemCardComponent } from './components/dashboard-announcement-item-card/dashboard-announcement-item-card.component';
import { DashboardAnnouncementCardComponent } from './components/dashboard-announcement-card/dashboard-announcement-card.component';
import { StoreModule } from '@ngrx/store';
import * as fromDashboardStore from './ngrx/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffectEffects } from './ngrx/effects/dashboard-effect.effects';
import { CourseListCardComponent } from './components/course-list-card/course-list-card.component';
import { DashboardExercisesListCardComponent } from './components/dashboard-exercises-list-card/dashboard-exercises-list-card.component';
import { DashboardInfoListCardComponent } from './components/dashboard-info-list-card/dashboard-info-list-card.component';
import { DashboardAnnouncementBoardCardComponent } from './components/dashboard-announcement-board-card/dashboard-announcement-board-card.component';


const route: Routes = [{path: '', component: DashboardViewComponent}];
@NgModule({
  declarations: [
    DashboardViewComponent,
    DashboardCourseCardComponent,
    DashboardAnnouncementCardComponent,
    DashboardAnnouncementItemCardComponent,
    CourseListCardComponent,
    DashboardExercisesListCardComponent,
    DashboardInfoListCardComponent,
    DashboardAnnouncementBoardCardComponent
  ],
  exports: [],
  imports: [CommonModule, RouterModule.forChild(route), StoreModule.forFeature(fromDashboardStore.dashboardStoreFeatureKey, fromDashboardStore.reducers, { metaReducers: fromDashboardStore.metaReducers }), EffectsModule.forFeature([DashboardEffectEffects])],
})
export class DashboardModule {}
