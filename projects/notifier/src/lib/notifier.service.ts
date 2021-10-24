import { Injectable, Inject } from '@angular/core';
import { NotificationStatus, NotificationTime } from './models/Notification.config';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { NotifierComponent } from './notifier.component';

type NotificationError = {
  errorCode?: string;
  errorMessages: string;
  timestamp?: number;
  details?: ErrorDetails[];
};
type ErrorDetails = {
  field?: string;
  message: string;
};

@Injectable()
export class NotifierService {

  private horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    @Inject('NOTIFICATION_TIME') private notificationTime: NotificationTime,
    private snackBar: MatSnackBar
  ) {
    console.log('notif service created');
  }

  showNotificationV1(messageList: string[], status: boolean, title?: string): void {
    this.builder(messageList,
      status ? NotificationStatus.SUCCESS : NotificationStatus.ERROR,
      title
    );
  }

  showNotificationV2(messageList: string[], status: NotificationStatus, title?: string): void {
    this.builder(messageList, status, title);
  }

  private builder(messageList: string[], status: NotificationStatus, title?: string): void {
    this.snackBar.openFromComponent(NotifierComponent, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.getNotifierDuration(status),
      data: {
        message: messageList,
        status,
        title
      }
    });
  }

  getNotifierDuration(status: NotificationStatus | unknown): number {
    switch (status) {
      case NotificationStatus.SUCCESS:
      case NotificationStatus.INFO:
        return this.notificationTime.SUCCESS;

      case NotificationStatus.WARNING:
      case NotificationStatus.FAILED:
      case NotificationStatus.ERROR:
        return this.notificationTime.FAILED;
      default:
        return this.notificationTime.FAILED;
    }
  }

  getMessageListFromError(error: NotificationError): string[] {
    return [error?.errorMessages || ''].concat(
      error?.details?.map(x => `${x.field ? `${x.field}: ` : ''}${x.message}`) || []
    );
  }
}
