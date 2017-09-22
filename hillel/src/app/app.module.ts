import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { NgModule } from '@angular/core';

// import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { AppComponent } from './app.component';
// import { AuthComponent } from './admin/auth/auth.component';
import { TodosModule } from './todos/todos.module';
import { AdminModule } from './admin/admin.module';

const appRoutes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full'},
  { path: '**', redirectTo: '/todo', pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    TodosModule,
    AdminModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
