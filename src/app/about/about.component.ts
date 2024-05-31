import { Component, PLATFORM_ID, afterNextRender, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  platformId = inject(PLATFORM_ID)

  constructor() {
    console.log("AboutComponent");
    afterNextRender(() => {
      console.log("token", localStorage.getItem("token"))
    })
  }

  ngOnInit() {
    console.log(this.platformId)
    console.log("isClient", isPlatformBrowser(this.platformId))
  }

}
