import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodoDetailsComponent } from './todo/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo/todo.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TodoDetailsComponent,
    TodoListComponent
  ],
  providers: [ TodoService, AuthService ],
  exports: [
    TodoListComponent,
    TodoDetailsComponent
  ]
})
export class TodosModule { }
