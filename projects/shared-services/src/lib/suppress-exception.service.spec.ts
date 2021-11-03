import { TestBed } from '@angular/core/testing';

import { SuppressExceptionService } from './suppress-exception.service';

describe('SuppressExceptionService', () => {
  let service: SuppressExceptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuppressExceptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
