import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskboardComponent } from './taskboard.component';
import { TaskboardRoutingModule } from './taskboard-routing.module';



@NgModule({
  declarations: [TaskListComponent, TaskCardComponent, TaskCreateComponent, TaskboardComponent],
  imports: [
    CommonModule,
    TaskboardRoutingModule
  ]
})
export class TaskboardModule { }
