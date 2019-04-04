import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSettingComponent } from './action-setting.component';

describe('ActionSettingComponent', () => {
  let component: ActionSettingComponent;
  let fixture: ComponentFixture<ActionSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
