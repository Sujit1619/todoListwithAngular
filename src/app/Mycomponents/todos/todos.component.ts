import { Component, NgModule, OnInit } from '@angular/core';
import { Todo } from "../../Todo";
import { TodoItemComponent } from "../../Mycomponents/todo-item/todo-item.component"
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from "../add-todo/add-todo.component";


@Component({
  selector: 'app-todos',
  standalone: true,
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  imports: [CommonModule, TodoItemComponent, AddTodoComponent]
})
export class TodosComponent implements OnInit {

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo): void {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    
  }
  localItem: string| null;
  todos!: Todo[];
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem ==null){
      this.todos = [];
    }
   else{
    this.todos = JSON.parse(this.localItem);
   }
  }
  ngOnInit(): void {

  }

}
