import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent {
  constructor(private todoService: TodoService) {}

  todoList = this.todoService.getTodoList();

  removeTodo = this.todoService.removeTodo;

  addTodo = this.todoService.addTodo;
}
