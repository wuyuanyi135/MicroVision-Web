import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraControllerManagerComponent } from './camera-controller-manager.component';

describe('CameraControllerManagerComponent', () => {
  let component: CameraControllerManagerComponent;
  let fixture: ComponentFixture<CameraControllerManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraControllerManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraControllerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
