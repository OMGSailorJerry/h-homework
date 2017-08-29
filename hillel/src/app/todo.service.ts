import { Injectable } from '@angular/core';

import { toDoList } from './mock-todo';

@Injectable()
export class TodoService {
    getTodoList(): void {
        return toDoList;
    }

    removeTodo = function (todo) {
        todo.isDone = !todo.isDone;
    };

    addTodo = function (todo) {
        const newTodo = {
            target: todo.value,
            isDone: false
        };

        this.todoList.push(newTodo);
        todo.value = '';
    };
}
