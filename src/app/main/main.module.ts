import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';
import { RouterModule, Routes } from '@angular/router';


const route: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../main/features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'courses',
        loadChildren: () =>
          import('../main/features/courses/courses.module').then(
            (m) => m.CoursesModule
          ),
      },
      {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
    ],
  },
];
@NgModule({
  declarations: [
    MainViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class MainModule { }
