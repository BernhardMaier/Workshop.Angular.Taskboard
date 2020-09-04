import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/taskboard'
  },
  {
    path: 'taskboard',
    loadChildren: () => import('./taskboard/taskboard.module').then(m => m.TaskboardModule) // LazyLoading
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
