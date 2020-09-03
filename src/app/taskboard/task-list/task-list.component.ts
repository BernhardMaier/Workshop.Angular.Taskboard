import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'tb-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(private tasks: Task[]) { }

  ngOnInit(): void {
  }

}
