import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { baseReducer } from './store/reducers';
import { provideHttpClient } from '@angular/common/http';
import {  provideEffects } from '@ngrx/effects';
import { HrefEffect } from './store/effect/href.effect';
import { FloorTypeEffect } from './store/effect/floorType.effect';
import { SaleTitleHeadEffect } from './store/effect/saleTitleHead.effect';
import { SaleTitleFooterEffect } from './store/effect/saleTitleFooter.effect';
import { NewsEffect } from './store/effect/news.effect';
import { ReviewsEffect } from './store/effect/reviews.effect';
import { CovrolinsEffect } from './store/effect/covrolins.effect';
import { RoomsEffect } from './store/effect/rooms.effect';
import { CovrolinColorsEffect } from './store/effect/covrolinColors.effect';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideStore({ ['baseText']: baseReducer }),
    provideEffects([
      HrefEffect, FloorTypeEffect,NewsEffect,ReviewsEffect,RoomsEffect,
      SaleTitleHeadEffect,SaleTitleFooterEffect,CovrolinsEffect,CovrolinColorsEffect]),

  ]
};
