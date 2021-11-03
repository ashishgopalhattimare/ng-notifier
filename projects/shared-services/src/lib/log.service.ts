import { Injectable } from '@angular/core';

interface IConsole {
  error: any;
  log: any;
}

@Injectable()
export class LogService {
  console: IConsole;

  constructor() {
    this.console = LogService.isLocalConsole(LogService.getUrl()) ?
        LogService.TroubleshootLogging() :
        LogService.CustomLogging();
  }
  static getUrl = () => window.location.hostname;

  private static isLocalConsole(url: string): boolean {
    for (const host of ['localhost', '127.0.0.1']) {
      if (url.startsWith(host)) { return true; }
    }
    return false;
  }
  private static TroubleshootLogging(): IConsole {
    return {
      error: console.error,
      log: console.log
    };
  }
  private static CustomLogging(): IConsole {
    const NO_OPERATION = () => {};
    return {
      log: NO_OPERATION,
      error: NO_OPERATION
    };
  }
}
