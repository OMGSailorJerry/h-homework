import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
    todoDetailsForm: FormGroup;

  constructor(
      private route: ActivatedRoute,
      private todoService: TodoService,
      private authService: AuthService,
      private fb: FormBuilder
    ) {
      this.createForm();
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'] - 1;
      this.todo = this.todoService.getTodoList()[this.id];
      if (this.todo) {
        this.todoDetailsForm.setValue({
          target:    this.todo.target,
          description: this.todo.description
        });
      }
    });
  }

  createForm() {
    this.todoDetailsForm = this.fb.group({
      target: ['', [Validators.required]],
      description: ['', []]
    });
  }

  doneItem() {
      this.todo.isDone = !this.todo.isDone;
  }

  removeItem() {
    this.todo.isRemoved = true;
  }

  submitForm() {
    this.todo.target = this.todoDetailsForm.value.target;
    this.todo.description = this.todoDetailsForm.value.description;
  }
}
