import { NotificationStatus } from "./Notification.config";

export interface NotificationData {
    message: string[];
    status: NotificationStatus;
    title: string;
}