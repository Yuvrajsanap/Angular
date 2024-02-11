import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  template: 
  `<h1 [class]="'text'">Marvellous Infosystem</h1>`,
  styles: 
 [ `.text{
    color : blue;
  }`]
})
export class DemoComponent {

}
