import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { TodoListComponent } from './todo-list.component';

const appRoutes: Routes = [
  // { path: 'details/:id', component: TodoDetails },
  { path: 'test', component: TestComponent, data: { title: 'Test!!!' }},
  { path: '', component: AppComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
