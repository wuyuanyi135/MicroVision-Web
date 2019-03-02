import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraManagerComponent } from './camera-manager.component';

describe('CameraManagerComponent', () => {
  let component: CameraManagerComponent;
  let fixture: ComponentFixture<CameraManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
