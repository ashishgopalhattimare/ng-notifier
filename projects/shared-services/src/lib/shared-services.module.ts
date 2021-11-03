import {ModuleWithProviders, NgModule} from '@angular/core';
import {SentryConfiguration} from './config/sentry.config';
import {SentryHandlerService} from './sentry-handler.service';
import {DataService} from './data.service';
import {LogService} from './log.service';
import {SuppressedConfiguration} from './config/suppressed.config';
import {SuppressExceptionService} from './suppress-exception.service';

type Configuration = {
  sentryConfig: SentryConfiguration;
  suppressedConfig: SuppressedConfiguration;
};

@NgModule({
  declarations: [], imports: [], exports: [],
  providers: [
    SentryHandlerService,
    DataService,
    LogService,
    SuppressExceptionService
  ]
})
export class SharedServicesModule {
  static forRoot(configuration: Configuration): ModuleWithProviders<any> {
    return {
      ngModule: SharedServicesModule,
      providers: [
        {
          provide: SentryConfiguration,
          useValue: configuration.sentryConfig
        },
        {
          provide: SuppressedConfiguration,
          useValue: configuration.suppressedConfig
        }
      ]
    };
  }
}
