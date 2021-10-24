import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { NotificationStatus } from './models/Notification.config';
import { NotificationData } from './models/NotificationData';

@Component({
  selector: 'lib-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotifierComponent implements OnInit, AfterViewInit {

  @ViewChild('success', { read: TemplateRef }) successInstance: TemplateRef<any> | undefined;
  @ViewChild('warning', { read: TemplateRef }) warningInstance: TemplateRef<any> | undefined;
  @ViewChild('error', { read: TemplateRef }) errorInstance: TemplateRef<any> | undefined;
  @ViewChild('info', { read: TemplateRef }) infoInstance: TemplateRef<any> | undefined;

  notifTemplate$ = new BehaviorSubject<TemplateRef<any> | undefined>(undefined);
  HIDE_TIMEOUT = 10;

  constructor(
    private snackRef: MatSnackBarRef<NotifierComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: NotificationData
  ) { }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.notifTemplate$.next(this.getTemplate());
  }

  close(): void {
    this.snackRef.dismiss();
  }

  getTemplate(): TemplateRef<any> | undefined {
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
