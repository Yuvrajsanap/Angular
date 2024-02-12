import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { WrongpageComponent } from './wrongpage/wrongpage.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,BooksComponent,TechnologiesComponent,WrongpageComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'qustion3';
}
