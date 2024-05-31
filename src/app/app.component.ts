import { Component, afterNextRender } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ssr-demo';
  constructor() {
    afterNextRender(() => {
      localStorage.setItem("token", "1234")
      console.log("AppComponent")
    })
  }
}
