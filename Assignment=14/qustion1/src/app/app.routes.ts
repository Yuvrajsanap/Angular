import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';

//two route-name technologiy and books
export const routes: Routes = [
    {path:'technologies',component:TechnologiesComponent},
    {path:'books',component:BooksComponent}
];