import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../auth/auth.service';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService]
})
export class TodoListComponent {
  constructor(
    private todoService: TodoService,
    private router: Router,
    private authService: AuthService
  ) { }

  todoList = this.todoService.getTodoList();

  removeTodo = this.todoService.removeTodo;

  addTodo = this.todoService.addTodo;

  isAuth = this.authService.isAuth;

  goTotodo(todo: any) {
    this.router.navigate(['/todo', todo.id]);
  }

  submitForm(form: NgForm) {
    this.addTodo(form.value.target, form.value.description);
    form.reset();
  }

  existingTodoList(value: boolean) {
    return this.todoList.filter((item) => item.isRemoved === !value);
  }
}
