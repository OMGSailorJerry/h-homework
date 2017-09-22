import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  implements OnInit {
  // constructor(private todoService: TodoService) {}

  // todoList = this.todoService.getTodoList();

  // removeTodo = this.todoService.removeTodo;

  // addTodo = this.todoService.addTodo;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
