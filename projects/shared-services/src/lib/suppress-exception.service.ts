import { Injectable } from '@angular/core';
import {LogService} from './log.service';
import {SuppressedConfiguration} from './config/suppressed.config';

@Injectable()
export class SuppressExceptionService {

  private exceptionList: Set<string>;
  constructor(
      private readonly suppressConfig: SuppressedConfiguration,
      private logService: LogService
  ) {
    this.exceptionList = new Set<string>(this.suppressConfig.exceptions);
    this.logService.console.log('SuppressedException :', this.exceptionList);
  }

  isSuppressed(error: any): boolean {
    this.logService.console.log(error);
    return this.exceptionList.has(error.name);
  }
}
