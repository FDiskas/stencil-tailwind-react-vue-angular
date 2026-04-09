import { Component } from '@angular/core';
import { MyComponent, PocButton } from '@fdiskas/angular-library';

@Component({
  selector: 'app-root',
  imports: [MyComponent, PocButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Angular Demo';
}
