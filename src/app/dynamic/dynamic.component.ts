import { isPlatformServer } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, PLATFORM_ID, inject, makeStateKey } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.scss'
})
export class DynamicComponent {
  httpClient = inject(HttpClient);
  transferState = inject(TransferState);
  platformId = inject(PLATFORM_ID)

  countries: Array<any> = [];

  ngOnInit() {
    if (this.transferState.hasKey(makeStateKey('countryData'))) {
      this.countries = this.transferState.get(makeStateKey('countryData')) || [];
    } else {
      this.httpClient.get('https://api.sampleapis.com/countries/countries')
        .subscribe({
          next: (data: any) => {
            if (isPlatformServer(this.platformId)) {
              this.transferState.set(makeStateKey('countryData'), data);
            }
            this.countries = data;
          }, error: (err) => console.log(err)
        });
    }
  }
}
