import { Injectable, Inject } from '@angular/core';
import { NotificationStatus } from './models/Notification.config';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from './notifier.component';
export class NotifierService {
    constructor(notificationTime, snackBar) {
        this.notificationTime = notificationTime;
        this.snackBar = snackBar;
        this.horizontalPosition = 'right';
        this.verticalPosition = 'top';
        console.log('notif service created');
    }
    showNotificationV1(messageList, status, title) {
        this.builder(messageList, status ? NotificationStatus.SUCCESS : NotificationStatus.ERROR, title);
    }
    showNotificationV2(messageList, status, title) {
        this.builder(messageList, status, title);
    }
    builder(messageList, status, title) {
        this.snackBar.openFromComponent(NotifierComponent, {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.getNotifDuration(status),
            data: {
                message: messageList,
                status,
                title
            }
        });
    }
    getNotifDuration(status) {
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
    getMessageListFromError(error) {
        var _a;
        return [(error === null || error === void 0 ? void 0 : error.errorMessages) || ''].concat(((_a = error === null || error === void 0 ? void 0 : error.details) === null || _a === void 0 ? void 0 : _a.map(x => `${x.field ? `${x.field}: ` : ''} ${x.message}`)) || []);
    }
}
NotifierService.decorators = [
    { type: Injectable }
];
NotifierService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['NOTIFICATION_TIME',] }] },
    { type: MatSnackBar }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25vdGlmaWVyL3NyYy9saWIvbm90aWZpZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQW9CLE1BQU0sOEJBQThCLENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBOEQsTUFBTSw2QkFBNkIsQ0FBQztBQUN0SCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWN6RCxNQUFNLE9BQU8sZUFBZTtJQUsxQixZQUN1QyxnQkFBa0MsRUFDL0QsUUFBcUI7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQy9ELGFBQVEsR0FBUixRQUFRLENBQWE7UUFMdkIsdUJBQWtCLEdBQWtDLE9BQU8sQ0FBQztRQUM1RCxxQkFBZ0IsR0FBZ0MsS0FBSyxDQUFDO1FBTTVELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsV0FBcUIsRUFBRSxNQUFlLEVBQUUsS0FBYztRQUN2RSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFDdEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFDOUQsS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDO0lBRUQsa0JBQWtCLENBQUMsV0FBcUIsRUFBRSxNQUEwQixFQUFFLEtBQWM7UUFDbEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTyxPQUFPLENBQUMsV0FBcUIsRUFBRSxNQUEwQixFQUFFLEtBQWM7UUFDL0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUNqRCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7WUFDdkMsSUFBSSxFQUFFO2dCQUNKLE9BQU8sRUFBRSxXQUFXO2dCQUNwQixNQUFNO2dCQUNOLEtBQUs7YUFDTjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUEwQjtRQUN6QyxRQUFRLE1BQU0sRUFBRTtZQUNkLEtBQUssa0JBQWtCLENBQUMsT0FBTyxDQUFDO1lBQ2hDLEtBQUssa0JBQWtCLENBQUMsSUFBSTtnQkFDMUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO1lBRXZDLEtBQUssa0JBQWtCLENBQUMsT0FBTyxDQUFDO1lBQ2hDLEtBQUssa0JBQWtCLENBQUMsTUFBTSxDQUFDO1lBQy9CLEtBQUssa0JBQWtCLENBQUMsS0FBSztnQkFDM0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1lBQ3RDO2dCQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxLQUF3Qjs7UUFDOUMsT0FBTyxDQUFDLENBQUEsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLGFBQWEsS0FBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQ3hDLENBQUEsTUFBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsT0FBTywwQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUksRUFBRSxDQUNoRixDQUFDO0lBQ0osQ0FBQzs7O1lBeERGLFVBQVU7Ozs0Q0FPTixNQUFNLFNBQUMsbUJBQW1CO1lBckJ0QixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TdGF0dXMsIE5vdGlmaWNhdGlvblRpbWUgfSBmcm9tICcuL21vZGVscy9Ob3RpZmljYXRpb24uY29uZmlnJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyLCBNYXRTbmFja0Jhckhvcml6b250YWxQb3NpdGlvbiwgTWF0U25hY2tCYXJWZXJ0aWNhbFBvc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7IE5vdGlmaWVyQ29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZmllci5jb21wb25lbnQnO1xuXG50eXBlIE5vdGlmaWNhdGlvbkVycm9yID0ge1xuICBlcnJvckNvZGU6IHN0cmluZztcbiAgZXJyb3JNZXNzYWdlczogc3RyaW5nO1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbiAgZGV0YWlsczogRXJyb3JEZXRhaWxzW107XG59XG50eXBlIEVycm9yRGV0YWlscyA9IHtcbiAgZmllbGQ6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm90aWZpZXJTZXJ2aWNlIHtcblxuICBwcml2YXRlIGhvcml6b250YWxQb3NpdGlvbjogTWF0U25hY2tCYXJIb3Jpem9udGFsUG9zaXRpb24gPSAncmlnaHQnO1xuICBwcml2YXRlIHZlcnRpY2FsUG9zaXRpb246IE1hdFNuYWNrQmFyVmVydGljYWxQb3NpdGlvbiA9ICd0b3AnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ05PVElGSUNBVElPTl9USU1FJykgcHJpdmF0ZSBub3RpZmljYXRpb25UaW1lOiBOb3RpZmljYXRpb25UaW1lLFxuICAgIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyXG4gICkge1xuICAgIGNvbnNvbGUubG9nKCdub3RpZiBzZXJ2aWNlIGNyZWF0ZWQnKTtcbiAgfVxuXG4gIHNob3dOb3RpZmljYXRpb25WMShtZXNzYWdlTGlzdDogc3RyaW5nW10sIHN0YXR1czogYm9vbGVhbiwgdGl0bGU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmJ1aWxkZXIobWVzc2FnZUxpc3QsXG4gICAgICBzdGF0dXMgPyBOb3RpZmljYXRpb25TdGF0dXMuU1VDQ0VTUyA6IE5vdGlmaWNhdGlvblN0YXR1cy5FUlJPUiwgXG4gICAgICB0aXRsZVxuICAgICk7XG4gIH1cblxuICBzaG93Tm90aWZpY2F0aW9uVjIobWVzc2FnZUxpc3Q6IHN0cmluZ1tdLCBzdGF0dXM6IE5vdGlmaWNhdGlvblN0YXR1cywgdGl0bGU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmJ1aWxkZXIobWVzc2FnZUxpc3QsIHN0YXR1cywgdGl0bGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZGVyKG1lc3NhZ2VMaXN0OiBzdHJpbmdbXSwgc3RhdHVzOiBOb3RpZmljYXRpb25TdGF0dXMsIHRpdGxlPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChOb3RpZmllckNvbXBvbmVudCwge1xuICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiB0aGlzLmhvcml6b250YWxQb3NpdGlvbixcbiAgICAgIHZlcnRpY2FsUG9zaXRpb246IHRoaXMudmVydGljYWxQb3NpdGlvbixcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmdldE5vdGlmRHVyYXRpb24oc3RhdHVzKSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZUxpc3QsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgdGl0bGVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldE5vdGlmRHVyYXRpb24oc3RhdHVzOiBOb3RpZmljYXRpb25TdGF0dXMpOiBudW1iZXIge1xuICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICBjYXNlIE5vdGlmaWNhdGlvblN0YXR1cy5TVUNDRVNTOlxuICAgICAgY2FzZSBOb3RpZmljYXRpb25TdGF0dXMuSU5GTzpcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uVGltZS5TVUNDRVNTO1xuXG4gICAgICBjYXNlIE5vdGlmaWNhdGlvblN0YXR1cy5XQVJOSU5HOlxuICAgICAgY2FzZSBOb3RpZmljYXRpb25TdGF0dXMuRkFJTEVEOlxuICAgICAgY2FzZSBOb3RpZmljYXRpb25TdGF0dXMuRVJST1I6XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvblRpbWUuRkFJTEVEO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uVGltZS5GQUlMRUQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0TWVzc2FnZUxpc3RGcm9tRXJyb3IoZXJyb3I6IE5vdGlmaWNhdGlvbkVycm9yKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbZXJyb3I/LmVycm9yTWVzc2FnZXMgfHwgJyddLmNvbmNhdChcbiAgICAgIGVycm9yPy5kZXRhaWxzPy5tYXAoeCA9PiBgJHt4LmZpZWxkID8gYCR7eC5maWVsZH06IGAgOiAnJ30gJHt4Lm1lc3NhZ2V9YCkgfHwgW11cbiAgICApO1xuICB9XG59XG4iXX0=