import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { TodosComponent } from '../app/Mycomponents/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from '../app/Mycomponents/about/about.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  // Add other routes if needed
];

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TodosComponent, FormsModule, AboutComponent]
})
export class AppComponent {
  title = 'cwh-todo-list';

 constructor(){
  // setTimeout(() => {
  //   this.title = "Heading";
  // }, 2000);
 }
}
