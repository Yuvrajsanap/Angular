import { Component } from '@angular/core';
import { MarvellousChkPipe } from '../marvellous-chk.pipe';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [MarvellousChkPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  public No : number=11;
}
