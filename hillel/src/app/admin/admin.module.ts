import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { TodosModule } from '../todos/todos.module';
import { AdminComponent } from './admin.component';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    TodosModule,
    FormsModule
  ],
  declarations: [
    AdminComponent,
    AuthComponent
  ],
  providers: [
    AuthService
  ]
})
export class AdminModule { }
