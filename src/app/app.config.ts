import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),

    providePrimeNG({
      theme: {
        preset: Lara,
        options: {
          prefix: 'p',
        }
      }
    })
  ]
};