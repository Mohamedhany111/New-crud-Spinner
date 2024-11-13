import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListType } from './interfaces/list-type';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }
  private readonly todoForUpdate =new BehaviorSubject<ListType |null>(null)
  readonly todoForUpdate$ = this.todoForUpdate.asObservable()
  setTodo(todo: ListType | null) {
    this.todoForUpdate.next(todo)
  }
  private readonly updatedTodoSubject = new BehaviorSubject<ListType | null>(null);
  readonly updatedTodo$ = this.updatedTodoSubject.asObservable();

  updatedTodo(todo: ListType | null) {
    this.updatedTodoSubject.next(todo);
  }
}
