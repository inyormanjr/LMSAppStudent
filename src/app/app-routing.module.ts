import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../app/login/login.module').then((x) => x.LoginModule),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('../app/main/main.module').then((x) => x.MainModule),
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
