import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todo-list.component.html',
  styleUrls: [],
  providers: [TodoService]
})
export class TodoListComponent {
  constructor(private todoService: TodoService) {}

  todoList = this.todoService.getTodoList();

  removeTodo = this.todoService.removeTodo;

  addTodo = this.todoService.addTodo;
}
