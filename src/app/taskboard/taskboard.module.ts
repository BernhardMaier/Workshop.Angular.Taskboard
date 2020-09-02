import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskCreateComponent } from './task-create/task-create.component';



@NgModule({
  declarations: [TaskListComponent, TaskCardComponent, TaskCreateComponent],
  imports: [
    CommonModule
  ]
})
export class TaskboardModule { }
