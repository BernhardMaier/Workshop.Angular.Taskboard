import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { State } from '../state';
import { Observable } from 'rxjs';

@Component({
  selector: 'tb-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() state: State;
  @Input() tasks: Task[];

  constructor() { }

  ngOnInit(): void {
  }

}
