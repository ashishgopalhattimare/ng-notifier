import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

type ButtonTypeStyle = 'call-to-action' | 'outline-action' | 'outline-action-dark' | 'transparent-outline-action';

@Component({
  selector: 'lib-button',
  template: `
    <button class="btn" [class]="btnClass" (click)="callBackHandler()"
            [ngClass]="{'mat-elevation-z1': isElevated}" [style]="btnStyle"
            [disabled]="isDisable">
      <div fxLayout="row" [fxLayoutAlign]="align">
        <span *ngIf="isIcon" class="material-icons btn-image-size">
            {{iconImageLink}}
        </span>
        <img *ngIf="!isIcon" [src]="iconImageLink" alt="btn-image">
        <div *ngIf="label?.length"><span class="ml-2">{{label}}</span></div>
      </div>
    </button>
  `,
  styleUrls: ['button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit
{
  @Output() clicked = new EventEmitter();

  @Input() btnType: ButtonTypeStyle = 'call-to-action';

  @Input() align = 'start center';
  @Input() btnClassStyle = '';
  @Input() isElevated = true;

  @Input() iconImageLink: string | undefined;
  @Input() label: string | undefined;
  @Input() btnStyle = '';
  @Input() isDisable = false;
  @Input() isIcon = true;

  private _btnClassStyle = '';

  constructor() { }
  ngOnInit(): void {
    this._btnClassStyle = [this.btnType, this.btnClassStyle].join(' ');
  }
  get btnClass(): string { return this._btnClassStyle; }
  callBackHandler = () => this.clicked.emit(null);
}
