import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDoList = [
    {
      target: 'Look at that wheel',
      isDone: false
    },
    {
      target: 'Keep calm',
      isDone: false
    },
    {
      target: 'Keep it real',
      isDone: false
    }
  ];

  removeItem = function (item) {
    item.isDone = !item.isDone;
  };

  addItem(item) {
    let newItem = {
      target: item.value,
      isDone: false
    };

    this.toDoList.push(newItem);
    item.value = '';
  }
}

