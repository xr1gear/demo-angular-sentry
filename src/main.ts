import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import * as Sentry from '@sentry/angular';


Sentry.init({
  dsn: "https://246be7234144d3332312bab72360f805@o4508179900203008.ingest.us.sentry.io/4508179948765184",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      networkDetailAllowUrls: [
        window.location.origin
      ],
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
