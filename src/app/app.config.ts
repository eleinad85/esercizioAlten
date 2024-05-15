import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ListaPostsComponent } from './components/shared/listaPosts/listaPosts.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],

};
