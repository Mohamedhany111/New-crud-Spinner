import { Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { InputComponent } from './pages/input/input.component';

export const routes: Routes = [
    {path:'input' ,component:InputComponent },
    {path:'todo' , component:TodoComponent}
];
