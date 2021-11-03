import { TestBed } from '@angular/core/testing';

import { SentryHandlerService } from './sentry-handler.service';

describe('SentryHandlerService', () => {
  let service: SentryHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentryHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
