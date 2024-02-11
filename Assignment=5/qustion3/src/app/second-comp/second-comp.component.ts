import { Component } from '@angular/core';
import { FirstCompComponent } from '../first-comp/first-comp.component';
@Component({
  selector: 'app-second-comp',
  standalone: true,
  imports: [FirstCompComponent],
  templateUrl: './second-comp.component.html',
  styleUrl: './second-comp.component.css'
})
export class SecondCompComponent {

}
