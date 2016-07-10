import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  lastId: number = 0;
  todos: Todo[] = [];

  constructor() {}

  addTodo(todo: Todo): TodoService {
    if(!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodo(id: number): TodoService {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  updateTodoById(id: number, values: Object = {}) {
    let todo = this.getElementById(id);
    if(!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  toggleTodoComplete(todo: Todo) {
    let updateTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updateTodo;
  }

}
