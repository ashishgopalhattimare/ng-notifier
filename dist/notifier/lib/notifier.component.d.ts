import { AfterViewInit, OnInit, TemplateRef } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { NotificationData } from './models/NotificationData';
export declare class NotifierComponent implements OnInit, AfterViewInit {
    private snackRef;
    data: NotificationData;
    successInstance: TemplateRef<any> | undefined;
    warningInstance: TemplateRef<any> | undefined;
    errorInstance: TemplateRef<any> | undefined;
    infoInstance: TemplateRef<any> | undefined;
    notifTemplate$: BehaviorSubject<TemplateRef<any> | undefined>;
    HIDE_TIMEOUT: number;
    constructor(snackRef: MatSnackBarRef<NotifierComponent>, data: NotificationData);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    close(): void;
    getTemplate(): TemplateRef<any> | undefined;
}
//# sourceMappingURL=notifier.component.d.ts.map