import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {importProvidersFrom} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {routes} from './app/app.routes';
import {provideHttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorInterceptor} from './app/interceptors/http-error.interceptor';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule // Removed BrowserModule as it's not needed in standalone components
    ),
    provideRouter(routes), // Replaced RouterModule.forRoot(routes) with provideRouter
    provideHttpClient(), // Added provideHttpClient()
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
