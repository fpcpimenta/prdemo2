import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { NgxCurrencyInputMode, provideEnvironmentNgxCurrency } from 'ngx-currency';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideEnvironmentNgxMask(), 
    provideRouter(routes), 
    provideEnvironmentNgxCurrency({
      align: "right",
      allowNegative: false,
      allowZero: true,
      decimal: ",",
      precision: 2,
      prefix: "",
      suffix: "",
      thousands: ".",
      nullable: false,
      min: 0,
      max: null,
      inputMode: NgxCurrencyInputMode.Financial,
    }),
    provideAnimations(),
    provideHttpClient()
  
  ]
};
