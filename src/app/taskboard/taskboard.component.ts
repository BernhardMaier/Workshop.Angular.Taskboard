import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from './task';
import { State } from './state';
import { TaskDataService } from './task-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tb-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit, OnDestroy {
  sink = new Subscription();
  tasks: Task[];
  stateToDo: State = 'ToDo';
  stateDoing: State = 'Doing';
  stateDone: State = 'Done';

  constructor(private taskDataService: TaskDataService) { }

  ngOnDestroy(): void {
    this.sink.unsubscribe();
  }

  ngOnInit(): void {
    this.sink.add(this.taskDataService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    }));
  }
}
