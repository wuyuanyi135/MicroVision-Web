import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurePanelComponent } from './configure-panel.component';

describe('ConfigurePanelComponent', () => {
  let component: ConfigurePanelComponent;
  let fixture: ComponentFixture<ConfigurePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
