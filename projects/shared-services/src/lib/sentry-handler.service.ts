import {ErrorHandler, Injectable} from '@angular/core';
import {Integrations} from '@sentry/tracing';
import * as Sentry from '@sentry/angular';
import {
  SentryConfiguration as Configuration,
  SentryEnvironment as Environment
} from './config/sentry.config';
import {SuppressExceptionService} from './suppress-exception.service';

@Injectable()
export class SentryHandlerService implements ErrorHandler {

  constructor(
      private suppressExceptionService: SuppressExceptionService,
      private readonly sentryConfig: Configuration
  ) {
    console.log('data service injected', this.sentryConfig);
    SentryHandlerService.config = this.sentryConfiguration(window.location.hostname, window.location.pathname);
    Sentry.init({
      dsn: SentryHandlerService.config.dsn,
      environment: SentryHandlerService.config.environment,
      integrations: [
        new Integrations.BrowserTracing({
          tracingOrigins: [],
          routingInstrumentation: Sentry.routingInstrumentation,
        })
      ],
      beforeSend(event: Event | any): any {
        return (event.environment === SentryHandlerService.config.environment) ? event : null;
      }
    });
  }

  private static config: Environment;

  private static isLocalhost(host: string): boolean {
    for (const prefix of ['localhost', '127.0.0.1']) {
      if (host.startsWith(prefix)) { return true; }
    }
    return false;
  }

  private getSentryConfiguration(pathname: string): Environment {
    for (const config of this.sentryConfig.config) {
      if (pathname.startsWith(config.key)) {
        return config;
      }
    }
    return this.sentryConfig.defaultConfig;
  }
  sentryConfiguration(hostname: string, pathname: string): Environment {
    return (!SentryHandlerService.isLocalhost(hostname)) ?
        this.getSentryConfiguration(pathname) :
        this.sentryConfig.localConfig;
  }

  handleError(error: any): void {
    Sentry.configureScope(scope => {
      scope.setExtra('stackTrace', error);
      scope.setTag('environment', SentryHandlerService.config.environment);
      scope.setTag('app_name', 'firmware-upload-ui');
      scope.setLevel(Sentry.Severity.Error);

      scope.addEventProcessor(event => {
        event.sdk = {
          ...event.sdk,
          name: 'sentry.firmware-ui.angular',
          version: Sentry.SDK_VERSION,
        };
        return event;
      });
    });

    if (!this.suppressExceptionService.isSuppressed(error)) {
      Sentry.captureException(error);
    }
  }
}
