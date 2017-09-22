import { Injectable } from '@angular/core';

import { toDoList } from './mock-todo';

@Injectable()
export class TodoService {
    private todoList;

    getTodoList() {
        return toDoList;
    }

    getTodo(id: any) {
        return toDoList[id];
    }

    removeTodo(todo) {
        todo.isDone = !todo.isDone;
    }

    addTodo(todo, todoDescription) {
        const newTodo = {
            target: todo,
            isDone: false,
            description: todoDescription,
            id: this.todoList.length + 1,
            due: null,
            isRemoved: false
        };

        this.todoList.push(newTodo);
    }
}
