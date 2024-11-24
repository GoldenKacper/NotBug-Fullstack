import {mergeApplicationConfig, ApplicationConfig} from '@angular/core';
import {provideServerRendering} from '@angular/platform-server';
import {provideServerRoutesConfig} from '@angular/ssr';
import {appConfig} from './app.config';
import {serverRoutes} from './app.routes.server';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRoutesConfig(serverRoutes),
    FlexLayoutServerModule
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
