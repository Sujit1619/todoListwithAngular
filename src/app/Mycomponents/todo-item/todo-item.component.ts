import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Todo } from '../../Todo';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo?: Todo;
@Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
@Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

onCheckboxClick(todo: Todo| undefined): void {
  this.todoCheckbox.emit(this.todo);
}


onClick(): void {
  if (this.todo) {
  this.todoDelete.emit(this.todo);
  console.log("onClick has been triggered");
  }
}
}
