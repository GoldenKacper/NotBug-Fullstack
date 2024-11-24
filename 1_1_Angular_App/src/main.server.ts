import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {config} from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;

// import {enableProdMode} from '@angular/core';
// import {config} from './app/app.config.server';
// import {renderModule} from '@angular/platform-server';
//
// export {config};
//
// export function renderModuleFactory() {
//   return renderModule(config, {
//     document: '<app-root></app-root>',
//     url: '/'
//   });
// }
