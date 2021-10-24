import { NotificationStatus, NotificationTime } from './models/Notification.config';
import { MatSnackBar } from '@angular/material/snack-bar';
declare type NotificationError = {
    errorCode: string;
    errorMessages: string;
    timestamp: number;
    details: ErrorDetails[];
};
declare type ErrorDetails = {
    field: string;
    message: string;
};
export declare class NotifierService {
    private notificationTime;
    private snackBar;
    private horizontalPosition;
    private verticalPosition;
    constructor(notificationTime: NotificationTime, snackBar: MatSnackBar);
    showNotificationV1(messageList: string[], status: boolean, title?: string): void;
    showNotificationV2(messageList: string[], status: NotificationStatus, title?: string): void;
    private builder;
    getNotifDuration(status: NotificationStatus): number;
    getMessageListFromError(error: NotificationError): string[];
}
export {};
//# sourceMappingURL=notifier.service.d.ts.map