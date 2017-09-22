import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService } from './todo.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: [],
  providers: [TodoService]
})
export class TodoDetailsComponent {
    private id: number;
    private todo;

    constructor(
        private route: ActivatedRoute,
        private todoService: TodoService,
        private authService: AuthService
      ) {}

    sub = this.route.params.subscribe(params => {
        this.id = +params['id'] - 1;
        this.todo = this.todoService.getTodoList()[this.id];
    });

    doneItem(todo) {
        todo.isDone = !todo.isDone;
    }

    onSave(todo, date) {
      todo.due = date.value;
      date.value = null;
      console.log(todo.due);
    }

    removeItem(todo) {
      todo.isRemoved = true;
    }
}
