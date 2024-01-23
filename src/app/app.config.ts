import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { baseReducer } from './store/reducers';
import { provideHttpClient } from '@angular/common/http';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { HrefEffect } from './store/href.effect';
import { FloorTypeEffect } from './store/floorType.effect';
import { SaleTitleHeadEffect } from './store/saleTitleHead.effect';
import { SaleTitleFooterEffect } from './store/saleTitleFooter.effect';
import { NewsEffect } from './store/news.effect';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideStore({ ['baseText']: baseReducer }),
    provideEffects([
      HrefEffect, FloorTypeEffect,NewsEffect,
      SaleTitleHeadEffect,SaleTitleFooterEffect]),

  ]
};
