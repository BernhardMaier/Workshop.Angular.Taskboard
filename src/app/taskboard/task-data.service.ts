import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';
import { Operation } from './operation';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>('http//:localhost:3000/tasks');
  }

  createTask(task: Task): Observable<Task>{
    return this.http.post<Task>('http//:localhost:3000/tasks/', task);
  }

  getTaskByGuid(guid: string): Observable<Task>{
    return this.http.get<Task>(`http//:localhost:3000/tasks/${guid}`);
  }

  deleteTaskByGuid(guid: string): Observable<Task>{
    return this.http.delete<Task>(`http//:localhost:3000/tasks/${guid}`);
  }

  updateTask(guid: string, operation: Operation): Observable<Task>{
    return this.http.put<Task>(`http//:localhost:3000/tasks/${operation}/${guid}`, null);
  }
}
