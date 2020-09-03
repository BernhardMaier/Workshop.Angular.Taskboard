import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Task } from '../task';
import { Subscription } from 'rxjs';
import { TaskDataService } from '../task-data.service';
import { Operation } from '../operation';

@Component({
  selector: 'tb-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit, OnDestroy {
  sink = new Subscription();
  @Input() taskGuid: string;
  @Output() refreshRequest = new EventEmitter();
  task: Task;

  constructor(private taskDataService: TaskDataService) { }

  ngOnDestroy(): void {
    this.sink.unsubscribe();
  }

  ngOnInit(): void {
    this.sink.add(this.taskDataService.getTaskByGuid(this.taskGuid).subscribe(task => {
      this.task = task;
    }));
  }

  deleteTask(): void {
    this.sink.add(this.taskDataService.deleteTaskByGuid(this.task.guid).subscribe(() => {
      this.refreshRequest.emit();
    }));
  }

  favorOrDisfavourTask(): void {
    const operation: Operation = (this.task.isFavorite) ? 'disfavor' : 'favor';
    this.sink.add(this.taskDataService.updateTask(this.task.guid, operation).subscribe(() => {
      this.refreshRequest.emit();
    }));
  }

  moveTaskNext(): void {
    const operation = getNextTaskStateOperation(this.task);
    if (operation) {
      this.sink.add(this.taskDataService.updateTask(this.task.guid, operation).subscribe(() => {
        this.refreshRequest.emit();
      }));
    }
  }

  moveTaskBack(): void {
    const operation = getPreviousTaskStateOperation(this.task);
    if (operation) {
      this.sink.add(this.taskDataService.updateTask(this.task.guid, operation).subscribe(() => {
        this.refreshRequest.emit();
      }));
    }
  }
}

function getNextTaskStateOperation(task: Task): Operation {
  if (task.isComplete) {
    return null;
  } else if (task.isInProgress) {
    return 'complete';
  }

  return 'proceed';
}

function getPreviousTaskStateOperation(task: Task): Operation {
  if (task.isComplete) {
    return 'proceed';
  } else if (task.isInProgress) {
    return 'reset';
  }
  return null;
}
