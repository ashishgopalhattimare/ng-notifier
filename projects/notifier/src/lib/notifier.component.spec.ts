import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierComponent } from './notifier.component';

xdescribe('NotifierComponent', () => {
  let component: NotifierComponent;
  let fixture: ComponentFixture<NotifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
