import { Component, ChangeDetectionStrategy, Inject, ViewChild, TemplateRef, Injectable, NgModule } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

var NotificationStatus;
(function (NotificationStatus) {
    NotificationStatus[NotificationStatus["SUCCESS"] = 0] = "SUCCESS";
    NotificationStatus[NotificationStatus["FAILED"] = 1] = "FAILED";
    NotificationStatus[NotificationStatus["WARNING"] = 2] = "WARNING";
    NotificationStatus[NotificationStatus["ERROR"] = 3] = "ERROR";
    NotificationStatus[NotificationStatus["INFO"] = 4] = "INFO";
})(NotificationStatus || (NotificationStatus = {}));
const NOTIFICATION_TIME = {
    SUCCESS: 3000,
    FAILED: 4000
};

class NotifierComponent {
    constructor(snackRef, data) {
        this.snackRef = snackRef;
        this.data = data;
        this.notifTemplate$ = new BehaviorSubject(undefined);
        this.HIDE_TIMEOUT = 10;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.notifTemplate$.next(this.getTemplate());
    }
    close() {
        this.snackRef.dismiss();
    }
    getTemplate() {
        switch (this.data.status) {
            case NotificationStatus.SUCCESS: return this.successInstance;
            case NotificationStatus.INFO: return this.infoInstance;
            case NotificationStatus.FAILED:
            case NotificationStatus.ERROR: return this.errorInstance;
            case NotificationStatus.WARNING: return this.warningInstance;
        }
        return undefined;
    }
}
NotifierComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-notifier',
                template: "<div id=\"notification-snackbar\" fxLayout=\"row\" fxLayoutAlign=\"start stretch\" class=\"w-100\" style=\"min-height: 80px\">\n    <ng-container [ngTemplateOutlet]=\"(notifTemplate$ | async) || info\"></ng-container>\n    <div id=\"notification-content\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\" class=\"w-100 bg-white rounded-right\">\n        <div id=\"notification-message\" class=\"text-dark mt-3 pl-2\" fxLayout=\"column\" fxLayoutAlign=\"space-between start\">\n            <label *ngIf=\"data.title\" class=\"m-0 title-content\">\n                <strong>{{data.title}}</strong>\n            </label>\n            <div fxLayout=\"column\" fxLayoutAlign=\"start start\" class=\"mt-1 sub-content\">\n                <label *ngFor=\"let msg of data.message\" class=\"p-0 m-0\">\n                    {{msg}}\n                </label>\n            </div>\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"space-between center\" class=\"h-100\" style=\"padding: 2px 2px\">\n            <span (click)=\"close()\" style=\"cursor: pointer\">\n                <svg height=\"19px\" viewBox=\"0 0 24 24\" width=\"19px\" fill=\"#000000\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>\n            </span>\n        </div>\n    </div>\n</div>\n\n<ng-template #info>\n    <div class=\"logo-dm rounded-left\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n        <div class=\"mt-3 logo-outline-style rounded\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <code class=\"text-white\" style=\"font-size: 21px; font-weight: bold\">i</code>\n        </div>\n    </div>\n</ng-template>\n<ng-template #success>\n    <div class=\"logo-dm rounded-left bg-success\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n        <div class=\"mt-3 logo-outline-style rounded-circle\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <svg height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#FFFFFF\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\"/></svg>\n        </div>\n    </div>\n</ng-template>\n<ng-template #error>\n    <div class=\"logo-dm rounded-left bg-danger\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n        <div class=\"mt-3 logo-outline-style rounded-circle\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <svg height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#FFFFFF\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><circle cx=\"12\" cy=\"19\" r=\"2\"/><path d=\"M10 3h4v12h-4z\"/></svg>\n        </div>\n    </div>\n</ng-template>\n<ng-template #warning>\n    <div class=\"logo-dm rounded-left bg-warning\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n        <div class=\"mt-3 logo-outline-style rounded-circle\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <svg height=\"22px\" viewBox=\"0 0 24 24\" width=\"22px\" fill=\"#FFFFFF\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"/></svg>\n        </div>\n    </div>\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".title-content{font-size:1.1rem}.sub-content{font-size:.9rem;min-width:150px;word-wrap:break-word}.logo-outline-style{height:32px;width:32px;border:2px white solid}.logo-dm{width:70px}::ng-deep .mat-snack-bar-container{background-color:#fff;padding:0}.w-100{width:100%}.h-100{height:100%}.text-dark{color:#000}.text-white{color:#fff}.mt-3{margin-top:1rem}.mt-1{margin-top:.25rem}.m-0{margin:0}.pl-2{padding-left:.5rem}.p-0{padding:0}.rounded-left{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-right{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded{border-radius:.25rem}.rounded-circle{border-radius:50%}.bg-success{background-color:#28a745}.bg-warning{background-color:#d39e00}.bg-danger{background-color:#dc3545}.bg-white{background-color:#fff}\n"]
            },] }
];
NotifierComponent.ctorParameters = () => [
    { type: MatSnackBarRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
];
NotifierComponent.propDecorators = {
    successInstance: [{ type: ViewChild, args: ['success', { read: TemplateRef },] }],
    warningInstance: [{ type: ViewChild, args: ['warning', { read: TemplateRef },] }],
    errorInstance: [{ type: ViewChild, args: ['error', { read: TemplateRef },] }],
    infoInstance: [{ type: ViewChild, args: ['info', { read: TemplateRef },] }]
};

class NotifierService {
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

const ɵ0 = NOTIFICATION_TIME;
class NotifierModule {
}
NotifierModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NotifierComponent],
                imports: [
                    CommonModule,
                    FlexLayoutModule,
                    MatSnackBarModule,
                    MatIconModule
                ],
                exports: [],
                providers: [
                    NotifierService,
                    { provide: 'NOTIFICATION_TIME', useValue: ɵ0 }
                ]
            },] }
];

/*
 * Public API Surface of notifier
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NotifierComponent, NotifierModule, NotifierService, ɵ0, NOTIFICATION_TIME as ɵb };
//# sourceMappingURL=techpleiad-notifier.js.map
