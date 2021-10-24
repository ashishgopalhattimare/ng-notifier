import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotifierComponent } from './notifier.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NOTIFICATION_TIME } from './models/Notification.config';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotifierService } from './notifier.service';

@NgModule({
  declarations: [ NotifierComponent ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatIconModule
  ],
  exports: [ ],
  providers: [
    NotifierService,
    { provide: 'NOTIFICATION_TIME', useValue: NOTIFICATION_TIME }
  ]
})
export class NotifierModule { }
