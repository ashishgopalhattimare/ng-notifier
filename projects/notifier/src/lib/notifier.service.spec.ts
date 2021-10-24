import {TestBed} from '@angular/core/testing';

import {NotifierService} from './notifier.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NOTIFICATION_TIME, NotificationStatus} from './models/Notification.config';

describe('NotifierService', () => {
  let service: NotifierService;

  const MatSnackBarStub = {
    created: false,
    openFromComponent(_: any, _1: any): void {
      this.created = true;
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
      providers: [
        NotifierService,
        { provide: MatSnackBar, useValue: MatSnackBarStub },
        { provide: 'NOTIFICATION_TIME', useValue: NOTIFICATION_TIME }
      ]
    });
    service = TestBed.inject(NotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create notification component when called | v1',  () => {
    MatSnackBarStub.created = false;
    service.showNotificationV1(['message'], true);
    expect(MatSnackBarStub.created).toBeTrue();

    MatSnackBarStub.created = false;
    service.showNotificationV1(['message'], false, 'title');
    expect(MatSnackBarStub.created).toBeTrue();
  });

  it('should create notification component when called | v1',  () => {
    MatSnackBarStub.created = false;
    service.showNotificationV2(['message'], NotificationStatus.FAILED);
    expect(MatSnackBarStub.created).toBeTrue();

    MatSnackBarStub.created = false;
    service.showNotificationV2(['message'], NotificationStatus.FAILED, 'title');
    expect(MatSnackBarStub.created).toBeTrue();
  });

  it('should generate expected message list from error request', () => {
    expect(service.getMessageListFromError({
      errorMessages: 'error-message'
    })).toEqual(['error-message']);

    expect(service.getMessageListFromError({
      errorMessages: 'error-message',
      details: [
        { field: 'mac', message: 'detail-message' }
      ]
    })).toEqual(['error-message', 'mac: detail-message']);

    expect(service.getMessageListFromError({
      errorMessages: 'error-message',
      details: [
        { message: 'detail-message' }
      ]
    })).toEqual(['error-message', 'detail-message']);
  });

  it('should set timeout based on notification success boolean', () => {
    expect(service.getNotifierDuration(NotificationStatus.INFO)).toBe(NOTIFICATION_TIME.SUCCESS);
    expect(service.getNotifierDuration(NotificationStatus.INFO)).toBe(NOTIFICATION_TIME.SUCCESS);
    expect(service.getNotifierDuration(NotificationStatus.WARNING)).toBe(NOTIFICATION_TIME.FAILED);
    expect(service.getNotifierDuration(NotificationStatus.FAILED)).toBe(NOTIFICATION_TIME.FAILED);
    expect(service.getNotifierDuration(NotificationStatus.ERROR)).toBe(NOTIFICATION_TIME.FAILED);
    expect(service.getNotifierDuration(undefined)).toBe(NOTIFICATION_TIME.FAILED);
  });
});