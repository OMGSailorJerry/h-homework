import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodoDetailsComponent } from './todo/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo/todo.service';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule
  ],
  declarations: [
    TodoDetailsComponent,
    TodoListComponent
  ],
  providers: [ TodoService ],
})
export class TodosModule { }
