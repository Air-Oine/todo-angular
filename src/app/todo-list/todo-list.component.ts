import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo"

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Array<Todo>;

  constructor() { 

  }

  ngOnInit() {
    this.todoList = [
      new Todo("Bosser", true),
      new Todo("Manger", false),
      new Todo("Dormir", false)
    ]
  }

}
