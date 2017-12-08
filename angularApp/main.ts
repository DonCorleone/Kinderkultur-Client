﻿import './styles.scss';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Entry point for JiT compilation.
declare let System: any;

// Styles.
// Enables Hot Module Replacement.
declare let module: any;
if (module.hot) {
    module.hot.accept();
}

platformBrowserDynamic().bootstrapModule(AppModule);
