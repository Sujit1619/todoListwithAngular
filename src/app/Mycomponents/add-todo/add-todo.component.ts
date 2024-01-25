import { Component, EventEmitter, OnInit, Output, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit{
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  title!: string;
  desc!: string;
constructor(){  }
ngOnInit() {
  throw new Error('Function not implemented.');
}

onSubmit() {
  const todo = {
    sno: 8,
    title: this.title,
    desc: this.desc,
    active: true  
  }
  this.todoAdd.emit(todo)
}
}
