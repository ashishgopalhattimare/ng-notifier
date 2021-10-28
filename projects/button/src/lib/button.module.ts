import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
