import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TodoService } from './todo.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: [],
  providers: [TodoService]
})
export class TodoDetailsComponent implements OnInit {
    private id: number;
    private todo;

  constructor(
      private route: ActivatedRoute,
      private todoService: TodoService,
      private authService: AuthService
    ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'] - 1;
      this.todo = this.todoService.getTodoList()[this.id];
    });
  }

  doneItem(todo) {
      todo.isDone = !todo.isDone;
  }

  removeItem(todo) {
    todo.isRemoved = true;
  }

  submitForm(form: NgForm) {
    this.todo.target = form.value.target;
    this.todo.description = form.value.description;
  }
}
