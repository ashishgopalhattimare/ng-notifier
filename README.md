![npm](https://img.shields.io/npm/v/@codex-lab/notifier?style=plastic)

# Angular Notifier
[Angular Notifier](https://www.npmjs.com/package/@codex-lab/notifier) is a custom alert notification library which can be used to
display alert snackbar to the application.

---
## Getting Started

Start by installing the Angular library from `npm`

`npm i @codex-lab/notifier`

### Dependent Modules

![](https://img.shields.io/static/v1.svg?label=npm&message=@angular/common&color=green)
![](https://img.shields.io/static/v1.svg?label=npm&message=@angular/core&color=green)
![](https://img.shields.io/static/v1.svg?label=npm&message=@angular/cdk&color=green)
![](https://img.shields.io/static/v1.svg?label=npm&message=@angular/flex-layout&color=green)
![](https://img.shields.io/static/v1.svg?label=npm&message=@angular/material&color=green)

### CSS Dependency
`@import '~@angular/material/prebuilt-themes/indigo-pink.css';`

The following css statement should be added the `style.scss` to allow notification to overlay on
the page. For more info, follow
[pre-built-theme in angular project](https://material.angular.io/guide/theming#using-a-pre-built-theme)

---
Next, you'll need to import the following module in your app's module.

### app.module.ts
```
import {NotifierModule} from "@codex-lab/notifier";

@NgModule({
    ...
    imports: [ NotifierModule ],
    ...
});
```
After required module is configured, you can directly inject the
service it provides into the Angular Component to utilise the library

```
@Component({
  ...
})
export class AppComponent {
  ...
  constructor(private notifierService: NotifierService) {
  }
  ...
}
```
The **NotifierService** provides the following functions to generate notification
```
interface NotifierService {
    showNotificationV1(messageList: string[], status: boolean, title?: string): void;
    showNotificationV2(messageList: string[], status: NotificationStatus, title?: string): void;
    getNotifierDuration(status: NotificationStatus): number;
}
```
The Service utilises an enum constant to provide the following NotificationStatus
```
export enum NotificationStatus {
    SUCCESS = 0,
    FAILED = 1,
    WARNING = 2,
    ERROR = 3,
    INFO = 4
}
```
