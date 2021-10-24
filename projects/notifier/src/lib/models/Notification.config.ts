export enum NotificationStatus {
    SUCCESS,
    FAILED,
    WARNING,
    ERROR,
    INFO
}
export interface NotificationTime {
    SUCCESS: number;
    FAILED: number;
}
export const NOTIFICATION_TIME: NotificationTime = {
    SUCCESS: 3000,
    FAILED: 4000
}