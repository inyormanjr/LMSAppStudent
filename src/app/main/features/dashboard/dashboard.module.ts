import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCourseCardComponent } from './components/dashboard-course-card/dashboard-course-card.component';
import { DashboardAnnouncementItemCardComponent } from './components/dashboard-announcement-item-card/dashboard-announcement-item-card.component';
import { DashboardAnnouncementCardComponent } from './components/dashboard-announcement-card/dashboard-announcement-card.component';


const route: Routes = [{path: '', component: DashboardViewComponent}];
@NgModule({
  declarations: [
    DashboardViewComponent,
    DashboardCourseCardComponent,
    DashboardAnnouncementCardComponent,
    DashboardAnnouncementItemCardComponent,
  ],
  exports: [],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class DashboardModule {}
