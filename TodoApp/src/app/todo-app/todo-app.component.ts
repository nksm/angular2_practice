import { Component, OnInit } from '@angular/core';
import { Todo } from './../todo';
import { TodoService } from './../todo.service';

@Component({
  moduleId: module.id,
  selector: 'app-todo-app',
  templateUrl: 'todo-app.component.html',
  styleUrls: ['todo-app.component.css'],
  providers: [TodoService]
})
export class TodoAppComponent implements OnInit {

  // We first instantiate a newTodo property and assign a new Todo() when the component class is instantiated.
  // This is the newTodo we added a two-way binding to in our view:
  newTodo = new Todo();

  constructor(
    private todoService: TodoService
  ) {}

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoCompleted(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

  ngOnInit() {
  }

}
