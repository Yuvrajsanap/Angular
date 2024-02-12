import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {ReactiveFormsModule} from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TimepickerModule } from 'ngx-bootstrap/timepicker'
import { provideNativeDateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,BsDropdownModule,ReactiveFormsModule,MatDatepickerModule,MatInputModule,MatFormFieldModule,TimepickerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [provideNativeDateAdapter()]
})
export class AppComponent {
  title = 'qustion1';
}
