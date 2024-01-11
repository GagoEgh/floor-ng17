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

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideStore({ ['baseText']: baseReducer }),
    provideEffects([HrefEffect, FloorTypeEffect]),

  ]
};
