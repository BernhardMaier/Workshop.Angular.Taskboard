import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskboardComponent } from './taskboard.component';

const routes: Routes = [
  { path: '', component: TaskboardComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskboardRoutingModule {}
