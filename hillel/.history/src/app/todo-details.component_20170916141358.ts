import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService } from './todo.service';

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
        private todoService: TodoService
      ) {}

    sub = this.route.params.subscribe(params => {
        this.id = +params['id'] - 1;
        this.todo = this.todoService.getTodoList()[this.id];
    });

    removeItem(todo) {
        todo.isDone = !todo.isDone;
    }
}
