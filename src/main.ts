import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as angular from 'angular';
import { setAngularJSGlobal } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';
import ajsApp from './app/app.module.ajs';

setAngularJSGlobal(angular);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
