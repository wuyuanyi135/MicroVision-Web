import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightingSettingComponent } from './lighting-setting.component';

describe('LightingSettingComponent', () => {
  let component: LightingSettingComponent;
  let fixture: ComponentFixture<LightingSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightingSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightingSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
