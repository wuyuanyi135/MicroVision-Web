import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceConfigurationDialogComponent } from './device-configuration-dialog.component';

describe('DeviceConfigurationDialogComponent', () => {
  let component: DeviceConfigurationDialogComponent;
  let fixture: ComponentFixture<DeviceConfigurationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceConfigurationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceConfigurationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
