import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { State } from '../state';

@Component({
  selector: 'tb-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() state: State;
  @Input() tasks: Task[];
  @Output() refreshRequest = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  catchRefreshRequest(): void {
    this.refreshRequest.emit();
  }
}
