import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService]
})
export class TodoListComponent {
  todoForm: FormGroup;
  constructor(
    private todoService: TodoService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  todoList = this.todoService.getTodoList();

  removeTodo = this.todoService.removeTodo;

  addTodo = this.todoService.addTodo;

  createForm() {
    this.todoForm = this.fb.group({
      target: ['', [Validators.required]],
      description: ['', []]
    });
  }

  goTotodo(todo: any) {
    this.router.navigate(['/todo', todo.id]);
  }

  submitForm(): void {

    this.addTodo(this.todoForm.value.target, this.todoForm.value.description);
    this.todoForm.reset();
  }

  onCl(input, text) {
    this.addTodo(input.value, text.value);
    input.value = null;
    text.value = null;
  }

  existingTodoList(value: boolean) {
    return this.todoList.filter((item) => item.isRemoved === !value);
  }
}
