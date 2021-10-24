import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotifierComponent } from './notifier.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NOTIFICATION_TIME } from './models/Notification.config';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotifierService } from './notifier.service';
const ɵ0 = NOTIFICATION_TIME;
export class NotifierModule {
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbm90aWZpZXIvc3JjL2xpYi9ub3RpZmllci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztXQWFQLGlCQUFpQjtBQUcvRCxNQUFNLE9BQU8sY0FBYzs7O1lBZDFCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBRSxpQkFBaUIsQ0FBRTtnQkFDbkMsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLGFBQWE7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFLEVBQUc7Z0JBQ1osU0FBUyxFQUFFO29CQUNULGVBQWU7b0JBQ2YsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxJQUFtQixFQUFFO2lCQUM5RDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RpZmllckNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZpZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7IE5PVElGSUNBVElPTl9USU1FIH0gZnJvbSAnLi9tb2RlbHMvTm90aWZpY2F0aW9uLmNvbmZpZyc7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgTm90aWZpZXJTZXJ2aWNlIH0gZnJvbSAnLi9ub3RpZmllci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbIE5vdGlmaWVyQ29tcG9uZW50IF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRmxleExheW91dE1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFsgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTm90aWZpZXJTZXJ2aWNlLFxuICAgIHsgcHJvdmlkZTogJ05PVElGSUNBVElPTl9USU1FJywgdXNlVmFsdWU6IE5PVElGSUNBVElPTl9USU1FIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmllck1vZHVsZSB7IH1cbiJdfQ==