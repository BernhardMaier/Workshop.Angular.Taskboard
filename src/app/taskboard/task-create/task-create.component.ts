import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskDataService } from '../task-data.service';
import { newTask } from '../task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tb-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit, OnDestroy {
  sink = new Subscription();
  form: FormGroup;
  @Output() refreshRequest = new EventEmitter();

  constructor(private fb: FormBuilder, private taskboardService: TaskDataService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required]
    });
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe();
  }

  create(): void {
    const task = { ...newTask(), ...this.form.value };
    this.sink.add(this.taskboardService.createTask(task).subscribe());
    this.refreshRequest.emit();
  }
}
