import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoDetailsComponent } from './todo/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [{
  path: 'todo',
  component: TodoListComponent,
  children: [{
    path: '',
    component: TodoDetailsComponent
  }, {
    path: ':id',
    component: TodoDetailsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
