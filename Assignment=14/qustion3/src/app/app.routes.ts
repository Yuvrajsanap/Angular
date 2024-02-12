import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { WrongpageComponent } from './wrongpage/wrongpage.component';

export const routes: Routes = [
    {path:'',component:TechnologiesComponent},
    {path:'books',component:BooksComponent},
    {path:'technologies',component:TechnologiesComponent},
    {path:'**',component:WrongpageComponent}
];
