import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todo-list.component.html',
  styleUrls: [],
  providers: [TodoService]
})
export class TodoListComponent {
  constructor(
    private todoService: TodoService,
    private router: Router
  ) {}

  todoList = this.todoService.getTodoList();

  removeTodo = this.todoService.removeTodo;

  addTodo = this.todoService.addTodo;

  goTotodo(todo: any) {
    this.router.navigate(['/todo', todo.id]);
  }

  submitForm(form: any): void {
    this.addTodo(form.value.target, form.value.description);
    form.reset();
  }
}
