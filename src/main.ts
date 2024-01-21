import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import ajsApp from './app/app.module.ajs';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
